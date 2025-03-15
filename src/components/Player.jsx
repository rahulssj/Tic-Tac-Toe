import { useState } from "react"

export default function Player({playername,playersymbol,isActive,onChangePlayer}){
const [isEdit,setEdit]=useState(false);
const [player,setPlayer]=useState(playername);
const handleEdit=()=>{
   // console.log(isEdit);
setEdit((edit)=>!edit);
}
const handleSave=()=>{
  console.log(player);
onChangePlayer(playersymbol,player);
setEdit(false);
}

const handlePlayer=(e)=>{
setPlayer(e.target.value);
}
//console.log(playersymbol+"::"+ isActive);
return(
    <>
    <li className={isActive?'active':undefined}>
  <span  className="player" >
  {!isEdit && <span className="player-name">{player}</span>} 
  {isEdit && <input type="text" className="player-name" value={player} onChange={handlePlayer}></input>} 
 
  <span className="player-symbol">{playersymbol}</span>
  </span> 
  {!isEdit && <button onClick={handleEdit}>Edit</button>}
  {isEdit && <button onClick={handleSave}>Save</button>}
  
</li>

    </>
)

}