// Three hero variations
// A. 保守 — 写真主体 / 左右分割 — 公文寄りの落ち着き
// B. 標準 — 中央寄せ + 数字スタッツ帯
// C. チャレンジ — 非対称グリッド / 大胆タイポ + そろばん珠モチーフ

function HeroCopy({ tone }) {
  // tone: emotional / balanced / logical
  if (tone === "logical") {
    return (
      <>
        <h1 className="wf-h1">
          そろばん教育の<br />
          フランチャイズ、<br />
          <span className="em">加盟金 10万円</span>から。
        </h1>
        <p className="wf-lead" style={{ maxWidth: 480 }}>
          固定ロイヤリティ月 2万円。生徒14名で単月黒字化。<br />
          授業外作業をほぼゼロにした、新しい教室運営モデルです。
        </p>
      </>
    );
  }
  if (tone === "logical-fact") {
    return null;
  }
  if (tone === "emotional") {
    return (
      <>
        <h1 className="wf-h1">
          子どもと、<br />
          もう一度。
        </h1>
        <p className="wf-lead" style={{ maxWidth: 480 }}>
          そろばんの先生という、新しい人生の選択肢。<br />
          ブランクがあっても、週1回からでも、はじめられます。
        </p>
      </>
    );
  }
  // balanced
  return (
    <>
      <h1 className="wf-h1">
        子どもと、もう一度。<br />
        そろばんの先生という、<br />
        <span className="em">新しい人生の選択肢。</span>
      </h1>
      <p className="wf-lead" style={{ maxWidth: 480 }}>
        週1回から、自宅・レンタルスペースで。<br />
        加盟金10万円・固定ロイヤリティ月2万円ではじめる、女性主導の教育FC。
      </p>
    </>
  );
}

// === A. 保守案 — 公文型「左右分割・写真主体」 ===
function HeroA({ tone = "emotional" }) {
  return (
    <div className="wf-page" data-variant="A">
      <Header />
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 720 }}>
        <ImgPlaceholder
          w="100%" h="100%"
          label={["[ 講師と子どもの自然光ポートレート ]", "40〜50代の女性講師が机に向かい合って、", "子どもの手元のそろばんを穏やかに見守る。", "正方形〜縦長クロップ・加工は最小限。"].join("\n")}
          style={{ whiteSpace: "pre-line", textAlign: "center" }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 64px", gap: 28 }}>
          <Eyebrow en="FRANCHISE RECRUITMENT" jp="フランチャイズ加盟店募集" />
          <HeroCopy tone={tone} />
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a className="wf-btn primary" href="#contact">個別相談を予約する</a>
            <a className="wf-btn secondary" href="#download">資料を請求する</a>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12, fontSize: 12, color: "var(--rk-ink-2)" }}>
            <BeadRow count={4} accentAt={1} size={10} gap={4} />
            <span style={{ letterSpacing: "0.1em" }}>紹介者様・ご相談者様限定</span>
          </div>
        </div>
      </section>
      {/* Stats strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rk-rule)", borderBottom: "1px solid var(--rk-rule)" }}>
        {[
          { num: "80", unit: "教室", label: "全国展開実績" },
          { num: "3,500", unit: "名", label: "在籍生徒数" },
          { num: "4", unit: "年", label: "平均在籍期間" },
          { num: "14", unit: "名", label: "単月黒字化ライン" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "32px 40px", borderRight: i < 3 ? "1px solid var(--rk-rule)" : "none" }}>
            <Stat {...s} />
          </div>
        ))}
      </div>
    </div>
  );
}

// === B. 標準案 — 中央寄せ + フルブリードKV ===
function HeroB({ tone = "balanced" }) {
  return (
    <div className="wf-page" data-variant="B">
      <Header />
      <section style={{ position: "relative", padding: "80px 80px 0", textAlign: "center" }}>
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <Eyebrow en="FRANCHISE / RECRUITMENT" jp="フランチャイズ加盟店募集 ／ 紹介者様限定" />
          <div className="wf-copyable">
            <HeroCopy tone={tone} />
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <a className="wf-btn primary" href="#contact">個別相談を予約する</a>
            <a className="wf-btn secondary" href="#download">資料を請求する</a>
          </div>
        </div>

        <div style={{ marginTop: 64, position: "relative" }}>
          <ImgPlaceholder
            w="100%" h={480}
            label={["[ フルブリードKV ]", "女性講師1名＋生徒2〜3名／レンタルスペース教室の自然光シーン", "横長16:9・人物は中央〜右寄せ・教室全体の空気感が伝わる構図"].join("\n")}
            style={{ whiteSpace: "pre-line", textAlign: "center" }}
          />
        </div>
      </section>

      {/* Stats — pulled up over the image */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", margin: "-60px 80px 0", background: "#fff", border: "1px solid var(--rk-rule)", position: "relative", zIndex: 2 }}>
        {[
          { num: "80", unit: "教室", label: "全国展開実績", accent: false },
          { num: "3,500", unit: "名", label: "在籍生徒数", accent: false },
          { num: "10", unit: "万円", label: "加盟金", accent: true },
          { num: "2", unit: "万円／月", label: "固定ロイヤリティ", accent: true },
        ].map((s, i) => (
          <div key={i} style={{ padding: "32px 40px", borderRight: i < 3 ? "1px solid var(--rk-rule)" : "none" }}>
            <Stat {...s} />
          </div>
        ))}
      </div>
      <div style={{ height: 80 }} />
    </div>
  );
}

// === C. チャレンジ案 — 非対称グリッド + 大胆タイポ ===
function HeroC({ tone = "balanced" }) {
  return (
    <div className="wf-page" data-variant="C" style={{ background: "var(--rk-base-2)" }}>
      <Header />
      <section style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 0, minHeight: 760, alignItems: "stretch" }}>
        {/* Left: oversized typography */}
        <div style={{ padding: "80px 64px 64px", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fff", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <Eyebrow en="FRANCHISE 2026 — RAKUTAMA" jp="紹介者様限定／加盟店募集" />
            <h1 className="wf-h1" style={{ fontSize: 64, lineHeight: 1.35, letterSpacing: "0.04em" }}>
              子どもと、<br />
              もう一度。<br />
              <span style={{ color: "var(--rk-primary)" }}>そろばんの先生</span>という、<br />
              新しい人生の<br />
              <span style={{ background: "linear-gradient(180deg, transparent 65%, var(--rk-accent) 65%)", padding: "0 6px" }}>選択肢。</span>
            </h1>
          </div>

          {/* Numeric snippets at bottom */}
          <div style={{ display: "flex", gap: 48, marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--rk-rule)" }}>
            <div>
              <div style={{ fontFamily: "var(--rk-font-num)", fontSize: 40, fontWeight: 600, color: "var(--rk-primary)" }}>¥100,000</div>
              <div style={{ fontSize: 12, color: "var(--rk-ink-2)", letterSpacing: "0.15em" }}>加盟金</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--rk-font-num)", fontSize: 40, fontWeight: 600, color: "var(--rk-primary)" }}>¥20,000<span style={{ fontSize: 16 }}>／月</span></div>
              <div style={{ fontSize: 12, color: "var(--rk-ink-2)", letterSpacing: "0.15em" }}>固定ロイヤリティ</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--rk-font-num)", fontSize: 40, fontWeight: 600, color: "var(--rk-primary)" }}>14<span style={{ fontSize: 16 }}>名</span></div>
              <div style={{ fontSize: 12, color: "var(--rk-ink-2)", letterSpacing: "0.15em" }}>単月黒字化ライン</div>
            </div>
          </div>

          {/* CTA at top-right corner of left panel */}
          <div style={{ position: "absolute", top: 96, right: 64, display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
            <a className="wf-btn primary" href="#contact">個別相談を予約する</a>
            <a href="#download" style={{ fontSize: 12, color: "var(--rk-ink-2)", textDecoration: "underline", textUnderlineOffset: 4 }}>資料を請求する →</a>
          </div>
        </div>

        {/* Right: vertical portrait + bead graphic overlay */}
        <div style={{ background: "var(--rk-primary)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "40px 40px 240px 40px" }}>
            <ImgPlaceholder
              w="100%" h="100%"
              label={["[ 縦長ポートレート ]", "女性講師×子ども", "穏やかな対話の瞬間", "4:5 / 自然光"].join("\n")}
              style={{ whiteSpace: "pre-line", textAlign: "center", background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.3)", color: "rgba(255,255,255,.85)" }}
            />
          </div>
          {/* Bead motif at bottom */}
          <div style={{ position: "absolute", left: 40, right: 40, bottom: 40, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 36, height: 22, borderRadius: 999,
                    background: i === 2 ? "var(--rk-accent)" : "rgba(255,255,255,.5)",
                  }}
                />
              ))}
            </div>
            <div style={{ color: "rgba(255,255,255,.9)", fontFamily: "var(--rk-font-jp-serif)", fontSize: 18, letterSpacing: "0.1em" }}>
              女性が主導する、新しい教育FC。
            </div>
            <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12, fontFamily: "var(--rk-font-mono)" }}>
              franchise.rakutama-soroban.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HeroA, HeroB, HeroC, HeroCopy });
