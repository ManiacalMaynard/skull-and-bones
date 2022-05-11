console.log('Round two!') // habit at this point, just shows me the script loaded, safely ignore =P

// Array of all possible win states indexes for winState() comparison. 
const gameWinStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// factory function to create player object for reference from intro modal
const player = (playerName, playerSymbol) => {
  const getPlayerSymbol = () => {
    return playerSymbol
  }
  const getPlayerName = () => {
    return playerName
  }
  return { getPlayerName, getPlayerSymbol }
};

// Gameboard Object stores the gameboard content as an array and all other items related
const gameBoard = (() => {
  // Function that sets Player Portrait to their symbol and sets AI portrait to opposite symbol
  const playerOneSymbol = document.getElementById('portrait-one')
  const playerTwoSymbol = document.getElementById('portrait-two')
  // Store gameboard contents as an array
  let squareContent = ['O', 'X', '-', '-', 'O', '-', '-', '-', '-']
  // Create the gameboard into #game-board with a div for each square with squareContent index items
  const createBoard = () => {
    const board = document.getElementById('game-board')
    squareContent.forEach( e => {
      let square = document.createElement('div')
      square.innerText = e
      board.appendChild(square)
    })
  }
  createBoard()
  // Function allowing players to mark their symbol on the board, checking for emptiness
  // Function that adds Reset / Play Again button
})();

// Game Object that controls the game flow
  // Function for player to choose their symbol - intro modal
  // Function that selects who goes first, player or AI randomly
  // Function that indicates turn order visually on the game board
  // Function that AI uses for choosing (random or minimax)
  // winState() function to check for a win state or tie and end the game after each play
  // Game over display with Winner Name or It's a Tie!



// Rules Modal logic and DOM stuff