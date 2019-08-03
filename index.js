//INDEX PAGE STYLING 
const QUIZ = {
	name: "What is the Right Website Builder CMS For This Entrepreneur Quiz ",
	description: "What do you know about Content Management Systems? Learn about the website builder based on your needs, by understanding the best type of websites for the needs of others"};
	//QUESTION + ANSWER STORE
	//QUESTION + ANSWER STORE
	//title of the quiz app	
$("#title").text(QUIZ.name);
	//description info underneath the title 
$("#description").text(QUIZ.description);

//Initializing the question in the quiz
	let currentQ = 0;
	let score = 0;

//startquiz
function start () {
	$('.main').on('click', '#enter', function (event) {
		$('.main').remove();
		$('#quiz').css('display', 'inline-block');
		$('.score-keeper').css('display', 'inline-block');
	});
}


//click on answer list
function checked () {
	$('[data-labelfor]').click(function () {
	$('#' + $(this).attr("data-labelfor")).prop('checked',
		function(i, oldVal) {return !oldVal; });
	});
	}


//generate question + answers HTML -looping thru the question + answer data
function displayQuestion() {
//DISPLAY QUESTION + ANSWER OPTIONS
	$("#question").text(STORE[currentQ].text);
	let answers = "";
	for (let i = 0; i < STORE[currentQ].answers.length; i++) {
    
   	 	answers += `<div class='answer-list'><fieldset data-labelfor= ${i}> <label for=${i}> ${STORE[currentQ].answers[i]} </label> <input id=${i} type='radio' name='answer' value='${STORE[currentQ].answers[i]}' required="required" /></fieldset></div><br>`;
  		}
  		$("#answer").empty();
  		$("#answer").append(answers);
  		$("#answer").append(`<button type="submit" class="submit" style="margin-top: 2%;">Submit</button>`);
}

displayQuestion();



//update score UI 
function updateQuestionNumber (){
	currentQ ++;
	$('.question-number').text(currentQ);
}


//evaluate answer function - increment score 
function select() {
	$('form').on('click', 'button.submit', function (){
	event.preventDefault();
	let selected = $('input:checked');
	let answer = selected.val();
		console.log(answer);
	let correct = `${STORE[currentQ].correctName}`;
	if (answer === correct){
		selected.parent().addClass('correct');
		answeredCorrect();
		updateQuestionNumber();
		} else {
			selected.parent().addClass('incorrect');	
			answeredIncorrect ();
			updateQuestionNumber ();
			}
		});
	}


//display feedback - has next button to get to next question
//correct answer
function feedbackC () {
	let rightAnswer = `${STORE[currentQ].correctName}`;
	$('#answer').html(`<div class='correct'> <p> You are correct! <br/> Like you said <span style="color: orange;"> ${rightAnswer} </span </p> </div><button type=button class="nextButton">Next</button>`);
}

//update score UI 
function updateScore (){
	score ++;
	$('.score-number').text(score);
}

//update question #

function answeredCorrect () {
	feedbackC ();
	updateScore ();
}

//incorrect answer
function feedbackI (){
	let rightAnswer = `${STORE[currentQ].correctName}`;
	$('#answer').html(`<div class="incorrect">
		<p> This was tough, but you got it wrong. </br>
	The correct answer is: <span style="color: orange;"> ${rightAnswer} </span>
	</div><button type=button class="nextButton">Next</button>`);
}

function answeredIncorrect () {
	feedbackI ();
}



//restart quiz function
function restartQuiz () {
	$('.main').on('click', '.restartButton', function (event){
		location.reload();
	});
}

//results page
function displayResults () {
	if (currentQ === 5){
	$("#question").remove();
	$('#answer').html(`
	<h2> Based on your answers, your understanding of web builders is a ${score} /5 </h2>
	<p id="cms-info">Here is more information about the website builder, we think is best for you and why, based off of the answers you provided: <a href="queenscript.com"> More Information On Web Sites & Content Management Systems</a></p> <button class="restartButton">Restart Quiz</button>
`);
}
}

displayResults ();

console.log(displayResults());

//next question
//what happens when the user clicks next
function nextQuestion () {
  $('#answer').on('click', '.nextButton', function () {
    if (currentQ < STORE.length) {
			displayQuestion();
		} else {
			displayResults();
		}
  });
}
//show results


			
//RUN QUIZ FUNCTIONS
function createQuiz () {
	
	displayResults();
  	start();
	select();
	nextQuestion();
	restartQuiz();
	displayQuestion();
	//document.getElementsByClassName("answer-list").required = true;

}

$(createQuiz);

