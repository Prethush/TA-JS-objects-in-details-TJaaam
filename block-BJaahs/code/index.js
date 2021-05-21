//Without object

  let title = "Where is the capital of Jordan";
  let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
  let correctAnswerIndex = 1;
  function isCorrectAnswer(index) {
      return index === correctAnswerIndex ? true : false;
  }
  function getCorrectAnswer() {
      return options[correctAnswerIndex];
  }

// //Using object

  let obj = {
      title: "Where is the capital of Jordan",
      options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
      correctAnswerIndex: 1,
      isCorrectAnswer(index) {
          return obj.correctAnswerIndex === index ? true : false;
      },
      getCorrectAnswer() {
          return obj.options[obj.correctAnswerIndex];
      }
  }

// //Using function to create obj 

  function quiz(title, options, correctAnswerIndex) {
      let obj = {};
      obj.title = title;
      obj.options = options;
      obj.correctAnswerIndex = correctAnswerIndex;
      obj.isCorrectAnswer = function(index) {
          return obj.correctAnswerIndex === index ? true : false;
      }
      obj.getCorrectAnswer = function() {
          return obj.options[obj.correctAnswerIndex];
      }
      return obj;
  }

//Using this keyword

function quiz(title, options, correctAnswerIndex) {

    let obj = {};
    obj.title = title
    obj.options = options
    obj.correctAnswerIndex = correctAnswerIndex;

    obj.isCorrectAnswer = function(index) {
        return this.correctAnswerIndex === index ? true : false;
    }

    obj.getCorrectAnswer = function() {
        return this.options[this.correctAnswerIndex];
    }

    return obj;
}

//Creating two objects


let firstQuestion = quiz("Capital of Spain", ["Madrid", "Sevilla", "Barcelona", "Las Palmas"], 0);
let secondQuestion = quiz("Capital of USA", ["New York", "Washington DC", "Texas", "California"], 1);




