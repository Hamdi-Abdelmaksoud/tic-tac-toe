import { useState } from "react";
const initGameBoard=[
  [null, null, null],
  [null,null,null],
  [null,null,null]
];
export default function GameBoard(){
const [gameBoard, setGameBoard] = useState(initGameBoard);
function handleSelectedSquare(rowIndex,colIndex){
  setGameBoard((prevGameBoard)=>{
    //recomendation
    const updatedBoard =[...prevGameBoard.map(innerArray=>[...innerArray])];
updatedBoard[rowIndex][colIndex]='X';
return updatedBoard;
  });
}
  return ( 
  <ol id="game-board">
     {gameBoard.map((row,rowIndex)=>(
     <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol,colIndex)=>(
          <li key={colIndex}><button onClick={()=>handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
          ))}
      </ol>
      
       </li>
       ))}
  </ol> 
  )
}