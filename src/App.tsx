import { useState, useEffect, useRef, useCallback } from "react";

/* ============================================================
   DATA
   ============================================================ */
const heroSlides = [
  {
    id: 1,
    badge: "New Drop 2025",
    name: "Phantom Volt X",
    subtitle: "Ultra Performance Runner",
    desc: "Engineered for champions. Breathable mesh upper with carbon-fiber plate technology for maximum energy return.",
    price: "$289",
    oldPrice: "$349",
    discount: "17% OFF",
    img: "https://images.pexels.com/photos/10195371/pexels-photo-10195371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "#f97316",
  },
  {
    id: 2,
    badge: "Best Seller",
    name: "Cloud Drift Pro",
    subtitle: "Street-to-Studio Lifestyle",
    desc: "Where luxury meets the streets. Premium Italian leather with cushioned OrthoFoam® insole for all-day comfort.",
    price: "$219",
    oldPrice: "$279",
    discount: "21% OFF",
    img: "https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "#38bdf8",
  },
  {
    id: 3,
    badge: "Limited Edition",
    name: "Apex Shadow Elite",
    subtitle: "High-Top Luxury Sneaker",
    desc: "Bold. Fearless. Iconic. The Apex Shadow Elite redefines high-top culture with buttery suede and gold hardware.",
    price: "$349",
    oldPrice: "$429",
    discount: "18% OFF",
    img: "https://images.pexels.com/photos/4029473/pexels-photo-4029473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "#a78bfa",
  },
  {
    id: 4,
    badge: "Fan Favorite",
    name: "Velocity Storm II",
    subtitle: "Trail & Terrain Beast",
    desc: "Dominate every terrain. Aggressive GripLock™ outsole with waterproof upper for unstoppable adventures.",
    price: "$259",
    oldPrice: "$319",
    discount: "18% OFF",
    img: "https://images.pexels.com/photos/5930091/pexels-photo-5930091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "#10b981",
  },
];

const products = [
  {
    id: 1,
    name: "Phantom Volt X",
    category: "Performance",
    price: "$289",
    oldPrice: "$349",
    rating: 5,
    reviews: 284,
    badge: "new",
    badgeText: "New",
    img: "https://images.pexels.com/photos/10195371/pexels-photo-10195371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    name: "Cloud Drift Pro",
    category: "Lifestyle",
    price: "$219",
    oldPrice: "$279",
    rating: 4,
    reviews: 512,
    badge: "hot",
    badgeText: "Hot",
    img: "https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    name: "Apex Shadow Elite",
    category: "Luxury",
    price: "$349",
    oldPrice: "$429",
    rating: 5,
    reviews: 173,
    badge: "hot",
    badgeText: "Limited",
    img: "https://images.pexels.com/photos/4029473/pexels-photo-4029473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    name: "Velocity Storm II",
    category: "Trail",
    price: "$259",
    oldPrice: "$319",
    rating: 4,
    reviews: 398,
    badge: "sale",
    badgeText: "Sale",
    img: "https://images.pexels.com/photos/5930091/pexels-photo-5930091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    name: "Nova Street Classic",
    category: "Casual",
    price: "$179",
    oldPrice: "$219",
    rating: 4,
    reviews: 621,
    badge: "sale",
    badgeText: "Sale",
    img: "https://images.pexels.com/photos/28645957/pexels-photo-28645957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 6,
    name: "Dior Air Luxe",
    category: "Luxury",
    price: "$489",
    oldPrice: null,
    rating: 5,
    reviews: 89,
    badge: "new",
    badgeText: "Exclusive",
    img: "https://images.pexels.com/photos/14773449/pexels-photo-14773449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 7,
    name: "Prism Runner 3.0",
    category: "Performance",
    price: "$199",
    oldPrice: "$249",
    rating: 4,
    reviews: 447,
    badge: "new",
    badgeText: "New",
    img: "https://images.pexels.com/photos/30547548/pexels-photo-30547548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 8,
    name: "Urban Pulse Mid",
    category: "Streetwear",
    price: "$239",
    oldPrice: "$299",
    rating: 5,
    reviews: 316,
    badge: "hot",
    badgeText: "Hot",
    img: "https://images.pexels.com/photos/27517037/pexels-photo-27517037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const features = [
  {
    icon: "🚀",
    title: "Free Express Shipping",
    desc: "Complimentary 2-day shipping on all orders over $100. Same-day delivery available in select cities.",
  },
  {
    icon: "🔄",
    title: "Easy 60-Day Returns",
    desc: "Not in love? Return or exchange within 60 days, no questions asked. We cover return shipping.",
  },
  {
    icon: "🔒",
    title: "Secure & Safe Payment",
    desc: "256-bit SSL encryption on all transactions. We accept all major cards, Apple Pay & PayPal.",
  },
  {
    icon: "🎨",
    title: "Custom Colorways",
    desc: "Design your dream pair with our custom colorway builder. Over 200 color combinations available.",
  },
  {
    icon: "🏆",
    title: "Authenticity Guaranteed",
    desc: "Every pair comes with a Certificate of Authenticity and unique serial number for peace of mind.",
  },
  {
    icon: "💬",
    title: "24/7 Premium Support",
    desc: "Dedicated sneaker experts available around the clock via chat, phone, or email. Real humans, real help.",
  },
];

const testimonials = [
  {
    text: "Honestly the best sneaker purchase I've ever made. The Phantom Volt X feels like running on clouds — bought a second pair the same week.",
    author: "Marcus J.",
    location: "New York, USA",
    stars: 5,
    initials: "MJ",
  },
  {
    text: "The packaging alone made me feel like I was opening a luxury gift. The shoes are next-level. SOLE has a customer for life.",
    author: "Priya S.",
    location: "London, UK",
    stars: 5,
    initials: "PS",
  },
  {
    text: "Customer service went above and beyond when my size was out of stock. They found a pair and overnighted them for free. Unreal.",
    author: "Diego R.",
    location: "Miami, USA",
    stars: 5,
    initials: "DR",
  },
  {
    text: "The Apex Shadow Elite is a statement piece. I get stopped on the street daily. Worth every single penny.",
    author: "Aisha K.",
    location: "Dubai, UAE",
    stars: 5,
    initials: "AK",
  },
  {
    text: "Tried SOLE on a friend's recommendation — now I can't buy sneakers anywhere else. The quality is unmatched at this price point.",
    author: "Tom B.",
    location: "Sydney, AUS",
    stars: 5,
    initials: "TB",
  },
];

/* ============================================================
   STAR COMPONENT
   ============================================================ */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`star${s > rating ? " empty" : ""}`}>★</span>
      ))}
    </div>
  );
}

/* ============================================================
   TOAST
   ============================================================ */
interface Toast {
  id: number;
  message: string;
  icon: string;
}

function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.id ? "show" : ""}`}>
          <span className="toast-icon">{t.icon}</span>
          <span className="toast-text">{t.message}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   MINI CART ITEM
   ============================================================ */
interface CartItem {
  id: number;
  name: string;
  price: string;
  img: string;
  qty: number;
}

/* ============================================================
   MAIN APP
   ============================================================ */
export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [cartBump, setCartBump] = useState(false);

  const sliderRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const testimonialRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  /* ---- Scroll handler ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Close cart on outside click ---- */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* ---- Hero auto-slide ---- */
  const startSlider = useCallback(() => {
    if (sliderRef.current) clearInterval(sliderRef.current);
    sliderRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
  }, []);

  useEffect(() => {
    startSlider();
    return () => { if (sliderRef.current) clearInterval(sliderRef.current); };
  }, [startSlider]);

  const goToSlide = (idx: number) => {
    setActiveSlide(idx);
    startSlider();
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startSlider();
  };
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    startSlider();
  };

  /* ---- Testimonial auto-slide ---- */
  useEffect(() => {
    const getMax = () => window.innerWidth < 768 ? 0 : window.innerWidth < 1024 ? 3 : 2;
    testimonialRef.current = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % (testimonials.length - getMax()));
    }, 4000);
    return () => { if (testimonialRef.current) clearInterval(testimonialRef.current); };
  }, []);

  /* ---- Scroll animations ---- */
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---- Toast helper ---- */
  const showToast = (message: string, icon = "✅") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, icon }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  };

  /* ---- Add to cart ---- */
  const addToCart = (product: { id: number; name: string; price: string; img: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartCount((c) => c + 1);
    setCartBump(true);
    setTimeout(() => setCartBump(false), 400);
    showToast(`${product.name} added to cart!`, "👟");
  };

  /* ---- Ripple ---- */
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.classList.add("ripple");
    btn.querySelector(".ripple")?.remove();
    btn.appendChild(circle);
  };

  /* ---- Toggle wishlist ---- */
  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast("Removed from wishlist", "💔");
      } else {
        next.add(id);
        showToast("Added to wishlist!", "❤️");
      }
      return next;
    });
  };

  /* ---- Newsletter ---- */
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterSubmitted(true);
    showToast("Welcome to SOLE! 🎉 Check your email for 10% off.", "📧");
  };

  /* ---- Testimonial offset ---- */
  const getTestimonialOffset = () => {
    if (typeof window === "undefined") return testimonialIdx;
    if (window.innerWidth < 768) return testimonialIdx;
    return testimonialIdx;
  };

  const visibleTestimonials = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const totalTestimonialDots = Math.max(1, testimonials.length - (visibleTestimonials() - 1));

  return (
    <>
      {/* ============================================================
          HEADER
          ============================================================ */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="logo">SOLE<span>.</span></a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#arrivals">New Arrivals</a></li>
            <li><a href="#features">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-right">
          {/* Search icon */}
          <button
            aria-label="Search"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
              width: 40, height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "rgba(255,255,255,0.7)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(249,115,22,0.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Cart */}
          <div className="cart-wrapper" ref={cartRef}>
            <button
              className="cart-btn"
              aria-label="Open cart"
              onClick={() => setCartOpen((o) => !o)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className={`cart-count${cartBump ? " bump" : ""}`}>{cartCount}</span>
              )}
            </button>

            {/* Mini Cart Dropdown */}
            <div className={`mini-cart${cartOpen ? " open" : ""}`}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem" }}>
                  My Cart {cartCount > 0 && <span style={{ color: "var(--accent)" }}>({cartCount})</span>}
                </h3>
                <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "1.2rem" }}>×</button>
              </div>

              {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "2rem 0", color: "var(--text-muted)" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👟</div>
                  <p style={{ fontSize: "0.85rem" }}>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: "240px", overflowY: "auto" }}>
                    {cartItems.map((item) => (
                      <div key={item.id} style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "10px" }}>
                        <img src={item.img} alt={item.name} style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: "0.78rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                          <p style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700 }}>{item.price}</p>
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "0.2rem 0.5rem" }}>×{item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn-primary"
                    style={{ width: "100%", marginTop: "1rem", justifyContent: "center" }}
                    onClick={() => { showToast("Checkout coming soon! 🚀", "🛒"); setCartOpen(false); }}
                  >
                    Checkout — {cartItems.reduce((sum, i) => sum + parseInt(i.price.replace("$", "")) * i.qty, 0)}$
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileNavOpen ? " open" : ""}`}
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
        <ul>
          {["Home", "Shop", "New Arrivals", "About", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" onClick={() => setMobileNavOpen(false)}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main id="home">
        {/* ============================================================
            HERO SLIDER
            ============================================================ */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-orb orb-3" />

          <div className="hero-slider">
            {heroSlides.map((slide, idx) => (
              <div key={slide.id} className={`hero-slide${idx === activeSlide ? " active" : ""}`}>
                <div className="hero-content-wrapper">
                  {/* Text */}
                  <div className="hero-text">
                    <span className="hero-badge">✦ {slide.badge}</span>
                    <h1 className="hero-title">
                      <span className="text-gradient">{slide.name}</span>
                      <br />
                      <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.55em", fontWeight: 500, letterSpacing: "0.05em" }}>
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p className="hero-desc">{slide.desc}</p>
                    <div className="hero-price-row">
                      <span className="hero-price">{slide.price}</span>
                      <span className="hero-price-old">{slide.oldPrice}</span>
                      <span className="hero-price-badge">{slide.discount}</span>
                    </div>
                    <div className="hero-cta-row">
                      <button
                        className="btn-primary accent-glow"
                        onClick={(e) => {
                          createRipple(e);
                          addToCart({ id: slide.id, name: slide.name, price: slide.price, img: slide.img });
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        Add to Cart
                      </button>
                      <button className="btn-secondary">
                        View Details
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="hero-image-wrap">
                    <div className="hero-ring ring-1" />
                    <div className="hero-ring ring-2" />
                    <img
                      className="hero-shoe-img"
                      src={slide.img}
                      alt={slide.name}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <div className="slider-arrows">
              <button className="arrow-btn" onClick={prevSlide} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="arrow-btn" onClick={nextSlide} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="hero-dots">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot${idx === activeSlide ? " active" : ""}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Scroll hint */}
            <div className="hero-scroll-hint">
              <span className="scroll-line" />
              <span>Scroll</span>
            </div>
          </div>
        </section>

        {/* ============================================================
            MARQUEE STRIP
            ============================================================ */}
        <div className="marquee-strip">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, gi) => (
              <div key={gi} style={{ display: "flex" }}>
                {["Free Shipping on $100+", "New Collection 2025", "Up to 30% Off", "Premium Materials", "60-Day Returns", "Authenticity Guaranteed", "Custom Colorways", "Worldwide Delivery"].map((text, i) => (
                  <div key={i} className="marquee-item">{text}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            STATS
            ============================================================ */}
        <div className="stats-section">
          {[
            { number: "500K+", label: "Happy Customers" },
            { number: "150+", label: "Shoe Models" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50+", label: "Countries Served" },
          ].map((stat, i) => (
            <div key={i} className="stat-item fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-number text-gradient">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ============================================================
            PRODUCT GRID
            ============================================================ */}
        <section id="shop" style={{ padding: "6rem 2rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="section-header">
              <span className="section-label fade-in-up">Our Collection</span>
              <h2 className="section-title fade-in-up fade-delay-1">
                Featured <span className="text-gradient">Drops</span>
              </h2>
              <p className="section-subtitle fade-in-up fade-delay-2">
                Handpicked styles from this season's most coveted collection — from performance to pure luxury.
              </p>

              {/* Filter tabs */}
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
                {["All", "Performance", "Lifestyle", "Luxury", "Trail", "Streetwear"].map((cat, i) => (
                  <button
                    key={cat}
                    style={{
                      padding: "0.5rem 1.2rem",
                      borderRadius: "50px",
                      border: i === 0 ? "1px solid rgba(249,115,22,0.5)" : "1px solid rgba(255,255,255,0.1)",
                      background: i === 0 ? "rgba(249,115,22,0.12)" : "rgba(255,255,255,0.03)",
                      color: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.6)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div id="arrivals" className="products-grid">
              {products.map((product, idx) => (
                <div key={product.id} className={`product-card fade-in-up fade-delay-${(idx % 4) + 1}`}>
                  <div className="product-img-wrap">
                    <img src={product.img} alt={product.name} loading="lazy" />
                    <span className={`product-badge ${product.badge}`}>{product.badgeText}</span>
                    <button
                      className={`product-wishlist${wishlist.has(product.id) ? " active" : ""}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Add to wishlist"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlist.has(product.id) ? "#ef4444" : "none"} stroke={wishlist.has(product.id) ? "#ef4444" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      <Stars rating={product.rating} />
                      <span className="review-count">({product.reviews})</span>
                    </div>
                    <div className="product-footer">
                      <div>
                        <div className="product-price">{product.price}</div>
                        {product.oldPrice && <div className="product-price-old">{product.oldPrice}</div>}
                      </div>
                      <button
                        className="product-add-btn"
                        onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, img: product.img })}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <button className="btn-secondary" style={{ display: "inline-flex" }}>
                View All Products
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================
            BANNER — PREMIUM CTA
            ============================================================ */}
        <div style={{ padding: "0 2rem", maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="fade-in-up"
            style={{
              borderRadius: 28,
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(135deg, rgba(15,10,40,0.98) 0%, rgba(30,15,60,0.98) 100%)",
              border: "1px solid rgba(249,115,22,0.15)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              minHeight: 320,
            }}
          >
            <div style={{ padding: "3rem 2.5rem 3rem 3rem" }}>
              <span style={{ display: "inline-block", background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: 50, padding: "0.3rem 1rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.2rem" }}>
                ✦ Limited Time
              </span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
                Get 25% Off Your<br /><span className="text-gradient">First Order</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.8rem", maxWidth: 360 }}>
                Join 500,000+ SOLE members and unlock exclusive deals, early access to drops, and free shipping on every order.
              </p>
              <button className="btn-primary accent-glow" onClick={(e) => { createRipple(e); showToast("Code SOLE25 copied to clipboard! 🎉", "🏷️"); }}>
                Claim Your Discount
              </button>
            </div>
            <div style={{ position: "relative", overflow: "hidden", height: "100%" }}>
              <img
                src="https://images.pexels.com/photos/28645957/pexels-photo-28645957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Sale shoes"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 320, filter: "brightness(0.7) saturate(1.2)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,10,40,0.9) 0%, transparent 60%)" }} />
              {/* Floating badge */}
              <div style={{
                position: "absolute", top: "1.5rem", right: "1.5rem",
                background: "linear-gradient(135deg, var(--accent), #fb923c)",
                borderRadius: "50%", width: 80, height: 80,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 30px rgba(249,115,22,0.4)",
                fontFamily: "var(--font-heading)", fontWeight: 900,
              }}>
                <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>25%</span>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.08em" }}>OFF</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            WHY CHOOSE US
            ============================================================ */}
        <section id="features" className="features-section" style={{ marginTop: "4rem" }}>
          <div className="section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div className="section-header">
              <span className="section-label fade-in-up">Why SOLE</span>
              <h2 className="section-title fade-in-up fade-delay-1">
                Built For The <span className="text-gradient">Bold</span>
              </h2>
              <p className="section-subtitle fade-in-up fade-delay-2">
                We obsess over every detail so you don't have to. Here's what makes SOLE the last shoe brand you'll ever need.
              </p>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} className={`feature-card fade-in-up fade-delay-${(i % 3) + 1}`}>
                  <div className="feature-icon">{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            TESTIMONIALS
            ============================================================ */}
        <section className="testimonials-section">
          <div className="section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div className="section-header">
              <span className="section-label fade-in-up">Reviews</span>
              <h2 className="section-title fade-in-up fade-delay-1">
                What Our <span className="text-gradient">Tribe Says</span>
              </h2>
              <p className="section-subtitle fade-in-up fade-delay-2">
                Real people. Real stories. Real love for SOLE.
              </p>
            </div>

            <div className="testimonials-slider fade-in-up fade-delay-2">
              <div
                className="testimonials-track"
                style={{ transform: `translateX(calc(-${getTestimonialOffset() * (100 / 3)}%))` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="testimonial-card">
                    <div className="testimonial-quote">"</div>
                    <Stars rating={t.stars} />
                    <p className="testimonial-text" style={{ marginTop: "0.75rem" }}>{t.text}</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">{t.initials}</div>
                      <div>
                        <div className="author-name">{t.author}</div>
                        <div className="author-location">{t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonial-dots">
              {Array.from({ length: totalTestimonialDots }).map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === testimonialIdx ? " active" : ""}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Testimonial group ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            NEWSLETTER
            ============================================================ */}
        <div id="contact" style={{ padding: "4rem 0" }}>
          <div className="newsletter-section fade-in-up">
            <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>Stay In The Loop</span>
            <h2 className="newsletter-title">
              Join The <span className="text-gradient">SOLE</span> Family
            </h2>
            <p className="newsletter-sub">
              Get exclusive drops, early access, and a special 10% off your first order. No spam, ever.
            </p>
            {newsletterSubmitted ? (
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 50, padding: "0.9rem 2rem", color: "#10b981", fontWeight: 600 }}>
                <span>✅</span> You're on the list! Check your inbox.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary accent-glow">
                  Subscribe
                </button>
              </form>
            )}
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "1rem" }}>
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </main>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">SOLE<span>.</span></div>
            <p>
              Crafting premium footwear for those who refuse to blend in. 
              Every pair is a statement. Every step, a story.
            </p>
            <div className="social-links">
              {/* Instagram */}
              <a className="social-link" href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a className="social-link" href="#" aria-label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a className="social-link" href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a className="social-link" href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              {/* TikTok */}
              <a className="social-link" href="#" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              {["New Arrivals", "Best Sellers", "Performance", "Lifestyle", "Luxury", "Sale"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {["About Us", "Careers", "Press", "Sustainability", "Investor Relations", "Blog"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              {["Help Center", "Size Guide", "Track Order", "Returns & Exchanges", "Warranty", "Contact Us"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 12 }}>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Need help?</p>
              <a href="mailto:hello@sole.com" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>hello@sole.com</a>
              <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Mon–Sun, 9am–9pm EST</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 SOLE. All rights reserved. Made with ❤️ for sneakerheads.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none" }}>Terms of Service</a>
            <a href="#" style={{ fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none" }}>Cookie Policy</a>
          </div>
          <div className="payment-icons">
            {["VISA", "MC", "AMEX", "PayPal", "Apple Pay"].map((p) => (
              <span key={p} className="payment-icon">{p}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* Toast */}
      <ToastContainer toasts={toasts} />
    </>
  );
}
