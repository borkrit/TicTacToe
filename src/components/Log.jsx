import React from 'react'

 const Log = ({turns}) => {
  return (
    <ol id='log' >
        <li>Log list</li>
        
        {
            turns.map((turn) => <li key={`${turn.square.row}${turn.square.col}`} > {turn.player} selected {turn.square.row} {turn.square.col}   </li>)
        }
    </ol>
  )
}

export default Log;
