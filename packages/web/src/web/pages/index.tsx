import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Leaf,
  Menu,
  ShieldCheck,
  Sprout,
  X,
} from "lucide-react";

const GHL_FORM_ID = "w8FhvUklZYGSaMxewkPo";
const GHL_FORM_SCRIPT_SRC = "https://app.chrisbhustling.com/js/form_embed.js";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`bt-reveal ${inView ? "bt-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function GhlAccessForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_FORM_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = GHL_FORM_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bt-access-form">
      <div className="bt-access-form__shell bt-grain">
        <div className="bt-access-form__copy">
          <span className="bt-tag bt-tag-acid">GHL / Auto Follow-Up</span>
          <h3 className="bt-display mt-7 text-4xl sm:text-5xl">
            Join The
            <br />
            Inner Circle.
          </h3>
          <p className="mt-5 text-sm text-[var(--bt-bone)]/70">
            Drop your details here. GHL catches the lead, then your automation handles the
            welcome flow, reminders, and next-drop alerts.
          </p>
          <ul className="bt-mono mt-7 grid gap-3 text-[11px] text-[var(--bt-bone)]/70">
            <li>01 / First-access drops</li>
            <li>02 / Restock alerts</li>
            <li>03 / Wellness release notes</li>
          </ul>
        </div>

        <div className="bt-access-form__stage">
          <div className="bt-access-form__label">
            <span>Secure Signup</span>
            <span>No Spam</span>
          </div>
          <div className="bt-access-form__iframe-wrap">
            <iframe
              src={`https://app.chrisbhustling.com/widget/form/${GHL_FORM_ID}`}
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "0" }}
              id={`inline-${GHL_FORM_ID}`}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="LANDING PAGE BKSMARTS"
              data-height="434"
              data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
              data-form-id={GHL_FORM_ID}
              title="LANDING PAGE BKSMARTS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const PRODUCTS = [
  {
    name: "Pixel Leaf Hoodie",
    price: "$43.00",
    tag: "Bestseller",
    desc: "14oz heavyweight fleece, boxy cut, puff-print 8-bit leaf on the chest.",
    img: "/products/hoodie1.jpg",
    href: "https://www.bksmarts.com/product-page/pixels-weed-leaf-unisex-hoodie",
  },
  {
    name: "Camo Leaf Pullover",
    price: "$43.00",
    tag: "New Drop",
    desc: "Garment-dyed hoodie, brushed interior, tonal camo leaf graphic.",
    img: "/products/hoodie5.jpg",
    href: "https://www.bksmarts.com/product-page/camo-weed-leaf-unisex-hoodie",
  },
  {
    name: "Broken Heart Hoodie",
    price: "$43.00",
    tag: "Bestseller",
    desc: "Heavyweight cotton-blend hoodie, cracked-heart leaf print, boxy fit.",
    img: "/products/hoodie3.jpg",
    href: "https://www.bksmarts.com/product-page/weed-leaf-heart-unisex-hoodie",
  },
  {
    name: "BKT Coin Tee",
    price: "$14.00",
    tag: "Classic",
    desc: "Heavyweight cotton, oversized fit, embroidered-style coin graphic.",
    img: "/products/p1.jpg",
    href: "https://www.bksmarts.com/product-page/unisex-classic-tee",
  },
  {
    name: "Good Vibes Tee",
    price: "$17.00",
    tag: "Summer",
    desc: "Relaxed heavyweight tee, script leaf graphic, garment-washed maroon.",
    img: "/products/p5.jpg",
    href: "https://www.bksmarts.com/product-page/good-vibes",
  },
  {
    name: "BKT Coin Crop",
    price: "$19.14",
    tag: "Accessory",
    desc: "Cropped fit tee, same coin graphic, cut close for a boxy silhouette.",
    img: "/products/p3.jpg",
    href: "https://www.bksmarts.com/product-page/women-s-crop-top",
  },
];

const WELLNESS = [
  {
    name: "Deep Relief Tincture",
    dose: "1500mg CBD / 300mg THC",
    desc: "Fast-acting sublingual for chronic pain and post-work soreness. Lab tested, small-batch.",
  },
  {
    name: "Recovery Balm",
    dose: "800mg CBD topical",
    desc: "Menthol + arnica, built for joints and lower back. No synthetic fragrance.",
  },
  {
    name: "Night Cap Softgels",
    dose: "10mg THC / 25mg CBD",
    desc: "Low-dose sleep support, consistent metered dosing, no next-day fog.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bt-root min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 py-5 backdrop-blur-sm bg-[#0b0b0c]/60 border-b border-white/5">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Brooklyn Tokes" className="h-11 w-11 sm:h-12 sm:w-12 object-contain" />
          <span className="bt-display text-xl sm:text-2xl tracking-tight hidden xs:inline">
            BROOKLYN<span style={{ color: "var(--bt-rust)" }}>TOKES</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 bt-mono text-xs">
          <a href="#drops" className="hover:text-[var(--bt-rust)] transition-colors">Drops</a>
          <a href="#story" className="hover:text-[var(--bt-rust)] transition-colors">Story</a>
          <a href="#wellness" className="hover:text-[var(--bt-rust)] transition-colors">Wellness</a>
          <a href="#access" className="hover:text-[var(--bt-rust)] transition-colors">Access</a>
          <a href="#access" className="bt-btn !py-2.5 !px-5">Shop New Drops</a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b0b0c] pt-24 px-6 flex flex-col gap-6 bt-mono text-lg md:hidden">
          <a href="#drops" onClick={() => setMenuOpen(false)}>Drops</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Story</a>
          <a href="#wellness" onClick={() => setMenuOpen(false)}>Wellness</a>
          <a href="#access" onClick={() => setMenuOpen(false)}>Access</a>
          <a href="#access" onClick={() => setMenuOpen(false)} className="bt-btn justify-center">Shop New Drops</a>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pt-32 pb-16 px-5 sm:px-10 overflow-hidden bt-grain">
        <img
          src="/products/hoodie2.jpg"
          alt="Brooklyn Tokes hoodie worn on the street"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.65) 40%, rgba(11,11,12,0.95) 100%), linear-gradient(100deg, rgba(196,80,27,0.45), transparent 60%)" }}
        />
        <div
          className="absolute -right-24 top-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--bt-rust)" }}
        />
        <div className="relative z-10 max-w-6xl">
          <span className="bt-tag mb-6 inline-block">Brooklyn, NY — Est. Street Level</span>
          <h1 className="bt-display text-[16vw] sm:text-[9vw] leading-[0.88] mb-6">
            WEAR THE
            <br />
            <span style={{ color: "var(--bt-rust)" }}>CULTURE.</span>
          </h1>
          <p className="max-w-md text-base sm:text-lg text-[var(--bt-bone)]/80 mb-8">
            Streetwear cut from the same cloth as the block it came from. Hoodies,
            tees, and wellness built by people who actually smoke, sweat, and
            sew here.
          </p>
          <a href="#drops" className="bt-btn text-sm">
            Shop New Drops <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="drops" className="px-5 sm:px-10 py-24 sm:py-32 bg-[var(--bt-ink)]">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <span className="bt-mono text-xs" style={{ color: "var(--bt-rust)" }}>
                001 / Best Sellers
              </span>
              <h2 className="bt-display text-4xl sm:text-6xl mt-2">
                HOODIES RUN
                <br />
                THIS BLOCK.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[var(--bt-bone)]/70">
              Heavyweight fleece, boxy silhouettes, small-batch prints. The
              hoodie line is the backbone of everything we make.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="bt-card p-6 h-full flex flex-col">
                <a
                  href={p.href}
                  className="group/product-image aspect-[4/5] mb-5 relative overflow-hidden bg-[#111] block"
                  aria-label={`View ${p.name} on Brooklyn Tokes`}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover object-top mix-blend-normal transition-transform duration-300 group-hover/product-image:scale-105"
                    loading="lazy"
                  />
                  <span className="bt-tag absolute top-3 left-3 text-[10px] bg-[var(--bt-ink)]">
                    {p.tag}
                  </span>
                </a>
                <h3 className="bt-display text-2xl mb-2">
                  <a href={p.href} className="hover:text-[var(--bt-rust)] transition-colors">
                    {p.name}
                  </a>
                </h3>
                <p className="text-sm text-[var(--bt-bone)]/70 mb-5 flex-1">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bt-mono text-sm" style={{ color: "var(--bt-rust)" }}>
                    {p.price}
                  </span>
                  <a href={p.href} className="bt-mono text-xs underline underline-offset-4">
                    View Product
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section id="story" className="bt-diagonal-top bt-diagonal-bottom -mt-8 -mb-8 relative z-10">
        <div className="bt-story-visual bt-grain px-5 sm:px-10 py-28 sm:py-36 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="aspect-[3/4] max-w-md border border-white/10 overflow-hidden relative">
              <img
                src="/products/story3.png"
                alt="Fabric rolls in the mill where Brooklyn Tokes sources its cotton"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: "linear-gradient(160deg, rgba(196,80,27,0.55), rgba(11,11,12,0.75))" }}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="bt-mono text-xs" style={{ color: "var(--bt-acid)" }}>
              002 / The Story
            </span>
            <h2 className="bt-display text-4xl sm:text-6xl mt-2 mb-6">
              MADE BY THE
              <br />
              BLOCK, FOR
              <br />
              THE BLOCK.
            </h2>
            <p className="text-base sm:text-lg text-[var(--bt-bone)]/80 mb-6 max-w-lg">
              Brooklyn Tokes started as a stash of screen-printed tees passed
              around a Bushwick rooftop. Now it's a full line — but the rule
              never changed: every piece gets made by people who live this
              culture, not people who market it.
            </p>
            <ul className="space-y-4 max-w-lg">
              <li className="flex gap-3 text-sm text-[var(--bt-bone)]/80">
                <Leaf size={18} className="mt-0.5 shrink-0" style={{ color: "var(--bt-acid)" }} />
                Ethically sourced cotton and hemp from growers we've actually visited.
              </li>
              <li className="flex gap-3 text-sm text-[var(--bt-bone)]/80">
                <Sprout size={18} className="mt-0.5 shrink-0" style={{ color: "var(--bt-acid)" }} />
                Small production runs — no overstock, no landfill drops.
              </li>
              <li className="flex gap-3 text-sm text-[var(--bt-bone)]/80">
                <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: "var(--bt-acid)" }} />
                Water-based inks, recycled poly mailers, no glitter, no gimmicks.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WELLNESS */}
      <section id="wellness" className="px-5 sm:px-10 py-24 sm:py-32 bg-[#0d0e08]">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <span className="bt-mono text-xs" style={{ color: "var(--bt-acid)" }}>
                003 / Wellness Line
              </span>
              <h2 className="bt-display text-4xl sm:text-6xl mt-2">
                RELIEF, NOT
                <br />
                A GIMMICK.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-[var(--bt-bone)]/70">
              CBD/THC pain relief formulated for people on their feet all
              day — third-party tested, dosed clearly, zero fluff branding.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-5">
          {WELLNESS.map((w, i) => (
            <Reveal key={w.name} delay={i * 80}>
              <article className="bt-wellness-visual bt-grain border border-[var(--bt-acid)]/20 p-6 h-full flex flex-col">
                <span className="bt-tag-acid text-[10px] mb-6 inline-block w-fit">
                  Lab Tested
                </span>
                <h3 className="bt-display text-2xl mb-1">{w.name}</h3>
                <span className="bt-mono text-[11px] mb-4" style={{ color: "var(--bt-acid)" }}>
                  {w.dose}
                </span>
                <p className="text-sm text-[var(--bt-bone)]/70 mb-6 flex-1">
                  {w.desc}
                </p>
                <a href="#access" className="bt-btn-acid bt-btn text-xs w-fit">
                  Learn More
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section id="access" className="px-5 sm:px-10 py-24 sm:py-32 bg-[var(--bt-rust)] text-[var(--bt-ink)]">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="bt-mono text-xs">004 / First Access</span>
          <h2 className="bt-display text-4xl sm:text-6xl mt-2 mb-6">
            GET IT BEFORE
            <br />
            THE BLOCK DOES.
          </h2>
          <p className="text-base sm:text-lg mb-10 max-w-lg mx-auto opacity-80">
            Join the list for first access to new drops, restocks, and
            wellness releases — no spam, just the good stuff before it's gone.
          </p>
          <GhlAccessForm />
        </Reveal>
      </section>

      {/* SOCIAL PROOF / BLOG */}
      <section className="px-5 sm:px-10 py-24 sm:py-32 bg-[var(--bt-ink)]">
        <Reveal>
          <span className="bt-mono text-xs" style={{ color: "var(--bt-rust)" }}>
            005 / From The Block
          </span>
          <h2 className="bt-display text-4xl sm:text-6xl mt-2 mb-14">
            REAL PEOPLE.
            <br />
            REAL SUPPLY CHAIN.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              handle: "@marisol.grows",
              quote: "Copped the Kings County hoodie in October, still my heaviest rotation piece. Fit is unreal.",
              img: "/products/social1.png",
            },
            {
              handle: "@deshawn.bk",
              quote: "The recovery balm got me through construction season. No weird smell, actually works.",
              img: "/products/social2.png",
            },
            {
              handle: "@paperplane.nyc",
              quote: "First streetwear brand I've seen actually show their dye process. Respect.",
              img: "/products/social3.png",
            },
          ].map((r, i) => (
            <Reveal key={r.handle} delay={i * 80}>
              <div className="bt-polaroid rotate-[-2deg] w-full max-w-xs mx-auto sm:mx-0">
                <div className="aspect-square mb-4 overflow-hidden">
                  <img
                    src={r.img}
                    alt={`Brooklyn Tokes customer ${r.handle}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm mb-2">"{r.quote}"</p>
                <span className="bt-mono text-[11px] opacity-60">{r.handle}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t border-white/10 pt-10 grid sm:grid-cols-3 gap-6">
            {[
              "How We Chose Our Cotton Supplier — And Why It Took a Year",
              "Inside the Dye Vat: Small-Batch Color Without the Runoff",
              "Micro-Influencer Spotlight: Bushwick's @paperplane.nyc",
            ].map((title) => (
              <article
                key={title}
                className="group block bt-mono text-xs text-[var(--bt-bone)]/70"
              >
                <span className="flex items-center gap-2">
                  Journal Note <ArrowUpRight size={14} />
                </span>
                <p className="mt-2 text-base font-normal normal-case tracking-normal text-[var(--bt-bone)]">
                  {title}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="px-5 sm:px-10 py-16 bg-[var(--bt-brick)] border-t border-white/5">
        <div className="grid sm:grid-cols-4 gap-10 mb-12">
          <div>
            <img src="/logo.png" alt="Brooklyn Tokes" className="h-14 w-14 object-contain mb-3" />
            <p className="text-xs text-[var(--bt-bone)]/60 max-w-[220px]">
              Cannabis-culture streetwear and wellness, made in Brooklyn.
            </p>
          </div>
          <div>
            <h4 className="bt-mono text-xs mb-4 text-[var(--bt-bone)]/50">Shop</h4>
            <ul className="space-y-2 text-sm text-[var(--bt-bone)]/80">
              <li><a href="#drops" className="hover:text-[var(--bt-rust)]">Hoodies</a></li>
              <li><a href="#drops" className="hover:text-[var(--bt-rust)]">Tees & Tanks</a></li>
              <li><a href="#wellness" className="hover:text-[var(--bt-rust)]">Wellness</a></li>
              <li><a href="#drops" className="hover:text-[var(--bt-rust)]">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="bt-mono text-xs mb-4 text-[var(--bt-bone)]/50">Policies</h4>
            <ul className="space-y-2 text-sm text-[var(--bt-bone)]/80">
              <li>Shipping & Returns</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Lab Results</li>
            </ul>
          </div>
          <div>
            <h4 className="bt-mono text-xs mb-4 text-[var(--bt-bone)]/50">Contact / Track</h4>
            <ul className="space-y-2 text-sm text-[var(--bt-bone)]/80">
              <li>hello@bksmarts.com</li>
              <li>Bushwick, Brooklyn NY</li>
              <li>Track Your Order</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-white/5 pt-6 bt-mono text-[10px] text-[var(--bt-bone)]/40">
          <span>© {new Date().getFullYear()} Brooklyn Tokes. All rights reserved.</span>
          <span>21+ only. Keep out of reach of children.</span>
        </div>
      </footer>
    </div>
  );
}
