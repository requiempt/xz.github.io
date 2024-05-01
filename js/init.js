$(function(){

  var $w = $(window),
      $background = $('#background');

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $background.css({'top': 'auto', 'bottom': 0});

    $w.resize(sizeBackground);
    sizeBackground();
  }

  function sizeBackground() {
     $background.height(screen.height);
  }
});
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
   prevArrow: $('.prev'),
      nextArrow: $('.next'),
  asNavFor: '.sliderTh'
  });
  $('.sliderTh').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
   arrows: false,
  centerMode: true,
 
  focusOnSelect: true
	

	});
``});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});



$(window).scroll(function(){
	rotateCircle();
	setNavState()
})


$("#loader").on('click', function(e) {
  e.stopPropagation();
  $(this).fadeOut(1000);
  $(".logoBox").delay(800).fadeTo(1000, 1);
  $(".header__about").delay(1100).fadeTo(1000, 1);
  $(".btnKnowMore").delay(1200).fadeTo(1000, 1);
});

rotateValue=0;
function rotateCircle(){
	rotateValue+=2;
	if(rotateValue>360){
		rotateValue==0;
	}
	
	// $('.service17 .mask').css('background-image','linear-gradient('+rotateValue+'deg, rgba(36, 85, 162, 0.60), rgba(128, 194, 143, 0.60))')
	$('.service17 .mask').css('background-image','linear-gradient('+rotateValue+'deg, rgba(255, 255, 255, .6), rgba(255, 255, 255, 0.20))')

	if(screen.width<440){
		$('.header2 .headerMask').css('background-image','linear-gradient('+rotateValue+'deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85))')
	}else{
		$('.header2 .headerMask').css('background-image','linear-gradient('+rotateValue+'deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))')

	}
}

$('#captcha').click(function(){
	$(this).attr('disabled',true);
	$('.contact1 .sendBtn').css('opacity','1');
	$('.contact1 .sendBtn').attr('type','submit')
})


	function setNavState(){
		if(screen.width>768){
			if($(window).scrollTop()!=0){
				$('nav').css('background','rgb(0,27,52)')
				$('nav').css('box-shadow','0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)')
				$('.table-of-contents a').css('color','#ffffff')
				$('nav .brand-logo span').css('color','#ffffff')
			}else{
				$('nav').css('background','transparent')
				$('nav').css('box-shadow','none')
				$('.table-of-contents a').css('color','#fff')
				$('nav .brand-logo span').css('color','#fff')
			}
		}else{
			$('nav').css('background','transparent')
			$('nav').css('box-shadow','none')


		}
	}


	function showMobileNav(){
		navSpState=$('#navSp').css('display');
		console.log(navSpState)
		if(navSpState=='none'){
			$('#navSp').fadeIn(300)
		}else{
			$('#navSp').fadeOut(300)
		}
	}

	$('.navSpTriger').click(function(){
		showMobileNav()
	})



	$('.toolCopy').click(function(){
		elmId=$(this).attr('id');
		if(elmId=='emailLondon'){
			copyToClipboard('investors@jurst-trade.eu')
		}
	})

	function copyToClipboard(element) {
		var $temp = $('<input class="hiddenInp">');
		$("body").append($temp);
		$temp.val(element).select();
		document.execCommand("copy");
		$temp.remove();
	}


if(screen.width > 768) {
    new WOW({offset:100}).init();
}


function initMap() {
			

	
	

var locations = [

	[51.514993806811994, -0.12358420273952252],
  ];

 
  

  var map =new google.maps.Map(document.getElementById('map'), {
	  disableDefaultUI: true,
	  scrollwheel: true,
	  gestureHandling: 'cooperative',
	  draggable: true,
	  zoom: 15,

	center: new google.maps.LatLng(51.514993806811994, -0.12358420273952252),
	styles: [
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#444444"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
				{
					"color": "#f2f2f2"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 45
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#053461"
				}
			]
		}
	]

  });

 const image =
    "img/mb.png";
  ; 

const Marker = new google.maps.Marker({
    position: { lat: 51.514993806811994, lng: -0.12358420273952252 },
    map,
    icon: image,
});

}



