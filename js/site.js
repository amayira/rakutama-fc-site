/* 楽珠FC募集サイト 共通JS
   - フォーム送信（FORM_ENDPOINT 設定後に有効化）
   - UTMパラメータの引き継ぎ（広告計測用）
   - スクロール連動のフェードイン（.reveal）
*/

// ---- .reveal をビューポート進入時にフェードイン ----
document.addEventListener("DOMContentLoaded", function () {
  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  // 動きを減らす設定・IO非対応環境では即座に表示（コンテンツを隠さない）
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  targets.forEach(function (el) { obs.observe(el); });
});

// 送信先エンドポイント（rakutama-kintone worker → kintone App20 FC説明会リード）
var FORM_ENDPOINT = "https://rakutama-kintone.k-ariyama.workers.dev/api/fc-lead";

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

function rkSiteBase() {
  var script = document.currentScript || document.querySelector('script[src$="/js/site.js"],script[src$="js/site.js"]');
  if (!script) return "";
  var url = new URL(script.getAttribute("src"), location.href);
  return url.pathname.replace(/\/js\/site\.js$/, "").replace(/\/$/, "");
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
        location.href = rkSiteBase() + "/thanks/?from=" + encodeURIComponent(from);
      })
      .catch(function () {
        errBox.textContent = "送信に失敗しました。お手数ですが時間をおいて再度お試しいただくか、お電話（079-269-9010）でお問い合わせください。";
        errBox.classList.add("show");
        btn.disabled = false;
        btn.textContent = "この内容で送信する";
      });
  });
});
