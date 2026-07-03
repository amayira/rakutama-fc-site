// Main app — composes design canvas + tweaks

const { useState: useState_app, useEffect: useEffect_app } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "cool",
  "font": "font-serif-sans",
  "tone": "balanced"
}/*EDITMODE-END*/;

const THEME_OPTIONS = [
  { value: "cool", label: "クール（指定色／推奨）" },
  { value: "warm", label: "ウォーム（橙系・候補）" },
  { value: "mono", label: "モノクロ（参考）" },
];
const FONT_OPTIONS = [
  { value: "font-serif-sans", label: "Noto Serif JP × Noto Sans JP（推奨）" },
  { value: "font-maru", label: "Zen Maru Gothic × Noto Sans JP" },
  { value: "font-sans-only", label: "Noto Sans JP 統一（モダン）" },
];
const TONE_OPTIONS = [
  { value: "emotional", label: "情緒寄り「子どもと、もう一度。」" },
  { value: "balanced", label: "バランス（情緒＋論理）" },
  { value: "logical", label: "論理寄り「加盟金10万円から」" },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Wrap every artboard in a theme/font div so Tweaks live-update
  const Themed = ({ children, style }) => (
    <div className={`${t.theme === "warm" ? "theme-warm" : t.theme === "mono" ? "theme-mono" : "theme-cool"} ${t.font}`} style={{ width: "100%", height: "100%", ...style }}>
      {children}
    </div>
  );

  // Compute heights — these are scroll-page heights so they fit full content
  const heroH = 900;
  const topH = 11100;
  const personaTeacherH = 4400;
  const personaOwnerH = 4200;
  const personaCorpH = 4000;
  const W = 1280;

  return (
    <>
      <DesignCanvas>
        <DCSection
          id="overview"
          title="楽珠そろばん教室 ／ FC加盟店募集サイト ワイヤーフレーム"
          subtitle="3ペルソナ分岐 ／ 紹介者様限定 ／ 女性主導の教育FC ／ v1.0 wireframe"
        >
          <DCArtboard id="brief" label="00 · 設計メモ（このサイトの設計判断）" width={520} height={heroH}>
            <BriefCard />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="hero-variants"
          title="ヒーロー3案"
          subtitle="主訴求ペルソナ①向けキービジュアル × メッセージのバリエーション。共通：紹介者様限定／#0097B2＋白＋#FFD21F"
        >
          <DCArtboard id="hero-a" label="A · 保守案 — 大手FC型／写真主体・左右分割" width={W} height={heroH}>
            <Themed><HeroA tone={t.tone} /></Themed>
          </DCArtboard>
          <DCArtboard id="hero-b" label="B · 標準案 — 中央寄せ＋数字スタッツ帯" width={W} height={heroH}>
            <Themed><HeroB tone={t.tone} /></Themed>
          </DCArtboard>
          <DCArtboard id="hero-c" label="C · チャレンジ案 — 非対称グリッド・大胆タイポ＋珠モチーフ" width={W} height={heroH}>
            <Themed><HeroC tone={t.tone} /></Themed>
          </DCArtboard>
        </DCSection>

        <DCSection
          id="top-full"
          title="TOPページ ／ 全体ワイヤーフレーム"
          subtitle="標準案ベースで組んだフル構成。情報設計の検証用 — 縦に長いのでスクロールしてご確認ください"
        >
          <DCArtboard id="top" label="TOP（franchise.rakutama-soroban.com）" width={W} height={topH}>
            <Themed><TopPage tone={t.tone} /></Themed>
          </DCArtboard>
        </DCSection>

        <DCSection
          id="personas"
          title="ペルソナ別ページ"
          subtitle="① 先生として ／ ② 経営者として ／ ③ 法人として ／ 各ページの主訴求と情報構成を検証"
        >
          <DCArtboard id="p1" label="① 先生として — 主婦・元教員層（主訴求）" width={W} height={personaTeacherH}>
            <Themed><PersonaTeacherPage tone={t.tone} /></Themed>
          </DCArtboard>
          <DCArtboard id="p2" label="② 経営者として — フリーランス・副業層" width={W} height={personaOwnerH}>
            <Themed><PersonaOwnerPage /></Themed>
          </DCArtboard>
          <DCArtboard id="p3" label="③ 法人として — 教育系企業の新規事業（準備中含む）" width={W} height={personaCorpH}>
            <Themed><PersonaCorpPage /></Themed>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="ブランドカラー">
          <TweakSelect
            label="テーマ"
            value={t.theme}
            onChange={(v) => setTweak("theme", v)}
            options={THEME_OPTIONS}
          />
        </TweakSection>
        <TweakSection label="日本語フォント">
          <TweakSelect
            label="書体"
            value={t.font}
            onChange={(v) => setTweak("font", v)}
            options={FONT_OPTIONS}
          />
        </TweakSection>
        <TweakSection label="ヒーローのコピー・トーン">
          <TweakSelect
            label="トーン"
            value={t.tone}
            onChange={(v) => setTweak("tone", v)}
            options={TONE_OPTIONS}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function BriefCard() {
  return (
    <div style={{ padding: "40px 32px", height: "100%", overflow: "auto", background: "#fff", fontFamily: "var(--rk-font-jp-sans)", color: "#333", fontSize: 13, lineHeight: 1.85 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        <span className="wf-eyebrow">DESIGN BRIEF</span>
        <h2 style={{ fontFamily: "var(--rk-font-jp-serif)", fontSize: 22, margin: 0, lineHeight: 1.5 }}>このサイトの設計判断</h2>
      </div>
      <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>01 / 戦略前提</dt>
          <dd style={{ margin: 0 }}>1サイト・3ペルソナ分岐構造。サブドメイン（franchise.rakutama-soroban.com）。①主婦・元教員層を主訴求、②③並列カバー。</dd>
        </div>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>02 / 世界観</dt>
          <dd style={{ margin: 0 }}>女性主導のFC。事例の主役はすべて女性。受講者サイトとは「ブランド姉妹」関係（同ブランド・別人格）。</dd>
        </div>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>03 / トーン</dt>
          <dd style={{ margin: 0 }}>誠実 85% ／ 端的 70% ／ 論理 60%（①注力のため情緒寄りに微調整）。販促POP・情報商材調を避ける。</dd>
        </div>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>04 / 色運用</dt>
          <dd style={{ margin: 0 }}>白背景＋ダークグレー文字を基本。<br/>#0097B2 = 見出し・サブCTA・セクション帯。<br/>#FFD21F = 主CTA・強調数字のみ（節度）。</dd>
        </div>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>05 / 比較表方針</dt>
          <dd style={{ margin: 0 }}>大手FCとの比較は「明確に対比して楽珠の差を強調」。ただし数字に根拠 — 公開情報ベースを明示し、煽らない。</dd>
        </div>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>06 / 透明性</dt>
          <dd style={{ margin: 0 }}>事例の数を盛らない。①は直営講師の声、②は藤沢事例（顔出し許諾済）、③は「準備中」を正直に開示。</dd>
        </div>
        <div>
          <dt style={{ color: "#0097b2", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>07 / 次のステップ</dt>
          <dd style={{ margin: 0 }}>① ヒーロー3案からの選定 → ② 写真ディレクション確定 → ③ コピーライティング本実装 → ④ 中忠実モック → ⑤ ハイファイ。</dd>
        </div>
      </dl>
      <div style={{ marginTop: 28, padding: 16, background: "#f8f9fa", borderRadius: 4, fontSize: 11, color: "#666", borderLeft: "3px solid #0097b2" }}>
        <strong style={{ color: "#333" }}>Tweaksパネル</strong>で、色（クール／ウォーム／モノクロ）、フォント、ヒーローのコピートーンを切替できます。比較しながらお選びください。
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
