import React,{useState} from "react"
import "./joke_gene.css"



const JokesList=[
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
];
export const Generator=()=>{

const[Joke,setJoke]=useState("Want to here a joke?")
const handleJoke=()=>{
    const Random=Math.floor(Math.random ()*JokesList.length)
    setJoke(JokesList[Random]);
}

return(
    <div>
    <h1>JOKE TIME !!</h1>
    <div>
<p className="joke">{Joke}</p>
    </div>
    <button className="bnt" onClick={handleJoke}>Click Me</button>
    </div>
)
}
export default Generator