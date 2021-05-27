
let options = document.querySelectorAll("label");
let submit = document.querySelector("button");
console.log(options);

class Quiz  {
    constructor(allQuestions = []) {
        this.allQuestions = allQuestions;
        this.score = 0;
        this.currentIndex = 0;
    }
        nextQuestion() {
            let question = new Question(this.currentIndex);
            this.allQuestions.push(question);
            this.currentIndex++;
            this.createUI();
            console.log(question);
        }

        
    }


    let q1 = new Quiz([]);
