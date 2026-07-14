// Shared wireframe atoms for 楽珠 FC site
const { useState } = React;

function Logo({ sub = "FC加盟店募集" }) {
  return (
    <div className="wf-logo">
      <div className="mark">楽</div>
      <div>
        <div className="name">楽珠そろばん教室</div>
      </div>
      <span className="sub">{sub}</span>
    </div>
  );
}

function Header({ activePage = "top" }) {
  const items = [
    { id: "philosophy", label: "私たちの理念" },
    { id: "persona", label: "立場で選ぶ" },
    { id: "plan", label: "加盟プラン" },
    { id: "flow", label: "開校の流れ" },
    { id: "faq", label: "よくある質問" },
  ];
  return (
    <header className="wf-header">
      <Logo />
      <nav className="wf-nav">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`}>{it.label}</a>
        ))}
      </nav>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <a className="home-link" href="#">↗ 受講者サイト</a>
        <a className="wf-btn primary small" href="#contact">個別相談を予約</a>
      </div>
    </header>
  );
}

function ImgPlaceholder({ w, h, label, tint, style, solid }) {
  return (
    <div
      className={`wf-img ${tint ? "tint" : ""} ${solid ? "solid" : ""}`}
      style={{ width: w, height: h, ...style }}
    >
      <div className="wf-img-label">{label}</div>
    </div>
  );
}

function Eyebrow({ en, jp }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {en && <span className="wf-eyebrow">{en}</span>}
      {jp && <span className="wf-eyebrow-jp">{jp}</span>}
    </div>
  );
}

function Stat({ num, unit, label, accent }) {
  return (
    <div className="wf-stat">
      <div className={`num ${accent ? "accent" : ""}`}>
        <span className="wf-num">{num}</span>
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

// Soroban bead row — abstract motif
function BeadRow({ count = 5, accentAt = 1, size = 14, gap = 6 }) {
  return (
    <div style={{ display: "flex", gap, alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`wf-bead ${i === accentAt ? "accent" : ""}`}
          style={{ ["--s"]: `${size}px` }}
        />
      ))}
    </div>
  );
}

// Section wrapper
function Section({ id, eyebrow, eyebrowJp, title, lead, headAlign = "left", children, variant, style }) {
  const cls = ["wf-section"];
  if (variant === "base-2") cls.push("base-2");
  if (variant === "primary-band") cls.push("primary-band");
  if (variant === "tight") cls.push("tight");
  return (
    <section id={id} className={cls.join(" ")} style={style}>
      {(eyebrow || eyebrowJp || title || lead) && (
        <div className={`wf-section-head ${headAlign === "center" ? "center" : ""}`}>
          {(eyebrow || eyebrowJp) && <Eyebrow en={eyebrow} jp={eyebrowJp} />}
          {title && <h2 className="wf-h2">{title}</h2>}
          {lead && <p className="wf-lead">{lead}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

function PersonaCard({ num, title, sub, body, href = "#", preparing, color = "primary" }) {
  return (
    <a className={`wf-persona-card ${preparing ? "preparing" : ""}`} href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="badge">0{num}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h3 className="wf-h3" style={{ fontSize: 20 }}>{title}</h3>
        <div style={{ fontSize: 13, color: "var(--rk-ink-2)" }}>{sub}</div>
      </div>
      <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>{body}</p>
      <div className="arrow">{preparing ? "準備中 →" : "詳しく見る →"}</div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="wf-footer">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--rk-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>楽</div>
            <span style={{ color: "#fff", fontFamily: "var(--rk-font-jp-serif)", letterSpacing: "0.05em" }}>楽珠そろばん教室</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.55)", lineHeight: 1.9, margin: 0 }}>
            そろばん教育を通じて生きる力を育てる。<br />
            運営：Alpha Brain LLC / One Para
          </p>
        </div>
        <div>
          <h3 className="wf-h3">FC募集</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            <li><a href="#">私たちの理念</a></li>
            <li><a href="#">加盟プラン</a></li>
            <li><a href="#">開校の流れ</a></li>
            <li><a href="#">よくある質問</a></li>
          </ul>
        </div>
        <div>
          <h3 className="wf-h3">立場で選ぶ</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            <li><a href="#">① 先生として</a></li>
            <li><a href="#">② 経営者として</a></li>
            <li><a href="#">③ 法人として</a></li>
          </ul>
        </div>
        <div>
          <h3 className="wf-h3">関連サイト</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            <li><a href="#">受講者サイト ↗</a></li>
            <li><a href="#">運営会社</a></li>
            <li><a href="#">プライバシー</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,.45)" }}>
        <span>© 2026 Alpha Brain LLC. All rights reserved.</span>
        <span style={{ fontFamily: "var(--rk-font-mono)" }}>franchise.rakutama-soroban.com</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Logo, Header, ImgPlaceholder, Eyebrow, Stat, BeadRow, Section, PersonaCard, Footer,
});
