//INDEX PAGE STYLING 
	//QUESTION + ANSWER STORE
	//title of the quiz app	
$("#title").text(QUIZ.name);
	//description info underneath the title 
$("#description").text(QUIZ.description);

//Initializing the question in the quiz
	let currentQ = 0;
	let score = 0;

//DISPLAY QUESTION + ANSWER OPTIONS
$("#question").text(STORE[currentQ].text);

//generate question + answers HTML -looping thru the question + answer data
function displayQuestion() {
	let answers = "";
	for (let i=0; i<STORE[currentQ].answers.length; i++) {
    answers += `<div class='answer-list'><fieldset><input class='answerOption' type='radio' name='answer' value=${i} required />${STORE[currentQ].answers[i]} </fieldset></div><br>`;
  }
  $("#answer").append(answers)
	$("#answer").append(`<button type="submit" class="submitButton" style="margin-top: -150%;">Submit</button>`)
}

displayQuestion();

//submit answer 

//show results



//display feedback - has next button to get to next question

//startquiz
function start () {
	$('.main').on('click', '#enter', function (event) {
		$('.main').remove();
		$('#quiz').css('display', 'block');
	});
}

/*

//evaluate answer function - increment score 
function select(){
	$('form').on('click', 'submit' function (event)){
	event.preventDefault();
	let selected = $('input:checked');
	let answer = selected.val();
	}
	});
}
*/
							
//RUN QUIZ FUNCTIONS
function createQuiz () {
  start();
	select();
}

$(createQuiz);

