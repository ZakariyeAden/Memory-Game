import React from 'react'
import ScoreBoard from './ScoreBoard'
import Images from '../Card'


const cardsArray = [
  [
    Images.Bungo,
    "Bungo Stray Dogs"
  ],
  [
    Images.Demon,
    "Demon"
  ],
  [
    Images.Hezuko,
    "Hezuko"
  ],
  [
    Images.HunterX,
    "Hunter X Side Character"
  ],
  [
    Images.JujutsuEne,
    "Jujutsu Kaisen"
  ],
  [
    Images.JujutsuKaisen,
    "Gojo"
  ],
  [
    Images.Naruto,
    "Naruto Uzamaki"
  ],
  [
    Images.OnePunch,
    "One Punch"
  ],
  [
    Images.SasukeUchiha,
    "Sasuke Uchiha"
  ],
  [
    Images.Slayer,
    "Tanjiro"
  ],
];

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}


function randomCardGenerator(){
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let index = getRandomInt(0,10);
    let img = card.childNodes[0];
    let description = card.childNodes[1];
    description.textContent = cardsArray[index][1];
  });
}
function Cards(props) {
  return (
    <div className="game">
    <ScoreBoard cScore={props.score} hScore={props.highestScore} />
      <div className="cards">
        <div className="card" onClick={props.handleClick}>
          <img src={Images.Bungo} alt={cardsArray[0][1]}/>
          <span>Bungo Stray Dogs</span>
        </div>

        <div className="card" onClick={props.handleClick}>
          <img src={Images.Demon} alt={cardsArray[1][1]}/>
          <span>Demon</span>
        </div>

        <div className="card" onClick={props.handleClick}>
          <img src={Images.Hezuko} alt={cardsArray[2][1]}/>
          <span>Hezuko</span>
        </div>

        <div className="card" onClick={props.handleClick}>
          <img src={Images.HunterX} alt={cardsArray[3][1]} />
          <span>Hunter X Side Character</span>
        </div>

      </div>
    </div>
  );
}

export {Cards , randomCardGenerator}