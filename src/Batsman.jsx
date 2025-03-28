import { useState } from "react"
import Bowlers from "./Bowlers"


export default function Batsman() {

    const [runs, setRuns] = useState(0)
    const [fours, setFours] = useState(0)
    const [sixes, setSixes] = useState(0)

    const handleSingleRun = () => {
        const updateSingle = runs + 1;
        setRuns(updateSingle);
    }

    const handleFourRun = () => {
        const updateRuns = runs + 4;
        const updateFours = fours + 1;
        setRuns(updateRuns);
        setFours(updateFours);
    }

    const handleSixRun = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setRuns(updateRuns);
        setSixes(updateSixes);
    }

    return (
        <div>
            
            <h3>Bangladeshi Batsman: </h3>
            {
                fours>0 && <h4>Number of Fours: {fours}</h4>
            }
            
            {
                sixes>0 && <h4>Number of Sixes: {sixes}</h4>
            }

            <h1>Total Score: {runs} </h1>
            <button onClick={handleSingleRun}>Single Run</button>
            <button onClick={handleFourRun}>Fours</button>
            <button onClick={handleSixRun}>Sixes</button>
        </div>
    )
}