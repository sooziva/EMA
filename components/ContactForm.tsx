"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Replace with API route or server action when ready
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="program">Program Interest</label>
        <select id="program" name="program" defaultValue="">
          <option value="">Select an option</option>

          <optgroup label="Tier 01 — Foundation Course (Beginner)">
            <option value="foundation-1-month">1‑Month Course (GHC 5,500)</option>
            <option value="foundation-2-week">2‑Week Course (GHC 3,600)</option>
          </optgroup>

          <optgroup label="Tier 02 — Intermediate to Advanced (Upgrade)">
            <option value="upgrade-1-day">1‑Day Intensive (GHC 1,500)</option>
            <option value="upgrade-2-day">2‑Day Intensive (GHC 2,500)</option>
            <option value="upgrade-1-week">1‑Week Intensive (GHC 3,000)</option>
          </optgroup>

          <optgroup label="Tier 03 — One‑on‑One with Ekay (Personal)">
            <option value="1on1-1-day">1‑Day Session (GHC 2,000)</option>
            <option value="1on1-1-week">1‑Week Programme (GHC 4,500)</option>
          </optgroup>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your goals..."
        />
      </div>
      <button
        type="submit"
        className="btn btn--primary btn--full"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
            ? "Message Sent!"
            : "Request Information"}
      </button>
    </form>
  );
}
