let quizElm = document.querySelector(".quiz");
let previousBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let showResult = document.querySelector(".show-result");

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isCorrect(answer) {
        return this.options[this.correctAnswerIndex] === answer;
    }

    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}


class Quiz {

    constructor(questions = [], score = 0) {
        this.questions = questions;
        this.score = score;
        this.activeIndex = 0;
    }

    incrementScore() {
        this.score += 1;
    }

    nextQuestion() {
        this.activeIndex += 1;
        this.createUI();
    }

    prevQusetion() {
        this.activeIndex -= 1;
        this.createUI();
    }
    addQuestion(title, options, answerIndex) {
        let question = new Question(title, options, answerIndex);
        this.questions.push(question);
    }

    handleButtons() {
        if(this.activeIndex === 0) {
            previousBtn.style.visibility = "hidden";
        } else if(this.activeIndex === this.questions.length - 1) {
            nextBtn.style.visibility = "hidden";
            showResult.style.visibility = "visible";
        }else {
            previousBtn.style.visibility = "visible";
            nextBtn.style.visibility = "visible";
            showResult.style.visibility = "hidden";
        }
    }

    createUI() {
        quizElm.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];
        
        let form = document.createElement("form");
       
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = activeQuestion.  title;
        let optionsElm = document.createElement("div");
        let submit = document.createElement("input");
        submit.type = "submit";

        this.handleButtons();

        activeQuestion.options.forEach((option, index) => {
            let div = document.createElement("div");
            let input = document.createElement("input");
            
            input.id = `option-${index}`;
            input.type = "radio";
            input.name = "options";
            input.classList.add("form-control");
             let label = document.createElement("label");
             
             label.setAttribute("for", `option-${index}`);
             label.innerText = option;
             form.addEventListener("submit", (event) => {
                event.preventDefault();
                if(input.checked) {
                    if(activeQuestion.isCorrect(label.innerText)) {
                        this.incrementScore()
                        
                    }
                }
            })
             div.append(input, label);
             optionsElm.append(div);
             
        })
       
        fieldset.append(legend, optionsElm, submit);
        form.append(fieldset);
        quizElm.append(form);
    }
}


function init() {
    let quiz = new Quiz();
    quizCollection.forEach((question) => {
        quiz.addQuestion(question.title, question.options, question.answer);
    })

    quiz.createUI();


    previousBtn.addEventListener("click", quiz.prevQusetion.bind(quiz));
    nextBtn.addEventListener("click", quiz.nextQuestion.bind(quiz));

    showResult.addEventListener("click", () => {
        alert(`Your score is ${quiz.score}`);
    });
}

init();
