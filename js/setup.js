$('.owl-carousel').owlCarousel({
  loop:true,
  margin:5,
  nav:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      800: {
          items: 8
      },
      1000:{
          items:8
      }
  }
})