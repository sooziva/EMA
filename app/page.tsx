import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { ClassCalendar } from "@/components/ClassCalendar";
import { GalleryMedia } from "@/components/GalleryMedia";
import { galleryItems } from "@/data/gallery";
import { OnboardingPopup } from "@/components/OnboardingPopup";

const tiers = [
  {
    num: "01",
    title: "Full program",
    desc: "This is for you if you're starting from the beginning or if you've been doing this casually and you're ready to go professional. it's the most comprehensive thing i offer. Artistry. Business. Brand. Client management. Cohort community. The full picture, over several weeks.",
  },
  {
    num: "02",
    title: "Skill Advancement",
    desc: "This is for you if you're already working but there's a specific thing you want to get better at. Skin. Editorial. Advanced color theory. Business pricing. These masterclasses go deep on one thing so you can move forward faster.",
  },
  {
    num: "03",
    title: "The Experience Program",
    desc: "A full-day workshop. Real brief. Real shoot. Real feedback. You walk out with porfolio content and proof of what you can do.",
  },
];

const paymentPlans = [
  {
    tier: "01",
    title: "Full Program",
    price: "2,500",
    period: "Full cohort program",
    details: [
      "Complete artistry curriculum",
      "Business & Brand modules",
      "Cohort community access",
      "Industry certification",
      "1:1 mentorship session with Ekay",
    ],
  },
  {
    tier: "02",
    title: "Skill Advancement",
    price: "450",
    period: "per masterclass",
    details: [
      "Focused single-skill deep dives",
      "Editorial & advanced techniques",
      "Open to working MUAs",
      "Certificate of completion",
      "EMA community access",
    ],
  },
  {
    tier: "03",
    title: "The Experience Program",
    price: "350",
    period: "per workshop",
    details: [
      "Full-day immersive workshop",
      "Live shoot & real brief",
      "Portfolio content produced",
      "Industry professional feedback",
      "EMA community access",
    ],
  },
];

const testimonials = [
  {
    quote:
      '"E.M.A didn\'t just teach me makeup — it taught me how to think like an artist. I\'ve worked on buiding a pro portfolio since graduating."',
    name: "Sandra Osei",
    role: "Makeup Artist",
  },
  {
    quote:
      '"The instructors are industry professionals who actually care. The portfolio I built at E.M.A got me my first editorial job."',
    name: "Judith Asare",
    role: "Editorial Makeup Artist",
  },
  {
    quote:
      '"What i got from Ekay wasn\'t just technique. it was access to her experience, and a community of women taking this seriously."',
    name: "Chisom EA",
    role: "Bridal Specialist",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <OnboardingPopup />

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
                    src="/ekay/IMG_86361.JPG"
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
                <h2 className="section-title">Where Talent Gets a Direction</h2>
                <p className="about__lead">
                  E.M.A was built for artists who are serious about the craft but
                  tired of figuring everything out alone. We teach you the skills and the business behind them.
                </p>
                <p>
                Every artist trained at EMA leaves knowing how to work, how to charge, and how to grow.
                Not just how to blend.
                
                We cover the artistry and the inndustry because talent alone doesn't build a career. 
                knowing how to run your business does. 
                </p>
                <ul className="about__features">
                  <li>
                    <span className="about__feature-icon">◇</span>
                    Trained by a working professional, not a classroom theory
                  </li>
                  <li>
                    <span className="about__feature-icon">◇</span>
                   Real Studio practice on real faces
                  </li>
                  <li>
                    <span className="about__feature-icon">◇</span>
                 Business, brand, and portfolio built before you graduate
                  </li>
                </ul>
                <Link href="/about-ekay" className="btn btn--primary about__founder-btn">
                  Know the Founder: Ekay
                </Link>
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
              <h2 className="section-title">At EMA, there are three ways to learn</h2>
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
                    <span className="payment-card__amount">GHS {plan.price}</span>
                    <span className="payment-card__period">{plan.period}</span>
                  </div>
                  <ul className="payment-card__list">
                    {plan.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
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
                    East legon, Accra, Ghana
                  </p>
                  <p>
                    <strong>Email</strong>
                    <br />
                    hello@expertmakeupacademy.com
                  </p>
                  <p>
                    <strong>Phone</strong>
                    <br />
                    +233 (53) 281-8725
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
            <div className="footer__links">
              <a
                href="https://instagram.com/expertmakeup_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__instagram"
              >
                Instagram
              </a>
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
