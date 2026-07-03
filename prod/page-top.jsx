// TOP page — production
function HeroSlideshow({ tone = "balanced" }) {
  const slides = [
    {
      label: "講師×生徒の対話シーン\n40〜50代女性講師×子ども ／ 自然光",
      caption: "01 ／ 講師×生徒",
    },
    {
      label: "レンタルスペース教室の風景\n明るい窓辺・木の机・複数人での授業風景",
      caption: "02 ／ 教室の風景",
    },
    {
      label: "そろばんと手元\n子どもの手元のそろばん・先生の見守る手",
      caption: "03 ／ そろばんと手元",
    },
    {
      label: "直営講師ポートレート\n穏やかな表情の女性講師・教室を背景に",
      caption: "04 ／ 講師ポートレート",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const go = (i) => setIdx((i + slides.length) % slides.length);

  return (
    <section
      style={{ position: "relative", overflow: "hidden", height: 640, background: "#1f2528" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute", inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: "opacity 900ms ease",
            zIndex: 1,
          }}
        >
          <ImgPlaceholder
            w="100%" h="100%"
            label={s.label}
            style={{
              whiteSpace: "pre-line", textAlign: "center",
              background: "repeating-linear-gradient(135deg, rgba(255,255,255,.04) 0 1px, transparent 1px 8px), rgba(255,255,255,.06)",
              borderColor: "rgba(255,255,255,.18)",
              color: "rgba(255,255,255,.7)",
              border: 0,
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(15,20,24,.35) 0%, rgba(15,20,24,.55) 60%, rgba(15,20,24,.78) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute", inset: 0, zIndex: 3,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "0 80px", textAlign: "center", color: "#fff",
        }}
      >
        <div style={{ maxWidth: 880, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
            <span className="rk-eyebrow" style={{ color: "var(--rk-accent)" }}>
              FRANCHISE / RECRUITMENT
            </span>
            <span className="rk-eyebrow-jp" style={{ color: "rgba(255,255,255,.85)" }}>
              フランチャイズ加盟店募集 ／ 紹介者様限定
            </span>
          </div>
          <div style={{ color: "#fff" }} className="hero-overlay-copy">
            <HeroCopy tone={tone} />
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a className="rk-btn primary" href="#contact">個別相談を予約する</a>
            <a className="rk-btn" href="#download" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.5)" }}>
              資料を請求する →
            </a>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 80, bottom: 32, zIndex: 4, display: "flex", alignItems: "center", gap: 14, color: "rgba(255,255,255,.7)", fontFamily: "var(--rk-font-mono)", fontSize: 11, letterSpacing: "0.1em" }}>
        <span className="rk-num" style={{ color: "#fff", fontSize: 13 }}>{String(idx + 1).padStart(2, "0")}</span>
        <span style={{ width: 24, height: 1, background: "rgba(255,255,255,.4)" }} />
        <span>{slides[idx].caption}</span>
      </div>

      <div style={{ position: "absolute", right: 80, bottom: 32, zIndex: 4, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`スライド ${i + 1} へ`}
              style={{
                width: i === idx ? 28 : 10, height: 3,
                background: i === idx ? "var(--rk-accent)" : "rgba(255,255,255,.4)",
                border: 0, padding: 0, cursor: "pointer",
                transition: "width 300ms, background 300ms",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginLeft: 12 }}>
          <button
            onClick={() => go(idx - 1)}
            aria-label="前のスライド"
            style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "var(--rk-font-num)", fontSize: 14 }}
          >←</button>
          <button
            onClick={() => go(idx + 1)}
            aria-label="次のスライド"
            style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "var(--rk-font-num)", fontSize: 14 }}
          >→</button>
        </div>
      </div>
    </section>
  );
}

function TopPage({ tone = "balanced" }) {
  return (
    <div className="rk-page">
      <Header activePage="top" />

      <HeroSlideshow tone={tone} />

      {/* 数字で見る楽珠 */}
      <section style={{ padding: "80px 80px", background: "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow en="BY THE NUMBERS" jp="数字で見る楽珠" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--rk-rule)" }}>
          {[
            { num: "80", unit: "教室", label: "全国展開実績" },
            { num: "3,500", unit: "名", label: "在籍生徒数" },
            { num: "4.0", unit: "年", label: "平均在籍期間" },
            { num: "98", unit: "%", label: "保護者満足度" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "40px 32px", borderRight: i < 3 ? "1px solid var(--rk-rule)" : "none" }}>
              <Stat {...s} />
            </div>
          ))}
        </div>
      </section>

      {/* 5つの理念 */}
      <Section
        id="philosophy"
        variant="base-2"
        eyebrow="OUR PHILOSOPHY"
        eyebrowJp="楽珠が大切にしていること"
        title="そろばん教育を通じて生きる力を育てる"
        lead="この5つの理念は、創業から変わらない、楽珠の判断の軸です。FC加盟者にもそのまま継承される価値観です。"
        headAlign="center"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
          {[
            { n: "01", t: "自律学習", b: "生徒自身が考え、学び、解決する。教師は導き、環境を整える役。" },
            { n: "02", t: "認知能力の向上", b: "計算のスピードと正確さ。3桁以上の珠算式暗算を全員が習得する。" },
            { n: "03", t: "非認知能力", b: "意欲・自信・忍耐・集中・自制・協調・共感。姿勢から伝える。" },
            { n: "04", t: "目標達成型", b: "年9度の検定試験、年2度の塾内大会。級位・段位は一生残る証。" },
            { n: "05", t: "自他共栄", b: "自分だけでなく共に栄える。仲間は高め合う存在である。" },
          ].map((p) => (
            <div key={p.n} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontFamily: "var(--rk-font-num)", fontSize: 14, color: "var(--rk-primary)", fontWeight: 600, letterSpacing: "0.1em" }}>{p.n}</div>
              <h3 className="rk-h3" style={{ fontSize: 18 }}>{p.t}</h3>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 市場機会 */}
      <Section
        id="market"
        eyebrow="MARKET CONTEXT"
        eyebrowJp="なぜ今、そろばん教室なのか"
        title="そろばん教室は、足りていません。"
        lead="昔ながらの教室は店主の高齢化で減少し、新しい教室は増えていません。一方でAI時代の「地頭力」を求めて、受講需要はV字回復しています。"
        headAlign="center"
      >
        <div style={{ background: "var(--rk-ink)", color: "#fff", padding: "40px 48px", borderRadius: 4, marginBottom: 48, display: "grid", gridTemplateColumns: "auto 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 56, lineHeight: 1.2, letterSpacing: "0.04em" }}>
            足りて<br />
            <span style={{ background: "linear-gradient(180deg, transparent 60%, var(--rk-accent) 60%)", padding: "0 6px", color: "#fff" }}>いない。</span>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,.85)" }}>
              「家の近くにそろばん教室がない」という声は、年々増えています。<br />
              一度閉まった教室は戻ってきません。担い手がいないからです。<br />
              その空白を、これから埋めていけるのが、いまの市場です。
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
          <div className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--rk-ink-2)", letterSpacing: "0.2em", fontFamily: "var(--rk-font-num)" }}>SUPPLY</div>
                <h3 className="rk-h3" style={{ fontSize: 20, marginTop: 6 }}>教室数：減少傾向</h3>
              </div>
              <div style={{ fontFamily: "var(--rk-font-num)", fontSize: 36, color: "#c44", fontWeight: 600, lineHeight: 1 }}>↘</div>
            </div>
            <svg viewBox="0 0 320 120" style={{ width: "100%", height: 140 }}>
              <line x1="0" y1="105" x2="320" y2="105" stroke="var(--rk-rule)" />
              <line x1="0" y1="0" x2="0" y2="105" stroke="var(--rk-rule)" />
              <polyline points="6,18 60,28 120,42 180,58 240,76 314,92" fill="none" stroke="#999" strokeWidth="2" />
              <circle cx="6" cy="18" r="3" fill="#bbb" />
              <circle cx="314" cy="92" r="4" fill="#c44" />
              <text x="14" y="14" fontSize="10" fill="var(--rk-ink-2)" fontFamily="var(--rk-font-mono)">ピーク</text>
              <text x="310" y="86" fontSize="10" textAnchor="end" fill="#c44" fontFamily="var(--rk-font-mono)">現在</text>
              <text x="0" y="118" fontSize="10" fill="var(--rk-ink-3)" fontFamily="var(--rk-font-num)">2000</text>
              <text x="320" y="118" fontSize="10" textAnchor="end" fill="var(--rk-ink-3)" fontFamily="var(--rk-font-num)">2025</text>
            </svg>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--rk-ink-2)" }}>
              <li style={{ display: "flex", gap: 10 }}><span style={{ color: "var(--rk-ink-3)" }}>−</span>店主の高齢化と後継者不在で老舗教室が次々閉室</li>
              <li style={{ display: "flex", gap: 10 }}><span style={{ color: "var(--rk-ink-3)" }}>−</span>新規開校は撤退数に追いつかず、空白地帯が拡大</li>
              <li style={{ display: "flex", gap: 10 }}><span style={{ color: "var(--rk-ink-3)" }}>−</span>一度閉まった教室はその地域から「習える場所」が消える</li>
            </ul>
            <p className="rk-disclaimer">※ 全国珠算連盟等の公開統計を出典として掲載予定</p>
          </div>

          <div className="rk-card tint" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--rk-primary)", letterSpacing: "0.2em", fontFamily: "var(--rk-font-num)" }}>DEMAND</div>
                <h3 className="rk-h3" style={{ fontSize: 20, marginTop: 6, color: "var(--rk-primary)" }}>受講需要：V字回復</h3>
              </div>
              <div style={{ fontFamily: "var(--rk-font-num)", fontSize: 36, color: "var(--rk-primary)", fontWeight: 600, lineHeight: 1 }}>↗</div>
            </div>
            <svg viewBox="0 0 320 120" style={{ width: "100%", height: 140 }}>
              <line x1="0" y1="105" x2="320" y2="105" stroke="rgba(0,151,178,.25)" />
              <line x1="0" y1="0" x2="0" y2="105" stroke="rgba(0,151,178,.25)" />
              <line x1="195" y1="0" x2="195" y2="105" stroke="var(--rk-accent)" strokeWidth="1" strokeDasharray="3,3" />
              <rect x="158" y="0" width="74" height="16" fill="var(--rk-accent)" />
              <text x="195" y="11" fontSize="9" textAnchor="middle" fill="var(--rk-ink)" fontFamily="var(--rk-font-num)" fontWeight="700">AI ERA →</text>
              <polyline points="6,32 60,52 120,72 180,82 240,52 300,22 314,16" fill="none" stroke="var(--rk-primary)" strokeWidth="2.5" />
              <circle cx="6" cy="32" r="3" fill="var(--rk-primary)" opacity="0.5" />
              <circle cx="180" cy="82" r="3" fill="var(--rk-ink-3)" />
              <circle cx="314" cy="16" r="4" fill="var(--rk-accent)" stroke="#806400" strokeWidth="1" />
              <text x="180" y="98" fontSize="10" textAnchor="middle" fill="var(--rk-ink-2)" fontFamily="var(--rk-font-mono)">底</text>
              <text x="0" y="118" fontSize="10" fill="var(--rk-ink-3)" fontFamily="var(--rk-font-num)">2000</text>
              <text x="320" y="118" fontSize="10" textAnchor="end" fill="var(--rk-ink-3)" fontFamily="var(--rk-font-num)">2025</text>
            </svg>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--rk-ink)" }}>
              <li style={{ display: "flex", gap: 10 }}><span style={{ color: "var(--rk-primary)" }}>＋</span>AI時代に必要な「地頭力」「集中力」を育てる教育として再評価</li>
              <li style={{ display: "flex", gap: 10 }}><span style={{ color: "var(--rk-primary)" }}>＋</span>計算力ではなく、思考の土台・忍耐・自律性が支持される</li>
              <li style={{ display: "flex", gap: 10 }}><span style={{ color: "var(--rk-primary)" }}>＋</span>保護者世代の原体験 ＋ 教育投資の選択肢として復権</li>
            </ul>
            <p className="rk-disclaimer">※ 楽珠の在籍推移・業界統計を裏付けに掲載予定</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--rk-rule)", paddingTop: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
            <div>
              <div className="rk-eyebrow-jp" style={{ marginBottom: 8 }}>新規出店の成功事例</div>
              <h3 className="rk-h3" style={{ fontSize: 24 }}>新しい担い手によって、教室が次々と立ち上がっています。</h3>
            </div>
            <div className="rk-num" style={{ fontSize: 14, color: "var(--rk-ink-2)", letterSpacing: "0.15em" }}>2024 — 2026 / SUCCESS CASES</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                area: "藤沢", pin: "Fujisawa",
                profile: "30代女性 ／ 保険代理店フリーランス",
                detail: "本業を続けながらレンタルスペースで開校。2教室目を準備中。",
                stat: { num: "2", unit: "教室", label: "同時展開へ" },
              },
              {
                area: "練馬", pin: "Nerima",
                profile: "40代女性 ／ 元教員",
                detail: "自宅一室で週2回スタート。開校3ヶ月で定員に到達。",
                stat: { num: "3", unit: "ヶ月", label: "定員到達まで" },
              },
              {
                area: "大阪", pin: "Osaka",
                profile: "50代女性 ／ そろばん経験者",
                detail: "20年ぶりの復帰。地域に教室がなくなっていたエリアで開校。",
                stat: { num: "20", unit: "年", label: "ブランクからの再開" },
              },
            ].map((c) => (
              <div key={c.area} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16, padding: 0, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 140, background: "var(--rk-base-2)", borderBottom: "1px solid var(--rk-rule)" }}>
                  <ImgPlaceholder w="100%" h="100%" label={`${c.area}エリアの教室・開校風景`} />
                  <div style={{ position: "absolute", top: 12, left: 12, background: "#fff", padding: "4px 10px", border: "1px solid var(--rk-rule)", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--rk-primary)" }} />
                    <span style={{ fontFamily: "var(--rk-font-num)", fontSize: 11, letterSpacing: "0.1em", color: "var(--rk-ink-2)" }}>{c.pin.toUpperCase()}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 12, right: 12, fontFamily: "var(--rk-font-jp-serif)", fontSize: 28, color: "var(--rk-ink)", background: "#fff", padding: "2px 10px" }}>{c.area}</div>
                </div>
                <div style={{ padding: "8px 24px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontSize: 12, color: "var(--rk-ink-2)" }}>{c.profile}</div>
                  <p style={{ margin: 0, fontSize: 13, color: "var(--rk-ink)", lineHeight: 1.85 }}>{c.detail}</p>
                  <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px dashed var(--rk-rule)", display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span className="rk-num" style={{ fontSize: 32, color: "var(--rk-primary)", fontWeight: 600, lineHeight: 1 }}>{c.stat.num}</span>
                    <span style={{ fontSize: 13, color: "var(--rk-ink-2)" }}>{c.stat.unit}</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--rk-ink-2)", letterSpacing: "0.1em" }}>{c.stat.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: "20px 24px", background: "var(--rk-base-2)", display: "flex", gap: 16, alignItems: "flex-start", borderRadius: 4 }}>
            <div style={{ fontSize: 16, color: "var(--rk-primary)" }}>◆</div>
            <p style={{ margin: 0, fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85 }}>
              <strong style={{ color: "var(--rk-ink)" }}>共通しているのは、特別な経歴ではなく「動き出した」という事実だけ。</strong>
              レンタルスペース・自宅・小さな一歩 — 楽珠の開校形態は、参入のハードルを意図的に下げています。
            </p>
          </div>
        </div>
      </Section>

      {/* ペルソナ分岐 */}
      <Section
        id="persona"
        eyebrow="WHO ARE YOU"
        eyebrowJp="あなたはどんな立場で検討していますか？"
        title="3つの入り口から、あなたに合った道筋へ"
        lead="楽珠FCは、注力する3つのペルソナごとに必要な情報を整理しています。ご自身に近いものをお選びください。"
        headAlign="center"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          <PersonaCard
            num="1"
            title="先生として"
            sub="主婦・元教員・そろばん経験者の方"
            body="自宅・近所のレンタルスペースで、週1〜2回、無理のない働き方を。3級以上のご経験があれば、20〜30年のブランクがあっても大丈夫です。"
            href="teacher.html"
          />
          <PersonaCard
            num="2"
            title="経営者として"
            sub="フリーランス・副業層・個人事業主の方"
            body="講師雇用で複数教室を展開。授業外作業がほぼゼロのため、月数時間の運営工数で持続可能。生徒14名で単月黒字化。"
            href="owner.html"
          />
          <PersonaCard
            num="3"
            title="法人として"
            sub="既存教育事業者・新規事業ご担当者"
            body="既存生徒へのクロスセル、空き時間・スペース活用、講師研修のみで開校可。複数展開モデルもご提案します。"
            href="corp.html"
            preparing
          />
        </div>
        <div style={{ marginTop: 32, padding: 20, background: "var(--rk-base-2)", borderRadius: 4, display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ fontSize: 18 }}>ℹ︎</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85 }}>
            <strong style={{ color: "var(--rk-ink)" }}>事例の透明性について。</strong>
            ①は楽珠直営講師の声、②は藤沢市の30代女性経営者（実名・本業開示の許諾済み）、③は現在ご相談いただいている法人様として正直に明示しています。事例の数を盛らず、透明性を優先しています。
          </p>
        </div>
      </Section>

      {/* 楽珠式の特徴 */}
      <Section
        variant="base-2"
        eyebrow="RAKUTAMA METHOD"
        eyebrowJp="楽珠式の特徴"
        title="週1回で成果が出る、実用暗算力。"
        lead="教材は本部が用意。授業外の作業はほぼゼロ。先生は子どもと向き合う時間に集中できます。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { t: "週1回・60分から", b: "通いやすさを最優先。子どもの集中力に合わせた設計。", img: "教室での授業風景" },
            { t: "実用的な珠算式暗算", b: "3桁以上の暗算を全員が習得することを目標に置く。", img: "そろばんと子どもの手元" },
            { t: "オンライン併用", b: "対面と同等の成果を出すための補助ツールを本部が提供。", img: "オンライン受講イメージ" },
          ].map((f) => (
            <div key={f.t} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ImgPlaceholder w="100%" h={200} label={f.img} />
              <h3 className="rk-h3" style={{ fontSize: 20 }}>{f.t}</h3>
              <p style={{ fontSize: 14, color: "var(--rk-ink-2)", lineHeight: 1.9, margin: 0 }}>{f.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 開校形態 */}
      <Section
        eyebrow="LOCATION OPTIONS"
        eyebrowJp="開校形態の選択肢"
        title="3つの開校形態から、無理のない一歩を。"
        lead="レンタルスペース型を最も推奨しています。固定費を抑えつつ、立地条件を満たせる最適解です。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { t: "自宅型", chip: "並列推奨", desc: "ご自宅の一室を活用。週1〜2回・少人数で始めるなら最もリスクが低い形態です。", costs: { ini: "5〜20万円", fix: "0円／月" } },
            { t: "レンタルスペース型", chip: "★ 主推奨", desc: "公民館・コワーキング・カフェ等を時間貸し。固定費を抑えつつ、生活圏外への展開も可能。", costs: { ini: "10〜30万円", fix: "2〜5万円／月" }, recommended: true },
            { t: "テナント型", chip: "本格展開", desc: "専用スペースで本格運営。複数教室展開や法人運営に向く。", costs: { ini: "100〜300万円", fix: "10〜25万円／月" } },
          ].map((c) => (
            <div key={c.t} className={`rk-card ${c.recommended ? "tint" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="rk-h3" style={{ fontSize: 20 }}>{c.t}</h3>
                <span className={`rk-chip ${c.recommended ? "accent" : "outline"}`}>{c.chip}</span>
              </div>
              <ImgPlaceholder w="100%" h={160} label={`${c.t} の実例写真`} tint={c.recommended} />
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.9, margin: 0 }}>{c.desc}</p>
              <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 12, paddingTop: 12, borderTop: "1px solid var(--rk-rule)" }}>
                <div><div style={{ color: "var(--rk-ink-2)" }}>初期費用</div><div className="rk-num" style={{ fontSize: 16, color: "var(--rk-ink)" }}>{c.costs.ini}</div></div>
                <div><div style={{ color: "var(--rk-ink-2)" }}>月額固定費</div><div className="rk-num" style={{ fontSize: 16, color: "var(--rk-ink)" }}>{c.costs.fix}</div></div>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* FC加盟プラン比較 */}
      <Section
        id="plan"
        variant="primary-band"
        eyebrow="FRANCHISE PLAN"
        eyebrowJp="業界の常識を覆すFC加盟プラン"
        title="加盟金10万円・固定ロイヤリティ月2万円。"
        lead="大手FCの加盟金は数百万円、ロイヤリティは生徒数連動が一般的。楽珠は、新興・身軽・実利的という独自ポジションを価格構造で明確に示します。"
      >
        <div style={{ background: "#fff", padding: 32, borderRadius: 4, color: "var(--rk-ink)" }}>
          <table className="rk-cmp">
            <thead>
              <tr>
                <th style={{ width: "22%" }}>項目</th>
                <th className="us" style={{ width: "26%" }}>楽珠そろばん教室</th>
                <th style={{ width: "26%" }}>大手FC・K社</th>
                <th style={{ width: "26%" }}>大手FC・E社</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>加盟金</th>
                <td className="us"><span className="hl">¥100,000</span></td>
                <td>不要（教材費別）</td>
                <td>¥330,000</td>
              </tr>
              <tr>
                <th>月額ロイヤリティ</th>
                <td className="us"><span className="hl">¥20,000（固定）</span></td>
                <td>生徒数 × 教材費</td>
                <td>売上比例</td>
              </tr>
              <tr>
                <th>授業外の作業負荷</th>
                <td className="us">ほぼゼロ（教材本部提供）</td>
                <td>丸つけ等の自宅稼働あり</td>
                <td>授業準備・進捗管理あり</td>
              </tr>
              <tr>
                <th>講師要件</th>
                <td className="us">そろばん3級以上（ブランクOK）</td>
                <td>原則制限なし（試験あり）</td>
                <td>所定試験合格</td>
              </tr>
              <tr>
                <th>黒字化目安</th>
                <td className="us"><span className="hl">生徒14名で単月黒字化</span></td>
                <td>条件次第</td>
                <td>条件次第</td>
              </tr>
              <tr>
                <th>最大持ち出し</th>
                <td className="us">約50万円</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
          <p className="rk-disclaimer">※ 比較数値は公開情報に基づく目安。社名はイニシャル表記。</p>
        </div>
      </Section>

      {/* サポート体制 */}
      <Section
        eyebrow="OUR SUPPORT"
        eyebrowJp="サポート体制"
        title="開校前から開校後まで、本部が並走します。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { t: "開校前研修", b: "そろばん指導法・授業設計・運営の基本を本部スタッフが直接指導。" },
            { t: "教材・カリキュラム", b: "本部が全教材を提供。教材作成・印刷・更新の負担はゼロ。" },
            { t: "集客・販促", b: "チラシ・ウェブ広告・SNSテンプレートを本部から提供。" },
            { t: "月次面談", b: "月1回の本部面談で、運営課題と数字を一緒に確認します。" },
          ].map((s, i) => (
            <div key={i} style={{ borderTop: "2px solid var(--rk-primary)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="rk-num" style={{ fontSize: 12, color: "var(--rk-primary)", letterSpacing: "0.1em" }}>0{i + 1}</div>
              <h3 className="rk-h3" style={{ fontSize: 18 }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 開校までの流れ */}
      <Section
        id="flow"
        variant="base-2"
        eyebrow="STEPS TO OPEN"
        eyebrowJp="開校までの流れ"
        title="ご相談から開校まで、3〜6ヶ月の流れ。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, position: "relative" }}>
          {[
            { n: "01", t: "個別相談", w: "60分・オンライン可" },
            { n: "02", t: "資料お渡し", w: "収支モデル詳細" },
            { n: "03", t: "本部面談", w: "ご家族同席推奨" },
            { n: "04", t: "契約・研修", w: "2週間〜1ヶ月" },
            { n: "05", t: "物件・告知", w: "並行で進行" },
            { n: "06", t: "開校", w: "3〜6ヶ月後" },
          ].map((s, i, arr) => (
            <div key={s.n} className="rk-card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8, position: "relative" }}>
              <div className="rk-num" style={{ fontSize: 12, color: "var(--rk-primary)", letterSpacing: "0.1em" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16 }}>{s.t}</div>
              <div style={{ fontSize: 11, color: "var(--rk-ink-2)" }}>{s.w}</div>
              {i < arr.length - 1 && (
                <div style={{ position: "absolute", right: -12, top: "50%", color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* FC募集の方針 */}
      <Section
        eyebrow="OUR STANCE"
        eyebrowJp="FC募集の方針"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className="rk-lead">
              楽珠のFC募集は、「販売」ではなく「事業機会の共有」です。<br />
              数を集めることよりも、ご自身と楽珠の方向性が本当に一致するかを丁寧に確認させていただきます。
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {["紹介者様限定で募集しています", "情報の透明性を最優先します（実績・収支・リスク）", "不向きな方には正直にお伝えします", "「すぐ大儲け」を期待される方とはご一緒できません"].map((t) => (
                <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)" }}>—</span>
                  <span style={{ fontSize: 14 }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rk-card tint" style={{ borderRadius: 4 }}>
            <h3 className="rk-h3" style={{ fontSize: 18, marginBottom: 12 }}>こんな方とは、ご一緒できません</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--rk-ink-2)" }}>
              <li>· すぐに大きな利益を期待される方</li>
              <li>· そろばん教育自体への関心が薄い方</li>
              <li>· 大手FCの代替を探している方</li>
              <li>· そろばん3級未満の方（指導要件）</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        variant="base-2"
        eyebrow="FAQ"
        eyebrowJp="よくある質問"
        title="ご相談前に、よくいただく質問にお答えします。"
      >
        <div style={{ maxWidth: 880, display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { q: "そろばん経験が20年ほど前です。それでも始められますか？", a: "はい。3級以上のご経験があれば問題ありません。本部の研修で、現代の指導法も合わせて学んでいただきます。" },
            { q: "自宅以外で開校できますか？", a: "もちろん可能です。レンタルスペース型を最も推奨しており、固定費を抑えつつ集客しやすい立地を選べます。" },
            { q: "副業として始めることは可能ですか？", a: "可能です。週1〜2回からスタートできるよう設計されています。本業をお持ちの方でも運営工数は月数時間程度です。" },
            { q: "黒字化までどのくらいかかりますか？", a: "立地と運営形態により異なりますが、生徒14名で単月黒字化、最大持ち出し約50万円が目安です。" },
            { q: "教材は自分で作る必要がありますか？", a: "いいえ。教材・カリキュラムは本部から全て提供します。授業外の作業（丸つけ・進捗管理等）もほぼ発生しません。" },
          ].map((it, i) => (
            <details key={i} style={{ padding: "20px 0" }} open={i === 0}>
              <summary style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", listStyle: "none", fontSize: 15, fontFamily: "var(--rk-font-jp-serif)" }}>
                <span><span style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)", marginRight: 12 }}>Q.</span>{it.q}</span>
                <span className="faq-toggle" style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)" }}>＋</span>
              </summary>
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: 14, color: "var(--rk-ink-2)", lineHeight: 1.9, paddingLeft: 28 }}>{it.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section id="contact" style={{ padding: "120px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <Eyebrow en="GET IN TOUCH" jp="まずは話を聞きに、いらしてください" />
          <h2 className="rk-h2" style={{ color: "#fff", fontSize: 38 }}>
            個別相談で、あなたの状況を<br />じっくりお伺いします。
          </h2>
          <p className="rk-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            60分のオンライン面談で、ご経歴・ご希望の働き方・収支の見立てまで一緒に確認します。<br />
            「向いていない」と判断した場合は、率直にお伝えします。
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 8 }}>
            <a className="rk-btn primary" href="#contact-form">個別相談を予約する</a>
            <a className="rk-btn" href="#download" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.5)" }}>資料を請求する →</a>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)", letterSpacing: "0.15em", marginTop: 8 }}>
            紹介者様・ご相談者様限定 ／ お問い合わせから48時間以内にご返信
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { TopPage });
