
function home(){
    window.Location.reload();
}

const typingAnimation = document.querySelector('.intro4');
						const typingTexts = [
						'Full Stack',
						'AI',
						'Data Structure',
						];
						function playTypingAnimation(text) {
						for (let i = 0; i < text.length; i++) {
							setTimeout(() => {
							typingAnimation.textContent += text[i];
							}, i * 200); 
						}
						setTimeout(() => {
							typingAnimation.textContent = '';
							playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
						}, text.length * 200);
						}
						playTypingAnimation(typingTexts[0]);




function openLocationInMap(){
	const latitude = 22.8046;
	const longitude = 86.2029;
	URL = "https://maps.app.goo.gl/GCZgmdp6JHUx44DaA";
	window.open(URL, "_blank");
}
document.querySelector(".add").addEventListener("click", (openLocationInMap));

function CopyNumber(){
	navigator.clipboard.writeText
        ("+91 9142315603");
		alert("Phone Number Copied successfully!");
}
document.querySelector(".num").addEventListener("click", (CopyNumber));

function SendEmail(){
	URL = "mailto:av874559@gmail.com";
	window.open(URL, "_blank");
}
document.querySelector(".email").addEventListener("click", (SendEmail));

var progressBar = document.querySelector(".proBar1");
function updateProgress1(value){
	progressBar.style.width = value+"%";
    progressBar.style.transition = "width 1s ease-in-out";
}
updateProgress1(95);
var progressBar2 = document.querySelector(".proBar2");
function updateProgress2(value){
	progressBar2.style.width = value+"%";
    progressBar2.style.transition = "width 1s ease-in-out";
}
updateProgress2(80);
var progressBar3 = document.querySelector(".proBar3");
function updateProgress3(value){
	progressBar3.style.width = value+"%";
    progressBar3.style.transition = "width 1s ease-in-out";
}
updateProgress3(65);
var progressBar4 = document.querySelector(".proBar4");
function updateProgress4(value){
	progressBar4.style.width = value+"%";
    progressBar4.style.transition = "width 1s ease-in-out";
}
updateProgress4(75);
var progressBar5 = document.querySelector(".proBar5");
function updateProgress5(value){
	progressBar5.style.width = value+"%";
    progressBar5.style.transition = "width 1s ease-in-out";
}
updateProgress5(60);
var progressBar6 = document.querySelector(".proBar6");
function updateProgress6(value){
	progressBar6.style.width = value+"%";
    progressBar6.style.transition = "width 1s ease-in-out";
}
updateProgress6(75);
var progressBar7 = document.querySelector(".proBar7");
function updateProgress7(value){
	progressBar7.style.width = value+"%";
    progressBar7.style.transition = "width 1s ease-in-out";
}
updateProgress7(80);
var progressBar8 = document.querySelector(".proBar8");
function updateProgress8(value){
	progressBar8.style.width = value+"%";
    progressBar8.style.transition = "width 1s ease-in-out";
}
updateProgress8(75);
var progressBar9 = document.querySelector(".proBar9");
function updateProgress9(value){
	progressBar9.style.width = value+"%";
    progressBar9.style.transition = "width 1s ease-in-out";
}
updateProgress9(40);


const progressCircle1 = document.getElementById('progressCircle1');

    function updateCircularProgressBar(percentage) {
      progressCircle1.style.background = `conic-gradient(#be78ff ${percentage * 3.6}deg, #ddd ${percentage * 3.6}deg)`;
    }

    function transitionToTargetPercentage(targetPercentage) {
      let currentPercentage = 0;
      const increment = 1;
      const interval = setInterval(() => {
        currentPercentage += increment;
        updateCircularProgressBar(currentPercentage);
        if (currentPercentage >= targetPercentage) {
          clearInterval(interval);
        }
      }, 10);
    }
    transitionToTargetPercentage(90);

	const progressCircle2 = document.getElementById('progressCircle2');

    function updateCircularProgressBar2(percentage) {
      progressCircle2.style.background = `conic-gradient(#be78ff ${percentage * 3.6}deg, #ddd ${percentage * 3.6}deg)`;
    }

    function transitionToTargetPercentage2(targetPercentage2) {
      let currentPercentage2 = 0;
      const increment = 1;
      const interval = setInterval(() => {
        currentPercentage2 += increment;
        updateCircularProgressBar2(currentPercentage2);
        if (currentPercentage2 >= targetPercentage2) {
          clearInterval(interval);
        }
      }, 10);
    }
    transitionToTargetPercentage2(80);

	const progressCircle3 = document.getElementById('progressCircle3');

    function updateCircularProgressBar3(percentage) {
      progressCircle3.style.background = `conic-gradient(#be78ff ${percentage * 3.6}deg, #ddd ${percentage * 3.6}deg)`;
    }

    function transitionToTargetPercentage3(targetPercentage3) {
      let currentPercentage3 = 0;
      const increment = 1;
      const interval = setInterval(() => {
        currentPercentage3 += increment;
        updateCircularProgressBar3(currentPercentage3);
        if (currentPercentage3 >= targetPercentage3) {
          clearInterval(interval);
        }
      }, 10);
    }
    transitionToTargetPercentage3(75);

	const progressCircle4 = document.getElementById('progressCircle4');

    function updateCircularProgressBar4(percentage) {
      progressCircle4.style.background = `conic-gradient(#be78ff ${percentage * 3.6}deg, #ddd ${percentage * 3.6}deg)`;
    }

    function transitionToTargetPercentage4(targetPercentage4) {
      let currentPercentage4 = 0;
      const increment = 1;
      const interval = setInterval(() => {
        currentPercentage4 += increment;
        updateCircularProgressBar4(currentPercentage4);
        if (currentPercentage4 >= targetPercentage4) {
          clearInterval(interval);
        }
      }, 10);
    }
    transitionToTargetPercentage4(80);

