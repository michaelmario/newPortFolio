function yScrollHandler(){
    var win = document.getElementById("peekaboo");
    if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
	//win.style.webkitTransition = "right 0.7s ease-in-out 0s";
	win.style.transition = "right 0.7s ease-in-out 0s";
	win.style.right = "10px";
    } else {
	win.style.transition = "right 0.7s ease-in-out 0s";
	win.style.right = "-452px";
    }
}
window.onscroll = yScrollHandler;
var scrollY = 0;
var distance = 40;
var speed = 24;
function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',24);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

window.sr = ScrollReveal();
  sr.reveal('#myNavbar',{
    duration:200,  
    origin:'bottom',
    distance:'200px'
  });
 
  sr.reveal('#about',{
    duration:200, 
    delay:400, 
    origin:'left',
    distance:'500px'
  });
  sr.reveal('#teamP',{
    duration:200, 
    delay:400, 
    origin:'left',
    distance:'500px'
	});
// 	$(document).ready(function() {
// 		$(".firstPhoto").css("display","none");   
//     $(".firstPhoto").fadeIn(4500);
// 	$("#ionic").mouseout((e)=>{
// 		$("#ionic").animate({ 'padding': '600'}, 1500);;
// 
// });
$(document).ready(function() {
$('#zoom').elevateZoom({
	zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750
 });
 $('#zoomWordp').elevateZoom({
	zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750
 });
 
 $('#zoomphpMysql').elevateZoom({
	zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750
 });
 $('#zoomGooglePro').elevateZoom({
	zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750
 });
});
	let peekaboo = document.getElementById("peekaboo"); 
	let headerBottomLeft = document.getElementById("headerBottomLeft");
	let headerBottomCenter = document.getElementById("headerBottomCenter"); 
	let headerBottomRight = document.getElementById("headerBottomRight");    
	let topMin = document.getElementById("topMin");
	let closePanel =document.getElementById("closePanel");
	let titleHeadLeft= document.getElementById("titleHeadLeft");
	let titleHeadCenter = document.getElementById("titleHeadCenter");
	let titleHeadRight = document.getElementById("titleHeadRight");
	 titleHeadLeft.addEventListener("click", function() {
			headerBottomLeft.style="display:block";
			headerBottomCenter.style ="display:none";
			headerBottomRight.style ="display:none";
	});
	titleHeadCenter.addEventListener("click", function() {
			headerBottomLeft.style="display:none";
			headerBottomCenter.style ="display:block";
			headerBottomRight.style ="display:none";
	});
 
	titleHeadRight.addEventListener("click", function() {
			headerBottomLeft.style="display:none";
			headerBottomCenter.style ="display:none";
			headerBottomRight.style ="display:block";
	});
	// closePanel.addEventListener("click", function() {
	// 		peekaboo.style.transition = "right 0.7s ease-in-out 0s";
	// 		peekaboo.style.right = "-452px";
	// });
// 	topMin.addEventListener("click", function() {
// 			peekaboo.style.transition = "right 0.7s ease-in-out 0s";
// 			peekaboo.style.right = "-452px";
//  });
