import { GridContainer, 
  TicTacToePageStyle, 
  StyledButton, 
  StyledItemThreeFive, 
  StyledItemOneSeven, 
  StyledItemFour, 
  WinStatus, 
  TicTacToeHeaderStyle} from "../../../styles/styledComponents"
import React from 'react'
import ticTacToeBg from "../../../assets/tictactoe_bg.jpg"

const TicTacToe = function() {
  const [winStatus, setWinStatus] = React.useState(false);
  const [turn, setTurn] = React.useState('X');
  const [grid, setGrid] = React.useState(['-', '-', '-', '-', '-', '-', '-', '-', '-']);
  const [colours, setColours] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const playerMove = (item) => {
    // Set the value of the new item
    if (grid[item] === '-' && !winStatus) {
      const newGrid = [...grid];
      newGrid[item] = turn;
      setGrid(newGrid);
    }
  }

  const changeColour = (itemI, itemJ, itemK) => {
    const newColours = [...colours];
    newColours[itemI] = 1;
    newColours[itemJ] = 1;
    newColours[itemK] = 1;
    setColours(newColours);
    setWinStatus(true);
    
    // Local storage
    let curWins = localStorage.getItem(turn);
    if (curWins === null) {
      curWins = 1;
    } else {
      curWins = parseInt(curWins) + 1
    }
    console.log(curWins);
    localStorage.setItem(turn, curWins);
  }

  React.useEffect(() => {
    if (grid[0] === turn && grid[1] === turn && grid[2] === turn) {
      changeColour(0, 1, 2);
    } else if (grid[3] === turn && grid[4] === turn && grid[5] === turn) {
      changeColour(3, 4, 5);
    } else if (grid[6] === turn && grid[7] === turn && grid[8] === turn) {
      changeColour(6, 7, 8);
    } else if (grid[0] === turn && grid[3] === turn && grid[6] === turn) {
      changeColour(0, 3, 6);
    } else if (grid[1] === turn && grid[4] === turn && grid[7] === turn) {
      changeColour(1, 4, 7);
    } else if (grid[2] === turn && grid[5] === turn && grid[8] === turn) {
      changeColour(2, 5, 8);
    } else if (grid[0] === turn && grid[4] === turn && grid[8] === turn) {
      changeColour(0, 4, 8);
    } else if (grid[2] === turn && grid[4] === turn && grid[6] === turn) {
      changeColour(2, 4, 6);
    } else {
      // Change who's turn it is
      if (turn === 'X') {
        setTurn('O');
      } else {
        setTurn('X');
      }
    }
  }, [grid]);

  return <div style={{ backgroundImage: `url(${ticTacToeBg})`, backgroundSize: 'cover', height: '100vh' }}>
     <TicTacToePageStyle>
      <TicTacToeHeaderStyle>
        <h1>Tic Tac Toe</h1>
      </TicTacToeHeaderStyle>
      <GridContainer>
        <StyledButton onClick={() => playerMove(0)} style={{ backgroundColor: colours[0] === 1 ? '#d4c1c4' : 'white' }}>{grid[0]}</StyledButton>
        <StyledItemOneSeven onClick={() => playerMove(1)} style={{ backgroundColor: colours[1] === 1 ? '#d4c1c4' : 'white' }}>{grid[1]}</StyledItemOneSeven>
        <StyledButton onClick={() => playerMove(2)} style={{ backgroundColor: colours[2] === 1 ? '#d4c1c4' : 'white' }}>{grid[2]}</StyledButton>
        <StyledItemThreeFive onClick={() => playerMove(3)} style={{ backgroundColor: colours[3] === 1 ? '#d4c1c4' : 'white' }}>{grid[3]}</StyledItemThreeFive>
        <StyledItemFour onClick={() => playerMove(4)} style={{ backgroundColor: colours[4] === 1 ? '#d4c1c4' : 'white' }}>{grid[4]}</StyledItemFour>
        <StyledItemThreeFive onClick={() => playerMove(5)} style={{ backgroundColor: colours[5] === 1 ? '#d4c1c4' : 'white' }}>{grid[5]}</StyledItemThreeFive>
        <StyledButton onClick={() => playerMove(6)} style={{ backgroundColor: colours[6] === 1 ? '#d4c1c4' : 'white' }}>{grid[6]}</StyledButton>
        <StyledItemOneSeven onClick={() => playerMove(7)} style={{ backgroundColor: colours[7] === 1 ? '#d4c1c4' : 'white' }}>{grid[7]}</StyledItemOneSeven>
        <StyledButton onClick={() => playerMove(8)} style={{ backgroundColor: colours[8] === 1 ? '#d4c1c4' : 'white' }}>{grid[8]}</StyledButton>
      </GridContainer>
      {winStatus === true ? (
        <WinStatus>Player {turn} Wins!</WinStatus>
      ) : <WinStatus>Player {turn}'s Turn</WinStatus> }
    </TicTacToePageStyle>
  </div>
}

export default TicTacToe