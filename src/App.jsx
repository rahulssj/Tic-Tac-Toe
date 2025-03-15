import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations";
import GameOver from "./components/GameOver";
const initialgameboard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],

];

function App() {
  //const [isActive,setIsActive]=useState('X');
  const [turns,setTurns]=useState([]);
  const [players,setPlayers]=useState({
    'X':'Player 1',
    'O':'Player 2'
  }
  
  );
  
  let playerSymbol='X';
  let  derivedActiveState=(prevturns)=>{
 //   console.log(prevturns.length);
   // console.log(prevturns[0]?.player);
    if(prevturns.length>0 && prevturns[0].player=='X' ){
      playerSymbol='O';
    }  
  return playerSymbol;}
  const activePlayer=derivedActiveState(turns);  
let winner;
  let gameBoard=[...initialgameboard.map(arr=>[...arr])];
  for(const turn of turns){
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
  }
 for(const combination of WINNING_COMBINATIONS){
 // console.log(combination);
  const first=gameBoard[combination[0].row][combination[0].column];
  const second=gameBoard[combination[1].row][combination[1].column];
  const third=gameBoard[combination[2].row][combination[2].column];
  //console.log(first);
  //console.log(second);
  //console.log(third);
  
if(first&& first===second && first===third){
  winner=first;
} 
}
const onRematch=()=>{
  setTurns([]);
}
 const onSelectPlayer=(rowIndex,colIndex)=>{

//setIsActive((curActive)=> curActive==='X'?'O':'X');  
setTurns((prevturns)=>{
  derivedActiveState(prevturns);
  const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:playerSymbol},
    ...prevturns];
return updatedTurns;
});
}
let onChangePlayer=(playerSymbol,playerName)=>{
setPlayers((prevPlayers)=>{
  return{
  ...prevPlayers,
  [playerSymbol]:playerName
  }
});
}
let draw=turns.length===9 && !winner;
  return (
  
  <main>
<div id="game-container">
  <ol id="players" className="highlight-player">
<Player playername={players.X} playersymbol="X"  isActive={activePlayer==='X'}  onChangePlayer={onChangePlayer}/>
<Player playername={players.O} playersymbol="O" isActive={activePlayer==='O'} onChangePlayer={onChangePlayer}/>

  </ol>
  {(winner ||draw) && <GameOver winner={winner} onRestart={onRematch} playersName={players}/>}
<GameBoard activePlayer={playerSymbol} gameBoardArray={turns} onSelectPlayer={onSelectPlayer} board={gameBoard}/>
<Log turns={turns} />
</div>

  </main>
  )
}

export default App
