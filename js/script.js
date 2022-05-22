

$('.bOpen').on('click', function(){
	$('html').css({
		'overflow-y': 'visible'
	});

	$('.penerima').hide(2000);

	// $('section').hide(0).show(1000);

	// buka semua section
	$('section').css({
		// 'visibility': 'visible',
		'position' : 'relative'
		// 'min-height' : '650px'
	});


	$('section').slideUp(0).delay(2000).slideDown(0).css({
		'visibility': 'visible'
	});
	$('.penerima').fadeIn(0).fadeOut(0).css({
		// 'background-color' : 'lightgreen'
	});

	// $('.sampul h1').addClass('sampulMuncul');
	$('.sampul div').fadeOut(0).delay(2000).fadeIn(1000);
	$('.imgSampul').addClass('animasi');
	$('.bdMempelai').addClass('animasi');

	// $('.sampul img').hide(0).delay(3500).show(2000).css({
	// 	'visibility': 'visible'
	// });
	
	// $('.smpText').slideUp(0).delay(3000).slideDown(1000).css({
	// 	'visibility': 'visible'
	// });
	
});
// button down klck
$('.bDown').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	

	// tangkap elemen yg bersangkutan
		var elementTujuan = $(tujuan);


		// pindahkan scroll
		$('html, body').animate({
			scrollTop:elementTujuan.offset().top + 3
		}, 1250, 'swing');

		e.preventDefault();

});

// event link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen yg bersangkutan
	var elementTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop:elementTujuan.offset().top - 50
	}, 1250, 'swing');

	e.preventDefault();
});


// menyimpan paralax

$(window).on('load', function(){
	$('.penerima h2').hide(1000).css({
	});
	$('.penerima h2').show(1000).css({
		// 'opacity' : '1',
		'color' : 'white',
		'font-size' : '10vw'
	});

	$('.penerima p').hide(0).delay(2000).show(3000).css({
		'visibility' : 'visible'
	});

	$('.penerima h4').slideUp( 0 ).delay(3000).fadeIn( 0 );
	$('.penerima h1').slideUp( 0 ).delay(1000).slideDown( 3000 ).css({
		'visibility' : 'visible'
	});
	$('.penerima button').slideUp(0).delay(5000).slideDown(3000).css({
		'visibility' : 'visible'
	});

	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
	countDown();

	
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	console.log(wScroll);

	// TOMBOL SCROLL BAWAH
	if ((wScroll >= $('.sampul').offset().top) && (wScroll < $('.mempelai').offset().top)) {
		$('.bdMempelai').addClass('animasi');
	} else {
		$('.bdMempelai').removeClass('animasi');
	}
	
	if ((wScroll >= $('.mempelai').offset().top) && (wScroll < $('.acara').offset().top)) {
		$('.bdAcara').addClass('animasi');
	} else {
		$('.bdAcara').removeClass('animasi');
	}

	if ((wScroll >= $('.acara').offset().top) && (wScroll < $('.maps').offset().top)) {
		$('.bdMaps').addClass('animasi');
	} else {
		$('.bdMaps').removeClass('animasi');
	}

	if ((wScroll >= $('.maps').offset().top) && (wScroll < $('.prokes').offset().top)) {
		$('.bdProkes').addClass('animasi');
	} else {
		$('.bdProkes').removeClass('animasi');
	}

	if ((wScroll >= $('.prokes').offset().top) && (wScroll < $('.penutup').offset().top)) {
		$('.bdPenutup').addClass('animasi');
	} else {
		$('.bdPenutup').removeClass('animasi');
	}


	// PENERIMA H2
	$('.penerima h2').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// animasi Mempelai
	if(wScroll >= $('.sampul').offset().top + 130 ) {

		$('.mempelai img').addClass('bounce-enter-active');
		$('.mempelai img').css({
			'transform' : 'scale(1)'
		});

		$('.mplKiri').addClass('mplMuncul');
		$('.mplKanan').addClass('mplMuncul');
	} else if ((wScroll < $('.sampul').offset().top + 130)) {

		$('.mempelai img').removeClass('bounce-enter-active');
		$('.mempelai img').css({
			'transform' : 'scale(0)'
		});


		$('.mplKiri').removeClass('mplMuncul');
		$('.mplKanan').removeClass('mplMuncul');
	}

	// animasi Acara
	if (wScroll >= $('.acara').offset().top - 200) {
		$('.acrText').addClass('animasi');
		$('.acrTgl').addClass('animasi');
		$('.acrAkad').addClass('animasi');
		$('.acrResepsi').addClass('animasi');

		$('.cdDetail').each(function(i){
			setTimeout(function(){
				$('.cdDetail').eq(i).addClass('animasi');	
			}, 300 *(i+1));
		});

	} else if (wScroll < $('.acara').offset().top - 600) {
		$('.acrText').removeClass('animasi');
		$('.acrTgl').removeClass('animasi');
		$('.acrAkad').removeClass('animasi');
		$('.acrResepsi').removeClass('animasi');
		$('.cdDetail').removeClass('animasi');
	}

	// animasi Maps
	if (wScroll >= $('.maps').offset().top - 200) {
		$('.mapText').addClass('animasi');
		$('.mapMap').addClass('animasi');
		$('.mapBrcd').addClass('animasi');

	} else if (wScroll < $('.maps').offset().top - 600) {
		$('.mapText').removeClass('animasi');
		$('.mapMap').removeClass('animasi');
		$('.mapBrcd').removeClass('animasi');
	}

	// animasi Prokes
	if (wScroll >= $('.prokes').offset().top - 200) {

		$('.pksImg').each(function(i){
			setTimeout(function(){
				$('.pksImg').eq(i).addClass('animasi');	
			}, 300 *(i+1));
		});


		// $('.pksImg').addClass('animasi');
	} else if (wScroll < $('.prokes').offset().top - 600) {
		$('.pksImg').removeClass('animasi');
		// $('.mapMap').removeClass('animasi');
		// $('.mapBrcd').removeClass('animasi');
	}

	//console.log(wScroll);
});

function countDown(){
	// Set the date we're counting down to
var countDownDate = new Date("Jul 29, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + " Hari " + hours + " Jam "
  // + minutes + " Menit " + seconds + " Detik ";

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("days").innerHTML = "-";
  document.getElementById("hours").innerHTML = "-";
  document.getElementById("minutes").innerHTML = "-";
  document.getElementById("seconds").innerHTML = "-";
  }
}, 1000);
}