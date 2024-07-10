import React, { useState } from 'react';
import './Quiz.css';
import { Result } from '../Result/Result';

export const Quiz = ({ quizQuestions }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questionTitle, options, correctAnswer } = quizQuestions[currentQuestion];
  const [answerIndex, setAnswerIndex] = useState(null);
  const [radioBtnState, setRadioBtnState] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);


  let handleAnswerClick = (singleOption, index) => {
    setAnswerIndex(index);

    if (singleOption === correctAnswer) {
      setScore(score + 1);
    }

  }

  let handleRadioChange = (e) => {
    setRadioBtnState(e.target.value); // set value " on "
    console.log("rstate :" , radioBtnState);
}

  let handleNextQuestion = () => {
    setAnswerIndex(null);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      setShowScore(true);
      setQuizCompleted(true);
    }
  }


  return (
    <div>
      {/* Current Question Title */}
      <h1 className='questionTitle'>{questionTitle}</h1>

      {/* Current Question Options */}
      <ul className='answer_list'>
        {options.map((singleOption, index) => (

          <label className='my_label' htmlFor={`singleOption-${index}`} key={index}>
            <input
              className=''
              type="radio"
              id={`singleOption-${index}`}
              name='answer'
              onChange={handleRadioChange}
              onClick={() => {
                handleAnswerClick(singleOption, index)
              }}
              checked={answerIndex === index}
              disabled={quizCompleted}
            />

            <span className="options">{singleOption}</span><br />
          </label>
        ))}
      </ul>

      {/* Button for Next Question */}
      <div className='nextBtnContainer'>
        <button
          className='nextBtn'
          onClick={handleNextQuestion}
          disabled={answerIndex === null}>Next</button>
      </div>

      <div className='resultContainer'>
        {
          (showScore) ? <Result score={score}/>:""
        }
      </div>
    </div>
  )
}
