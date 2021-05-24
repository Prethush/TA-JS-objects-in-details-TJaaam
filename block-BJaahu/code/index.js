
 //Prototypal pattern
 let questionMethods = {
     isCorrectAnswer(index) {
         return this.correctAnswerIndex === index;

     },
     getCorrectAnswer() {
         return this.options[this.correctAnswerIndex];
     }
 }
 function createQuestion(title, options, correctAnswerIndex) {
     let obj = Object.create(questionMethods);
     obj.title = title;
     obj.options = options;
     obj.correctAnswerIndex = correctAnswerIndex;
     return obj;
 }
 //Pseudo Classical pattern
 function Question(title, options, correctAnswerIndex) {
     this.title = title;
     this.options = options;
     this.correctAnswerIndex = correctAnswerIndex;
 }
 Question.prototype = {
     isCorrectAnswer(index) {
         return this.correctAnswerIndex === index;
     },
     getCorrectAnswer(){
         return this.options[this.correctAnswerIndex];
     }
 }
 //Class Pattern
 class Question {
     constructor(title, options, correctAnswerIndex) {
         this.title = title;
         this.options = options;
         this.correctAnswerIndex = correctAnswerIndex;
     }
     isCorrectAnswer(index) {
         return this.correctAnswerIndex === index;
     }
     getCorrectAnswer() {
         return this.options[this.correctAnswerIndex];
     }
 }


 let firstQuestion = new Question("Where is the capital of Spain", ["Madrid", "Barcelona", "Sevilla", "Las Palmas"], 0);

 let secondQuestion = new Question("Where is the capital od USA", ["New York", "California", "New Jersey", "Washington DC"], 3);