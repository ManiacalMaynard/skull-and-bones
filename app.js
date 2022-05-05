console.log('Behold mortals, a donut!') // habit at this point, just shows me the script loaded, safely ignore =P

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

// build an intro screen with player symbol choice to start the game, this may eventually include much more (see README.md). Also serves as a reset point for playAgain()

// Function to grab the player symbol selection value from start screen and set it to a global variable
function createPlayer(name, symbol) {
  return {
    name,
    symbol,
  }
}
const playerOne = createPlayer(name, symbol)

// Function to decide randomly who goes first: player or computer. Sets global variable "whosTurn" for use with winStat(). Also displays who's turn on the game board with some className
function whosFirst() {
  let who = Math.floor(Math.random() * 2);
  who === 0 ? playerTurn = 0 : playerTurn = 1 ; // this might be better firing either playerPlay() or computerPlay() instead
};

// Builder function that populates the gameBoard div with 9 square divs wihtin, each with 0-8 as IDs and filled with the strings from the original array as it changes
function buildGameBoard() {
  let gameState = [ '', 'x', '', 'o', '', '', '', '', '' ]; //new Array(9).fill(null)
  // forEach item in gameState build a div with index for ID, easy!
};

// Player's turn function to check square is open and set symbol if so, error message if not. 
function playerPlay() {
  // animation for "your turn!"
  // something this.innerText &&
  winState()
  computerPlay()
};

// Computer logic function to choose a random open square after a short delay. May also need to turn off playerPlay functionality temporarily
function computerPlay() {
  // could use a short delay for feel, animation "My turn matey!"
  // build list of open squares by id, rando one, fill it
  winState()
};

// Win state check function scans each gameWinStates array of indexes for the same "current player" symbol and returns true if match found. Ex: checks index 0,1,2 for "X" if true win, if not checks 3,4,5... etc
function winState() {
  // whole lotta' codin going on
};

// Play again function to reset original array to empty and fires the build gameBoard function
function playAgain() {
  gameState = [ '', '', '', '', '', '', '', '', '' ];
  buildGameBoard() // or start screen?
};
// playAgain could include symbol choice again to reset.. hmm