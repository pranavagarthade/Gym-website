import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image_back from "../../assets/chakra.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import hero_image from "../../assets/mainimgg.png";
import gfitLogo from "../../assets/gfitlogo.jpeg";
import { motion, AnimatePresence } from 'framer-motion';
import NumberCounter from 'number-counter';
import { Link } from 'react-router-dom';
// import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpeg";
import client1 from "../../assets/client1.jpeg";
import client3 from "../../assets/client3.jpeg";
import client4 from "../../assets/client4.jpeg";
import client5 from "../../assets/client5.jpeg";
import client6 from "../../assets/client6.jpeg";


// ─── Testimonial Data ─────────────────────────────────────────────────────────

const TESTIMONIALS = [
  { id:1, name:"ashwirya bathe",   avatar:client1,  issue:"Weight loss",      result:"Loss 20+ kgs ",  duration:"6-7 months", tag:"Weight Loss",      color:"#f97316" },
  { id:2, name:"Rahul Gaikwad",     avatar:client2,   issue:"Obesity",       result:"Lost 20+ kg currently,full of energy",    duration:"9+ Months", tag:"Strength Training & weight loss",color:"#10b981" },
  { id:3, name:"Rupali Mahajan",      avatar:client3,   issue:"Thyroid & weight loss",        result:"Thyroid recovered & weight loss",       duration:"9 Months", tag:"Consistency",       color:"#8b5cf6" },
  { id:4, name:"Riddhi laigude",   avatar:client4,    issue:"Fatloss",     result:"successfully lost weight",       duration:"6 Months", tag:"weight traning",  color:"#06b6d4" },
  { id:5, name:"Sharvari Manjarekar",    avatar:client5,  issue:"Knee pain + weight loss",    result:"Knee pain gone, weight lost",     duration:"6 Months", tag:"Postnatal Fitness", color:"#f59e0b" },
  { id:6, name:"Swati Amrale", avatar:client6,  issue:"PCOD & Menopause hormone imbalance",             result:"Reverse PCOD & improved menopause symptoms",       duration:"currently", tag:"Discipline",     color:"#ef4444" },
];

// ─── Helper ───────────────────────────────────────────────────────────────────

function getBtnOrigin(btnRef) {
  if (!btnRef?.current) return { x: 0, y: 60 };
  const r = btnRef.current.getBoundingClientRect();
  return {
    x: r.left + r.width  / 2 - window.innerWidth  / 2,
    y: r.top  + r.height / 2 - window.innerHeight / 2,
  };
}

// ─── Testimonial Overlay ──────────────────────────────────────────────────────

const TestimonialOverlay = ({ onClose, btnRef }) => {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [isClosing, setIsClosing]   = useState(false);
  const dirRef                      = useRef(1);
  const activeIdxRef                = useRef(0);
  const lastWheelTime               = useRef(0);
  const touchStartY                 = useRef(0);
  const origin                      = getBtnOrigin(btnRef);

  useEffect(() => { activeIdxRef.current = activeIdx; }, [activeIdx]);

  const triggerClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => onClose(), 700);
  }, [isClosing, onClose]);

  const navigate = useCallback((newIdx) => {
    if (newIdx < 0 || newIdx >= TESTIMONIALS.length) return;
    dirRef.current = newIdx > activeIdxRef.current ? 1 : -1;
    setActiveIdx(newIdx);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 680) return;
      lastWheelTime.current = now;
      const cur = activeIdxRef.current;
      if (e.deltaY > 0) {
        if (cur < TESTIMONIALS.length - 1) {
          dirRef.current = 1; setActiveIdx(c => c + 1);
        } else {
          triggerClose();
        }
      } else if (e.deltaY < 0 && cur > 0) {
        dirRef.current = -1; setActiveIdx(c => c - 1);
      }
    };
    window.addEventListener('wheel', handler, { passive: false });
    return () => window.removeEventListener('wheel', handler);
  }, [triggerClose]);

  useEffect(() => {
    const handler = (e) => {
      const cur = activeIdxRef.current;
      if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && cur < TESTIMONIALS.length - 1) {
        e.preventDefault(); dirRef.current = 1; setActiveIdx(c => c + 1);
      } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && cur > 0) {
        e.preventDefault(); dirRef.current = -1; setActiveIdx(c => c - 1);
      } else if (e.key === 'Escape') {
        triggerClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [triggerClose]);

  useEffect(() => {
    const onStart = (e) => { touchStartY.current = e.touches[0].clientX; };
    const onEnd   = (e) => {
      const dx  = touchStartY.current - e.changedTouches[0].clientX;
      const cur = activeIdxRef.current;
      if (Math.abs(dx) >= 44) {
        if (dx > 0) {
          if (cur < TESTIMONIALS.length - 1) { dirRef.current = 1;  setActiveIdx(c => c + 1); }
          else                               { triggerClose(); }
        } else {
          if (cur > 0) { dirRef.current = -1; setActiveIdx(c => c - 1); }
        }
      } else {
        const target = e.changedTouches[0].target;
        if (!target.closest('button, a, input')) triggerClose();
      }
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend',   onEnd);
    };
  }, [triggerClose]);

  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const t   = TESTIMONIALS[activeIdx];
  const dir = dirRef.current;

useEffect(() => {
  if (activeIdx > 0) {
    setHasScrolled(true);
  }
}, [activeIdx]);

  const photoVariants = {
    hidden:  (d) => ({ x: d > 0 ? '105%' : '-105%', opacity: 0, scale: 0.97 }),
    visible: {
      x: 0, opacity: 1, scale: 1,
      transition: { duration: 0.58, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    gone: (d) => ({
      x: d > 0 ? '-38%' : '38%', opacity: 0, scale: 0.97,
      transition: { duration: 0.42, ease: [0.55, 0, 0.85, 0.06] },
    }),
  };

  const infoVariants = isMobile
    ? {
        hidden:  (d) => ({ x: d > 0 ? '105%' : '-105%', opacity: 0 }),
        visible: { x: 0, opacity: 1,
          transition: { duration: 0.58, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.04 } },
        gone:    (d) => ({ x: d > 0 ? '-38%' : '38%', opacity: 0,
          transition: { duration: 0.38, ease: [0.55, 0, 0.85, 0.06] } }),
      }
    : {
        hidden:  (d) => ({ y: d > 0 ? 40 : -40, opacity: 0, x: 0 }),
        visible: { y: 0, opacity: 1, x: 0,
          transition: { duration: 0.54, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 } },
        gone:    (d) => ({ y: d > 0 ? -28 : 28, opacity: 0, x: 0,
          transition: { duration: 0.3, ease: [0.55, 0, 0.85, 0.06] } }),
      };

  return (
    <motion.div
      className="testimonial-overlay"
      initial={{ opacity: 0, scale: 0.06, x: origin.x, y: origin.y }}
      animate={isClosing
        ? { opacity: 0, scale: 0.06, x: origin.x, y: origin.y,
            transition: { duration: 0.55, ease: [0.6, 0, 0.8, 0] } }
        : { opacity: 1, scale: 1, x: 0, y: 0,
            transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] } }
      }
    >
      <div className="overlay-backdrop" onClick={triggerClose} />

      <div
        className={`ov-shell${activeIdx === TESTIMONIALS.length - 1 ? ' ov-shell--last' : ''}`}
        onClick={(e) => {
          if (activeIdx === TESTIMONIALS.length - 1 && !e.target.closest('button, a, input')) {
            triggerClose();
          }
        }}
      >
        {/* ════════════════ HEADER ════════════════ */}
        <header className="ov-header">
          <div className="ov-brand">
            <div className="ov-logo-ball">
              <img src={gfitLogo} alt="GFit" className="ov-logo-img" />
            </div>
            <div className="ov-brand-words">
              <span className="ov-brand-name">Geetanjali</span>
              <span className="ov-brand-tagline">Yoga &amp; Fitness</span>
            </div>
          </div>

          <div className="ov-header-divider" />

          <div className="ov-title-block">
            <span className="ov-eyebrow">Client Stories</span>
            <h2 className="ov-main-title">Real Results</h2>
          </div>

          <div style={{ flex: 1 }} />

          <div className="ov-counter">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIdx}
                className="ov-counter-cur"
                initial={{ y: dir > 0 ? 14 : -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.22 } }}
                exit={{   y: dir > 0 ? -14 : 14, opacity: 0, transition: { duration: 0.16 } }}
              >
                {String(activeIdx + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className="ov-counter-sep">/</span>
            <span className="ov-counter-tot">{String(TESTIMONIALS.length).padStart(2, '0')}</span>
          </div>

          <button className="ov-close-btn" onClick={triggerClose} aria-label="Close">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6"  y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* ════════════════ MAIN STAGE ════════════════ */}
        <div className="ov-stage" style={{ '--active-color': t.color }}>
          <div className="ov-ticks">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`ov-tick ${i === activeIdx ? 'current' : i < activeIdx ? 'done' : ''}`}
                style={
                  i === activeIdx
                    ? { background: t.color, boxShadow: `0 0 10px ${t.color}` }
                    : i < activeIdx
                    ? { background: t.color, opacity: 0.35 }
                    : {}
                }
                onClick={() => navigate(i)}
                aria-label={`Story ${i + 1}`}
              />
            ))}
          </div>

          <AnimatePresence custom={dir} mode="wait">
            <div key={activeIdx} className="ov-frame">

              {/* ──── LEFT: Big photo frame ──── */}
              <motion.div
                className="ov-photo-side"
                custom={dir}
                variants={photoVariants}
                initial="hidden"
                animate="visible"
                exit="gone"
              >
                <div
                  className="ov-photo-radiance"
                  style={{ background: `radial-gradient(ellipse at 55% 45%, ${t.color}28, transparent 68%)` }}
                />
                <div className="ov-photo-frame" style={{ '--c': t.color }}>
                  <span className="pf-corner pf-tl" />
                  <span className="pf-corner pf-tr" />
                  <span className="pf-corner pf-bl" />
                  <span className="pf-corner pf-br" />
                  <img src={t.avatar} alt={t.name} className="ov-photo-img" />
                  <div
                    className="pf-wash"
                    style={{ background: `linear-gradient(to top, ${t.color}66 0%, transparent 55%)` }}
                  />
                </div>
                <span className="ov-photo-tag" style={{ background: t.color }}>{t.tag}</span>
                <span className="ov-photo-bgnum">{String(activeIdx + 1).padStart(2, '0')}</span>
              </motion.div>

              {/* ──── RIGHT: Information ──── */}
              <motion.div
                className="ov-info-side"
                custom={dir}
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                exit="gone"
              >
                <div
                  className="ov-info-accentbar"
                  style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
                />
                <h3 className="ov-info-name" style={{ color: t.color }}>{t.name}</h3>

                <div className="ov-info-row">
                  <span className="ov-lbl">Challenge</span>
                  <p className="ov-val">{t.issue}</p>
                </div>

                <div className="ov-info-row ov-row-hi">
                  <span className="ov-lbl">Transformation</span>
                  <p className="ov-val ov-val-success">✅ {t.result}</p>
                </div>

                <div className="ov-info-row">
                  <span className="ov-lbl">Duration</span>
                  <p className="ov-val ov-val-muted">⏱ {t.duration}</p>
                </div>

                <div className="ov-prog-wrap">
                  <div className="ov-prog-track">
                    <motion.div
                      className="ov-prog-fill"
                      style={{ background: t.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${((activeIdx + 1) / TESTIMONIALS.length) * 100}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.26 }}
                    />
                  </div>
                  <span className="ov-prog-label">{activeIdx + 1} of {TESTIMONIALS.length}</span>
                </div>

                <div className="ov-dots">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      className={`ov-dot ${i === activeIdx ? 'active' : ''}`}
                      style={i === activeIdx
                        ? { background: t.color, boxShadow: `0 0 10px ${t.color}` }
                        : {}}
                      onClick={() => navigate(i)}
                      aria-label={`Story ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="ov-nav">
                  <button
                    className="ov-nav-btn"
                    onClick={() => navigate(activeIdx - 1)}
                    disabled={activeIdx === 0}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                    Prev
                  </button>
                  <button
                    className="ov-nav-btn ov-nav-next"
                    onClick={() => navigate(activeIdx + 1)}
                    disabled={activeIdx === TESTIMONIALS.length - 1}
                    style={{ color: t.color, borderColor: `${t.color}70` }}
                  >
                    Next
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>
              </motion.div>

            </div>
          </AnimatePresence>
        </div>

        {/* ── Mobile close bar ── */}
        <div className="ov-mobile-bar">
          <span className="ov-mobile-hint-text">Swipe left / right to browse · tap to close</span>
          <button className="ov-mobile-close-btn" onClick={triggerClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6"  y1="6" x2="18" y2="18" />
            </svg>
            Close
          </button>
        </div>

        {/* ── PC scroll indicator ── */}
        <AnimatePresence>
          {!hasScrolled && !isClosing && !isMobile && (
            <motion.div
              className="ov-scroll-indicator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6, transition: { duration: 0.25 } }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="ov-si-mouse">
                <motion.div
                  className="ov-si-wheel"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <span className="ov-si-label">Scroll to explore</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile swipe cue ── */}
        <AnimatePresence>
          {!hasScrolled && !isClosing && isMobile && (
            <motion.div
              className="ov-swipe-cue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.9 }}
            >
              <motion.svg
                width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <polyline points="15 18 9 12 15 6"/>
              </motion.svg>
              <span>swipe</span>
              <motion.svg
                width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <polyline points="9 18 15 12 9 6"/>
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

// ─── Shining Results Button ───────────────────────────────────────────────────

const ResultsButton = React.forwardRef(({ onClick, grabbing }, ref) => (
  <button
    ref={ref}
    className={`results-shine-btn ${grabbing ? 'btn-grabbing' : ''}`}
    onClick={onClick}
  >
    <span className="shine-sweep" />
    <span className="btn-inner">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      See Real Results
    </span>
  </button>
));

// ─── WhatsApp Button ──────────────────────────────────────────────────────────

const WhatsAppButton = () => {
  const PHONE   = "918898476506";
  const MESSAGE = "Hi! I'm interested in joining Geetanjali Yoga & Fitness. Can you help me?";
  const url     = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp icon */}
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.803A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="white"/>
          <path d="M21.79 18.573c-.284-.142-1.683-.83-1.944-.924-.26-.095-.449-.142-.638.142-.19.285-.733.924-.899 1.114-.165.19-.331.213-.615.07-.284-.142-1.2-.442-2.285-1.41-.845-.753-1.415-1.684-1.58-1.968-.165-.285-.018-.439.124-.58.127-.127.284-.332.426-.498.142-.165.19-.284.285-.474.095-.19.047-.356-.024-.498-.07-.142-.638-1.538-.874-2.107-.23-.554-.465-.479-.638-.487l-.543-.01c-.19 0-.498.071-.758.356-.26.284-1 .975-1 2.378s1.023 2.758 1.165 2.948c.142.19 2.014 3.074 4.88 4.311.682.294 1.214.47 1.629.601.685.218 1.308.187 1.8.113.549-.082 1.683-.688 1.92-1.353.237-.664.237-1.234.166-1.353-.07-.118-.26-.19-.544-.332z" fill="#25d366"/>
        </svg>
      </a>

      {/* Tooltip — appears on hover via CSS sibling selector */}
      <span className="wa-tooltip">Chat on WhatsApp</span>
    </>
  );
};

// ─── Hero Component ───────────────────────────────────────────────────────────

const Hero = () => {
  const transition  = { type: 'tween', duration: 3 };
  const mobile      = window.innerWidth <= 768;
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [btnGrabbing, setBtnGrabbing]           = useState(false);
  const btnRef                                  = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowTestimonials(true), 900);
    return () => clearTimeout(t);
  }, []);

  const handleOverlayClose = () => {
    setShowTestimonials(false);
    setBtnGrabbing(true);
    setTimeout(() => setBtnGrabbing(false), 900);
  };

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur" />

      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div initial={{ left: mobile ? '165px' : '238px' }} whileInView={{ left: '8px' }} transition={transition} />
          <span>G Fit Makes you the Best version of yourself</span>
        </div>
        <div className="hero-text">
          <div><span className="stroke-text">Shape</span><span> Your mind</span></div>
          <div><span>And Body</span></div>
          <div><span>In Here We Will Help You to change your Entire Lifestyle. Shape and Build Your Ideal Body and Live Up Your Life to the Fullest.</span></div>
        </div>
        <div className="figures">
          <div><span><NumberCounter end={499} start={10} delay="4" postFix="+" /></span><span>Happy Members</span></div>
          <div><span><NumberCounter end={500} start={50} delay="4" postFix="+" /></span><span>Members Joined</span></div>
          <div><span><NumberCounter end={50}  start={0}  delay="4" postFix="+" /></span><span>Fitness Programs</span></div>
        </div>
        <div className="hero-buttons">
          <button className="btn"><Link className="join-now" to="/Form">Get Started</Link></button>
          <button className="btn"><Link className="join-now" to="/Aboutus">Learn More</Link></button>
        </div>
        <ResultsButton ref={btnRef} grabbing={btnGrabbing} onClick={() => setShowTestimonials(true)} />
      </div>

      <div className="right-h">
        <div className="blur hero-blur" />
        <button className="btn"><Link className="join-now" to="/Form">Join Now</Link></button>
        <motion.div initial={{ right:"-1rem" }} whileInView={{ right:"4rem" }} transition={transition} className="heart-rate">
          <img src={Heart} alt="Heart" /><span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img initial={{ right:"-2rem" }} whileInView={{ right:"4.9rem" }} transition={transition} src={hero_image_back} alt="" className="hero-image-back" />
        <motion.div initial={{ right:"37rem" }} whileInView={{ right:"28rem" }} transition={transition} className="calories">
          <img src={Calories} alt="Calories" /><div><span>Calories Burned</span><span>220 kcal</span></div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTestimonials && (
          <TestimonialOverlay key="overlay" onClose={handleOverlayClose} btnRef={btnRef} />
        )}
      </AnimatePresence>

      {/* ── WhatsApp floating button ── */}
      <WhatsAppButton />
    </div>
  );
};

export default Hero;