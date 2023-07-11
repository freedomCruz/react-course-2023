import { useState } from 'react'
import confetti from "canvas-confetti"  

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'

import './App.css'
 

function App() {
  console.log('render')
  
  const [board, setBoard ] = useState(() => {
    console.log('inicializar estado del board')
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  
  })
  
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) => (
    newBoard.every(square => square !== null)
  ) 
  
  const updateBoard = (index) => {

    if (board[index] || winner) return
    
// actualizar el tablero y el turno
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
   
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('board', newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    } 
  }

  
  return (
      <main className='board'>
        
        <h1>TIC TAC TOE</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>
        <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>            
            )
          })
        }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>

        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />  

      </main>
   
  )
}


export default App


