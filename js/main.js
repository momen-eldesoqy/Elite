$(function () {
  'use strict';

  //Adjust Slider Height
  var winH = $(window).height();
  var upperH = $('.upper-bar').innerHeight();
  var navH = $('.navbar').innerHeight();

  $('.slider , .carousel-item').height(winH - (upperH + navH));

  //start shuffle images
  $(".items .item").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active")
    if ($(this).data("class") == "all") {
      $(".row .op").css("opacity", 1)
    } else {
      $(".row .op").css("opacity", "0.09");
      $($(this).data("class")).css("opacity", 1)
    }
  })


  //start members slider

  $(".members .fa-angle-right").on("click", function () {

    if ($(".slidactive").is(":last-child") && $("ol .active").is(":last-child")) {

      $(".member").eq(0).addClass("slidactive").siblings().removeClass("slidactive");

      $(".m").eq(0).addClass("active").siblings().removeClass("active")

    } else {

      $(".slidactive").removeClass("slidactive").next().addClass("slidactive");

      $("ol .active").removeClass("active").next().addClass("active")

    }

  })
  $(".members .fa-angle-left").on("click", function () {
    if ($(".slidactive").is(":first-child") && $("ol .active").is(":first-child")) {
      $(".member").eq(-1).addClass("slidactive").siblings().removeClass("slidactive");
      $("ol li").eq(-1).addClass("active").siblings().removeClass("active")
    } else {
      $(".slidactive").removeClass("slidactive").prev().addClass("slidactive");
      $("ol .active").removeClass("active").prev().addClass("active")
    }

  })
  $("ol li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $($(this).data("class")).addClass("slidactive").siblings().removeClass("slidactive")
  })

})
