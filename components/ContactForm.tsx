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
            <option value="">Select a program</option>
            <option value="tier1">Tier 1 — Career Defining Classes</option>
            <option value="tier2">Tier 2 — Skill Advancement</option>
            <option value="tier3">Tier 3 — The Experience Program</option>
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
