"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Step = 1 | 2;

const STORAGE_DONE_KEY = "ema_onboarding_done_v1";
const STORAGE_DATA_KEY = "ema_onboarding_data_v1";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function OnboardingPopup() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);
  const [showFabLabel, setShowFabLabel] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [reopenedAtBottom, setReopenedAtBottom] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [experience, setExperience] = useState("");
  const [goal, setGoal] = useState("");
  const [timeframe, setTimeframe] = useState("");

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const done = window.localStorage.getItem(STORAGE_DONE_KEY);
      if (done) {
        setCompleted(true);
      } else {
        setOpen(true);
        setStep(1);
        setFabVisible(false);
        setShowFabLabel(false);
        setReopenedAtBottom(false);
      }
    } catch {
      // If storage is blocked, just don't show the popup.
      setFabVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeTemporarily();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open && step === 1) {
      // Focus first field for accessibility.
      nameRef.current?.focus();
    }
  }, [open, step]);

  const canContinue = useMemo(() => {
    if (!name.trim()) return false;
    if (!isEmail(email)) return false;
    if (!phone.trim()) return false;
    return true;
  }, [name, email, phone]);

  function closeTemporarily() {
    setOpen(false);
    setError(null);
    setFabVisible(true);
    // Allow the "near bottom" label to show again.
    setReopenedAtBottom(false);
  }

  function markCompletedAndClose() {
    setCompleted(true);
    setFabVisible(false);
    setShowFabLabel(false);
    setOpen(false);
    setError(null);
    try {
      window.localStorage.setItem(STORAGE_DONE_KEY, "1");
    } catch {
      // ignore
    }
  }

  function openFlow() {
    setError(null);
    setStep(1);
    setOpen(true);
    setFabVisible(false);
    setShowFabLabel(false);
  }

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!isEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setStep(2);
  }

  async function handleFinish(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!experience) {
      setError("Please choose your experience level.");
      return;
    }
    if (!goal) {
      setError("Please choose what you want to learn.");
      return;
    }
    if (!timeframe) {
      setError("Please choose your timeframe.");
      return;
    }

    setSubmitting(true);
    // Simulate a short onboarding flow; wire to an API later if you want.
    await new Promise((r) => setTimeout(r, 650));

    const payload = { name, email, phone, experience, goal, timeframe, createdAt: Date.now() };
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send onboarding email.");
      }

      // Keep a local record too (useful while backend is optional).
      try {
        window.localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(payload));
      } catch {
        // ignore
      }

      setSubmitting(false);
      markCompletedAndClose();
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your onboarding. Please try again."
      );
    }
  }

  useEffect(() => {
    if (!mounted || open || completed || reopenedAtBottom) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewport = window.innerHeight || 0;
      const fullHeight = doc.scrollHeight || 0;
      const nearBottom = scrollTop + viewport >= fullHeight - 120;

      if (!nearBottom) return;

      setShowFabLabel(true);
      window.setTimeout(() => setShowFabLabel(false), 6000);
      setReopenedAtBottom(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // In case user lands near the bottom (or after closing), check once.
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, open, completed, reopenedAtBottom]);

  if (!mounted) return null;

  if (!open) {
    if (fabVisible && !completed) {
      return (
        <button
          type="button"
          className="onboardingFab"
          onClick={openFlow}
          aria-label="Open onboarding"
        >
          <Image
            src="/ekay/IMG_8640.JPG"
            alt=""
            fill
            className="onboardingFab__img"
            sizes="56px"
            priority
          />
          {showFabLabel && (
            <span className="onboardingFab__label">Complete your onboarding</span>
          )}
        </button>
      );
    }

    return null;
  }

  return (
    <div className="onboarding">
      <div className="onboarding__backdrop" onClick={closeTemporarily} />

      <div
        className="onboarding__modal"
        role="dialog"
        aria-modal="true"
        aria-label="Onboarding"
      >
        <div className="onboarding__top">
          <div className="onboarding__progress" aria-hidden>
            <span className={step === 1 ? "active" : ""}>1</span>
            <span className={step === 2 ? "active" : ""}>2</span>
          </div>
          <button type="button" className="onboarding__close" onClick={closeTemporarily}>
            ×
          </button>
        </div>

        <div className="onboarding__profile" aria-hidden>
          <div className="onboarding__profileIcon">
            <Image
              src="/ekay/IMG_8640.JPG"
              alt=""
              fill
              className="onboarding__profileImg"
              sizes="52px"
              priority
            />
          </div>
        </div>

        <h3 className="onboarding__title">
          {step === 1 ? "Let’s personalize your makeup journey" : "A few quick questions"}
        </h3>
        <p className="onboarding__subtitle">
          {step === 1
            ? "Enter your details to receive the right class recommendations."
            : "This helps us match you to the best Tier 1 / Tier 2 / Tier 3 pathway."}
        </p>

        {step === 1 ? (
          <form className="onboarding__form" onSubmit={handleContinue}>
            <div className="onboarding__row">
              <label htmlFor="ob-name">Name</label>
              <input
                ref={nameRef}
                id="ob-name"
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className="onboarding__row">
              <label htmlFor="ob-email">Email</label>
              <input
                id="ob-email"
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="onboarding__row">
              <label htmlFor="ob-phone">Phone</label>
              <input
                id="ob-phone"
                type="tel"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
                required
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {error && <div className="onboarding__error">{error}</div>}

            <div className="onboarding__actions">
              <button
                type="submit"
                className="btn btn--primary onboarding__cta"
                disabled={!canContinue || submitting}
              >
                Continue
              </button>
              <button type="button" className="btn btn--outline onboarding__skip" onClick={closeTemporarily}>
                Not now
              </button>
            </div>
          </form>
        ) : (
          <form className="onboarding__form" onSubmit={handleFinish}>
            <div className="onboarding__row">
              <label>Experience level</label>
              <div className="onboarding__choices">
                {[
                  "Just starting",
                  "Some experience",
                  "Advanced / Pro",
                ].map((v) => (
                  <label key={v} className="onboarding__choice">
                    <input
                      type="radio"
                      name="ob-experience"
                      value={v}
                      checked={experience === v}
                      onChange={() => setExperience(v)}
                      required
                    />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="onboarding__row">
              <label>What do you want to learn?</label>
              <div className="onboarding__choices">
                {[
                  "Bridal",
                  "Editorial",
                  "Film & Special FX",
                  "Workshops / Skills",
                ].map((v) => (
                  <label key={v} className="onboarding__choice">
                    <input
                      type="radio"
                      name="ob-goal"
                      value={v}
                      checked={goal === v}
                      onChange={() => setGoal(v)}
                      required
                    />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="onboarding__row">
              <label>Your timeframe</label>
              <div className="onboarding__choices">
                {["This month", "Next 3 months", "Flexible"].map((v) => (
                  <label key={v} className="onboarding__choice">
                    <input
                      type="radio"
                      name="ob-timeframe"
                      value={v}
                      checked={timeframe === v}
                      onChange={() => setTimeframe(v)}
                      required
                    />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </div>

            {error && <div className="onboarding__error">{error}</div>}

            <div className="onboarding__actions onboarding__actions--stack">
              <button
                type="button"
                className="btn btn--outline onboarding__back"
                onClick={() => setStep(1)}
                disabled={submitting}
              >
                Back
              </button>
              <button type="submit" className="btn btn--primary onboarding__cta" disabled={submitting}>
                {submitting ? "Saving..." : "Finish"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

