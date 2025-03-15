export default function GameOver({winner,onRestart,playersName}){
console.log(playersName[winner]);
console.log(winner);

    return(
<div id="game-over">
<h2>Game Over !</h2>
{winner&&<p>{playersName[winner]} won!</p>}
{!winner &&<p>it is Draw!</p>}
<button onClick={onRestart}>Rematch!</button>
</div>
    );
}