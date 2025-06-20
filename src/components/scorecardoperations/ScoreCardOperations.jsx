import "./ScoreCardOperations.css"
function ScoreCardOperations(props){
console.log("score card operation component ",props)
const{incrementscore}=props;

// function incrementByOne(){
//     incrementscore(1);
// }
    return(
        
     <div className="flex-center">
    <button className="score-button" onClick={()=>
       incrementscore(1)
    }>+1</button>
    
     <button className="score-button" onClick={function(){
        incrementscore(5)
     }}>+5</button>

     <button className="score-button" onClick={function(){
        incrementscore(-5)
     }}>-5</button>    

</div>
    )
}
export default ScoreCardOperations