
import { useState } from "react"
import "./App.css"
import ScoreCard from "./components/scorecard/ScoreCard";
import ScoreCardOperations from "./components/scorecardoperations/ScoreCardOperations";
function App(){
 
   let[score,scoreFun]=useState(10);
   console.log("app component rendering",score)
   
  function increment(){
    console.log("iam incrementing")
    score=score+1
    scoreFun(score)
    console.log("ubdated score",score)
  }

  return (
  <div>
    {/* <div className="scoreboard-container flex-center">
      <h1 className="score">{score}</h1>
    </div>
    <div className="flex-center">
    <button className="score-button" onClick={increment}>+1</button>
    </div> */}
    <ScoreCard score={score}/>
    <ScoreCardOperations incrementscore={increment}/>
  </div>
 
  )
}


export default App
