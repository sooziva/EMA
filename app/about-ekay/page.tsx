import Image from "next/image";
import Link from "next/link";

export default function AboutEkayPage() {
  return (
    <main className="founder-page">
      <section className="founder-hero">
        <div className="container founder-hero__grid">
          <div className="founder-hero__content">
            <span className="section-label">Founder Story</span>
            <h1 className="section-title">Meet Ekay</h1>
            <p className="founder-hero__lead">
             My name is Ekay. i'm a Nigerian makeup artist living and building in Accra, Ghana.
            </p>
            <p>
          I've been in this industry for almost a decade doing bridal, editorial, shoots, brand work.
          But the thing i'm most proud of isn't any single job. It's the fact that i built something 
          sustainable. A real brand. A real business. A real career.
            </p>
            <p>
              And somewhere along the way, i started teaching. First informally a whatsApp group,
              a seminar here and there. Then i realized: this is the work i was meant to do.
              Not just to be good at makeup. But to make the path easier for the next person coming up.
            </p>
            <p>
              E.M.A was built on one belief: that talent deserves structure. That passion deserves a plan. And that every artist 
              who wants to do this professionally deserves access to someone who can actually show them how.
            </p>
            <div className="founder-hero__actions">
              <Link href="/" className="btn btn--outline">
                Back to Home
              </Link>
              <Link href="/#contact" className="btn btn--primary">
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="founder-hero__visual">
            <div className="founder-hero__image-wrap">
              <Image
                src="/ekay/IMG_8640.JPG"
                alt="Founder Ekay"
                fill
                className="founder-hero__image"
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

