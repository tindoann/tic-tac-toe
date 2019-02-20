let clickCount = 0
let gameBoard
let playerClickCount = 0
const playerOne = 'x'
const playerTwo = 'o'
const winCombos = [
  ['one', 'two', 'three'],
  ['four', 'five', 'six'],
  ['seven', 'eight', 'nine'],
  ['one', 'four', 'seven'],
  ['two', 'five', 'eight'],
  ['three', 'six', 'nine'],
  ['one', 'five', 'nine'],
  ['three', 'five', 'seven']
]

const playerOneWinCondition = () => {
  if (
    gameBoard.one === 'x' &&
    gameBoard.two === 'x' &&
    gameBoard.three === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.four === 'x' &&
    gameBoard.five === 'x' &&
    gameBoard.six === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.seven === 'x' &&
    gameBoard.eight === 'x' &&
    gameBoard.nine === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.one === 'x' &&
    gameBoard.four === 'x' &&
    gameBoard.seven === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.two === 'x' &&
    gameBoard.five === 'x' &&
    gameBoard.eight === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.three === 'x' &&
    gameBoard.six === 'x' &&
    gameBoard.nine === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.one === 'x' &&
    gameBoard.five === 'x' &&
    gameBoard.nine === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }

  if (
    gameBoard.three === 'x' &&
    gameBoard.five === 'x' &&
    gameBoard.seven === 'x'
  ) {
    document.querySelector('.game-decision').textContent = 'Player One Wins!'
  }
}

const playerTwoWinCondition = () => {
  if (
    gameBoard.one === 'o' &&
    gameBoard.two === 'o' &&
    gameBoard.three === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.four === 'o' &&
    gameBoard.five === 'o' &&
    gameBoard.six === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.seven === 'o' &&
    gameBoard.eight === 'o' &&
    gameBoard.nine === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.one === 'o' &&
    gameBoard.four === 'o' &&
    gameBoard.seven === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.two === 'o' &&
    gameBoard.five === 'o' &&
    gameBoard.eight === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.three === 'o' &&
    gameBoard.six === 'o' &&
    gameBoard.nine === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.one === 'o' &&
    gameBoard.five === 'o' &&
    gameBoard.nine === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }

  if (
    gameBoard.three === 'o' &&
    gameBoard.five === 'o' &&
    gameBoard.seven === 'o'
  ) {
    document.querySelector('.game-decision').textContent = 'Player Two Wins!'
  }
}

let determineTie = () => {
  if (
    gameBoard.one &&
    gameBoard.two &&
    gameBoard.three &&
    gameBoard.four &&
    gameBoard.five &&
    gameBoard.six &&
    gameBoard.seven &&
    gameBoard.eight &&
    gameBoard.nine !== ''
  ) {
    document.querySelector('.game-decision').textContent = "It's a tie!"
  }
}

// const determineWinner = () => {
//   if (playerOneWinCondition) {
//     playerOneWinCondition()
//   } else if (playerTwoWinCondition) {
//     playerTwoWinCondition()
//   } else {
//     determineTie()
//   }
// }
const determineWinner = () => {
  playerOneWinCondition()
  playerTwoWinCondition()
  determineTie()
}

let box = document.querySelectorAll('.box')

let newGame = () => {
  gameBoard = Array.from(Array(9).keys())
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', playerClick)
  }
}

const playerClick = square => {
  if (playerClickCount === 0) {
    turn(square.target.id, playerOne)
    playerClickCount = 1
  } else {
    turn(square.target.id, playerTwo)
    playerClickCount = 0
  }
}

const turn = (squareID, player) => {
  gameBoard[squareID] = player
  document.getElementById(squareID).textContent = player
  document.getElementById(squareID).removeEventListener('click', playerClick)
  determineWinner()
}

const main = () => {
  document.querySelector('.board').addEventListener('click', () => {
    clickCount++
  })

  document.querySelector('.replay-button').addEventListener('click', () => {
    document.location = '/'
  })

  newGame()
}

document.addEventListener('DOMContentLoaded', main)