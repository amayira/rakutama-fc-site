/* 楽珠FC募集サイト 共通JS
   - フォーム送信（FORM_ENDPOINT 設定後に有効化）
   - UTMパラメータの引き継ぎ（広告計測用）
*/

// 送信先エンドポイント（Cloudflare Worker 等）。未設定の間はフォーム送信をブロックする
var FORM_ENDPOINT = "";

// ---- UTM をセッション中保持し、hidden フィールドとサンクスページへ引き継ぐ ----
(function () {
  var params = new URLSearchParams(location.search);
  var utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  var found = {};
  utmKeys.forEach(function (k) {
    var v = params.get(k);
    if (v) found[k] = v;
  });
  if (Object.keys(found).length) {
    try { sessionStorage.setItem("rk_utm", JSON.stringify(found)); } catch (e) {}
  }
})();

function rkGetUtm() {
  try { return JSON.parse(sessionStorage.getItem("rk_utm") || "{}"); } catch (e) { return {}; }
}

// ---- フォーム送信 ----
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form.rk-form[data-lead-form]");
  if (!form) return;

  // hidden に UTM と送信元ページを書き込む
  var utm = rkGetUtm();
  Object.keys(utm).forEach(function (k) {
    var input = form.querySelector('input[name="' + k + '"]');
    if (input) input.value = utm[k];
  });
  var pageInput = form.querySelector('input[name="page"]');
  if (pageInput) pageInput.value = location.pathname;

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var errBox = form.querySelector(".form-error");
    var btn = form.querySelector('button[type="submit"]');

    if (!FORM_ENDPOINT) {
      errBox.textContent = "申し訳ありません、フォームは現在準備中です。お急ぎの場合はお電話（079-269-9010）でお問い合わせください。";
      errBox.classList.add("show");
      return;
    }

    var data = Object.fromEntries(new FormData(form).entries());
    btn.disabled = true;
    btn.textContent = "送信中…";

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        // 属性別にサンクスページへ（Metaピクセルの Lead CV はサンクス側で発火）
        var from = data.persona || "top";
        location.href = "/thanks/?from=" + encodeURIComponent(from);
      })
      .catch(function () {
        errBox.textContent = "送信に失敗しました。お手数ですが時間をおいて再度お試しいただくか、お電話（079-269-9010）でお問い合わせください。";
        errBox.classList.add("show");
        btn.disabled = false;
        btn.textContent = "この内容で送信する";
      });
  });
});
