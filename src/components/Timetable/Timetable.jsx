import React, { useState } from "react";

const conditions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 3-5 8-5 8S7 10 7 7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Type 2 Diabetes & Pre-Diabetes",
    desc: "Lower blood sugar naturally with nutrition-first protocols.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Hypertension (Blood Pressure)",
    desc: "DASH-aligned meals, stress management & progressive exercise.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Thyroid (Hypo & Hyper / Hashimoto's)",
    desc: "Targeted nutrition for energy, weight & metabolic health.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "PCOS / PCOD",
    desc: "Reduce insulin resistance, support hormonal balance & fertility.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M5 8h14M5 16h14" />
        <ellipse cx="12" cy="12" rx="7" ry="9" />
      </svg>
    ),
    title: "Weight Management",
    desc: "Sustainable fat loss through real food, not crash diets.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Cholesterol & Heart Health",
    desc: "Nutrition strategies to improve lipid profiles naturally.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: "Fatty Liver",
    desc: "Dietary interventions to reduce liver fat and restore function.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Chronic Kidney Disease (CKD)",
    desc: "Personalised plans to support kidney health.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <path d="M6.5 8a6 6 0 0 0-1 5.5M17.5 8a6 6 0 0 1 1 5.5" />
        <path d="M12 8v13M9 16h6" />
      </svg>
    ),
    title: "Varicose Veins",
    desc: "Exercise + nutrition to improve circulation and manage symptoms.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <path d="M7 8.5c-1.5 1-2.5 3-2 5l1 5.5h12l1-5.5c.5-2-0.5-4-2-5" />
        <path d="M9 14l1.5 5M15 14l-1.5 5" />
      </svg>
    ),
    title: "Musculoskeletal Conditions",
    desc: "Injury recovery, joint health & pain management.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
    title: "Gut Health & Digestive Issues",
    desc: "Bloating, IBS, acid reflux — addressed through food.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Hormonal Imbalances",
    desc: "Beyond PCOS — broader hormonal health for men & women.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Autoimmune Conditions",
    desc: "Anti-inflammatory nutrition & immune support.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Geriatric / Senior Fitness (55+)",
    desc: "Strength, balance, bone density & independence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14z" />
      </svg>
    ),
    title: "Stress, Sleep & Mental Wellness",
    desc: "Nutrition and lifestyle changes for better mental health.",
  },
];

const INITIAL_COUNT = 8;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .sp-section {
    background: #1e1e1e;
    padding: 100px 24px;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .sp-section::before {
    content: '';
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(232,124,39,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .sp-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  /* Header */
  .sp-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .sp-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #e87c27;
    margin-bottom: 20px;
    font-family: 'DM Sans', sans-serif;
  }

  .sp-eyebrow::before,
  .sp-eyebrow::after {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: #e87c27;
    opacity: 0.6;
  }

  .sp-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(34px, 5vw, 54px);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.15;
    margin: 0 auto 20px;
    max-width: 700px;
    letter-spacing: -0.5px;
  }

  .sp-highlight {
    color: #e87c27;
    position: relative;
    display: inline-block;
  }

  .sp-subtitle {
    font-size: 15.5px;
    color: #888;
    line-height: 1.75;
    max-width: 500px;
    margin: 0 auto;
    font-weight: 400;
  }

  /* Grid */
  .sp-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  /* Card */
  .sp-card {
    background: linear-gradient(145deg, #2a2a2a, #252525);
    border: 1px solid #303030;
    border-radius: 16px;
    padding: 26px 22px;
    cursor: default;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                border-color 0.3s ease,
                box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: cardReveal 0.45s ease forwards;
  }

  .sp-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: radial-gradient(circle at 60% 0%, rgba(232,124,39,0.06) 0%, transparent 65%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .sp-card:hover {
    transform: translateY(-6px);
    border-color: rgba(232, 124, 39, 0.5);
    box-shadow: 0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(232,124,39,0.1);
  }

  .sp-card:hover::after {
    opacity: 1;
  }

  @keyframes cardReveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Icon */
  .sp-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(232, 124, 39, 0.1);
    border: 1px solid rgba(232, 124, 39, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    color: #e87c27;
    transition: background 0.3s ease, transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .sp-icon-wrap svg {
    width: 21px;
    height: 21px;
  }

  .sp-card:hover .sp-icon-wrap {
    background: rgba(232, 124, 39, 0.18);
    transform: scale(1.08);
  }

  /* Card text */
  .sp-card-title {
    font-family: 'Syne', sans-serif;
    font-size: 14.5px;
    font-weight: 700;
    color: #f0f0f0;
    margin: 0 0 9px;
    line-height: 1.4;
    position: relative;
    z-index: 1;
  }

  .sp-card-desc {
    font-size: 13px;
    color: #888;
    line-height: 1.7;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  /* Divider */
  .sp-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 40px 0 0;
  }

  .sp-divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #303030, transparent);
  }

  /* Toggle button */
  .sp-toggle-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: 1px solid #3a3a3a;
    border-radius: 100px;
    padding: 12px 28px;
    color: #e87c27;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    white-space: nowrap;
    letter-spacing: 0.2px;
  }

  .sp-toggle-btn:hover {
    background: rgba(232, 124, 39, 0.08);
    border-color: rgba(232, 124, 39, 0.5);
    box-shadow: 0 0 20px rgba(232, 124, 39, 0.12);
  }

  .sp-arrow {
    width: 18px;
    height: 18px;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
  }

  .sp-arrow.open {
    transform: rotate(180deg);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .sp-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (max-width: 768px) {
    .sp-section { padding: 64px 16px; }
    .sp-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .sp-header { margin-bottom: 44px; }
    .sp-card { padding: 20px 16px; }
  }

  @media (max-width: 480px) {
    .sp-grid { grid-template-columns: 1fr; }
  }
`;

const Timetable = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleConditions = showAll ? conditions : conditions.slice(0, INITIAL_COUNT);

  return (
    <>
      <style>{styles}</style>
      <section className="sp-section">
        <div className="sp-container">

          {/* Header */}
          <div className="sp-header">
            <span className="sp-eyebrow">Specialised Care</span>
            <h2 className="sp-title">
              Tailored for <span className="sp-highlight">15+ Health</span> Conditions
            </h2>
            <p className="sp-subtitle">
              We work directly with your physician to ensure every plan
              complements your medical treatment.
            </p>
          </div>

          {/* Grid */}
          <div className="sp-grid">
            {visibleConditions.map((item, index) => (
              <div
                className="sp-card"
                key={index}
                style={{ animationDelay: `${(index % INITIAL_COUNT) * 55}ms` }}
              >
                <div className="sp-icon-wrap">{item.icon}</div>
                <h3 className="sp-card-title">{item.title}</h3>
                <p className="sp-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Toggle */}
          <div className="sp-divider">
            <div className="sp-divider-line" />
            <button
              className="sp-toggle-btn"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `Show ${conditions.length - INITIAL_COUNT} more conditions`}
              <svg
                className={`sp-arrow ${showAll ? "open" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="sp-divider-line" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Timetable;