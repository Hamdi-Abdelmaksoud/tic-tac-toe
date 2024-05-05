const initGameBoard=[
  [null, null, null],
  [null,null,null],
  [null,null,null]
];
export default function GameBoard({onSelectSquare, turns }){
  let gameBoard =initGameBoard;
  for(const turn of turns){
    const {square,player} =turn;
    const{row,col}=square;
    gameBoard[row][col]=player;
  }
// const [gameBoard, setGameBoard] = useState(initGameBoard);
// function handleSelectedSquare(rowIndex,colIndex){
//   setGameBoard((prevGameBoard)=>{
//     //recomendation
//     const updatedBoard =[...prevGameBoard.map(innerArray=>[...innerArray])];
// updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
// return updatedBoard;
//   });
//   onSelectSquare();
// }
  return ( 
  <ol id="game-board">
     {gameBoard.map((row,rowIndex)=>(
     <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol,colIndex)=>(
          <li key={colIndex}>
            <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>
          ))}
      </ol>
      
       </li>
       ))}
  </ol> 
  )
}