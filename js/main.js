$(function(){
  $('.banner-section_slider').slick({

    dots:true,
    prevArrow:'<button class="banner-section_slider-btn banner-section_slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="banner-section_slider-btn banner-section_slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>'
  });

  $('.tab').on('click', function(e){
    e.preventDefault();
    $($(this).siblings()).removeClass('tab-active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content-active');
    $(this).addClass('tab-active');
    $($(this).attr('href')).addClass('tabs-content-active');
  });

  $('.product-item_favorite').on('click', function(){
    $('.product-item_favorite').toggleClass('product-item_favorite-active');
  })

  /* PRODUCT-SLIDER Gallery */
  $('.product-slider').slick({
    slidesToShow:4,
    slidesToScroll:1,
    prevArrow:'<button class="product-slider_slider-btn product-slider_slider-btnprev"><img src="img/arrow-black-left.svg" alt=""></button>',
    nextArrow:'<button class="product-slider_slider-btn product-slider_slider-btnnext"><img src="img/arrow-black-right.svg" alt=""></button>'
  });
});


