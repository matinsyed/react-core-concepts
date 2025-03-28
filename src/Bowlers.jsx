import { useState } from "react"
import Batsman from "./Batsman";

export default function Bowlers(){

    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(1);

    const handleOver = () =>{
        const updateBalls = balls+1;
        const updateOvers = overs+1;
        setBalls(updateBalls);
    }

    return(
        <p>Over: {overs},  Balls: {balls}</p>
    )
}