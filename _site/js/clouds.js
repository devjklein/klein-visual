var allClouds = new TimelineLite();

function initClouds(c, d, z, a) {
  //loop through creation of clouds
  for(var i = 0; i < a; i ++){
	//Generate cloud size and select a cloud style
	if (z == "sm") {
		var sizeX = Math.random() * 50 + 100;
		var sizeY = Math.random() * 10 + 25;
		var num = Math.floor(Math.random() * 9 + 1);
	} else if (z == "md") {
		var sizeX = Math.random() * 75 + 150;
		var sizeY = Math.random() * 15 + 25;
		var num = Math.floor(Math.random() * 5 + 1);
		var z = "lg";
	} else if (z == "lg") {
		var sizeX = Math.random() * 100 + 200;
		var sizeY = Math.random() * 50 + 50;
		var num = Math.floor(Math.random() * 5 + 1);
	}
	//dynamically create a cloud element
	var cloud = $('<div class="cloud-'+z+'-'+num+'" style="position: absolute; width:'+sizeX+'px; height:'+sizeY+'px; background-image: url(img/mtn-scene/cloud-'+z+'-'+num+'.svg); background-repeat: no-repeat;"></div>').appendTo(c);
	//set its initial position and opacity using GSAP
	var posX = Math.random() * ($(".mtn-scene__layer").width()-250);
	var posY = Math.random() * ($(".mtn-scene__layer").height()-250);
	//Generate cloud and set initial position
	TweenLite.set(cloud, {left: posX - ($(".mtn-scene__layer").width() / 100) * 25, top:posY, opacity:0});
	//Find the additional percentage of motion needed
	var posXy = (posX / ($(".mtn-scene__layer").width()) * 100) + 100;
	//create a repeating timeline for this cloud
	var cloudTl = new TimelineMax({repeat:-1});
	//fade opacity to 1
	cloudTl.to(cloud, 10, {opacity:0.75})
    //move cloud across its container div with random duration. Start time = 0	
    .to(cloud, d + (Math.random() * 15), {left:posXy + "%", ease:Linear.easeNone}, 0)
    //0.5 seconds before timeline ends start fading opacity to 0 
    .to(cloud, 10, {opacity:0}, "-=8")
    //add this cloud's timeline to the allClouds timeline at a random start time.
    allClouds.add(cloudTl, Math.random()*70);
  }
}

//control allClouds timeline
$("#play").click(function(){
  allClouds.play();
});

$("#pause").click(function(){
  allClouds.pause();
});

$("#reverse").click(function(){
  allClouds.reverse();
});

//c = container
//d = duration (default 100/40)
//z = scale
//a = amount (default 40/15)
initClouds($("#js-mtn-clouds-sm"),100,"sm", 20);
initClouds($("#js-mtn-clouds-md"),60,"md", 5);
initClouds($("#js-mtn-clouds-lg"),40,"lg", 5);
var scene = document.getElementById('js-mtn-scene');
var parallaxInstance = new Parallax(scene);