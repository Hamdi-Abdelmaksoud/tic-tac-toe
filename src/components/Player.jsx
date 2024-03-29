import { useState } from "react";
export default function Player({initName, symbol}){

  const [isEditing,setIsEditing]=useState(false);
  const[playerName, setPlayerName]=useState(initName);
  function handleEditClick(){
    // setIsEditing(!isEditing); 
    setIsEditing((editing)=>!editing)//recomendation

  }
  function handleChange(event){
    setPlayerName(event.target.value);
  }
  let editablePlayerName =<span className="palyer-name">{playerName}</span>
  if (isEditing === true) {
editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>;
  }
  return(
  <li>
  <span className="player">
    {editablePlayerName}
    <span className="player-symbol">{symbol}</span>
  </span>
  <button onClick={handleEditClick}>{isEditing ?  'Save' :'Edit'}</button>
</li>
 );
}