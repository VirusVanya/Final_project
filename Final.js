let switches = ['switch1','switch2','switch3','switch4'];
let i = 0;
let number = document.getElementById(switches[i]).value;
setInterval(function(){
	if (i<3){
		i++;
	} else {
		i=0;
	}
	document.getElementById(switches[i]).checked = true;
}, 3000);
let radiobtn = document.getElementById("switch")
radiobtn = document.addEventListener('mouseup',setSlide)
function setSlide() {
	let num = document.getElementById('switch').value;
}
/*<button id="left1" onclick="changedown()"><b>‹</b></button>
  <button id="right1" onclick="changeup()"><b>›</b></button>

    #left1 {
	position: relative;
	top: 255px;
	left: 600px;
	height: 40px;
	width: 40px;
	text-align: center;
	border-radius: 20px;
	font-size: 25px;
	color: black;
	background-color: #3ebee6;
	z-index: 2;
}

#right1 {
	position: relative;
	top: 255px;
	left: 1355px;
	position: relative;
	height: 40px;
	width: 40px;
	text-align: center;
	border-radius: 20px;
	font-size: 25px;
	color: black;
	background-color: #3ebee6;
	z-index: 2;
}

#left1:hover {
	color: #3ebee6;
	background-color: black;
}

#right1:hover {
	color: #3ebee6;
	background-color: black;
}*/

/*var array=["meb1.jpg","meb2.jpg","meb3.jpg","meb4.jpg"]
var i=0;

setInterval(changeup, 4000)

function changeup() {
	if (i>2){
		i=-1;
	}
	i+=1;
	document.getElementById('furnit2').src=array[i];
}

function changedown() {
	if (i<1){
		i=4;
	}
	i-=1;
	document.getElementById('furnit2').src=array[i];
}*/