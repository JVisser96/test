window.onload = function(){
	
var topLine = $("#topLineNav");
var rightLine = $("#rightLineNav");
var bottomLine = $("#bottomLineNav");
var leftLine = $("#leftLineNav");
var startDiv = $("#startPage");
var homeMain = $("#homeMain");
var overlay = $("#overlay");
var navLinesMenu = $("#nav-icon3");
var webContainer = $("#webContainer");
var wholePageStart = $("#wholePageStart");
	
var navTester = true;
var paraTest = true;
	
	
	
	
$(".menuContainer").delay(350).css({"display" : "none"});
	

	$("#continueFirst").click(function() {
		paraTest = false;
		startDiv.animate({"opacity" : "0"}, 1200);
		setTimeout(function(){ 
			startDiv.delay(1201).css({"display" : "none"});
			homeMain.css({"display" : "block"});
			homeMain.animate({"opacity" : "1"}, 1200);
		} ,1201);	
		
		setTimeout(function(){ 	
				
				homeMain.css({"display" : "block"});
				homeMain.animate({"opacity" : "1"}, 1200);
				topLine.delay(0).animate({"width" : "100%"}, 1200);
				rightLine.delay(100).animate({"height" : "100vh"}, 1200);
				bottomLine.delay(250).animate({"width" : "100%"}, 1200);
				leftLine.delay(200).animate({"height" : "100vh"}, 1200);
				webContainer.delay(1400).animate({"opacity" : "1"}, 800);
				navLinesMenu.delay(650).animate({"opacity" : "1"}, 300);
				
				
		} ,1500);
	});


	$(document).ready(function(){
		$(".menuContainer").delay(350).css({"display" : "none"});
			$('#nav-icon3, .menuLinks').click(function(){
				$(this).toggleClass('open');
				
				if(navTester == true){
					$(".menuContainer").css({"display" : "block"});
					$("#aboutSection").delay(0).animate({"opacity" : "1"}, 300);
					$("#webSection").delay(100).animate({"opacity" : "1"}, 300);
					$("#ModelingSection").delay(200).animate({"opacity" : "1"}, 300);
					$("#graphicSection").delay(300).animate({"opacity" : "1"}, 300);
					$("#contactSection").delay(400).animate({"opacity" : "1"}, 300);
					
					navTester = false;
				}else{
					$("#aboutSection").delay(200).animate({"opacity" : "0"}, 150);
					$("#webSection").delay(150).animate({"opacity" : "0"}, 150);
					$("#ModelingSection").delay(100).animate({"opacity" : "0"}, 150);
					$("#graphicSection").delay(50).animate({"opacity" : "0"}, 150);
					$("#contactSection").delay(0).animate({"opacity" : "0"}, 150);
					setTimeout(function(){
						
						$(".menuContainer").delay(350).css({"display" : "none"});
					}, 350);

					
					navTester = true;
				}
			});

		
		var hoverMain = $(".hoverMain");

	
			hoverMain.mouseenter(function(el) {
				el = $(this);
				startHoverEffect(el);
			})
			hoverMain.mouseleave(function(el) {
				el = $(this);
				stopHoverEffect(el);
			});
		
	});	

	function startHoverEffect(el) {

			el.find(".hover2").stop().animate({'left':'2px'}, 350);
			el.find(".hover3").stop().animate({'left':'0px'}, 250);

	}
	function stopHoverEffect(el) {

			el.find(".hover2").stop().animate({'left':'200px'}, 350);
			el.find(".hover3").stop().animate({'left':'-200px'}, 250);
	}


	
	
	
	
//	var firstHeight = $( window ).height() * 2;
	var scrollCheck = true;
	
	$(window).scroll(function() {
			var height = $(window).scrollTop();
			var webTop = $("#webContainer").offset().top;
//			console.log(height);
//			console.log(webTop);

			if(height <  (webTop - 400) && scrollCheck == true) {
				$("#body").stop().animate({"background-color" : "#d0d0d0"}, 800);
				$(".navLines").stop(false, true).animate({"background-color" : "#b5b5b5"}, 800);
				$(".span").stop().animate({"background-color" : "#737373"}, 300);
				scrollCheck = false;
			} 
			
			if(height >= (webTop - 400) && scrollCheck == false) {
				$("#body").stop().animate({"background-color" : "#272727"}, 800);
				$(".navLines").stop(false, true).animate({"background-color" : "#525252"}, 800);
				$(".span").stop().animate({"background-color" : "#ffffff"}, 300);
				scrollCheck = true;
			}
	});
	
	
	$(".exit").click(function(){
		$("html, body").stop().css({"overflow" : "visible"});
		$(".popupOver").animate({"opacity" : "0"}, 400);
		setTimeout(function(){
			
				$(".popupOver").css({"display" : "none"});
		}, 400);
		
		
	})
	$(".ster").click(function(){
		$("html, body").stop().css({"overflow" : "hidden"});
		$(".sterPop").css({"display" : "block"});
		$(".sterPop").animate({"opacity" : "1"}, 400);
		
	})
	$(".best").click(function(){
		$("html, body").stop().css({"overflow" : "hidden"});
		$(".bestPop").css({"display" : "block"});
		$(".bestPop").animate({"opacity" : "1"}, 400);
		
	})
	
	
	
	var mainDiv = window;
	var mainImage = document.getElementById("logoFirst");	
	var mainImage2 = document.getElementById("logoSecond");	
	var mainImage3 = document.getElementById("logoThird");
	var imageWidth = $("#logoFirst").width();
	var width = window.innerWidth;
	var height = window.innerHeight;


	
		mainDiv.addEventListener("mousemove", function(){
			if(paraTest == true){
				myFunction1(event);
			}

		});

		function myFunction1(e) {
			var xPostion = e.clientX;
			var yPostion = e.clientY;
			var xImageRatio = (xPostion - (width / 2)) / 50;
			var xImageMove = xImageRatio + 1000;

			mainImage.style.left = "calc(50% - " + (((xPostion - (width / 2)) / 70) + 200) + "px)";
			mainImage2.style.left = "calc(50% - " + (((xPostion - (width / 2)) / 50) + 200) + "px)";
			mainImage3.style.left = "calc(50% - " + (((xPostion - (width / 2)) / 30) + 200) + "px)";

			var yImageRatio = (yPostion - (height / 2)) / 40;
			var yImageMove = yImageRatio + 1000;

			mainImage.style.top = "calc(50% - " + (((yPostion - (height / 2)) / 30) + 250) + "px)";
			mainImage2.style.top = "calc(50% - " + (((yPostion - (height / 2)) / 50) + 250) + "px)";
			mainImage3.style.top = "calc(50% - " + (((yPostion - (height / 2)) / 70) + 250) + "px)";

	//		mainImage.style.top = "calc(" + imageWidth + "-"  +  (((yPostion - (height / 2)) / 30) + 424.5) + "px)";
	//		mainImage2.style.top = "calc(" + imageWidth + "-"  + (((yPostion - (height / 2)) / 50) + 424.5) + "px)";
	//		mainImage3.style.top = "calc(" + imageWidth + "-"  + (((yPostion - (height / 2)) / 70) + 424.5) + "px)";
		paraTest
	
		}	
	
	
	
	
	
	
	
	
}





































