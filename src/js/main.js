$(document).ready(function() {
  $(".header").animated("fadeInDown");
  $(".s-slider").animated("fadeInDown");
  $(".s-service").animated("fadeInDown");
  $(".s-types").animated("fadeIn");
  $(".s-extra").animated("fadeIn");
  $(".s-stage").animated("fadeIn");
  $(".s-advantage").animated("fadeInRight");
  $(".s-review").animated("fadeInLeft");
  $(".s-client").animated("fadeIn");
  $(".s-contact").animated("fadeIn");

  $(".slider-background").animated("fadeIn", "fadeOut");
  $(".slide-header").animated("fadeIn", "fadeOut");
  $(".slide-text-1").animated("fadeIn", "fadeOut");
  $(".slide-text-2").animated("fadeIn", "fadeOut");
  $(".slide-text-3").animated("fadeIn", "fadeOut");
  $(".slide-text-4").animated("fadeIn", "fadeOut");
  $(".slide-text-5").animated("fadeIn", "fadeOut");
  $(".slide-button").animated("fadeIn", "fadeOut");

  $(".type-test-item").animated("zoomIn", "zoomOut");

  $(".audit_item_1").animated("fadeInLeft", "fadeOut");
  $(".audit_item_2").animated("fadeInLeft", "fadeOut");
  $(".audit_item_3").animated("fadeInLeft", "fadeOut");
  $(".audit_item_4").animated("fadeInLeft", "fadeOut");
  $(".audit_item_5").animated("fadeInLeft", "fadeOut");

  $(".install-item-1").animated("fadeIn", "fadeOut");
  $(".install-item-2").animated("fadeIn", "fadeOut");
  $(".install-item-3").animated("fadeIn", "fadeOut");

  $(".tech-item-1").animated("fadeIn", "fadeOut");
  $(".tech-item-2").animated("fadeIn", "fadeOut");
  $(".tech-item-3").animated("fadeIn", "fadeOut");

  $('.reviews').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
    items: 1,
    dots: true,
    autoHeight: true
  });

  $('.clients').owlCarousel({
    loop: true,
    nav: false,
    navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
    items: 4,
    dots: 0,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $('.slider').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
    items: 1,
    dots: true
  });

  var modal = document.getElementById('myModal');
  var img1 = document.getElementById('myImg1');
  var img2 = document.getElementById('myImg2');
  var img3 = document.getElementById('myImg3');
  var img4 = document.getElementById('myImg4');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
  img2.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
  img3.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
  img4.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }
});

function Tech() {
  $('.s-service-tech-content').css("display", "block");
  $('.s-service-install-content').css("display", "none");
  $('.s-service-audit-content').css("display", "none");

  $('.tech-block .block-white-hover').css("display", "flex");
  $('.tech-block .block-hover').css("display", "none");

  $('.install-block .block-white-hover').css("display", "none");
  $('.install-block .block-hover').css("display", "block");

  $('.audit-block .block-white-hover').css("display", "none");
  $('.audit-block .block-hover').css("display", "block");
}

function Audit() {
  $('.s-service-tech-content').css("display", "none");
  $('.s-service-install-content').css("display", "none");
  $('.s-service-audit-content').css("display", "block");

  $('.tech-block .block-white-hover').css("display", "none");
  $('.tech-block .block-hover').css("display", "block");

  $('.install-block .block-white-hover').css("display", "none");
  $('.install-block .block-hover').css("display", "block");

  $('.audit-block .block-white-hover').css("display", "flex");
  $('.audit-block .block-hover').css("display", "none");
}

function Install() {
  $('.s-service-tech-content').css("display", "none");
  $('.s-service-install-content').css("display", "block");
  $('.s-service-audit-content').css("display", "none");

  $('.tech-block .block-white-hover').css("display", "none");
  $('.tech-block .block-hover').css("display", "block");

  $('.install-block .block-white-hover').css("display", "flex");
  $('.install-block .block-hover').css("display", "none");

  $('.audit-block .block-white-hover').css("display", "none");
  $('.audit-block .block-hover').css("display", "block");
}
