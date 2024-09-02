import { useState } from "react";
import LudoBtn from "./LudoBtn"


function LudoBtnTab(color){
    let [moves, setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0})
    function increaseCount(color){
       
        setMoves((prevMoves)=>({
           ...prevMoves,
           [color] : prevMoves[color]+1,

        }))
     
    }
    console.log(moves.blue+1);
    return (
        <>
        <LudoBtn title={"blue btn"} btnName={"blue"} increaseCount={()=>increaseCount("blue")} count ={moves.blue} />
        <LudoBtn title={"red btn"} btnName={"red"} increaseCount={()=>increaseCount("red")}  count ={moves.red}/>
        <LudoBtn title={"yellow btn"} btnName={"yellow"} increaseCount={()=>increaseCount("yellow")}  count ={moves.yellow}/>
        <LudoBtn title={"green btn"} btnName={"green"} increaseCount={()=>increaseCount("green")}  count ={moves.green}/>
        </>

    )
}
export default LudoBtnTab;