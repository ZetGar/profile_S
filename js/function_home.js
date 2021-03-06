$(function () {
  // header영역
  $(window).on("scroll", function () {
    $("header").toggleClass("sticky", window.scrollY > 0);
  });

  $(".logo>a").on("click", function (evt) {
    evt.preventDefault();

    $("html,body").stop().animate({
      scrollTop: 0,
    });
  });

  $(".total").on("click", function () {
    $(this).toggleClass("on");

    if ($(".total").hasClass("on")) {
      $("nav").css({
        right: "0",
      });
    } else {
      $("nav").css({
        right: "-500px",
      });
    }
  });

  // main 영역
  document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    let bubbles = document.createElement("span");
    let x = e.offsetX;
    let y = e.offsetY;

    bubbles.style.left = x + "px";
    bubbles.style.top = y + "px";

    let size = Math.random() * 30;
    bubbles.style.width = size + "px";
    bubbles.style.height = size + "px";

    body.appendChild(bubbles);

    setTimeout(function () {
      bubbles.remove();
    }, 3000);
  });

  const $pagination = $(".pf_pagination>li");
  const $slides = $(".pf_slides");

  let nowIdx = 0;
  let intervalKey;

  const moveFn = function () {
    $pagination.eq(nowIdx).addClass("on").siblings().removeClass("on");
    $slides.stop().animate({ left: -158 * nowIdx });
  };

  $(window).on("load", function () {
    nowIdx = $pagination.index($(this));

    intervalKey = setInterval(() => {
      if (nowIdx < 3) {
        nowIdx++;
      } else {
        nowIdx = 0;
      }

      moveFn();
    }, 3000);
  });

  // popup_contact
  $("#popup").toggleClass("on");

  $(".gnb>li")
    .eq(3)
    .on("click", function () {
      if ($("#popup").hasClass("on")) {
        $("#popup").show();
        $(".gnb>li").eq(3).addClass("on").siblings().removeClass("on");
      }
    });

  $(".close").on("click", function () {
    $("#popup").hide();
    $(".gnb>li").eq(0).addClass("on").siblings().removeClass("on");
  });

  $("#popup").on("click", function (e) {
    if (e.target == e.currentTarget) {
      $("#popup").hide();
      $(".gnb>li").eq(0).addClass("on").siblings().removeClass("on");
    }
  });
});
