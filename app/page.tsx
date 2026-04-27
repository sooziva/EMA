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

const paymentTiers = [
  {
    tier: "01",
    label: "Beginner Programme",
    title: "Foundation Course",
    subtitle: "For those starting from zero. No experience required.",
    description:
      "This is where it begins. The Beginner Programme gives you everything you need to build your career foundation — tools, skin theory, professionalism, and hands-on practical experience. Classes run 3 times a week with a mix of instructor-led demonstration and guided solo application. By the end, you won’t just know how to do makeup — you’ll understand why every step is important.",
    packages: [
      {
        name: "1-Month Course",
        meta: "15 sessions • 3x per week • 4 hrs each",
        price: "5,500",
        installmentLabel: "Installment (70/30)",
        installment: "GHC 3,850 upfront — GHC 1,650 by Week 2",
      },
      {
        name: "2-Week Course",
        meta: "6 sessions • 3x per week • 4 hrs each",
        price: "3,600",
        installmentLabel: "Installment (70/30)",
        installment: "GHC 2,520 upfront — GHC 1,080 by Week 2",
      },
    ],
    notes: [
      "All beginner students are assessed throughout the programme. A minimum score of 70/100 is required for certification.",
      "Students who do not meet the standard will be required to resit. Resit sessions are charged separately.",
    ],
  },
  {
    tier: "02",
    label: "Upgrade Programme",
    title: "Intermediate to Advanced",
    subtitle: "For working MUAs ready to level up their technique.",
    description:
      "Taking the step to properly improve the skill you already have is not a small feat — it is a powerful move. This is a deliberate process of unlearning what’s been done wrong, relearning it properly, and then advancing beyond it. Sessions are intensive, honest, and built to push you. Group learning applies: you will work alongside peers at a similar level, which accelerates growth.",
    packages: [
      {
        name: "1-Day Intensive",
        meta: "Single focused session • 4 hrs",
        price: "1,500",
        installmentLabel: "Installment (80%)",
        installment: "GHC 1,500 full payment.",
      },
      {
        name: "2-Day Intensive",
        meta: "2 consecutive sessions • 5 hrs each",
        price: "2,500",
        installmentLabel: "Installment (80%)",
        installment: "Full payment.",
      },
      {
        name: "1-Week Intensive",
        meta: "3 sessions • Mon, Wed & Thu • 5 hrs each",
        price: "3,000",
        installmentLabel: "Installment (80%)",
        installment: "GHC 2,500 upfront — GHC 500",
      },
    ],
    notes: [
      "Upgrade students must have prior makeup experience. If you are unsure which tier is right for you, reach out before enrolling.",
    ],
  },
  {
    tier: "03",
    label: "Personal Class",
    title: "One-on-One with Ekay",
    subtitle: "Full attention. No group. Just you.",
    description:
      "This is the most personalised learning experience EMA offers. You are not in a class; you are in a session — one-on-one with Ekay. Every minute is focused entirely on you: your technique, your face, your goals. You will leave with a customised makeup routine mapped specifically to your face shape, skin type, and lifestyle that works only for you.",
    packages: [
      {
        name: "1-Day Session",
        meta: "4-hour personal session with Ekay",
        price: "2,000",
        installmentLabel: "Installment plan",
        installment: "GHC 2,000 full payment.",
      },
      {
        name: "1-Week Programme",
        meta: "3 sessions • fully customised according to availability",
        price: "4,500",
        installmentLabel: "Installment plan",
        installment: "GHC 3,350 upfront — GHC 1,200",
      },
    ],
    notes: [
      "Personal classes include a face mapping consultation and a customized routine tailored to you; product concierge. Availability is limited.",
    ],
  },
];

const atAGlanceRows = [
  {
    pkg: "Beginner — 1 Month",
    duration: "4 weeks",
    sessions: "12",
    price: "5,500",
    installment: "GHC 3,850 + GHC 1,650",
  },
  {
    pkg: "Beginner — 2 Weeks",
    duration: "2 weeks",
    sessions: "6",
    price: "3,600",
    installment: "GHC 2,520 + GHC 1,080",
  },
  {
    pkg: "Upgrade — 1 Day",
    duration: "1 day",
    sessions: "1",
    price: "1,500",
    installment: "Full payment",
  },
  {
    pkg: "Upgrade — 2 Days",
    duration: "2 days",
    sessions: "2",
    price: "2,500",
    installment: "Full payment",
  },
  {
    pkg: "Upgrade — 1 Week",
    duration: "1 week",
    sessions: "3",
    price: "3,000",
    installment: "GHC 2,500 + GHC 500",
  },
  {
    pkg: "1‑on‑1 — 1 Day",
    duration: "1 day",
    sessions: "1",
    price: "2,000",
    installment: "Full payment",
  },
  {
    pkg: "1‑on‑1 — 1 Week",
    duration: "1 week",
    sessions: "3",
    price: "4,500",
    installment: "GHC 3,350 + GHC 1,200",
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
            <Link href="#payment" className="btn btn--primary">
              View Pricing
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

      <section className="payment" id="payment">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Enroll Now</span>
              <h2 className="section-title">Payment & Enrollment</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="glance">
              <div className="glance__top">
                <h3 className="glance__title">At a Glance</h3>
                <p className="glance__subtitle">
                  All prices are in Ghanaian Cedi (GHC).
                </p>
              </div>

              <div
                className="glance__tableWrap"
                role="region"
                aria-label="At a glance pricing table"
              >
                <table className="glance__table">
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Duration</th>
                      <th>Sessions</th>
                      <th>Price (GHC)</th>
                      <th>Installment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {atAGlanceRows.map((r) => (
                      <tr key={r.pkg}>
                        <td className="glance__pkg">{r.pkg}</td>
                        <td>{r.duration}</td>
                        <td>{r.sessions}</td>
                        <td className="glance__price">{r.price}</td>
                        <td className="glance__inst">{r.installment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="glance__foot">
                <p>Prices subject to change without prior notice after quarter.</p>
                <p className="glance__quote">
                  “This class is not an expense. It is an investment in your future
                  self.”
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="installmentPolicy">
              <h3 className="installmentPolicy__title">
                Installment Plan — 70 / 30
              </h3>
              <p className="installmentPolicy__text">
                Students who are unable to pay in full may split their fee:{" "}
                <strong>70%</strong> is due upon registration to secure your spot,
                and the remaining <strong>30%</strong> must be settled before or on
                the first day of Week 2. <strong>No exceptions.</strong> Your place
                is confirmed when the initial payment is received.
              </p>
            </div>
          </ScrollReveal>

          <div className="paymentTiers">
            {paymentTiers.map((tier, i) => (
              <ScrollReveal key={tier.tier} delay={i * 0.08}>
                <article className="tierPay">
                  <header className="tierPay__header">
                    <span className="tierPay__kicker">
                      Tier {tier.tier} — {tier.label}
                    </span>
                    <h3 className="tierPay__title">{tier.title}</h3>
                    <p className="tierPay__subtitle">{tier.subtitle}</p>
                  </header>

                  <p className="tierPay__desc">{tier.description}</p>

                  <div
                    className="tierPay__table"
                    role="table"
                    aria-label={`${tier.title} packages`}
                  >
                    <div className="tierPay__thead" role="rowgroup">
                      <div className="tierPay__tr tierPay__tr--head" role="row">
                        <div className="tierPay__th" role="columnheader">
                          Package
                        </div>
                        <div className="tierPay__th" role="columnheader">
                          Price (GHC)
                        </div>
                        <div className="tierPay__th" role="columnheader">
                          Installment
                        </div>
                      </div>
                    </div>
                    <div className="tierPay__tbody" role="rowgroup">
                      {tier.packages.map((p) => (
                        <div
                          className="tierPay__tr"
                          role="row"
                          key={`${tier.tier}-${p.name}`}
                        >
                          <div className="tierPay__td" role="cell">
                            <div className="tierPay__pkgName">{p.name}</div>
                            <div className="tierPay__pkgMeta">{p.meta}</div>
                          </div>
                          <div className="tierPay__td tierPay__td--price" role="cell">
                            GHC {p.price}
                          </div>
                          <div className="tierPay__td" role="cell">
                            <div className="tierPay__instLabel">
                              {p.installmentLabel}
                            </div>
                            <div className="tierPay__inst">{p.installment}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="tierPay__notes">
                    {tier.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>

                  <div className="tierPay__actions">
                    <Link href="#contact" className="btn btn--primary">
                      Enroll / Pay
                    </Link>
                    <Link href="#contact" className="btn btn--outline">
                      Ask a Question
                    </Link>
                  </div>
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
