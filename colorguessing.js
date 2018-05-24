var choice1color='rgb('+getRandomInt(0,255).toString()+','+getRandomInt(0,255).toString() + 
',' + getRandomInt(0,255).toString() + ')'

var choices= document.querySelectorAll('.choices');
choices.forEach(function(choice) {
	choice.style.background = 'rgb('+getRandomInt(0,255).toString()+','+getRandomInt(0,255).toString() + 
',' + getRandomInt(0,255).toString() + ')'
})

// choice1.style.background = choice1color;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var question=document.querySelector('#question')
question.textContent=choices[getRandomInt(0,5)].style.background

choices.forEach(function(choice) {
	choice.addEventListener('click', function(){
		if(question.textContent===this.style.background){
			alert('Correct Answer')
		}
		else {
			this.style.background='rgb(255,255,255)';
			this.style.border='0px';
			this.textContent= '';
		}
	})
})