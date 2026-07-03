// Hero copy variants
function HeroCopy({ tone = "balanced" }) {
  if (tone === "logical") {
    return (
      <>
        <h1 className="rk-h1">
          そろばん教育の<br />
          フランチャイズ、<br />
          <span className="em">加盟金 10万円</span>から。
        </h1>
        <p className="rk-lead" style={{ maxWidth: 480 }}>
          固定ロイヤリティ月 2万円。生徒14名で単月黒字化。<br />
          授業外作業をほぼゼロにした、新しい教室運営モデルです。
        </p>
      </>
    );
  }
  if (tone === "emotional") {
    return (
      <>
        <h1 className="rk-h1">
          子どもと、<br />
          もう一度。
        </h1>
        <p className="rk-lead" style={{ maxWidth: 480 }}>
          そろばんの先生という、新しい人生の選択肢。<br />
          ブランクがあっても、週1回からでも、はじめられます。
        </p>
      </>
    );
  }
  return (
    <>
      <h1 className="rk-h1">
        子どもと、もう一度。<br />
        そろばんの先生という、<br />
        <span className="em">新しい人生の選択肢。</span>
      </h1>
      <p className="rk-lead" style={{ maxWidth: 480 }}>
        週1回から、自宅・レンタルスペースで。<br />
        加盟金10万円・固定ロイヤリティ月2万円ではじめる、女性主導の教育FC。
      </p>
    </>
  );
}

Object.assign(window, { HeroCopy });
