const questions = [
    {
        question: "Near a pedestrian crossing, when the pedestrians are waiting to cross the road, you should...",
        answer: [
            { text: "Speed up and pass the crossing quickly.", correct: false },
            { text: "Stop the vehicle and wait till the pedestrians cross the road and then proceed.", correct: true },
            { text: "Blow the horn and pass quickly.", correct: false },
            { text: "Stop and stand and see only what's going on.", correct: false }
        ]
    },
    {
        question: "You are approaching a narrow bridge, another vehicle is about to enter the bridge from opposite side you should...",
        answer: [
            { text: "Speed up and pass the bridge quickly.", correct: false },
            { text: "Wait till the other vehicle crosses the bridge and then proceed.", correct: true },
            { text: "Blow the horn and pass quickly.", correct: false },
            { text: "Stop and wait for the vehicle behind you.", correct: false }
        ]
    },
    {
        question: "When a vehicle is involved in an accident causing injury to any person, you should...",
        answer: [
            { text: "Leave the scene immediately.", correct: false },
            { text: "Take all reasonable steps to secure medical attention to the injured and report to the nearest police station within 24 hours.", correct: true },
            { text: "Wait for the police to arrive.", correct: false },
            { text: "Ignore and continue driving.", correct: false }
        ]
    },
    {
        question: "On a road designated as one way, you should...",
        answer: [
            { text: "Drive in reverse gear.", correct: false },
            { text: "Not drive in reverse gear.", correct: true },
            { text: "Drive on the left side.", correct: false },
            { text: "Drive on the right side.", correct: false }
        ]
    },
    {
        question: "You can overtake a vehicle in front...",
        answer: [
            { text: "Through the right side of that vehicle.", correct: true },
            { text: "Through the left side of that vehicle.", correct: false },
            { text: "From any side.", correct: false },
            { text: "By honking continuously.", correct: false }
        ]
    },
    {
        question: "When a vehicle approaches an unguarded railway level crossing, before crossing it, the driver shall...",
        answer: [
            { text: "Stop the vehicle on the left side of the road, get down from the vehicle, go to the railway track, and ensure that no train or trolley is coming from either side.", correct: true },
            { text: "Speed up and cross quickly.", correct: false },
            { text: "Honk continuously and cross.", correct: false },
            { text: "Cross without stopping.", correct: false }
        ]
    },
    {
        question: "How can you distinguish a transport vehicle?",
        answer: [
            { text: "By looking at the size of the vehicle.", correct: false },
            { text: "By looking at the number plate of the vehicle.", correct: true },
            { text: "By the color of the vehicle.", correct: false },
            { text: "By the number of wheels.", correct: false }
        ]
    },
    {
        question: "What does this sign indicate?",
        img: "sign_images/stop.png",
        answer: [
            { text: "Stop", correct: true },
            { text: "Yield", correct: false },
            { text: "No entry", correct: false },
            { text: "School zone", correct: false }
        ]
    },
    {
        question: "What does this sign indicate?",
        img: "path/to/yield-sign.png",
        answer: [
            { text: "Yield", correct: true },
            { text: "Stop", correct: false },
            { text: "No entry", correct: false },
            { text: "Pedestrian crossing", correct: false }
        ]
    },
    {
        question: "What does this sign indicate?",
        img: "path/to/no-entry-sign.png",
        answer: [
            { text: "No entry", correct: true },
            { text: "Stop", correct: false },
            { text: "Yield", correct: false },
            { text: "School zone", correct: false }
        ]
    },
    {
        question: "What does this sign indicate?",
        img: "path/to/pedestrian-crossing-sign.png",
        answer: [
            { text: "Pedestrian crossing", correct: true },
            { text: "Stop", correct: false },
            { text: "Yield", correct: false },
            { text: "No entry", correct: false }
        ]
    },
    {
        question: "What does this sign indicate?",
        img: "path/to/school-zone-sign.png",
        answer: [
            { text: "School zone", correct: true },
            { text: "Stop", correct: false },
            { text: "Yield", correct: false },
            { text: "No entry", correct: false }
        ]
    },
    {
        question: "Validity of learner's licence is...",
        answer: [
            { text: "6 Months", correct: true },
            { text: "1 Year", correct: false },
            { text: "3 Months", correct: false },
            { text: "9 Months", correct: false }
        ]
    },
    {
        question: "In a road without footpath, the pedestrians should...",
        answer: [
            { text: "Walk on the left side of the road.", correct: false },
            { text: "Walk on the right side of the road.", correct: true },
            { text: "Walk in the center of the road.", correct: false },
            { text: "Not walk on the road at all.", correct: false }
        ]
    },
    {
        question: "Free passage should be given to the following types of vehicles...",
        answer: [
            { text: "Ambulance and fire service vehicles.", correct: true },
            { text: "School buses.", correct: false },
            { text: "Police vehicles only.", correct: false },
            { text: "Public transport buses.", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQueston();
}

function showQueston(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' +(score)+' out of '+(questions.length)+'!'
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQueston();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{

    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
