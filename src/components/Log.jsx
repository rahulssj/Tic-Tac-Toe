export default function Log({turns}){



    return(
        <ol>
            {turns.map((turn)=><li key={`${turn.square.row}${turn.square.col}`}>Player {turn.player} ,Selected {turn.square.row} : {turn.square.col} </li>)}
            

        </ol>

    )
}