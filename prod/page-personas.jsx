// Persona detail pages — ①先生 / ②経営者 / ③法人

// ===================== ① 先生として =====================
function PersonaTeacherPage({ tone = "balanced" }) {
  return (
    <div className="rk-page">
      <Header activePage="teacher" />

      <div className="rk-breadcrumb">
        <a href="index.html">TOP</a>
        <span>／</span>
        <a href="index.html#persona">立場で選ぶ</a>
        <span>／</span>
        <span style={{ color: "var(--rk-ink)" }}>① 先生として</span>
      </div>

      {/* Hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: 540 }}>
        <div style={{ padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
          <span className="rk-chip">① 先生として</span>
          <h1 className="rk-h1">
            子どもと、もう一度、<br />
            机を並べる時間を。
          </h1>
          <p className="rk-lead">
            子育てが一段落して、自分のペースで誰かのために働きたい方へ。<br />
            楽珠は、そろばんの経験を活かしたまま、ブランクから戻れる教室です。
          </p>
          {/* 追い風ポイント 3つ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
            {[
              { icon: "↘", label: "全国の教室数はピーク比1/3以下。地域に「先生」が足りていない。" },
              { icon: "✦", label: "AI時代に「地頭力」を育てたい保護者が増え、需要は再拡大中。" },
              { icon: "♾", label: "平均在籍4年。同じ生徒の成長を、長く見守れます。" },
            ].map((p) => (
              <div key={p.label} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 13, color: "var(--rk-ink-2)" }}>
                <span style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)", flexShrink: 0 }}>{p.icon}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a className="rk-btn primary" href="index.html#contact">個別相談を予約する</a>
            <a className="rk-btn secondary" href="#compare">大手FCとの違いを見る</a>
          </div>
        </div>
        <ImgPlaceholder
          w="100%" h="100%"
          label={"直営講師ポートレート\n40〜50代女性講師×子ども ／ 自然光\n穏やかな対話・教材を一緒に確認するシーン"}
          style={{ whiteSpace: "pre-line", textAlign: "center" }}
        />
      </section>

      {/* 講師要件 */}
      <Section
        eyebrow="REQUIREMENTS"
        eyebrowJp="講師として始めるための条件"
        title="ブランクOK。3級以上の経験があれば大丈夫です。"
        lead="経験はあるけれど、何年も触っていなくて不安。そんな方こそ、楽珠の研修制度を活用してください。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64 }}>
          <div>
            <dl style={{ margin: 0 }}>
              <div className="rk-spec"><dt>そろばん経験</dt><dd><strong>3級以上必須</strong>（ブランクは20〜30年でも問題ありません）</dd></div>
              <div className="rk-spec"><dt>年齢</dt><dd>制限なし（実例は40〜60代女性が中心）</dd></div>
              <div className="rk-spec"><dt>必要な資格</dt><dd>特になし。本部研修の修了をもって指導開始</dd></div>
              <div className="rk-spec"><dt>働き方</dt><dd>週1回〜（曜日・時間帯はご相談）</dd></div>
              <div className="rk-spec"><dt>開校場所</dt><dd>ご自宅／レンタルスペース／カフェ・公民館 等</dd></div>
            </dl>
          </div>
          <div className="rk-card" style={{ background: "var(--rk-base-2)", border: 0 }}>
            <h3 className="rk-h3" style={{ fontSize: 18, marginBottom: 16 }}>本部研修の内容</h3>
            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "var(--rk-ink-2)" }}>
              {[
                "1. 現代の指導法（暗算・読み上げ算）",
                "2. 子どもとの接し方・声かけの実践",
                "3. 教材・テキストの使い方",
                "4. 教室運営の基本（出席管理・保護者対応）",
                "5. 検定・大会の運営",
              ].map((t) => (
                <li key={t} style={{ borderBottom: "1px dashed var(--rk-rule)", paddingBottom: 10 }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* なぜ今、あなたが求められているか */}
      <Section
        variant="base-2"
        eyebrow="MARKET TAILWIND"
        eyebrowJp="なぜ今、先生が求められているのか"
        title="地域に教室がない。あなたの開校を待っている保護者がいます。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            {
              num: "1/3",
              unit: "以下",
              label: "全国教室数（ピーク比）",
              body: "1986年のピーク時13,010軒から、現在は約4,500軒に。ベテラン指導者の引退で教室が消え続けています。「近くに通える教室がない」という声は年々増えています。",
              accent: false,
            },
            {
              num: "6",
              unit: "位",
              label: "小学生の習い事ランキング（2024年）",
              body: "教室数が激減している中でも、そろばんは依然として上位にランクイン。受け皿が不足しているだけで、需要は今も確実にあります。",
              accent: false,
            },
            {
              num: "4",
              unit: "年",
              label: "平均在籍期間",
              body: "習い事の中でも在籍期間が長い部類です。同じ生徒の成長を4年間見守れるのは、指導のやりがいとして別格です。毎月の収入も安定します。",
              accent: true,
            },
          ].map((s, i) => (
            <div key={i} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <span className="rk-num" style={{ fontSize: 48, fontWeight: 600, color: s.accent ? "var(--rk-primary)" : "var(--rk-ink)", lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontSize: 18, color: "var(--rk-ink-2)", marginLeft: 4 }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--rk-ink-2)", letterSpacing: "0.15em" }}>{s.label}</div>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* AI時代の再評価 */}
        <div style={{ marginTop: 40, padding: "32px 40px", background: "var(--rk-ink)", color: "#fff", borderRadius: 4, display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "center" }}>
          <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 40, lineHeight: 1.3, letterSpacing: "0.06em", color: "var(--rk-accent)", whiteSpace: "nowrap" }}>
            AI時代だから、<br />
            そろばんが効く。
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "デジタルでは育てにくい「集中力・空間認識力・反復処理力」が、珠算式暗算で鍛えられると再評価されています。",
              "ChatGPT登場以降、「地頭力」を育てたい保護者が急増。そろばんはその代表的な答えとして注目されています。",
              "教えるのはあなた自身。AI・タブレットに仕事を奪われない、手と頭を使うリアルな教育です。",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 13, color: "rgba(255,255,255,.8)" }}>
                <span style={{ color: "var(--rk-accent)", flexShrink: 0 }}>—</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 大手FC比較 */}
      <Section
        id="compare"
        eyebrow="COMPARISON"
        eyebrowJp="大手FCの先生との違い"
        title="同じ「先生になる」でも、楽珠は身軽です。"
        lead="作業量・教材作成・自宅稼働など、教育FCで負担になりがちな部分を、本部側が引き受けています。"
      >
        <div style={{ background: "#fff", padding: 32, borderRadius: 4 }}>
          <table className="rk-cmp">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>項目</th>
                <th className="us" style={{ width: "35%" }}>楽珠そろばん教室</th>
                <th style={{ width: "35%" }}>大手FC・K社（先生募集）</th>
              </tr>
            </thead>
            <tbody>
              <tr><th>授業外の作業（丸つけ等）</th><td className="us"><span className="hl">ほぼゼロ</span> ／ 教室時間内で完結</td><td>毎日の宿題チェック・丸つけが発生</td></tr>
              <tr><th>教材の準備</th><td className="us"><span className="hl">本部が全て提供</span></td><td>各教科の進度管理が必要</td></tr>
              <tr><th>稼働日数</th><td className="us">週1回〜（曜日選択可）</td><td>週2回 × 教室時間 + 自宅作業</td></tr>
              <tr><th>加盟金</th><td className="us">¥100,000</td><td>不要（教材費別）</td></tr>
              <tr><th>ロイヤリティ／会費</th><td className="us">月¥20,000固定</td><td>生徒数 × 教材費（変動）</td></tr>
              <tr><th>生徒1人あたりの単価</th><td className="us"><span className="hl">高め</span>（そろばん専門性）</td><td>科目数による</td></tr>
              <tr><th>指導科目</th><td className="us">そろばん・暗算に専念</td><td>算数・国語・英語など複数科目</td></tr>
            </tbody>
          </table>
          <p className="rk-disclaimer">※ 比較は公開情報に基づく。社名はイニシャル表記。</p>
        </div>
      </Section>

      {/* 直営講師の声 */}
      <Section
        eyebrow="VOICES"
        eyebrowJp="楽珠の先生の声"
        title="直営教室で働く先生に、率直に聞きました。"
        lead="ローンチ時点では、楽珠の直営講師の声を「楽珠の先生」として正直に掲載しています。FC加盟者を装うことはしません。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { name: "Aさん / 50代", years: "指導歴 3年", quote: "丸つけがない、というだけで、子育てとの両立が驚くほど楽になりました。" },
            { name: "Bさん / 40代", years: "指導歴 2年", quote: "そろばん歴は25年前で止まっていましたが、研修で自信を取り戻せました。" },
            { name: "Cさん / 60代", years: "指導歴 5年", quote: "週2回の出勤で、子どもの成長に立ち会える喜びがあります。" },
          ].map((v) => (
            <div key={v.name} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ImgPlaceholder w="100%" h={200} label={`${v.name} ／ ポートレート`} />
              <div>
                <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16 }}>{v.name}</div>
                <div style={{ fontSize: 12, color: "var(--rk-ink-2)", marginTop: 4 }}>{v.years} ／ 楽珠直営講師</div>
              </div>
              <blockquote style={{ margin: 0, fontSize: 14, color: "var(--rk-ink)", lineHeight: 1.85, position: "relative", paddingLeft: 18, borderLeft: "2px solid var(--rk-primary)" }}>
                {v.quote}
              </blockquote>
            </div>
          ))}
        </div>
        <p className="rk-disclaimer" style={{ marginTop: 24 }}>※ ローンチ時点。FC加盟教室の事例は開校後、許諾を得て順次掲載します。</p>
      </Section>

      {/* 1日の流れ */}
      <Section
        variant="base-2"
        eyebrow="A DAY"
        eyebrowJp="先生の1日"
        title="自宅から徒歩5分のレンタルスペースで、週2回。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {[
            { time: "15:30", t: "教室を開ける", b: "レンタルスペースに到着。机をセットして待つ。" },
            { time: "16:00", t: "1コマ目（60分）", b: "未就学〜小2クラス。読み上げ算と検定対策。" },
            { time: "17:00", t: "2コマ目（60分）", b: "小3〜小6クラス。暗算と段位対策。" },
            { time: "18:00", t: "片付け・退室", b: "机を戻して退室。授業外作業はゼロ。" },
            { time: "—", t: "それ以降は自分の時間", b: "月1回の本部面談を除き、稼働は教室時間のみ。" },
          ].map((d, i) => (
            <div key={i} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="rk-num" style={{ fontSize: 18, color: "var(--rk-primary)" }}>{d.time}</div>
              <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16 }}>{d.t}</div>
              <p style={{ margin: 0, fontSize: 12, color: "var(--rk-ink-2)", lineHeight: 1.85 }}>{d.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <section style={{ padding: "100px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="rk-h2" style={{ color: "#fff" }}>まずは、お話を聞きに来てください。</h2>
          <p className="rk-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            60分のオンライン個別相談で、ご経歴と希望の働き方を一緒に整理します。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a className="rk-btn primary" href="index.html#contact">個別相談を予約する</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ===================== ② 経営者として =====================
function PersonaOwnerPage() {
  return (
    <div className="rk-page">
      <Header activePage="owner" />

      <div className="rk-breadcrumb">
        <a href="index.html">TOP</a>
        <span>／</span>
        <a href="index.html#persona">立場で選ぶ</a>
        <span>／</span>
        <span style={{ color: "var(--rk-ink)" }}>② 経営者として</span>
      </div>

      {/* Hero */}
      <section style={{ padding: "80px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="rk-chip">② 経営者として</span>
          <h1 className="rk-h1">
            <span className="rk-num" style={{ fontSize: 72, fontWeight: 600, color: "var(--rk-primary)" }}>14</span>
            <span style={{ fontSize: 28, marginLeft: 4 }}>名</span>で、<br />
            単月黒字化。
          </h1>
          <p className="rk-lead">
            加盟金10万円。月額固定ロイヤリティ2万円。授業外作業はほぼゼロ。<br />
            運営工数は月数時間。本業を持ちながら、教育事業を立ち上げる選択肢として設計されています。
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="rk-btn primary" href="#simulation">収支シミュレーションを見る</a>
            <a className="rk-btn secondary" href="#case">藤沢事例を読む</a>
          </div>
        </div>
        {/* Hero stats — LTV追加 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { num: "¥100,000", label: "加盟金" },
            { num: "¥20,000／月", label: "固定ロイヤリティ" },
            { num: "¥288,000〜", label: "生徒1名あたりLTV（6千円×4年）" },
            { num: "月数時間", label: "運営工数" },
          ].map((k) => (
            <div key={k.label} style={{ padding: 24, background: "var(--rk-base-2)", borderRadius: 4 }}>
              <div className="rk-num" style={{ fontSize: k.num.length > 8 ? 20 : 26, color: "var(--rk-ink)", fontWeight: 600 }}>{k.num}</div>
              <div style={{ fontSize: 12, color: "var(--rk-ink-2)", marginTop: 6, lineHeight: 1.6 }}>{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ブルーオーシャン — なぜ今が最高の参入タイミング */}
      <Section
        variant="primary-band"
        eyebrow="MARKET OPPORTUNITY"
        eyebrowJp="なぜ今が最高の参入タイミングか"
        title="競合が自滅している市場に、参入する。"
        lead="需要は回復・拡大しているのに、教室数は減り続けています。これは意図的に作られた空白ではなく、指導者の高齢化によって生まれた「構造的な需給ギャップ」です。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            {
              label: "供給",
              arrow: "↘",
              arrowColor: "#f87",
              title: "教室数：ピーク比 1/3以下",
              points: [
                "1986年：13,010軒 → 現在：約4,500軒",
                "後継者不在率65%。引退しても誰も継がない",
                "一度閉まった地域は空白のまま残り続ける",
              ],
            },
            {
              label: "需要",
              arrow: "↗",
              arrowColor: "var(--rk-accent)",
              title: "受講需要：AI時代に再評価",
              points: [
                "習い事ランキング依然6位（2024年学研調査）",
                "「地頭力」「集中力」を育てる手段として保護者層に再評価",
                "東京の一教室で1年間に生徒数が約500名増加した事例も",
              ],
            },
            {
              label: "結果",
              arrow: "→",
              arrowColor: "var(--rk-accent)",
              title: "参入者が少ない今がチャンス",
              points: [
                "エリアによっては競合ゼロで開校できる",
                "先に開校した教室が地域の親御さんの信頼を獲得する",
                "大手FCが本格参入する前に地域ブランドを確立できる",
              ],
            },
          ].map((c) => (
            <div key={c.label} style={{ background: "rgba(255,255,255,.1)", borderRadius: 4, padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,.7)", fontFamily: "var(--rk-font-num)" }}>{c.label}</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: c.arrowColor, fontFamily: "var(--rk-font-num)" }}>{c.arrow}</span>
              </div>
              <h3 className="rk-h3" style={{ fontSize: 16, color: "#fff" }}>{c.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {c.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,.8)" }}>
                    <span style={{ color: c.arrowColor, flexShrink: 0 }}>—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* LTV解説 */}
      <Section
        eyebrow="UNIT ECONOMICS"
        eyebrowJp="1生徒あたりの経済性"
        title="生徒1人が、4年間で約29万円の売上になる。"
        lead="月謝は低単価に見えますが、習い事の中でも在籍期間が長い分、LTV（生涯顧客価値）は高くなります。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          {/* LTV計算 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 8, alignItems: "center" }}>
              {[
                { label: "月謝（目安）", val: "¥6,000〜", sub: "月" },
                { sep: "×" },
                { label: "平均在籍期間", val: "4", sub: "年" },
                { sep: "=" },
                { label: "生徒1名のLTV", val: "¥288,000〜", sub: "※ロイヤリティ控除前", accent: true },
              ].map((item, i) => (
                item.sep ? (
                  <div key={i} style={{ textAlign: "center", fontSize: 24, color: "var(--rk-ink-3)", fontFamily: "var(--rk-font-num)" }}>{item.sep}</div>
                ) : (
                  <div key={i} style={{ padding: "20px 16px", background: item.accent ? "rgba(0,151,178,.06)" : "var(--rk-base-2)", borderRadius: 4, textAlign: "center", border: item.accent ? "1px solid rgba(0,151,178,.2)" : "none" }}>
                    <div style={{ fontSize: 11, color: "var(--rk-ink-2)", letterSpacing: "0.1em", marginBottom: 8 }}>{item.label}</div>
                    <div className="rk-num" style={{ fontSize: item.val.length > 5 ? 18 : 28, fontWeight: 700, color: item.accent ? "var(--rk-primary)" : "var(--rk-ink)" }}>{item.val}</div>
                    <div style={{ fontSize: 11, color: "var(--rk-ink-3)", marginTop: 4 }}>{item.sub}</div>
                  </div>
                )
              ))}
            </div>
            <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>
              飲食店など1回限りの取引と異なり、そろばん教室は<strong style={{ color: "var(--rk-ink)" }}>会員制ストックビジネス</strong>です。
              一度生徒を獲得すれば、毎月安定した売上が継続します。
              生徒数が増えるにつれ、運営工数はほぼ変わらず利益率が向上します。
            </p>
          </div>
          {/* 生徒数別LTV累計 */}
          <div className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 12, color: "var(--rk-ink-2)", letterSpacing: "0.15em" }}>生徒数別 累計LTV（4年）</div>
            {[
              { n: 14, ltv: "約 400万円", note: "単月黒字化ライン" },
              { n: 25, ltv: "約 720万円", note: "" },
              { n: 50, ltv: "約 1,440万円", note: "" },
            ].map((r) => (
              <div key={r.n} style={{ display: "flex", alignItems: "center", gap: 16, paddingBottom: 12, borderBottom: "1px solid var(--rk-rule)" }}>
                <div style={{ width: 48, flexShrink: 0 }}>
                  <span className="rk-num" style={{ fontSize: 22, fontWeight: 700, color: "var(--rk-primary)" }}>{r.n}</span>
                  <span style={{ fontSize: 12, color: "var(--rk-ink-2)", marginLeft: 2 }}>名</span>
                </div>
                <div style={{ flex: 1, height: 6, background: "var(--rk-base-2)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${(r.n / 50) * 100}%`, height: "100%", background: "var(--rk-primary)", borderRadius: 3 }} />
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div className="rk-num" style={{ fontSize: 15, fontWeight: 600, color: "var(--rk-ink)" }}>{r.ltv}</div>
                  {r.note && <div style={{ fontSize: 11, color: "var(--rk-primary)" }}>{r.note}</div>}
                </div>
              </div>
            ))}
            <p className="rk-disclaimer">※ 月謝6,000円×在籍48ヶ月の単純試算。実際の収支は別途シミュレーションをご確認ください。</p>
          </div>
        </div>
      </Section>

      {/* 収支シミュレーション */}
      <Section
        id="simulation"
        variant="base-2"
        eyebrow="P&L SIMULATION"
        eyebrowJp="収支シミュレーション"
        title="生徒数別、月次収支のリアル。"
        lead="レンタルスペース型・週2回・月謝1万円・月8回授業を前提とした、保守的なシミュレーションです。"
      >
        <div className="rk-card" style={{ overflow: "hidden" }}>
          <table className="rk-cmp">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>項目</th>
                <th style={{ width: "17.5%" }}>生徒 5名</th>
                <th style={{ width: "17.5%" }}>生徒 10名</th>
                <th className="us" style={{ width: "17.5%" }}>生徒 14名</th>
                <th style={{ width: "17.5%" }}>生徒 25名</th>
              </tr>
            </thead>
            <tbody>
              <tr><th>月謝収入</th><td>¥50,000</td><td>¥100,000</td><td className="us">¥140,000</td><td>¥250,000</td></tr>
              <tr><th>レンタルスペース費</th><td>−¥30,000</td><td>−¥30,000</td><td className="us">−¥30,000</td><td>−¥40,000</td></tr>
              <tr><th>ロイヤリティ（固定）</th><td>−¥20,000</td><td>−¥20,000</td><td className="us">−¥20,000</td><td>−¥20,000</td></tr>
              <tr><th>その他諸経費</th><td>−¥10,000</td><td>−¥15,000</td><td className="us">−¥20,000</td><td>−¥30,000</td></tr>
              <tr style={{ background: "rgba(0,151,178,.05)" }}>
                <th style={{ background: "rgba(0,151,178,.05)" }}>月次利益</th>
                <td style={{ color: "#c44" }}>−¥10,000</td>
                <td>¥35,000</td>
                <td className="us"><strong><span className="hl">¥70,000</span></strong></td>
                <td><strong>¥160,000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="rk-disclaimer">※ 本部の実績ベース。実際の収支は立地・運営により異なります。</p>

        {/* 初期費用比較 */}
        <div style={{ marginTop: 32, padding: "24px 32px", background: "#fff", border: "1px solid var(--rk-rule)", borderRadius: 4 }}>
          <div style={{ fontSize: 12, color: "var(--rk-ink-2)", letterSpacing: "0.2em", marginBottom: 16, fontFamily: "var(--rk-font-num)" }}>INITIAL INVESTMENT — 他業種FCとの比較</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { label: "楽珠（レンタルスペース型）", val: "10〜30万円", accent: true },
              { label: "学習塾FC（一般的）", val: "200〜500万円" },
              { label: "飲食FC（一般的）", val: "500〜1,500万円" },
              { label: "コンビニFC（一般的）", val: "200〜400万円" },
            ].map((r) => (
              <div key={r.label} style={{ textAlign: "center", padding: "16px 8px", background: r.accent ? "rgba(0,151,178,.05)" : "var(--rk-base-2)", border: r.accent ? "1px solid rgba(0,151,178,.2)" : "1px solid transparent", borderRadius: 4 }}>
                <div className="rk-num" style={{ fontSize: r.accent ? 22 : 18, fontWeight: 700, color: r.accent ? "var(--rk-primary)" : "var(--rk-ink-2)" }}>{r.val}</div>
                <div style={{ fontSize: 11, color: "var(--rk-ink-2)", marginTop: 6, lineHeight: 1.6 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 藤沢事例 */}
      <Section
        id="case"
        eyebrow="REAL CASE"
        eyebrowJp="実例：藤沢市・30代女性経営者"
        title="保険代理店フリーランスから、2教室展開へ。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }}>
          <ImgPlaceholder
            w="100%" h={420}
            label={"経営者ポートレート（実名・顔出し可）\n藤沢市・30代女性／保険代理店フリーランス\n2教室準備中／本業との両立"}
            style={{ whiteSpace: "pre-line", textAlign: "center" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <dl style={{ margin: 0 }}>
              <div className="rk-spec"><dt>本業</dt><dd>保険代理店（フリーランス）</dd></div>
              <div className="rk-spec"><dt>開校時期</dt><dd>1教室目：2025年秋／2教室目：2026年春</dd></div>
              <div className="rk-spec"><dt>運営形態</dt><dd>レンタルスペース2拠点 ／ 講師は雇用</dd></div>
              <div className="rk-spec"><dt>本業との両立</dt><dd>運営工数は月3〜5時間 ／ 教室には基本不在</dd></div>
              <div className="rk-spec"><dt>始めたきっかけ</dt><dd>本業の顧客に教育事業を提案できる強みになると判断</dd></div>
            </dl>
            <blockquote style={{ margin: 0, padding: "20px 0", borderTop: "1px solid var(--rk-rule)", borderBottom: "1px solid var(--rk-rule)", fontFamily: "var(--rk-font-jp-serif)", fontSize: 18, lineHeight: 1.8 }}>
              「自分が教室にいなくても回る設計だから、本業の合間で立ち上げられました。」
            </blockquote>
            <a href="#" style={{ color: "var(--rk-primary)", fontSize: 13, textDecoration: "none" }}>インタビュー全文を読む →</a>
          </div>
        </div>
      </Section>

      {/* M&A・事業承継 */}
      <Section
        variant="base-2"
        eyebrow="ADVANCED STRATEGY"
        eyebrowJp="上級戦略：既存教室の引き継ぎ"
        title="引退する指導者の生徒ごと、引き継ぐ。"
        lead="エリアで廃業を検討している高齢の指導者に声をかけ、既存生徒・看板をそのまま引き継ぐ「M&A型開校」は、集客ゼロからスタートせずに済む最速の立ち上げ方法です。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { n: "01", t: "後継者不在の指導者を探す", b: "全国のそろばん教室の後継者不在率は約65%。エリアの個人教室に声をかけるだけで、引退を考えているケースが多くあります。" },
                { n: "02", t: "楽珠FCとして引き継ぐ", b: "既存の生徒・保護者との関係性をそのまま継承。楽珠のブランドに切り替えながら、教材・システムを標準化します。" },
                { n: "03", t: "初月から黒字スタート", b: "集客期間ゼロ。引き継いだ生徒数がそのまま売上になります。月謝が入る状態から運営を開始できます。" },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div className="rk-num" style={{ fontSize: 13, color: "var(--rk-primary)", letterSpacing: "0.1em", flexShrink: 0, marginTop: 2 }}>{s.n}</div>
                  <div>
                    <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16, marginBottom: 6 }}>{s.t}</div>
                    <p style={{ margin: 0, fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85 }}>{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rk-card tint" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 11, color: "var(--rk-primary)", letterSpacing: "0.2em", fontFamily: "var(--rk-font-num)" }}>MARKET CONTEXT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <span className="rk-num" style={{ fontSize: 40, fontWeight: 700, color: "var(--rk-primary)" }}>65</span>
                <span style={{ fontSize: 16, color: "var(--rk-ink-2)", marginLeft: 4 }}>%</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--rk-ink-2)", letterSpacing: "0.1em" }}>教育サービス業の後継者不在率</div>
            </div>
            <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>
              中小企業庁のデータより。個人経営が主流の珠算業界では、この問題が最も深刻に表れています。
            </p>
            <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid rgba(0,151,178,.2)", fontSize: 12, color: "var(--rk-ink-2)" }}>
              ご関心がある方には、本部が引き継ぎ先のご紹介・交渉サポートを行います。まずは個別相談でご相談ください。
            </div>
          </div>
        </div>
      </Section>

      {/* 運営工数 */}
      <Section
        eyebrow="MONTHLY WORKLOAD"
        eyebrowJp="月の運営工数の内訳"
        title="あなたの稼働は、月に数時間です。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { t: "経営判断", h: "1〜2時間", b: "月次の数字確認と、来期の方針判断のみ。" },
            { t: "本部面談", h: "1時間", b: "月1回の本部スタッフとの定例面談。" },
            { t: "講師との打合せ", h: "1時間", b: "出勤講師との情報共有・課題の確認。" },
            { t: "保護者対応", h: "随時", b: "重要な対応のみ。日常の連絡は講師が担当。" },
          ].map((w) => (
            <div key={w.t} className="rk-card">
              <h3 className="rk-h3" style={{ fontSize: 18 }}>{w.t}</h3>
              <div className="rk-num" style={{ fontSize: 22, color: "var(--rk-primary)", marginTop: 8 }}>{w.h}</div>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, marginTop: 12, marginBottom: 0 }}>{w.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <section style={{ padding: "100px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="rk-h2" style={{ color: "#fff" }}>あなたの想定地で、収支を一緒に組みます。</h2>
          <p className="rk-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            候補エリアと運営イメージをお伺いして、より精緻な収支モデルをご提示します。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a className="rk-btn primary" href="index.html#contact">個別相談を予約する</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ===================== ③ 法人として =====================
function PersonaCorpPage() {
  return (
    <div className="rk-page">
      <Header activePage="corp" />

      <div className="rk-breadcrumb">
        <a href="index.html">TOP</a>
        <span>／</span>
        <a href="index.html#persona">立場で選ぶ</a>
        <span>／</span>
        <span style={{ color: "var(--rk-ink)" }}>③ 法人として</span>
      </div>

      {/* Hero */}
      <section style={{ padding: "80px 80px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="rk-chip">③ 法人として</span>
          <h1 className="rk-h1">
            既存の教室と、<br />
            楽珠を、<span style={{ color: "var(--rk-primary)" }}>並走</span>させる。
          </h1>
          <p className="rk-lead">
            学習塾・音楽教室・スポーツ教室など、すでに子ども向け事業を運営される法人様へ。<br />
            既存講師の研修のみで開校でき、既存生徒へのクロスセル・空きスペース・空き時間帯の活用に向きます。
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="rk-btn primary" href="index.html#contact">法人向け資料を請求する</a>
            <a className="rk-btn secondary" href="index.html#contact">個別相談を予約する</a>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: "var(--rk-ink-3)" }}>※ 貴社向け資料は、お問い合わせ後に個別作成しお送りします。</p>
        </div>
        <ImgPlaceholder
          w="100%" h={420}
          label={"法人運営イメージ\n既存教室の空き時間・空きスペースでそろばん教室を併設するシーン"}
          style={{ whiteSpace: "pre-line", textAlign: "center" }}
        />
      </section>

      {/* 地域格差 × 市場機会 */}
      <Section
        variant="primary-band"
        eyebrow="REGIONAL OPPORTUNITY"
        eyebrowJp="地域ごとの市場機会"
        title="エリア選定次第で、競合ゼロの市場を獲れる。"
        lead="そろばん教室の分布は地域によって極端に偏っています。教室が過小なエリアに出店することで、参入直後から地域の受け皿として機能できます。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* 密度格差 */}
          <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 4, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", letterSpacing: "0.15em", fontFamily: "var(--rk-font-num)" }}>人口10万人あたりの教室数（都道府県別）</div>
            {[
              { area: "全国平均", val: 5.3, max: 21 },
              { area: "最多：富山県", val: 20.8, max: 21, highlight: true },
              { area: "最少：熊本県", val: 1.2, max: 21, low: true },
            ].map((r) => (
              <div key={r.area} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: r.highlight ? "var(--rk-accent)" : r.low ? "#f87" : "rgba(255,255,255,.8)" }}>{r.area}</span>
                  <span className="rk-num" style={{ color: r.highlight ? "var(--rk-accent)" : r.low ? "#f87" : "#fff" }}>{r.val}軒</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,.15)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${(r.val / r.max) * 100}%`, height: "100%", background: r.highlight ? "var(--rk-accent)" : r.low ? "#f87" : "rgba(255,255,255,.5)", borderRadius: 3 }} />
                </div>
              </div>
            ))}
            <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,.6)", lineHeight: 1.8 }}>
              熊本は全国平均の1/4以下。既存事業のネットワークが少ない地方エリアにこそ、大きな白地があります。
            </p>
          </div>
          {/* エリア戦略 */}
          <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 4, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)", letterSpacing: "0.15em", fontFamily: "var(--rk-font-num)" }}>法人ならではのエリア戦略</div>
            {[
              { t: "既存拠点の空白地帯を先埋め", b: "貴社の教室がある地域で競合出店前に複数拠点を確保する。" },
              { t: "FCネットワークの地域代理店化", b: "複数教室を展開し、エリア内の需要を一手に引き受けるポジションへ。" },
              { t: "M&Aで既存生徒ごと獲得", b: "引退を控える個人教室を引き継ぎ、開校初月から収益化。" },
            ].map((s) => (
              <div key={s.t} style={{ paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,.15)" }}>
                <div style={{ fontSize: 14, color: "#fff", fontFamily: "var(--rk-font-jp-serif)", marginBottom: 6 }}>{s.t}</div>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.75 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 多世代活用 — 不動産時間効率の最大化 */}
      <Section
        eyebrow="MULTI-GENERATION"
        eyebrowJp="多世代ターゲットによる時間効率の最大化"
        title="空き時間帯にシニア向けクラスを開く。少子化のリスクヘッジ。"
        lead="子どもが通えない「平日の午前・日中」の時間帯を、シニア向けの脳トレそろばんクラスとして活用することで、1つの教室資産の稼働率を大幅に高められます。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "start" }}>
          {/* 時間帯マトリクス */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr 1fr", gap: 2, fontSize: 12 }}>
              {/* ヘッダー */}
              <div />
              {["平日 午前・昼", "平日 放課後", "土日"].map(h => (
                <div key={h} style={{ padding: "8px 4px", textAlign: "center", color: "var(--rk-ink-2)", fontFamily: "var(--rk-font-num)", letterSpacing: "0.05em" }}>{h}</div>
              ))}
              {/* 子ども行 */}
              <div style={{ padding: "10px 8px", background: "var(--rk-base-2)", display: "flex", alignItems: "center", fontSize: 12, color: "var(--rk-ink-2)", borderRadius: "4px 0 0 0" }}>子ども</div>
              <div style={{ padding: "10px 4px", background: "rgba(200,200,200,.15)", textAlign: "center", color: "var(--rk-ink-3)", fontSize: 12 }}>学校・幼稚園</div>
              <div style={{ padding: "10px 4px", background: "rgba(0,151,178,.12)", textAlign: "center", color: "var(--rk-primary)", fontWeight: 600, fontSize: 12 }}>✓ メイン稼働</div>
              <div style={{ padding: "10px 4px", background: "rgba(0,151,178,.08)", textAlign: "center", color: "var(--rk-primary)", fontSize: 12, borderRadius: "0 4px 0 0" }}>✓ 稼働可</div>
              {/* シニア行 */}
              <div style={{ padding: "10px 8px", background: "var(--rk-base-2)", display: "flex", alignItems: "center", fontSize: 12, color: "var(--rk-ink-2)", borderRadius: "0 0 0 4px" }}>シニア</div>
              <div style={{ padding: "10px 4px", background: "rgba(255,210,31,.2)", textAlign: "center", color: "#806400", fontWeight: 600, fontSize: 12 }}>✓ 追加収益</div>
              <div style={{ padding: "10px 4px", background: "rgba(200,200,200,.15)", textAlign: "center", color: "var(--rk-ink-3)", fontSize: 12 }}>仕事・外出</div>
              <div style={{ padding: "10px 4px", background: "rgba(255,210,31,.1)", textAlign: "center", color: "#806400", fontSize: 12, borderRadius: "0 0 4px 0" }}>△ 可</div>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85 }}>
              子どもが来られない「デッドタイム」にシニア層を入れることで、固定費（賃料・光熱費）の追加負担ゼロで新たな売上を生み出せます。
            </p>
          </div>
          {/* シニア需要の背景 */}
          <div className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 11, color: "var(--rk-primary)", letterSpacing: "0.15em", fontFamily: "var(--rk-font-num)" }}>WHY SENIOR DEMAND IS GROWING</div>
            <h3 className="rk-h3" style={{ fontSize: 18 }}>そろばんは、脳トレとして医療機関からも注目されています。</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "var(--rk-ink-2)" }}>
              {[
                "指先を細かく動かす反復運動は前頭前野を活性化し、認知機能の維持・改善に寄与するとされています。",
                "昭和大学等の研究でも、珠算式トレーニングが認知機能テストのスコア向上に寄与したと報告されています。",
                "「昭和世代の習い事」というポジションが親しみやすさにつながり、シニア層の入会ハードルが低い。",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--rk-accent)", fontFamily: "var(--rk-font-num)", flexShrink: 0 }}>—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="rk-disclaimer">※ 医療効果を保証するものではありません。研究事例として参照。</p>
          </div>
        </div>
      </Section>

      {/* 統合運営モデル */}
      <Section
        variant="base-2"
        eyebrow="INTEGRATED MODEL"
        eyebrowJp="統合運営モデル"
        title="既存リソースを活かした、3つの組み合わせ。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { t: "学習塾", b: "既存の小学生クラスにそろばんをアドオン。算数の理解度向上にも寄与。クロスセル率10〜20%が目安。", chip: "クロスセル" },
            { t: "音楽教室・スポーツ教室", b: "曜日・時間帯の空きを活用。同じ保護者層への横展開がしやすい。", chip: "空き時間活用" },
            { t: "保育・学童", b: "夕方の時間帯で並走。送迎不要が保護者の支持を得やすい。平日昼はシニアクラスとの二毛作も可能。", chip: "並走運営" },
          ].map((m) => (
            <div key={m.t} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span className="rk-chip">{m.chip}</span>
              <h3 className="rk-h3" style={{ fontSize: 18 }}>{m.t}</h3>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>{m.b}</p>
            </div>
          ))}
        </div>
        <p className="rk-disclaimer" style={{ marginTop: 20 }}>※ クロスセル転換率は業態・告知方法により異なります。個別相談で試算します。</p>
      </Section>

      {/* 開校ステップ */}
      <Section
        eyebrow="STEPS"
        eyebrowJp="法人加盟の流れ"
        title="貴社の状況に合わせて、3〜6ヶ月で開校。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {[
            { n: "01", t: "貴社状況のヒアリング", w: "既存事業／講師リソース／対象エリア" },
            { n: "02", t: "事業性試算", w: "貴社固有の収支モデル作成" },
            { n: "03", t: "契約・講師研修", w: "既存講師の研修のみで開校可" },
            { n: "04", t: "既存顧客への告知", w: "貴社チャネルを優先活用" },
            { n: "05", t: "開校・運用", w: "本部による月次サポート" },
          ].map((s) => (
            <div key={s.n} className="rk-card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="rk-num" style={{ fontSize: 12, color: "var(--rk-primary)", letterSpacing: "0.1em" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 15 }}>{s.t}</div>
              <div style={{ fontSize: 11, color: "var(--rk-ink-2)" }}>{s.w}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 法人事例 */}
      <Section
        variant="base-2"
        eyebrow="CORPORATE CASES"
        eyebrowJp="法人事例"
        title="現在、ご相談いただいている法人様あり。"
        lead="法人加盟の事例は、現在準備中です。許諾を得た後、実名で順次掲載します。事例の数を盛らず、状況をそのまま開示する方針です。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { area: "首都圏 / 学習塾", status: "ご相談中" },
            { area: "関西 / 音楽教室", status: "ご相談中" },
            { area: "中部 / 保育事業者", status: "事前情報交換段階" },
          ].map((c, i) => (
            <div key={i} className="rk-card" style={{ display: "flex", flexDirection: "column", gap: 16, background: "var(--rk-base-2)", border: "1px dashed var(--rk-rule-strong)" }}>
              <span className="rk-chip outline">準備中</span>
              <div>
                <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16 }}>{c.area}</div>
                <div style={{ fontSize: 12, color: "var(--rk-ink-2)", marginTop: 6 }}>{c.status}</div>
              </div>
              <ImgPlaceholder w="100%" h={120} label="公開可となった時点で順次掲載" />
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        eyebrowJp="法人加盟のよくある質問"
        title="ご担当者様からよくいただく質問。"
      >
        <div style={{ maxWidth: 880 }}>
          {[
            { q: "既存講師に新たな資格は必要ですか？", a: "本部の研修受講のみで、特別な資格は不要です。教育系の既存講師であれば、より短期間で習得いただけます。" },
            { q: "既存生徒へのクロスセルは、どのくらいの転換率が見込めますか？", a: "業態と告知方法により異なります。学習塾の場合、小学生在籍者の10〜20%が目安とされます。貴社固有の数字は、個別相談で試算します。" },
            { q: "複数教室を同時に立ち上げることは可能ですか？", a: "可能です。3教室以上の同時展開には、本部から専任サポートを配置します。" },
            { q: "ブランド管理はどのように行いますか？", a: "「楽珠そろばん教室」のブランドガイドラインに沿って運営いただきます。貴社のブランドとの併記方針は、契約時にご相談いただけます。" },
            { q: "平日昼間のシニア向けクラスは、別途加盟契約が必要ですか？", a: "いいえ。FC加盟契約の範囲内で、子ども向け・シニア向けを問わずそろばん教室を運営できます。時間帯・対象年齢の設定は自由です。" },
          ].map((it, i) => (
            <details key={i} style={{ padding: "20px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", listStyle: "none", fontSize: 15, fontFamily: "var(--rk-font-jp-serif)" }}>
                <span><span style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)", marginRight: 12 }}>Q.</span>{it.q}</span>
                <span className="faq-toggle" style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)" }}>＋</span>
              </summary>
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: 14, color: "var(--rk-ink-2)", lineHeight: 1.9, paddingLeft: 28 }}>{it.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section style={{ padding: "100px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="rk-h2" style={{ color: "#fff" }}>貴社のご状況に合わせた資料をお作りします。</h2>
          <p className="rk-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            既存事業の概要・対象エリア・想定規模をお伺いし、個別の事業性試算を含めた資料をご提案します。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a className="rk-btn primary" href="index.html#contact">法人向け資料を請求する</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { PersonaTeacherPage, PersonaOwnerPage, PersonaCorpPage });
