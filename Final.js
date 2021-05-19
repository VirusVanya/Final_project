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
function setSlide() {
	let num = document.getElementByClassName('switch').value;
}
/*let firstSwitch = document.getElementById('switch1');
firstSwitch = document.addEventListener('mouseup',setSlide1)
let secondSwitch = document.getElementById('switch2');
secondSwitch = document.addEventListener('mouseup',setSlide2)
let thirdSwitch = document.getElementById('switch3');
thirdSwitch = document.addEventListener('mouseup',setSlide3)
let fourthSwitch = document.getElementById('switch4');
fourthSwitch = document.addEventListener('mouseup',setSlide4)
function setSlide1() {
    num = 0;
    setInterval(Slide, 3000);
}
function setSlide2() {
    num = 1;
    setInterval(Slide, 3000);
}
function setSlide3() {
    num = 2;
    setInterval(Slide, 3000);
}
function setSlide4() {
    num = 3;
    setInterval(Slide, 3000);
}*/
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

/*
#oneimg {
	position: relative;
	top: 50px;
	left: -105px;
	height: 390px;
	width: 340px;
}

#twoimg {
	position: relative;
	top: 50px;
	left: -100px;
	height: 290px;
	width: 500px;
}

#threeimg {
	position: relative;
	top: 260px;
	left: -95px;
	height: 392px;
	width: 295px;
}

#fourimg {
	position: relative;
	top: 130px;
	left: -90px;
	height: 330px;
	width: 410px;
}

#fiveimg {
	position: relative;
	top: -314px;
	left: 1477px;
	height: 440px;
	width: 300px;
}

#siximg {
	position: relative;
	top: 55px;
	left: -350px;
	height: 440px;
	width: 340px;
}

#sevenimg {
	position: relative;
	top: -50px;
	left: -345px;
	height: 335px;
	width: 441px;
}

#eightimg {
	position: relative;
	top: -63px;
	left: -36px;
	height: 242px;
	width: 178px;
}

#nineimg {
	position: relative;
	top: -309px;
	left: 1244px;
	height: 480px;
	width: 380px;
}*/