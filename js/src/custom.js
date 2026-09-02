
var fade = 200;

$( "#cus-lightbulb" ).click(function() {

});

$( "#cus-map" ).click(function() {
  $(".header").fadeOut(fade);
  $(".main").addClass("clean-margin");
  $("#open-sidebar").fadeIn(fade);
});

$("#open-sidebar").click(function() {
  $(".header").fadeIn(fade);
  $("#open-sidebar").fadeOut(fade);
  $(".main").removeClass("clean-margin");
});

$('[data-toggle="tooltip"]').tipsy({gravity: 'w'});


// 分頁式對照元件（搭配 scripts/tabs.js 與 css/_custom/custom.styl）
// 漸進增強：CSS 預設把所有分頁展開，這裡加上 .js-tabs 之後才啟用切換，
// 因此 JS 若載入失敗或被停用，讀者看到的是完整內容而非空白。
(function () {
  var containers = document.querySelectorAll("[data-tabs]");
  if (!containers.length) return;

  Array.prototype.forEach.call(containers, function (root) {
    var buttons = root.querySelectorAll(".tabs-nav-item");
    var panels  = root.querySelectorAll(".tabs-panel");
    if (buttons.length < 2) return;

    function select(index, focus) {
      Array.prototype.forEach.call(buttons, function (b, i) {
        var on = i === index;
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.setAttribute("tabindex", on ? "0" : "-1");
      });
      Array.prototype.forEach.call(panels, function (p, i) {
        if (i === index) {
          p.classList.add("is-active");
          p.removeAttribute("data-secondary");
        } else {
          p.classList.remove("is-active");
          p.setAttribute("data-secondary", "");
        }
      });
      if (focus) buttons[index].focus();
    }

    Array.prototype.forEach.call(buttons, function (b, i) {
      b.addEventListener("click", function () { select(i, false); });
    });

    root.querySelector(".tabs-nav").addEventListener("keydown", function (e) {
      var cur = Array.prototype.indexOf.call(
        buttons, root.querySelector('.tabs-nav-item[aria-selected="true"]'));
      if (cur < 0) return;
      if (e.key === "ArrowRight") { select((cur + 1) % buttons.length, true); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { select((cur - 1 + buttons.length) % buttons.length, true); e.preventDefault(); }
      else if (e.key === "Home") { select(0, true); e.preventDefault(); }
      else if (e.key === "End") { select(buttons.length - 1, true); e.preventDefault(); }
    });

    // 最後才掛上 .js-tabs：在此之前 CSS 維持全部展開的狀態。
    root.classList.add("js-tabs");
    select(0, false);
  });
})();
