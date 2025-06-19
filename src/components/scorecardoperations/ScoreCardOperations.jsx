import "./ScoreCardOperations.css"
function ScoreCardOperations(props){
console.log("score card operation component ",props)
const{incrementscore}=props;
    return(
     <div className="flex-center">
    <button className="score-button" onClick={incrementscore}>+1</button>
    </div>

    )
}
export default ScoreCardOperations