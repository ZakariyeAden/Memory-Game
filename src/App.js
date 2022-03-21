import React,{useState} from 'react';
import {Cards , randomCardGenerator} from './components/CardGenerator'
function App() {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedcards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);


  function handleClick(e){
    const card = e.target.alt;
    if(clickedCards.includes(card)){
      if(score > highestScore){
        setHighestScore(score);
      }
      setClickedcards([]);
      setScore(0);
    }else {
      setClickedcards(clickedCards => [...clickedCards, card]);
      setScore(score + 1);
    }
    randomCardGenerator();
  }
  return (
    <div>
      <header>
        <h1>Memory Game</h1>
        <p>Click on image to play</p>
      </header>
      <Cards
        handleClick={handleClick}
        score={score}
        highestScore={highestScore}
      />
    </div>
  );
}

export default App;
