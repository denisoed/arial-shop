"use strict";function initMap(){var e={lat:40.674,lng:-73.945},t=[{elementType:"labels",stylers:[{saturation:-1}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"landscape",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#0E2646"},{visibility:"on"},{lightness:1},{saturation:-1}]}],i=new google.maps.Map(document.getElementById("google-map"),{center:e,scrollwheel:!1,zoom:15,styles:t});new google.maps.Marker({position:e,map:i})}function starRating(e){$(e).rateYo({rating:3.6,starWidth:"20px",normalFill:"#6b6a64",ratedFill:starColor})}function showModal(e,t){$(e).on("click",function(){1==$(t).is(":hidden")?$(t).fadeIn():0==$(t).is(":hidden")&&$(t).fadeOut()})}function setAnimation(e,t){e.each(function(){var e=$(this),i="animated "+e.data("animation-"+t);e.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass(i)})})}!function(){function e(e,t){$(e).on("click",function(){$(".the-modal").slideUp("fast"),1==$(t).is(":hidden")?$(t).slideDown("fast"):0==$(t).is(":hidden")&&$(t).slideUp("fast")})}e(".main-menu-bars",".main-menu__search-and-nav"),e(".main-menu-cart__content",".opt-cart"),e(".main-menu-wishlist",".opt-wishlist"),e(".user-menu__content",".opt-user-menu"),e(".main-menu-v4-cart__content",".opt-cart"),e(".main-menu-v4-wishlist",".opt-wishlist"),e(".payment",".opt-payment"),e(".language",".opt-lang"),e(".category",".opt-category"),e(".product-item-v2-color",".opt-color"),e(".product-item-v2-size",".opt-size"),e(".product-item-v2-type",".opt-type")}(),function(){function e(e){$(".main-menu-navbar__li").children(".main-menu-navbar-dropdown").prev().addClass(e)}e("tringle"),e("tringleMobile"),$(".main-menu-navbar__link").on("click",function(e){var t=e.target;0!==$(t).parent().find("ul.main-menu-navbar-dropdown").length&&e.preventDefault()}),$(window).width()<992&&$(".main-menu-navbar__link").on("click",function(e){var t=e.target;1==$(t).parent().children(".main-menu-navbar-dropdown").is(":hidden")?$(t).parent().children(".main-menu-navbar-dropdown").slideDown("fast"):0==$(t).parent().children(".main-menu-navbar-dropdown").is(":hidden")&&$(t).parent().children(".main-menu-navbar-dropdown").slideUp("fast")})}(),function(){$(".backTop").css("background-color");$(".main-menu-v4-navbar__li").children(".main-menu-v4-navbar-dropdown").parent().addClass("afterShow"),$(".main-menu-v4-navbar__link").on("click",function(e){var t=e.target;0!==$(t).parent().find("ul.main-menu-v4-navbar-dropdown").length&&e.preventDefault()}),$(".main-menu-v4-navbar__link").on("click",function(e){var t=e.target;$(".main-menu-v4-navbar-dropdown").hide("fast"),$(".main-menu-v4-navbar__li").removeClass("bgForActive"),1==$(t).parent().children(".main-menu-v4-navbar-dropdown").is(":hidden")?($(t).parent().children(".main-menu-v4-navbar-dropdown").css("display","flex"),$(t).parent().addClass("bgForActive")):0==$(t).parent().children(".main-menu-v4-navbar-dropdown").is(":hidden")&&($(t).parent().removeClass("bgForActive"),$(t).parent().children(".main-menu-v4-navbar-dropdown").css("display","none"))})}(),$(window).width()>992&&$(".fixed-menu").sticky({zIndex:10}),function(){!function(e,t){$(e).on("click",function(){$(t).hasClass("hideBlock")?$(t).removeClass("hideBlock"):$(t).addClass("hideBlock")})}(".show-right-block",".right-block")}(),function(){!function(e,t,i){$(e).on("click",function(){$(i).removeClass("hide-Main-menu-v4")}),$(t).on("click",function(){$(i).addClass("hide-Main-menu-v4")})}(".open-main-menu-v4",".close-main-menu",".main-menu-v4")}(),$(".search-modal").hide("fast");var accentColorMap=$(".subscribe__content").css("background-color"),starColor=$(".backTop").css("background-color");if(starRating(".product-item__rateYo"),starRating(".view-detail__rateYo"),starRating(".product-item2__rateYo"),$("#backTop").length){var scrollTrigger=100,backToTop=function(){$(window).scrollTop()>scrollTrigger?$("#backTop").addClass("show"):$("#backTop").removeClass("show")};backToTop(),$(window).on("scroll",function(){backToTop()}),$("#backTop").on("click",function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},700)})}var filterList={init:function(e,t){$(e).mixItUp({selectors:{target:t,filter:".products-filter__btn"},load:{filter:".mix"}})}};filterList.init(".products-item",".product-item"),$(".view-detail").hide(),showModal(".open-modal-view-detail",".view-detail"),showModal(".view-detail__btn-close",".view-detail"),showModal(".main-menu-search-btn",".search-modal"),showModal(".main-menu-v4-search-btn",".search-modal"),showModal(".search-modal__btn-close",".search-modal"),setTimeout(function(){$(".preloader").fadeOut("slow",function(){})},1e3);var clock=$(".deal__clock").FlipClock({clockFace:"dailyCounter",autoStart:!1,collbacks:{stop:function(){$(".deal__clock-message").html("Stop")}}}),finish="November 01 2017 00:00:00",first=new Date(finish),last=Date.now(),remaning=(first-last)/1e3;clock.setTime(remaning),clock.setCountdown(!0),clock.start(),$(".checkout-accordeon dd").hide().prev().click(function(){$(this).parents(".checkout-accordeon").find("dd").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")});var aboutSliderOwl=$(".about-slider-carousel").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:1e3,margin:15,nav:!1,smartSpeed:1200,responsive:{0:{items:1},600:{items:2},1e3:{items:4}}});$(".about-slider_nav-left").click(function(){aboutSliderOwl.trigger("prev.owl.carousel")}),$(".about-slider_nav-right").click(function(){aboutSliderOwl.trigger("next.owl.carousel")}),$(".partners-carousel").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:1e3,margin:15,nav:!1,smartSpeed:1200,responsive:{0:{items:2},600:{items:3},1e3:{items:4}}}),(filterList={init:function(){$(".blog-list-item").mixItUp({selectors:{target:".blogItem",filter:".blog-list-filter__btn"},load:{filter:".mix"}})}}).init();var recentPostOwl=$(".recent-post__carousel").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:1e3,margin:30,nav:!1,smartSpeed:1200,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}});$(".recent-post_nav-left").click(function(){recentPostOwl.trigger("prev.owl.carousel")}),$(".recent-post_nav-right").click(function(){recentPostOwl.trigger("next.owl.carousel")}),jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter(".product-detail-quantity input"),jQuery(".product-detail-quantity").each(function(){var e=jQuery(this),t=e.find('input[type="number"]'),i=e.find(".quantity-up"),n=e.find(".quantity-down"),a=t.attr("min"),o=t.attr("max");i.click(function(){var i=parseFloat(t.val());if(i>=o)n=i;else var n=i+1;e.find("input").val(n),e.find("input").trigger("change")}),n.click(function(){var i=parseFloat(t.val());if(i<=a)n=i;else var n=i-1;e.find("input").val(n),e.find("input").trigger("change")})}),function(){for(var e=$(".product-features-content"),t=1;t<e.length;t++)$(e[t]).addClass("disNone");$(".product-features-tabs").on("click",function(t){var i=t.target,n=$(".product-features-tabs__tab");if($(i).hasClass("product-features-tabs__tab")){for(var a=0;a<e.length;a++)$(e[a]).addClass("disNone"),$(e[a]).removeClass("disBlock");for(var o=0;o<n.length;o++)$(n[o]).removeClass("product-features-active");$(i).addClass("product-features-active"),$("."+$(i).attr("data-tab")).addClass("disBlock")}})}();var productRelatedOwl=$(".product-related-carousel").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:1e3,margin:15,nav:!1,smartSpeed:1200,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}});$(".product-related__nav-left").click(function(){productRelatedOwl.trigger("prev.owl.carousel")}),$(".product-related__nav-right").click(function(){productRelatedOwl.trigger("next.owl.carousel")}),$(function(){$("#slider-price").slider({range:!0,min:0,max:1e3,values:[150,500],slide:function(e,t){$("#amount").val("$"+t.values[0]+" - $"+t.values[1])}}),$("#amount").val("$"+$("#slider-price").slider("values",0)+" - $"+$("#slider-price").slider("values",1))});var blogOwl=$(".blog__carousel").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:1e3,margin:30,nav:!1,smartSpeed:1200,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}});$(".blog-nav-left").click(function(){blogOwl.trigger("prev.owl.carousel")}),$(".blog-nav-right").click(function(){blogOwl.trigger("next.owl.carousel")});var owl=$(".home-slider__home-carousel");owl.owlCarousel({loop:!0,autoplaySpeed:1e3,margin:15,nav:!1,smartSpeed:1200,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".home-nav-left").click(function(){owl.trigger("prev.owl.carousel")}),$(".home-nav-right").click(function(){owl.trigger("next.owl.carousel")}),owl.on("change.owl.carousel",function(e){setAnimation($(".owl-item",owl).eq(e.item.index).find("[data-animation-out]"),"out")}),owl.on("changed.owl.carousel",function(e){setAnimation($(".owl-item",owl).eq(e.item.index).find("[data-animation-in]"),"in")});var newItemOwl=$(".new-item-carousel").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:1e3,margin:15,nav:!1,smartSpeed:1200,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}});$(".new-item_nav-left").click(function(){newItemOwl.trigger("prev.owl.carousel")}),$(".new-item_nav-right").click(function(){newItemOwl.trigger("next.owl.carousel")});