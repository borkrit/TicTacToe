import React from 'react'

const GameOver = ({winner,reloadGame}) => {
  return (
    <div id='game-over' >
        <h2>Game over </h2>
        {winner && <p> {winner} won </p>}
        {!winner && <p> its a Draw </p>}
        <button onClick={reloadGame} >New game</button>
    </div>
  )
}

export default GameOver