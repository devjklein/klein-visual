/*------------------------------------*\
  ACCESSIBILITY AND MENUS
\*------------------------------------*/

var timer;
var hasTouch = false;
window.addEventListener("touchstart", function onFirstTouch() {
    console.log("Can touch!");
	hasTouch = true;
    window.removeEventListener("touchstart", onFirstTouch, false);
}, false); 

console.log(hasTouch);

if (hasTouch == true) { // If touch, for each dropdown "a" link wait for touchstart
	$(".nav-dropdown > a").each(function(i, el){
		el.addEventListener("touchstart", function(event){
				if ($(".nav-dropdown > a").attr('aria-expanded') == "true") {
						$(".nav-dropdown > a").attr('aria-expanded', "false");
						$(".nav-dropdown ul").slideUp("fast"); // Hard close
				} else {
					$(".nav-dropdown > a").attr('aria-expanded', "true");
					$(".nav-dropdown ul").slideDown("fast"); // Hard open
					clearTimeout(timer);
				};
		});
	});
} else { // If no touch, use hover and click
	$(".nav-dropdown").each(function(i, el){
		el.addEventListener("mouseover", function(event){
				$(".nav-dropdown ul").slideDown("fast"); // While mouseover, hard open
				$(".nav-dropdown > a").attr('aria-expanded', "true");
				clearTimeout(timer);
		});
		el.addEventListener("mouseout", function(event){ // While mouseout, hard close
				timer = setTimeout(function(event){
						$(".nav-dropdown ul").slideUp("fast");
						$(".nav-dropdown > a").attr('aria-expanded', "false");
				}, 1000);
		});
		$(".nav-dropdown > a").each(function(i, el){
			el.addEventListener("click", function(event){
				$(".nav-dropdown ul").slideToggle("fast"); // Toggle on click
				if ($(".nav-dropdown > a").attr('aria-expanded') == "true") {
					$(".nav-dropdown > a").attr('aria-expanded', "false");
				} else {
					$(".nav-dropdown > a").attr('aria-expanded', "true");
				};
				event.preventDefault();
			});
		});
	});
};
$(".main-nav-btn").each(function(i, el){
	if (hasTouch == true) { // If on mobile, use touch
			el.addEventListener("touchstart", function(event){
        if ($(".main-nav-btn").attr('aria-expanded') == "true") {
          $(".main-nav").slideUp("fast");
          $(".main-nav-btn").attr('aria-expanded', "false");
          $(".main-nav-btn").removeClass("open");
          $('#main-nav-btn__icon').attr("class", "");
        } else {
          $(".main-nav").slideDown("fast");
          $(".main-nav-btn").attr('aria-expanded', "true");
          $(".main-nav-btn").addClass("open");
          $('#main-nav-btn__icon').attr("class", "open");
        };
			});
		} else { // If on desktop, use click
			el.addEventListener("click", function(event){
				if ($(".main-nav-btn").attr('aria-expanded') == "true") {
					$(".main-nav").slideUp("fast");
					$(".main-nav-btn").attr('aria-expanded', "false");
					$(".main-nav-btn").removeClass("open");
					$('#main-nav-btn__icon').attr("class", "");
				} else {
					$(".main-nav").slideDown("fast");
					$(".main-nav-btn").attr('aria-expanded', "true");
					$(".main-nav-btn").addClass("open");
					$('#main-nav-btn__icon').attr("class", "open");
				};
			});
		};
});