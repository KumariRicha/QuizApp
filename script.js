const quizData = [
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById()",
    b: "getElementByClassName()",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    a: "Both the datatype and the result of the expression are compared.",
    b: "Only the datatype of the expression is compared.",
    c: "Only the value of the expression is compared.",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    correct: "a",
  },
  {
    question:
      "When an operators value is NULL, the typeof returned by the unary operator is:",
    a: "undefined",
    b: "object",
    c: "Boolean",
    d: "integer",
    correct: "b",
  },
  {
    question: "What does the Javascript 'debugger' statement do?",
    a: "It will debug all the errors in the program at runtime.",
    b: "It will debug error in the current statement if any.",
    c: "It acts as a breakpoint in a program.",
    d: "All of the above.",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
// improv: no. question selector shoud be based on no. of options based on quizData object;

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswrrs();
  const currentQuizData = quizData[currentQuiz];
  questionEls.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswrrs() {
  answerEls.forEach(ans => (ans.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach(ans => {
    if (ans.checked) {
        answer = ans.id;
    }
  });
  return answer
}
submitBtn.addEventListener("click", () => {
  const ans = getSelected();
  if(ans && ans === quizData[currentQuiz].correct){
      score++;
  }
  currentQuiz++;
  if(currentQuiz<quizData.length){
      loadQuiz()
  }else{
      quiz.innerHTML =`<h2>You answered ${score}/${quizData.length} questions correctly. </h2>
      <button onclick = "location.reload()">Reload<button>
      `
  }
});
