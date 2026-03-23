import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { ClassCalendar } from "@/components/ClassCalendar";
import { GalleryMedia } from "@/components/GalleryMedia";
import { galleryItems } from "@/data/gallery";

const tiers = [
  {
    num: "01",
    title: "Career Defining Classes",
    desc: "Our flagship programs designed to launch your professional journey. Comprehensive training in bridal, editorial, film, and commercial makeup — with industry-certified instructors and real-world portfolio building.",
  },
  {
    num: "02",
    title: "Skill Advancement",
    desc: "Level up with focused masterclasses. Deep dives into color theory, contouring, editorial skin, and specialized techniques. Perfect for working artists who want to refine and expand their skill set.",
  },
  {
    num: "03",
    title: "The Experience Program",
    desc: "Immersion workshops and creative labs. Hands-on experiences, industry days, and collaborative projects that connect you with working professionals and real creative briefs.",
  },
];

const paymentPlans = [
  {
    tier: "01",
    title: "Career Defining Classes",
    price: "2,500",
    period: "12-week program",
  },
  {
    tier: "02",
    title: "Skill Advancement",
    price: "450",
    period: "per masterclass",
  },
  {
    tier: "03",
    title: "The Experience Program",
    price: "350",
    period: "per workshop",
  },
];

const testimonials = [
  {
    quote:
      '"E.M.A didn\'t just teach me makeup — it taught me how to think like an artist. I\'ve worked on three feature films since graduating."',
    name: "Alex Rivera",
    role: "Film & TV Makeup Artist",
  },
  {
    quote:
      '"The instructors are industry professionals who actually care. The portfolio I built at E.M.A got me my first editorial job."',
    name: "Jordan Chen",
    role: "Editorial Makeup Artist",
  },
  {
    quote:
      '"I came in knowing nothing. Six months later I had my own bridal makeup business. The support doesn\'t end at graduation."',
    name: "Maria Santos",
    role: "Bridal Specialist",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <header className="hero">
        <div className="hero__bg" aria-hidden>
          <video
            className="hero__video"
            src="/ema.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero__gradient" />
          <div className="hero__noise" />
        </div>
        <div className="hero__content">
          <p className="hero__tagline">
            <span className="hero__tagline-inner">Expert Makeup Academy</span>
          </p>
          <h1 className="hero__title">
            <span className="hero__title-line">Master the</span>
            <span className="hero__title-line hero__title-line--accent">
              Art
            </span>
          </h1>
          <p className="hero__subtitle">
            Where artistry meets precision. Transform your passion into a
            professional career in beauty.
          </p>
          <div className="hero__actions">
            <Link href="#programs" className="btn btn--primary">
              Explore Programs
            </Link>
            <Link href="#contact" className="btn btn--outline">
              Book a Consultation
            </Link>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden>
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </header>

      <section className="about" id="about">
        <div className="container">
          <ScrollReveal>
            <div className="about__grid">
              <div className="about__visual">
                <div className="about__image-wrap">
                  <Image
                    src="/ekay/IMG_86361.jpg"
                    alt="E.M.A Expert Makeup Academy — professional makeup artistry"
                    fill
                    className="about__image"
                    sizes="(max-width: 1024px) 400px, 50vw"
                    priority
                  />
                  <div className="about__badge">
                    <span className="about__badge-num">15+</span>
                    <span className="about__badge-text">Years of Excellence</span>
                  </div>
                </div>
              </div>
              <div className="about__text">
                <span className="section-label">About E.M.A</span>
                <h2 className="section-title">Where Creativity Becomes Career</h2>
                <p className="about__lead">
                  E.M.A Expert Makeup Academy has trained thousands of artists who
                  now work across film, fashion, editorial, and bridal industries
                  worldwide.
                </p>
                <p>
                  Our curriculum blends classical techniques with contemporary
                  trends. From foundational color theory to advanced special
                  effects, every module is designed by industry veterans who
                  understand what it takes to succeed.
                </p>
                <ul className="about__features">
                  <li>
                    <span className="about__feature-icon">◇</span>
                    Industry-certified instructors
                  </li>
                  <li>
                    <span className="about__feature-icon">◇</span>
                    Hands-on studio training
                  </li>
                  <li>
                    <span className="about__feature-icon">◇</span>
                    Portfolio & placement support
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="container">
          <ScrollReveal delay={0.05}>
            <div className="section-header">
              <span className="section-label">Our Programs</span>
              <h2 className="section-title">Craft Your Path</h2>
            </div>
          </ScrollReveal>
          <div className="programs__grid programs__grid--tiers">
            {tiers.map((t, i) => (
              <ScrollReveal key={t.num} delay={i * 0.08}>
                <article className="tier-card">
                  <span className="tier-card__badge">Tier {t.num}</span>
                  <h3 className="tier-card__title">{t.title}</h3>
                  <p className="tier-card__desc">{t.desc}</p>
                  <Link href="#contact" className="program-card__link">
                    Learn more →
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Class Schedule</span>
              <h2 className="section-title">Upcoming Classes</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ClassCalendar />
          </ScrollReveal>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Class Moments</span>
              <h2 className="section-title">From Our Previous Classes</h2>
            </div>
          </ScrollReveal>
          <div className="gallery__grid">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div
                  className={`gallery__item ${item.type === "video" ? "gallery__item--video" : ""}`}
                  aria-label={item.label}
                >
                  <GalleryMedia item={item} />
                  <div className="gallery__overlay">
                    <span>{item.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Alumni Stories</span>
              <h2 className="section-title">They Started Here</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials__slider">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <blockquote className="testimonial">
                  <p className="testimonial__quote">{t.quote}</p>
                  <footer className="testimonial__author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="payment" id="payment">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Enroll Now</span>
              <h2 className="section-title">Payment & Enrollment</h2>
            </div>
          </ScrollReveal>
          <div className="payment__grid">
            {paymentPlans.map((plan, i) => (
              <ScrollReveal key={plan.tier} delay={i * 0.08}>
                <article className="payment-card">
                  <span className="payment-card__badge">Tier {plan.tier}</span>
                  <h3 className="payment-card__title">{plan.title}</h3>
                  <div className="payment-card__price">
                    <span className="payment-card__amount">${plan.price}</span>
                    <span className="payment-card__period">{plan.period}</span>
                  </div>
                  <Link href="#contact" className="btn btn--primary btn--full">
                    Pay & Enroll
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="payment__note">
              Secure payment via card, bank transfer, or installments. Contact us
              for flexible payment options.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <ScrollReveal>
            <div className="contact__grid">
              <div className="contact__info">
                <span className="section-label">Get Started</span>
                <h2 className="section-title">Begin Your Journey</h2>
                <p>
                  Schedule a tour, meet our instructors, or ask about upcoming
                  intakes. We&apos;re here to help you take the next step.
                </p>
                <div className="contact__details">
                  <p>
                    <strong>Studio Location</strong>
                    <br />
                    123 Art District, Creative City
                  </p>
                  <p>
                    <strong>Email</strong>
                    <br />
                    hello@expertmakeupacademy.com
                  </p>
                  <p>
                    <strong>Phone</strong>
                    <br />
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <Link href="/" className="footer__logo">
              E.M.A
            </Link>
            <p className="footer__tagline">
              Expert Makeup Academy — Master the Art
            </p>
            <div className="footer__brands">
              <Image
                src="/ekay/brand1.PNG"
                alt=""
                width={48}
                height={48}
                className="footer__brand-img"
              />
              <Image
                src="/ekay/brand2.PNG"
                alt=""
                width={48}
                height={48}
                className="footer__brand-img"
              />
              <Image
                src="/ekay/brand3.PNG"
                alt=""
                width={48}
                height={48}
                className="footer__brand-img"
              />
            </div>
            <div className="footer__links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
            <p className="footer__copy">
              © {new Date().getFullYear()} E.M.A Expert Makeup Academy. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
