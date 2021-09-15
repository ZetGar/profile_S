$(function(){
  // header 영역 부분
  $(window).on('scroll', function(){
    const $header = $('header');
    $('header').toggleClass('sticky', window.scrollY > 0);
  });

  const arrTopVal = [];

  for(let i=0;i<3;i++){
    arrTopVal[i] = $('section').eq(i).offset().top;
  }

  const moveFn = function(idx){
    $('html,body').stop().animate({scrollTop:arrTopVal[idx]-80})
  }


  const $lnb = $('.lnb>li');
  $lnb.on('click', function(evt){
    evt.preventDefault();

    const nowIdx = $lnb.index(evt.currentTarget);
    moveFn(nowIdx);
  });

    // $lnb.eq(nowIdx).addClass('on').siblings().removeClass('on');
    $(window).on('scroll', function(){
      const scrollTop = $(window).scrollTop();
      console.log(scrollTop);

    
    for(let i=0;i<3;i++){

      if(scrollTop>=arrTopVal[i]-400){
        $lnb.eq(i).addClass('on').siblings().removeClass('on');
      } else if(scrollTop<arrTopVal[0]){
        $lnb.eq(0).addClass('on');
      }
    }
  });

  $('.logo>a').on('click',function(evt){
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop:0
    });
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

  

  $(window).on('scroll', function(){
    const scrollpos = $(window).scrollTop();
    $('.swot').css({
     'max-height' : + (scrollpos) + 'px'
    });
  });


  // interview
  
  const $slideContainer = $('.inter_card');
  const $card= $slideContainer.children('li');
  const $more = $('.more');

  let sldIdx=2;
  let aniChk = false;
  
  $('.next').on('click', (evt)=>{
    evt.preventDefault();
    
    if(aniChk === false){
      aniChk = true;

      if(sldIdx<5){
        sldIdx++;
      } else{
        sldIdx = 0;
      }
      
      $card.removeClass('on').eq(sldIdx).addClass('on');

      $slideContainer.stop().animate({left: -600},function(){
      $('.inter_card>li').first().appendTo($slideContainer);
      $slideContainer.css({left : -300});

      aniChk = false;
    });    
    }
  });
  
  $('.prev').on('click', (evt)=>{
    evt.preventDefault();
    
    if(aniChk === false){
      aniChk = true;

      if(sldIdx>0){
        sldIdx--;
      } else{
        sldIdx = 5;
      }
      
      $card.eq(sldIdx).addClass('on').siblings().removeClass('on');

      $slideContainer.stop().animate({left: 0},function(){
        $('.inter_card>li').last().prependTo($slideContainer);
        $slideContainer.css({left : -300});
  
        aniChk = false;
      });   
    }
  });

  // contact
  $('.gnb>.pop_con').on('click', function(evt){
    evt.preventDefault();


    $('.total').removeClass('on');
    $('nav').on('click', function(){
      if($(window).width()>760){
        $('.nav').css({
          right: '-500px'
        });
      }
    });


    // popup_contact
    $('#popup').toggleClass('on');

    if($('#popup').hasClass('on')){
      $('#popup').show();
      $('.gnb>li').eq(3).addClass('on').siblings().removeClass('on');
    }

    $('.close').on('click',function(){
      $('#popup').hide();
      $('.gnb>li').eq(2).addClass('on').siblings().removeClass('on');
    });

    $('#popup').on('click',function(e){
      if(e.target == e.currentTarget){
        $('#popup').hide();
        $('.gnb>li').eq(2).addClass('on').siblings().removeClass('on');
      }
    });
    
  });

});