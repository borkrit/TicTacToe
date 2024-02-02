import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";
import { deriveActivePlayer, deriveWinner,deriveGameBoard } from "./helpers/index.js";
import { PLAYERS } from "./constant/index.js";




function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gamesTurns, setGamesTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gamesTurns);

  const board = deriveGameBoard(gamesTurns)
  

  const winner = deriveWinner(board,players);

  const hasDraw = gamesTurns.length === 9 && !winner


  function handleSelect(rowIndex, colIndex) {
    setGamesTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleReset(){
    setGamesTurns([]);
  }

  function handlePlayerChangeName (symbol, newName) {
    setPlayers((prevState)=> { return {...prevState, [symbol]:newName} } )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          
          { Object.keys(players).map((player)=>(
            <Player
            namePlayer={players[player]}
            symbol={player}
            activePlayer={activePlayer}
            changeName={handlePlayerChangeName}
          />
          ))  }
         
        </ol>
        <GameBoard handleSelect={handleSelect} board={board} />
        {(winner || hasDraw) && <GameOver winner={winner} reloadGame={handleReset} />}
      </div>

      <Log turns={gamesTurns} />
    </main>
  );
}

export default App;
