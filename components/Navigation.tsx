"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <Link href="/" className="nav__logo" onClick={close}>
        E.M.A
      </Link>
      <ul className={`nav__links ${open ? "open" : ""}`}>
        <li>
          <Link href="#about" onClick={close}>
            About
          </Link>
        </li>
        <li>
          <Link href="#payment" onClick={close}>
            Enrollment
          </Link>
        </li>
        <li>
          <Link href="#calendar" onClick={close}>
            Calendar
          </Link>
        </li>
        <li>
          <Link href="#gallery" onClick={close}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="#testimonials" onClick={close}>
            Alumni
          </Link>
        </li>
        <li>
          <Link href="#contact" className="nav__cta" onClick={close}>
            Enroll
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
