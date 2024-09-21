import React, { useState } from 'react'
import QuestionList from './QuestionList' 
//import QuizCSS from './Quiz.css'
export default function Quiz() {
  const questions =[
    {
      questions:"what is react?",
      options: ["CSS Framework", "React Library", "React Framework", "testing tool"],
      answer: "React Library"
    },
    {
      questions:"use of vercel?",
      options: ["frontend", "backend", "both frontend & backend ", "none of these"],
      answer: "4"
    }
  ]
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const handleClick= (option) => {
    setCurrentAnswer(option)
    if(option === questions[currentQuestionIndex].answer){
      setScore(score+1)
    }
  }
  const handleNextQuestion = ()=>{
    setcurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }
  return (
    <div>
      {currentQuestionIndex < questions.length ?              <div>
          <QuestionList question={questions[currentQuestionIndex].questions}
          options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}/>
          <button disabled={currentAnswer === null} className={currentAnswer === null ?'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
         </div> : <div>your score is {score}</div>}
    </div>
    
  )
}
