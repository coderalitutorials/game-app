
import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";



function App() {
  const [game, setGame] = useState(false)

  const toggleGame = ()=>{
    setGame((prev) => !prev)
  }
  return (
    <>
       {
        game? <GamePlay/> : <StartGame
        toggle={toggleGame}
        />
       }
    </>
  );
}

export default App;
