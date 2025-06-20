
import { useState } from "react"
import "./App.css"
import ScoreCard from "./components/scorecard/ScoreCard";
import ScoreCardOperations from "./components/scorecardoperations/ScoreCardOperations";
function App(){
 
   let[score,scoreFun]=useState(10);
   console.log("app component rendering",score)
   
  function increment(value){
    console.log("iam incrementing")
    score=score+value
    scoreFun(score)
    console.log("ubdated score",score)
  }
  // function incrementBy5(){
  //   console.log("iam incrementing5")
  //   score=score+5;
  //   scoreFun=(score)
  //   console.log("ubdating",score)
  // }

  return (
  <div>
    {/* <div className="scoreboard-container flex-center">
      <h1 className="score">{score}</h1>
    </div>
    <div className="flex-center">
    <button className="score-button" onClick={increment}>+1</button>
    </div> */}
        {/* <ScoreCardOperations incrementscore5={incrementBy5}/> */}
    <ScoreCard score={score}/>
    <ScoreCardOperations incrementscore={increment}/>
  </div>
 
  )
}


export default App
