import { useEffect, useState } from "react";


export default function GameBoard({activePlayer,gameBoardArray,onSelectPlayer,board}){
   // const [gameBoard,setGameBoard]=useState(initialgameboard);
   // function handleSelectSquare(rowIndex,colIndex){
   //setGameBoard((prevGameBoard)=>{
     // const updatedGameBoard=[...prevGameBoard.map((innerrow)=>[...innerrow])];
       //updatedGameBoard[rowIndex][colIndex]=activePlayer;
       //return updatedGameBoard;
   //});
  // onSelectPlayer();
  // }
  useEffect(()=>{
    //console.log(gameBoardArray);
  })
    return(

    <ol id="game-board">
        {board.map((row,rowIndex)=>   <li key={rowIndex}>
                <ol>
                {row.map((col,colIndex)=>    <li key={colIndex}>
                        <button onClick={()=>onSelectPlayer(rowIndex,colIndex)} disabled={col!==null?true:false}>{col}</button></li>
                )}
                </ol>
                 </li>
                 
        )}
       
    </ol>
);


}