---
version: alpha
name: Rakutama-FC-kumon-structure
description: 公文式(kumon.ne.jp/inst)の教室検索サイトを構造・形状・タイポの手本にした、楽珠そろばん教室FC募集サイトのデザインシステム。色は楽珠ブランド(青×黄)を維持し、公文式から「大きめ角丸＋円形アイコン」「ボタンの下方向ハード影＋押し込み」「カードの色味付きソフト影（ホバーで拡大）」「和文Bold＋欧文ラテン数字の使い分け」という信頼感と親しみのある構造だけを移植する。Appleの引き算・楽珠旧デザインの細い罫線編集感とは違い、公文は「白ベース×大きな角丸×柔らかい影の重なり」で教育機関らしい清潔な安心感を作る。
source: https://www.kumon.ne.jp/inst/ （2026-07-21 取得・common/css/main.css, css/index.css を解析）

colors:
  # 楽珠ブランドカラーは変更しない（既存 css/style.css の踏襲）
  b1: "#004a58"
  b2: "#0097b2"
  b3: "#3fb6cd"
  b4: "#cbe9ef"
  bpale: "#f1fafc"
  bline: "#c2e2ea"
  y1: "#f3b427"
  y2: "#d69e22"
  yink: "#7a5c00"
  ypale: "#fff8e1"
  yline: "#f0dd9c"
  ink: "#0d1b1f"
  body: "#2f3f44"
  sub: "#5c6c72"
  muted: "#8b9a9f"
  border: "#dde8eb"
  white: "#ffffff"
  red: "#c0392b"
  # 公文式から借りる「カードの影の色味」の考え方（色そのものではなく手法）
  shadow-tint-source: "rgba(56,129,133,.15) → 楽珠では rgba(0,74,88,.12) に置換"

typography:
  hero-h1:
    fontFamily: "Noto Sans JP"
    fontWeight: 900
    fontSize: "clamp(26px, 4.6vw, 46px)"
    lineHeight: 1.4
  section-h2:
    fontFamily: "Noto Sans JP"
    fontWeight: 900
    fontSize: "clamp(22px, 3.2vw, 34px)"
    lineHeight: 1.45
  card-title:
    fontFamily: "Noto Sans JP"
    fontWeight: 800
    fontSize: "16-19px"
    lineHeight: 1.55
  number:
    fontFamily: "Manrope, Inter"
    fontWeight: 800
    note: "公文式の Jost と同じ役割＝ラテン数字だけ欧文フォントに切替える。和文と混植しない"
  body:
    fontFamily: "Noto Sans JP"
    fontWeight: 400
    fontSize: 15px
    lineHeight: 1.85

rounded:
  card: 16px
  card-lg: 20px
  image: 16px
  image-cut-corner: "16px 16px 16px 0"
  pill: 100vw
  circle: 50%
  note: "公文式は 1rem(16px) 基準の角丸＋一部カードは4隅のうち1隅だけ直角を残す「角の切れ」が特徴。楽珠の旧トークン(3-4px)から16pxへ引き上げる"

shadow:
  card-soft: "0 6px 32px rgba(0, 74, 88, .12)"
  card-soft-hover: "0 10px 48px rgba(0, 74, 88, .18)"
  btn-pop-primary: "0 3px 0 0 #b8930a"
  btn-pop-primary-press: "0 1px 0 0 #b8930a"
  btn-pop-outline: "0 3px 0 0 #7fb8c7"
  note: "公文式の box-shadow: 0 .2〜.3rem 0 0 <濃色> という『ぼけない下方向ハード影』をボタンに、box-shadow: 0px .3rem 3〜6rem rgba(...,.15〜.2) という『大きくぼけた色味付き影』をカードに使い分けている。楽珠でも同じ二層構成にする"

components:
  btn-primary-pop:
    backgroundColor: "{colors.y1}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    shadow: "{shadow.btn-pop-primary}"
    press: "translateY(3px) + shadow → {shadow.btn-pop-primary-press}"
  btn-outline-pop:
    backgroundColor: "{colors.white}"
    textColor: "{colors.b2}"
    border: "1px solid {colors.b2}"
    rounded: "{rounded.pill}"
    shadow: "{shadow.btn-pop-outline}"
  icon-chip:
    shape: circle
    size: "44-56px"
    backgroundColor: "{colors.b2} または {colors.y1}"
    note: "公文式の btn01__ico / nav-quick と同じ、ボタン左端やクイックナビに置く円形アイコン"
  feature-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    shadow: "{shadow.card-soft}"
    hoverShadow: "{shadow.card-soft-hover}"
    hoverTransform: "translateY(-4px)"
    image: "{rounded.image-cut-corner} で上部を切り取り、写真とテキストの境目を作る"
  quick-nav-link:
    shape: "circle icon + ラベル、または pill バッジ"
    note: "公文式 nav-quick（電話・資料請求などを色分けした円形クイックリンク）。楽珠では『体験予約・資料請求・LINE相談』に対応"
---

## Overview

公文式(kumon.ne.jp/inst)は「白い余白の中に、大きめの角丸カードと柔らかい色味付きの影を積む」ことで、学習教室らしい清潔さと安心感を作っている。ボタンだけは例外的に**ぼけない下方向のハード影**（`0 .2〜.3rem 0 0 濃色`）を持ち、押すと沈む——ここだけ物理的な手触りを残して「押せる」ことを明示する。全体は Apple の引き算とも、楽珠旧デザイン（3-4px角丸・細罫線・エディトリアル）とも違う第三の方向性：**大きな角丸＋二層の影（ハード影はボタンだけ／ソフトな色味影はカード）＋円形アイコン**という「教育機関の親しみやすさ」の作り方。

このデザインシステムでは、**色は楽珠ブランド（青×黄）をそのまま使い、公文式から構造・形・影・タイポの手法だけを移植する**。ブランドの一貫性は保ちつつ、旧デザインの「細い罫線・平たいカード」を「大きな角丸・厚みのあるカード・押せるボタン」に置き換え、募集サイトとしての信頼感を底上げする。

**キャラクターを一言で:** 公文式＝清潔な学び舎。楽珠旧デザイン＝硬質な資料LP。この移植後の楽珠＝親しみやすい学び舎（色は楽珠のまま）。

**Key Characteristics:**
- カードの角丸を 3-4px → **16px** に引き上げ、白ベース×大きな余白の上に「厚みのあるカード」として置く。
- カードの影は**色味付きの大きなソフト影**（`rgba(0,74,88,.12)`、ホバーで`.18`＋広がる）。灰色影は使わない。
- ボタンだけは**下方向のハード影**（`0 3px 0 0 濃色`、ぼけない）を持ち、hover/active で `translateY` して押し込む。
- 数字だけラテン数字用フォント（`--rk-font-num`＝Manrope/Inter）で抜きを作り、和文と混植しない——公文式の Jost と同じ役割。
- 円形アイコン（`icon-chip`）をボタン・クイックナビ・実績バッジに使い、写真だけでなくUIの丸みも増やす。
- 見出しは Noto Sans JP の Bold〜Black のまま維持（公文式も同じ書体・太さの使い方）。

## Colors

色トークンは変更しない（`css/style.css` の `--b1〜--b4, --bpale, --bline, --y1, --y2, --yink` 等をそのまま使う）。公文式から取り込むのは色そのものではなく「カードの影に色味を乗せる」という**手法**——公文式は影に自社の青緑寄りグレー(`rgba(56,129,133,.15)`)を薄く乗せている。楽珠では同じ手法を楽珠ブルー(`--b1` #004a58)で行い、`rgba(0,74,88,.12)`をカードの影色として使う。

## Typography

構成は変更しない（Noto Sans JP＝和文、`--rk-font-num`＝ラテン数字）。公文式は Jost（欧文数字専用フォント）を Noto Sans JP と混植しており、「数字だけ書体を変える」原則は楽珠の既存トークンと同じ発想なので、そのまま踏襲を強化する：**本文中の数字・料金・件数は必ず `.rk-num` / `--rk-font-num` を通す**。

## Shape

- **角丸スケール引き上げ**：`rounded.card` 16px、`rounded.card-lg` 20px、`rounded.pill` 100vw（ボタン・バッジ）、`rounded.circle` 50%（アイコン・小さい写真）。旧来の 3-4px（`.rk-card`, `.rk-btn`, `.rk-imgframe` 等）は全廃止。
- **写真の角の切れ**：公文式の `.lcl-features-list__image { border-radius: 1rem 1rem 0 0 }` のように、カード内の写真は上だけ（または1隅だけ）角丸にして下のテキストブロックと連続させる。1枚の完全な角丸矩形にしない。

## Elevation & Depth

| レベル | 表現 | 用途 |
|---|---|---|
| フラット | 影なし | セクション背景・罫線区切り |
| **カードソフト影** | `{shadow.card-soft}` | feature-card・persona・flow step・faq。ホバーで `{shadow.card-soft-hover}` ＋ `translateY(-4px)` |
| **ボタン・ポップ影** | `{shadow.btn-pop-primary}` / `{shadow.btn-pop-outline}` | CTAボタンのみ。ぼけない下方向のハード影 |
| 押下 | `translateY(3px)` ＋ 影を `{shadow.btn-pop-primary-press}` に縮める | ボタンの `:active` |

**影の哲学。** 公文式はボタンにだけハード影（物理的に押せる合図）を残し、それ以外（カード・写真）はすべて色味付きの大きなソフト影で統一している。楽珠旧デザインの「カードもボタンも同じ薄い灰色影」という単調さをここで崩し、**押せる場所＝ハード影、置いてあるだけの場所＝ソフト影**という役割分担を明確にする。

## Components

### ボタン（`.rk-btn`）
- `primary`：黄背景・pill・下ハード影(`0 3px 0 0 #b8930a`)・hover/active で沈む。既存のパルスアニメーション（`rk-pulse`）は公文式の「常に控えめな脈動」ではなく「静的なハード影＋押し込み」に置き換える。
- `outline`：白背景・青枠・pillに統一（角丸ボックスから変更）。

### カード（`.rk-card`, `.rk-persona`, `.rk-flow .step`）
- 角丸 16px、色味付きソフト影、ホバーで浮上。上辺アクセントの3px色帯は維持可（公文式のカード上部カラーバー的表現と相性が良い）。

### アイコンチップ（新規 `.rk-icon-chip`）
- 44-56pxの円形。CTAボタンの左肩や、ヘッダー横のクイックリンク（電話・LINE相談・資料請求）に配置。背景は `--b2` または `--y1`。

### 画像フレーム（`.rk-imgframe`）
- 完全な角丸矩形をやめ、上2隅または対角1隅だけ角丸にする「角の切れ」パターンをオプションクラス `.cut` として追加。

## Do's and Don'ts

### Do
- カードは16px角丸＋色味付きソフト影＋ホバー浮上、で統一する。
- ボタンだけハード影＋押し込みインタラクションを持たせる。
- 数字はラテン数字フォントで抜きを作る。
- 写真は1隅だけ角を切ってテキストと連続させる。

### Don't
- ボタン以外にハード影を使わない（渋滞する）。
- カードの影を灰色のまま残さない（必ず楽珠ブルーの色味を乗せる）。
- 角丸を旧来の3-4pxに戻さない。
- 黄色のCTAを1画面に複数置かない（既存ルールを継続）。

## 実装メモ（このリポジトリ固有）

- 実装は `css/style.css` の該当クラス（`.rk-btn`, `.rk-card`, `.rk-persona`, `.rk-flow .step`, `.rk-faq`, `.rk-imgframe`, `.rk-statgrid`, `.rk-tablewrap`, `.rk-quoteband` 等）を書き換える形で反映。HTML（`index.html`, `owner/`, `teacher/`, `voice/`, `contact/`）はクラス構造を変えていないため追加編集は最小限。
- 色トークン(`:root`)は変更しない。追加するのは影用の新トークン（`--sh-card`, `--sh-card-hover`, `--sh-btn`, `--sh-btn-press` 等）のみ。
- 公文式サイトの生データは `~/dev/.scratch_kumon/`（main.css, index.css, kumon.html）に保存済み。再解析する場合はここを参照。
