$(function () {
  // header 영역 부분
  const $window = $(window);
  const $header = $("header");

  $(window).on("scroll", function () {
    $header.toggleClass("sticky", window.scrollY > 0);

    if (window.scrollY > 0) {
      $header.addClass("sticky");
    }
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

  // 스킬 슬라이드 업다운
  const $skillSlide = $(".ab_skill dl>dt");

  $skillSlide.on("click", function (evt) {
    evt.preventDefault();

    $(this).toggleClass("on").next().stop().slideToggle();
  });

  $(".info_tit").on("click", function (evt) {
    evt.preventDefault();

    $(this).toggleClass("on").next().stop().slideToggle();
  });

  // 스킬_아이콘
  let nowIdx = 0;

  setInterval(function () {
    // 스킬_컴퓨터
    $(".codding_img > div").eq(nowIdx).fadeOut();

    // 스킬_디자인
    $(".painting_img > div").eq(nowIdx).fadeOut();

    if (nowIdx < 3) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }

    $(".codding_img > div").eq(nowIdx).fadeIn();
    $(".painting_img > div").eq(nowIdx).fadeIn();
  }, 1000);

  // 커리어
  $(".ab_career_container> .ab_button").on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("on").next(".ab_career").stop().slideToggle();
  });

  // top버튼 제일 위로 올리기
  $("btnTop").on("click", function (evt) {
    evt.preventDefault();

    $(".about").stop().animate({
      scrollTop: 0,
    });
  });
});
