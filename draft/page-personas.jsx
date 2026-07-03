// Three persona detail pages — ①先生 / ②経営者 / ③法人

// ===================== ① 先生として =====================
function PersonaTeacherPage({ tone = "emotional" }) {
  return (
    <div className="wf-page" data-screen-label="Persona ① Teacher">
      <Header activePage="teacher" />

      {/* Breadcrumb */}
      <div style={{ padding: "20px 80px", fontSize: 12, color: "var(--rk-ink-2)", borderBottom: "1px solid var(--rk-rule)", display: "flex", gap: 10 }}>
        <a href="#" style={{ color: "inherit" }}>TOP</a>
        <span>／</span>
        <a href="#" style={{ color: "inherit" }}>立場で選ぶ</a>
        <span>／</span>
        <span style={{ color: "var(--rk-ink)" }}>① 先生として</span>
      </div>

      {/* Hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: 540 }}>
        <div style={{ padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
          <span className="wf-chip">① 先生として</span>
          <h1 className="wf-h1">
            子どもと、もう一度、<br />
            机を並べる時間を。
          </h1>
          <p className="wf-lead">
            子育てが一段落して、自分のペースで誰かのために働きたい方へ。<br />
            楽珠は、そろばんの経験を活かしたまま、ブランクから戻れる教室です。
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="wf-btn primary" href="#contact">個別相談を予約する</a>
            <a className="wf-btn secondary" href="#kumon-compare">大手FCとの違いを見る</a>
          </div>
        </div>
        <ImgPlaceholder
          w="100%" h="100%"
          label={["[ 直営講師ポートレート ]", "40〜50代女性講師×子ども ／ 自然光", "穏やかな対話・教材を一緒に確認するシーン"].join("\n")}
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
              <div className="wf-spec"><dt>そろばん経験</dt><dd><strong>3級以上必須</strong>（ブランクは20〜30年でも問題ありません）</dd></div>
              <div className="wf-spec"><dt>年齢</dt><dd>制限なし（実例は40〜60代女性が中心）</dd></div>
              <div className="wf-spec"><dt>必要な資格</dt><dd>特になし。本部研修の修了をもって指導開始</dd></div>
              <div className="wf-spec"><dt>働き方</dt><dd>週1回〜（曜日・時間帯はご相談）</dd></div>
              <div className="wf-spec"><dt>開校場所</dt><dd>ご自宅／レンタルスペース／カフェ・公民館 等</dd></div>
            </dl>
          </div>
          <div className="wf-card" style={{ background: "var(--rk-base-2)", border: 0 }}>
            <h3 className="wf-h3" style={{ fontSize: 18, marginBottom: 16 }}>本部研修の内容</h3>
            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "var(--rk-ink-2)" }}>
              {["1. 現代の指導法（暗算・読み上げ算）", "2. 子どもとの接し方・声かけの実践", "3. 教材・テキストの使い方", "4. 教室運営の基本（出席管理・保護者対応）", "5. 検定・大会の運営"].map((t) => (
                <li key={t} style={{ borderBottom: "1px dashed var(--rk-rule)", paddingBottom: 10 }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 大手FC比較 */}
      <Section
        id="kumon-compare"
        variant="base-2"
        eyebrow="COMPARISON"
        eyebrowJp="大手FCの先生との違い"
        title="同じ「先生になる」でも、楽珠は身軽です。"
        lead="作業量・教材作成・自宅稼働など、教育FCで負担になりがちな部分を、本部側が引き受けています。"
      >
        <div style={{ background: "#fff", padding: 32, borderRadius: 4 }}>
          <table className="wf-cmp">
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
        </div>
        <div className="wf-note" style={{ marginTop: 20 }}>
          ※ 比較は公開情報に基づく。事実ベースで明確に対比 — 煽らない範囲で楽珠の優位点を提示。社名はイニシャル表記。
        </div>
      </Section>

      {/* 直営講師の声 */}
      <Section
        eyebrow="VOICES"
        eyebrowJp="楽珠の先生の声"
        title="直営教室で働く先生に、率直に聞きました。"
        lead="ローンチ時点では、楽珠の直営講師2〜3名の声を「楽珠の先生」として正直に掲載しています。FC加盟者を装うことはしません。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { name: "Aさん / 50代", years: "指導歴 3年", quote: "丸つけがない、というだけで、子育てとの両立が驚くほど楽になりました。" },
            { name: "Bさん / 40代", years: "指導歴 2年", quote: "そろばん歴は25年前で止まっていましたが、研修で自信を取り戻せました。" },
            { name: "Cさん / 60代", years: "指導歴 5年", quote: "週2回の出勤で、子どもの成長に立ち会える喜びがあります。" },
          ].map((v) => (
            <div key={v.name} className="wf-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ImgPlaceholder w="100%" h={200} label={`[ ${v.name} ／ ポートレート ]`} />
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
        <div className="wf-note" style={{ marginTop: 24 }}>
          ※ ローンチ時点。FC加盟教室の事例は開校後、許諾を得て順次掲載。事例の数は盛らない。
        </div>
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
            <div key={i} className="wf-card" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="wf-num" style={{ fontSize: 18, color: "var(--rk-primary)" }}>{d.time}</div>
              <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16 }}>{d.t}</div>
              <p style={{ margin: 0, fontSize: 12, color: "var(--rk-ink-2)", lineHeight: 1.85 }}>{d.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section style={{ padding: "100px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="wf-h2" style={{ color: "#fff" }}>まずは、お話を聞きに来てください。</h2>
          <p className="wf-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            60分のオンライン個別相談で、ご経歴と希望の働き方を一緒に整理します。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a className="wf-btn primary" href="#contact">個別相談を予約する</a>
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
    <div className="wf-page" data-screen-label="Persona ② Owner">
      <Header activePage="owner" />

      <div style={{ padding: "20px 80px", fontSize: 12, color: "var(--rk-ink-2)", borderBottom: "1px solid var(--rk-rule)", display: "flex", gap: 10 }}>
        <a href="#" style={{ color: "inherit" }}>TOP</a>
        <span>／</span>
        <a href="#" style={{ color: "inherit" }}>立場で選ぶ</a>
        <span>／</span>
        <span style={{ color: "var(--rk-ink)" }}>② 経営者として</span>
      </div>

      {/* Hero — number-forward */}
      <section style={{ padding: "80px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="wf-chip">② 経営者として</span>
          <h1 className="wf-h1">
            <span className="wf-num" style={{ fontSize: 72, fontWeight: 600, color: "var(--rk-primary)" }}>14</span>
            <span style={{ fontSize: 28, marginLeft: 4 }}>名</span>で、<br />
            単月黒字化。
          </h1>
          <p className="wf-lead">
            加盟金10万円。月額固定ロイヤリティ2万円。授業外作業はほぼゼロ。<br />
            運営工数は月数時間。本業を持ちながら、教育事業を立ち上げる選択肢として設計されています。
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="wf-btn primary" href="#contact">収支シミュレーションを見る</a>
            <a className="wf-btn secondary" href="#case">藤沢事例を読む</a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { num: "¥100,000", label: "加盟金" },
            { num: "¥20,000／月", label: "固定ロイヤリティ" },
            { num: "¥500,000", label: "最大持ち出し（目安）" },
            { num: "月数時間", label: "運営工数" },
          ].map((k) => (
            <div key={k.label} style={{ padding: 24, background: "var(--rk-base-2)", borderRadius: 4 }}>
              <div className="wf-num" style={{ fontSize: 26, color: "var(--rk-ink)", fontWeight: 600 }}>{k.num}</div>
              <div style={{ fontSize: 12, color: "var(--rk-ink-2)", marginTop: 6, letterSpacing: "0.1em" }}>{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 収支シミュレーション */}
      <Section
        variant="base-2"
        eyebrow="P&L SIMULATION"
        eyebrowJp="収支シミュレーション"
        title="生徒数別、月次収支のリアル。"
        lead="レンタルスペース型・週2回・月謝1万円・月8回授業を前提とした、保守的なシミュレーションです。"
      >
        <div className="wf-card" style={{ overflow: "hidden" }}>
          <table className="wf-cmp">
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
        <div className="wf-note" style={{ marginTop: 20 }}>※ 数字に根拠 — 本部の実績ベース。実際の収支は立地・運営により異なる旨を明示。</div>
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
            label={["[ 経営者ポートレート ／ 実名・顔出し可 ]", "藤沢市・30代女性／保険代理店フリーランス", "2教室準備中／本業との両立"].join("\n")}
            style={{ whiteSpace: "pre-line", textAlign: "center" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <dl style={{ margin: 0 }}>
              <div className="wf-spec"><dt>本業</dt><dd>保険代理店（フリーランス）</dd></div>
              <div className="wf-spec"><dt>開校時期</dt><dd>1教室目：2025年秋／2教室目：2026年春</dd></div>
              <div className="wf-spec"><dt>運営形態</dt><dd>レンタルスペース2拠点 ／ 講師は雇用</dd></div>
              <div className="wf-spec"><dt>本業との両立</dt><dd>運営工数は月3〜5時間 ／ 教室には基本不在</dd></div>
              <div className="wf-spec"><dt>始めたきっかけ</dt><dd>本業の顧客に教育事業を提案できる強みになると判断</dd></div>
            </dl>
            <blockquote style={{ margin: 0, padding: "20px 0", borderTop: "1px solid var(--rk-rule)", borderBottom: "1px solid var(--rk-rule)", fontFamily: "var(--rk-font-jp-serif)", fontSize: 18, lineHeight: 1.8 }}>
              「自分が教室にいなくても回る設計だから、本業の合間で立ち上げられました。」
            </blockquote>
            <a href="#" style={{ color: "var(--rk-primary)", fontSize: 13, textDecoration: "none" }}>インタビュー全文を読む →</a>
          </div>
        </div>
      </Section>

      {/* 運営工数の内訳 */}
      <Section
        variant="base-2"
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
            <div key={w.t} className="wf-card">
              <h3 className="wf-h3" style={{ fontSize: 18 }}>{w.t}</h3>
              <div className="wf-num" style={{ fontSize: 22, color: "var(--rk-primary)", marginTop: 8 }}>{w.h}</div>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, marginTop: 12, marginBottom: 0 }}>{w.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section style={{ padding: "100px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="wf-h2" style={{ color: "#fff" }}>あなたの想定地で、収支を一緒に組みます。</h2>
          <p className="wf-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            候補エリアと運営イメージをお伺いして、より精緻な収支モデルをご提示します。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a className="wf-btn primary" href="#contact">個別相談を予約する</a>
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
    <div className="wf-page" data-screen-label="Persona ③ Corporate">
      <Header activePage="corp" />

      <div style={{ padding: "20px 80px", fontSize: 12, color: "var(--rk-ink-2)", borderBottom: "1px solid var(--rk-rule)", display: "flex", gap: 10 }}>
        <a href="#" style={{ color: "inherit" }}>TOP</a>
        <span>／</span>
        <a href="#" style={{ color: "inherit" }}>立場で選ぶ</a>
        <span>／</span>
        <span style={{ color: "var(--rk-ink)" }}>③ 法人として</span>
      </div>

      <section style={{ padding: "80px 80px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="wf-chip">③ 法人として</span>
          <h1 className="wf-h1">
            既存の教室と、<br />
            楽珠を、<span style={{ color: "var(--rk-primary)" }}>並走</span>させる。
          </h1>
          <p className="wf-lead">
            学習塾・音楽教室・スポーツ教室など、すでに子ども向け事業を運営される法人様へ。<br />
            既存講師の研修のみで開校でき、既存生徒へのクロスセル・空きスペース活用に向きます。
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a className="wf-btn primary" href="#contact">法人向け資料を請求する</a>
            <a className="wf-btn secondary" href="#contact">個別相談を予約する</a>
          </div>
          <div className="wf-note" style={{ marginTop: 4 }}>※ 貴社向け資料は、お問い合わせ後に個別作成しお送りします。</div>
        </div>
        <ImgPlaceholder
          w="100%" h={420}
          label={["[ 法人運営イメージ ]", "既存教室の空き時間・空きスペースでそろばん教室を併設するシーン", "施設写真／オフィスでの会議／講師研修風景 等"].join("\n")}
          style={{ whiteSpace: "pre-line", textAlign: "center" }}
        />
      </section>

      {/* 統合運営モデル */}
      <Section
        variant="base-2"
        eyebrow="INTEGRATED MODEL"
        eyebrowJp="統合運営モデル"
        title="既存リソースを活かした、3つの組み合わせ。"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { t: "学習塾", b: "既存の小学生クラスにそろばんをアドオン。算数の理解度向上にも寄与。", chip: "クロスセル" },
            { t: "音楽教室・スポーツ教室", b: "曜日・時間帯の空きを活用。同じ保護者層への横展開がしやすい。", chip: "空き時間活用" },
            { t: "保育・学童", b: "夕方の時間帯で並走。送迎不要が保護者の支持を得やすい。", chip: "並走運営" },
          ].map((m) => (
            <div key={m.t} className="wf-card" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span className="wf-chip">{m.chip}</span>
              <h3 className="wf-h3" style={{ fontSize: 18 }}>{m.t}</h3>
              <p style={{ fontSize: 13, color: "var(--rk-ink-2)", lineHeight: 1.85, margin: 0 }}>{m.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 開校までのステップ */}
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
            <div key={s.n} className="wf-card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="wf-num" style={{ fontSize: 12, color: "var(--rk-primary)", letterSpacing: "0.1em" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 15 }}>{s.t}</div>
              <div style={{ fontSize: 11, color: "var(--rk-ink-2)" }}>{s.w}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 法人事例 — 「準備中」を正直に */}
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
            <div key={i} className="wf-card" style={{ display: "flex", flexDirection: "column", gap: 16, background: "var(--rk-base-2)", border: "1px dashed var(--rk-rule-strong)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span className="wf-chip outline">準備中</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 16 }}>{c.area}</div>
                <div style={{ fontSize: 12, color: "var(--rk-ink-2)", marginTop: 6 }}>{c.status}</div>
              </div>
              <ImgPlaceholder w="100%" h={120} label="[ 公開可となった時点で順次掲載 ]" />
            </div>
          ))}
        </div>
      </Section>

      {/* よくある質問 — 法人特化 */}
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
          ].map((it, i) => (
            <details key={i} style={{ borderTop: "1px solid var(--rk-rule)", padding: "20px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", listStyle: "none", fontSize: 15, fontFamily: "var(--rk-font-jp-serif)" }}>
                <span><span style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)", marginRight: 12 }}>Q.</span>{it.q}</span>
                <span style={{ color: "var(--rk-primary)", fontFamily: "var(--rk-font-num)" }}>＋</span>
              </summary>
              <p style={{ marginTop: 14, marginBottom: 0, fontSize: 14, color: "var(--rk-ink-2)", lineHeight: 1.9, paddingLeft: 28 }}>{it.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section style={{ padding: "100px 80px", background: "var(--rk-primary)", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="wf-h2" style={{ color: "#fff" }}>貴社のご状況に合わせた資料をお作りします。</h2>
          <p className="wf-lead" style={{ color: "rgba(255,255,255,.85)" }}>
            既存事業の概要・対象エリア・想定規模をお伺いし、個別の事業性試算を含めた資料をご提案します。
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a className="wf-btn primary" href="#contact">法人向け資料を請求する</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { PersonaTeacherPage, PersonaOwnerPage, PersonaCorpPage });
