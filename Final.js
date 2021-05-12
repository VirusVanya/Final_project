var array=["meb1.jpg","meb2.jpg","meb3.jpg","meb4.jpg"]
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
}
/*let numElement = document.getElementById("num")
let newNumber = document.getElementById("newNumber")
newNumber.addEventListener('keyup',setNumber)

let nameElement = document.getElementById("nameElement")
let newName = document.getElementById("newName")
newName.addEventListener('keyup',setName)

let dateElement1 = document.getElementById("dateMonth")
let newDate1 = document.getElementById("newDate")
newDate1.addEventListener('mouseup',setDate)

let dateElement2 = document.getElementById("dateYear")
let newDate2 = document.getElementById("newYear")
newDate2.addEventListener('mouseup',setYear)

function setNumber() {
	numElement.innerHTML = newNumber.value
}

function setName() {
	nameElement.innerHTML = newName.value
}

function setDate() {
	dateElement1.innerHTML = newDate1.value
}

function setYear() {
	dateElement2.innerHTML = newDate2.value
}*/

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