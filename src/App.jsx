import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import GameOver from "./components/GameOver";
const initGameBoard=[
  [null, null, null],
  [null,null,null],
  [null,null,null]
];
function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
  if(gameTurns.length >0 && gameTurns[0].player ==='X'){
    currentPlayer='O';
  }
  return currentPlayer;
  
}
function App() {
  const[gameTurns, setGameTurns]=useState([]);

  // const [activePlayer,setActivePlayer]=useState('X');
 const activePlayer=deriveActivePlayer(gameTurns);
 let gameBoard =[...initGameBoard.map(array=>[...array])];
 for(const turn of gameTurns){
   const {square,player} =turn;
   const{row,col}=square;
   gameBoard[row][col]=player;
 }
 let winner =null;
 for(const combination of WINNING_COMBINATIONS ){
  const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
  {
    winner=firstSquareSymbol;
  }
}
const hasDaraw=gameTurns.length=== 9 && !winner;
  function handleSelectedSquare(rowIndex, colIndex){
    // setActivePlayer((currentActivePlayer)=>currentActivePlayer ==='X'? 'O' : 'X' );
setGameTurns((prevTurns)=>{
 const currentPlayer=deriveActivePlayer(prevTurns);
  const updatedTurns =[{square:{row: rowIndex,col:colIndex},player:currentPlayer},...prevTurns,];
return updatedTurns;
});
  }
  function handleRestart(){
    setGameTurns([]);
  }
   return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
       <Player  initName="Player 1" symbol="X" isActive={activePlayer ==="X"}/>
       <Player  initName="Player 2" symbol="O" isActive={activePlayer ==="O"}/>
              
      </ol>
      {(winner || hasDaraw)&& (
      <GameOver winner={winner} onRestart={handleRestart} />)}
      <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
    </div>
    <Log turns={gameTurns}/>
  </main>;
}

export default App
