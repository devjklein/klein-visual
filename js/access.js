/*------------------------------------*\
  ACCESSIBILITY AND MENUS - V3
\*------------------------------------*/

var timer;

var dropdownMenu = ".nav-dropdown";
var dropdownButton = ".nav-dropdown > a";
var dropdownList = ".nav-dropdown > ul";
var navButton = ".main-nav-btn";
var navList = ".main-nav"
var navIcon = "#main-nav-btn__icon"

var hasTouch = false;

window.addEventListener("touchstart", function onFirstTouch() {
	hasTouch = true;
    window.removeEventListener("touchstart", onFirstTouch, false);
}, false); 


if (hasTouch == true) { // If touch, for each dropdown "a" link wait for touchstart
	$(dropdownButton).each(function(i, el){
		el.addEventListener("touchstart", function(event){
				if ($(dropdownButton).attr("aria-expanded") == "true") {
					closeMenu("dropdown");
				} else {
					openMenu("dropdown");
				};
		});
	});
};

// If no touch, use hover and click
$(dropdownMenu).each(function(i, el){
	el.addEventListener("mouseover", dropdownMouseover);
	el.addEventListener("mouseout", dropdownMouseout);
	$(dropdownButton)[0].addEventListener("click", dropdownClick);
	htmlClose("click", dropdownButton, "dropdown", dropdownMenu);
});

	function dropdownMouseover(event) {
		openMenu("dropdown");
		$(dropdownMenu).attr("hover", "true")
	};

	function dropdownMouseout(event) {
		closeMenu("dropdownTimeout");
	};

	function dropdownClick(event) {
		if ($(dropdownButton).attr("aria-expanded") == "true" && $(dropdownMenu).attr("hover") != "true") {
			closeMenu("dropdown");
		} else {
			openMenu("dropdown");
			$(dropdownMenu).attr("hover", "false");
		};
		event.preventDefault();
		event.stopPropagation();
	};


if (hasTouch == true) { // If on mobile, use touch
	el.addEventListener("touchstart", function(event){
		if ($(navButton).attr("aria-expanded") == "true") {
			closeMenu("nav");
		} else {
			openMenu("nav");
		};
			});
};

$(navButton).each(function(i, el){
	el.addEventListener("click", navClick);
	htmlClose("click", navButton, "nav", navButton);
});


function navClick(event){
	if ($(navButton).attr("aria-expanded") == "true") {
		closeMenu("nav");
	} else {
		openMenu("nav");
	};
}


function htmlClose(clickType, ariaObj, closeObj, protectObj) {
	$("html")[0].addEventListener(clickType, function(event){
		if ($(ariaObj).attr("aria-expanded") == "true") { 
			closeMenu(closeObj);
		};
	});

	// When using menu, do not propagate interaction to HTML
	$(protectObj)[0].addEventListener(clickType, function(event){
		event.stopPropagation();
	});
};



function openMenu(type) {
	if (type == "nav") {
		$(navButton).attr("aria-expanded", "true");
		$(navList).slideDown("fast");
		$(navButton).addClass("open");
		$(navIcon).attr("class", "open");
	} else if (type == "dropdown") {
		$(dropdownList).slideDown("fast"); // Hard open
		$(dropdownButton).attr("aria-expanded", "true");
		clearTimeout(timer);
	};
};

function closeMenu(type) {
	if (type == "nav") {
		$(navList).slideUp("fast");
		$(navButton).attr("aria-expanded", "false");
		$(navButton).removeClass("open");
		$(navIcon).attr("class", "");
	} else if (type == "dropdown") {
		$(dropdownList).slideUp("fast"); // Hard close
		$(dropdownButton).attr("aria-expanded", "false");
	} else if (type == "dropdownTimeout") {
		timer = setTimeout(function(event){
				$(dropdownList).slideUp("fast");
				$(dropdownButton).attr("aria-expanded", "false");
		}, 1000);
	}
};

var prev = 0;
$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  $('.top-bar').toggleClass('scroll', scrollTop > prev);
  prev = scrollTop;
});