const playerData = document.querySelector('#playerData');
const startGame = document.querySelector('#startGame');
const playArea = document.querySelector('#playArea');

// Tic Tac Toe Function
  // Modules
const gameBoard = (() => {
  const board = [,,,,,,,,,];

  return {board };
})();


const gameMaster = (() => {
  const gameWin = (board, piece) => {
    if (board[0] == piece && board[1] == piece && board[2] == piece) return 1;
    if (board[3] == piece && board[4] == piece && board[5] == piece) return 1;
    if (board[6] == piece && board[7] == piece && board[9] == piece) return 1;
    if (board[0] == piece && board[3] == piece && board[6] == piece) return 1;
    if (board[1] == piece && board[4] == piece && board[7] == piece) return 1;
    if (board[2] == piece && board[5] == piece && board[8] == piece) return 1;
    if (board[0] == piece && board[4] == piece && board[8] == piece) return 1;
    if (board[2] == piece && board[4] == piece && board[6] == piece) return 1;
    return 0;
    }
  const gameTie = (board) => {
    let zero = 0;


  }
  const playSpot = playArea.addEventListener('click', function(event) {
    boardSpot = event.originalTarget.slot;
    console.log(boardSpot);
  });
  return {gameWin, playArea };

})();

  // Factories

const playerFactory = (name, shape) => {
  const move = (place) => {
    if (gameBoard.board[place] == "undefined") {
      gameBoard.board[place] = shape;

    }
  }
  return {name, shape, move};
};

const boxMaker = (board) => {
  while(playArea.firstChild) {
    playArea.removeChild(playArea.lastChild);
  }
  for (let i = 0; i < board.length; i++) {
    const newBox = document.createElement('div');

    newBox.textContent = board[i];
    newBox.setAttribute('slot', i);

    playArea.appendChild(newBox);
  }
}


// DOM Manipulation

function playerStart () {
  let data = document.getElementById("playerData");

  let playerNames = [data.elements[0].value, data.elements[1].value];
  return playerNames;
}


// Button Function

startGame.addEventListener('click', function(event) {
  let newGame = playerStart();
  boxMaker(gameBoard.board);
});


// Running a Game

playerNames = playerStart();
let player1 = playerFactory(playerNames[0], 'x');
let player2 = playerFactory(playerNames[1], 'o');

gameMaster.playSpot;
