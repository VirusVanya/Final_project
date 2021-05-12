let switches = ['switch1','switch2','switch3','switch4'];
let slides = ['meb1.jpg','meb2.jpg','meb3.jpg','meb4.jpg']
let i = 0;
let number = document.getElementById(switches[i]).value;
let offset = 0;
setInterval(function(){
	i++;
	document.getElementById(switches[i]).checked = true;
	slides[i-1].remove();
	let img = document.createElement('img');
	img.src = slides[i];
	img.classList.add('furnit');
	img.style.left = offset*840 + 'px';
	document.querySelector('.image').appendChild(img);
}, 3000);


/*let slides = document.querySelectorAll('.furnit');
let slider = [];
for (let i=0; i<slides.length; i++){
	slider[i] = slides[i].src;
	slides[i].remove();
}
let step = 0;
let offset = 0;

function draw(){
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('furnit');
	img.style.left = offset*104 + '%';
	document.querySelector('.image').appendChild(img);
	step++;
	if (step + 1 == slider.length){
		step = 0;
	} else {
		step++;
	}
	offset = 1;
}

function left(){
	document.onclick = null
	slides2 = document.querySelectorAll('.furnit');
	let offset2 = 0;
	for (let i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2*512 - 512 + 'px';
		offset2++
	}
	setTimeout(function(){
		slides2[0].remove();
		draw();
		document.onclick = left;
	}, 1000);
}

draw();
draw();
document.onclick = left;*/