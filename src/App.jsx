import './App.css';
import quizQuestions from './Components/Question/Questions';
import {Quiz} from './Components/Quiz/Quiz';

function App() {

  return (
    <>

     <h1 style={{textAlign:'center'}}>Quiz Application</h1>
     <br /><br /><br />

     <Quiz quizQuestions={quizQuestions} />
    </>
  )
}

export default App;
