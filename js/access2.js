/* Accessibility */
var menuItems = document.querySelectorAll('li.dropdown');
Array.prototype.forEach.call(menuItems, function(el, i){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		el.addEventListener("click",  function(event){
			if (this.className == "dropdown") {
				this.className = "dropdown open";
				this.setAttribute('aria-expanded', "true");
				document.querySelector(".menu").className = "menu open";
			} else {
				this.className = "dropdown";
				this.setAttribute('aria-expanded', "false");
				document.querySelector(".menu.open").className = "menu";
			}
			event.preventDefault();
			return false;
		});
	} else {
		/* Looks for hover, then sets open class on dropdown menu */
		el.addEventListener("mouseover", function(event){
			document.querySelector(".menu").className = "menu open";
			this.className = "dropdown open";
			clearTimeout(timer);
		});
		/* Checks for absense of hover and closes dropdown menu */
		/* Adds 1 second delay in menu closing for accessibility */
		el.addEventListener("mouseout", function(event){
			timer = setTimeout(function(event){
				document.querySelector(".dropdown.open").className = "dropdown";
				document.querySelector(".menu.open").className = "menu";
			}, 1000);
		});
	}
});