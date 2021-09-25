$(function(){

  // header영역
  $(window).on('scroll', function(){
    const $header = $('header');
    $('header').toggleClass('sticky', window.scrollY > 0);
  });

  $('.total').on('click',function(){
    $(this).toggleClass('on');
    
    if($('.total').hasClass('on')){
      $('nav').css({
        right: '-7%'
      });
    } else {
      $('nav').css({
        right: '-500px'
      });
    }
  });


  // main 영역
  document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let bubbles = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    bubbles.style.left = x+'px';
    bubbles.style.top = y+'px';

    let size = Math.random () * 40;
    bubbles.style.width = size+'px';
    bubbles.style.height = size+'px';

    body.appendChild(bubbles);

    setTimeout(function(){
      bubbles.remove();
    },3000);
  });


  // sns영역
  let nowIdx=0;

  setInterval(function(){
    $('.cat >p').eq(nowIdx).children('img').fadeOut();

    if(nowIdx<3){
      nowIdx++;
    } else {
      nowIdx=0;
    }

    $('.cat >p').eq(nowIdx).children('img').fadeIn();

    
  },2000);

  // hello 영역
  setInterval(function(){
    const $container = $('.hello_container');
    const $hello = $container.children('li');

    $hello.stop().animate({top:-390},function(){
      $hello.eq(0).appendTo($container);
      $container.css({top:0});
    });
  }, 1000);

});