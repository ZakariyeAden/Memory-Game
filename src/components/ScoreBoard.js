import React from 'react'

function ScoreBoard(props) {
  return (
    <div className="scoreTracker">
      <h3>Score:{props.cScore}</h3>
      <h3>Highest Score:{props.hScore}</h3>
    </div>
  )
}

export default ScoreBoard