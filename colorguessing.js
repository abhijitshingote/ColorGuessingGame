var choices= document.querySelectorAll('.choices');
var question=document.querySelector('#question');
var newgame=document.querySelector('.newgame');

function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

function initialize_game(){

	choices.forEach(function(choice) {
		choice.style.background = 'rgb('+getRandomInt(0,255).toString()+','+getRandomInt(0,255).toString() + 
	',' + getRandomInt(0,255).toString() + ')';
		choice.classList.remove('incorrectanswer');
		choice.classList.add('choices');
	})
	question.textContent=choices[getRandomInt(0,5)].style.background.toUpperCase();
	}

newgame.addEventListener('click', function(){
	initialize_game();
})

function correct_answer() {
		alert('Correct Answer');
		initialize_game();
}
function incorrect_answer(o) {
		o.classList.add('incorrectanswer');
		o.style.background='rgba(255,255,255)';
}

initialize_game();

choices.forEach(function(choice) {
	choice.addEventListener('click', function(){

		if(question.textContent===this.style.background.toUpperCase()){
			correct_answer();
			console.log('correctanswer');
		}
		else {
			incorrect_answer(this);

		}
	})
})