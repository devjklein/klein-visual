/*------------------------------------*\
  DETECT-TOUCH-AND-HOVER
\*------------------------------------*/

//https://stampede-design.com/blog/dropdown-menu-hover/#disqus_thread
//https://joshtronic.com/2015/04/19/handling-click-and-touch-events-on-the-same-element/
//https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685

// Initialize variables for interaction states
var canHover = false;
var canTouch = false;

// Detect if touch is happening. If so, disable hover, but keep looking for hover events.
function detectTouch() {
  window.addEventListener("touchstart", function onFirstTouch() {
    console.log("Can Touch!");
    canTouch = true;
    if (canHover == true) {
      canHover = false;
      hoverOff();
      detectHover();
    };
    touchOn();
    window.removeEventListener("touchstart", onFirstTouch, false);
  }, false); 
};

// Detect if hover is happening. If so, disable touch, but keep looking for touch events.
function detectHover() {
  window.addEventListener("mouseover", function onFirstHover() {
    console.log("Can Hover!");
    canHover = true;
    if (canTouch == true) {
      canTouch = false;
      touchOff();
      detectTouch();
    };
    hoverOn();
    window.removeEventListener("mouseover", onFirstHover, false);
  }, false);
};

// Run both functions
detectTouch();
detectHover();


/*------------------------------------*\
  MAIN-FUNCTIONS
\*------------------------------------*/

// A timer for delayed close when hovering
var timer;

var dropdownMenu = ".nav-dropdown";
var dropdownButton = ".nav-dropdown > a";
var dropdownList = ".nav-dropdown > ul";
var navButton = ".main-nav-btn";
var navList = ".main-nav"
var navIcon = "#main-nav-btn__icon"

// Close when interacting outside menu
function htmlClose(clickType, ariaObj, closeObj) {
  $("html")[0].addEventListener(clickType, function(event){
    if ($(ariaObj).attr("aria-expanded") == "true") { 
      closeObj();
    };
  });
  
  // When using menu, do not propagate interaction to HTML
  $(ariaObj)[0].addEventListener(clickType, function(event){
    if ($(ariaObj).attr("aria-expanded") == "true") { 
      event.stopPropagation();
    };
  });
  
  // Don't close the main menu when clicking on the dropdown
  if (ariaObj == navButton) {
    $(navList)[0].addEventListener(clickType, function(event){
      if ($(navButton).attr("aria-expanded") == "true") { 
        event.stopPropagation();
      };
    });
  };
};





/*------------------------------------*\
  TOUCH
\*------------------------------------*/

// Turn on touch by listening for touchstart events
function touchOn() {
  $(dropdownButton).each(function(i, el){
    el.addEventListener("touchstart", dropdownToggle);
    htmlClose("touchstart", dropdownButton, dropdownClose);
  });
  
  $(navButton).each(function(i, el){
    el.addEventListener("touchstart", dropdownToggle);
   htmlClose("touchstart", navButton, menuClose);
  });
};

// Turn off touch by removing touchstart events
function touchOff() {
  $(dropdownButton)[0].removeEventListener("touchstart", dropdownToggle);
  $(navButton)[0].removeEventListener("touchstart", dropdownToggle);
};





/*------------------------------------*\
  HOVER
\*------------------------------------*/

// Turn on hover by listening for mouseover and click events
function hoverOn() {
  $(dropdownMenu).each(function(i, el){
    el.addEventListener("mouseover", dropHoverStart);
    el.addEventListener("mouseout", dropHoverEnd);
    htmlClose("click", dropdownMenu, dropdownClose);
  });
  
  $(navButton).each(function(i, el){
    el.addEventListener("click", navigationToggle);
    htmlClose("click", navButton, menuClose);
  });  
};


function dropHoverStart(event){
  dropdownOpen();
};

function dropHoverEnd(event){ // While mouseout, hard close
  timer = setTimeout(function(event){
    dropdownClose();
  }, 1000);
};

function navigationToggle(event){
  if ($(navButton).attr("aria-expanded") == "true") {
    menuClose();
  } else {
    menuOpen();
  };
};

function dropdownToggle(event){
  if ($(dropdownButton).attr("aria-expanded") == "true") {
    dropdownClose();
  } else {
    dropdownOpen();
  };
  // So the a link isn't followed
  event.preventDefault();
};

// Turn off hover by removing mouseover and click events
function hoverOff() {
  $(dropdownMenu)[0].removeEventListener("mouseover", dropHoverStart);
  $(dropdownMenu)[0].removeEventListener("mouseout", dropHoverEnd);
  $(navButton)[0].removeEventListener("click", navigationToggle);
  $(dropdownButton)[0].removeEventListener("click", dropdownToggle);
};





/*------------------------------------*\
  KEYBOARD
\*------------------------------------*/
$(dropdownButton).each(function(i, el){
  el.addEventListener("keypress", dropdownKeyboardOpen);
});

$(navButton).each(function(i, el){
  el.addEventListener("keypress", navigationKeyboardOpen);
});


function dropdownKeyboardOpen(event) {
  var key = event.which || event.keyCode;
  if (key === 13 || key === 32) { // 13 is enter, 32 is space
    dropdownOpen();
  } else if (key === 27) { // 27 is Escape
    dropdownClose();
  };
};

function navigationKeyboardOpen(event) {
  var key = event.which || event.keyCode;
  if (key === 13 || key === 32) { // 13 is enter, 32 is space
    menuOpen();
    event.preventDefault();
  } else if (key === 27) { // 27 is Escape
    menuClose();
    event.preventDefault();
  };
};





/*------------------------------------*\
  DROPDOWN-FUNCTIONS
\*------------------------------------*/

function dropdownOpen() {
  $(dropdownButton).attr("aria-expanded", "true");
  $(dropdownList).slideDown("fast"); // Hard open
  clearTimeout(timer);
};

function dropdownClose() {
  $(dropdownButton).attr("aria-expanded", "false");
  $(dropdownList).slideUp("fast"); // Hard close
};





/*------------------------------------*\
  MAIN-MENU-FUNCTIONS
\*------------------------------------*/

function menuOpen() {
  $(navList).slideDown("fast");
  $(navButton).attr("aria-expanded", "true");
  $(navButton).addClass("open");
  $(navIcon).attr("class", "open");
};

function menuClose() {
  $(navList).slideUp("fast");
  $(navButton).attr("aria-expanded", "false");
  $(navButton).removeClass("open");
  $(navIcon).attr("class", "");
};