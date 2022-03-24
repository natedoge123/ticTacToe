const playerData = document.querySelector('#playerData');
const startGame = document.querySelector('#startGame');
const playArea = document.querySelector('#playArea');

// Tic Tac Toe Function
  // Modules

const gameMaster = (() => {
  const board = [,,,,,,,,,];

  const yourTurn = (board) => {
    let numOfX = 0;
    let numOfO = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] == "x") {
        numOfX++;
      }
      if (board[i] == "o") {
        numOfO++;
      }
    }
    if (numOfX == numOfO) return 0;
    if (numOfX > numOfO) return 1;
    if ((numOfX + numOfO) == 9) return 2;
  }

  const winConditions = (board, piece) => {
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
  
  const didYouWin = (board, player) => {
    if (winConditions(board, player.shape)) {
      console.log(player.name + " wins!!")
    }

  }
  
  const playSpot = playArea.addEventListener('click', function(event) {
    boardSpot = parseInt(event.originalTarget.slot);
    whoseTurn = yourTurn(gameMaster.board);

    switch (whoseTurn) {
      case 0: 
        gameMaster.board[boardSpot] = player1.shape;
        didYouWin(gameMaster.board, player1);
        break;
      case 1:
        gameMaster.board[boardSpot] = player2.shape;
        didYouWin(gameMaster.board, player2);
        break;
      case 2:
        let zero = 0;
        break;
    }
    boxMaker(gameMaster.board);
  });
  return {board, yourTurn, winConditions, didYouWin,  playArea };

})();

  // Factories

const playerFactory = (name, shape) => {
  const move = (place) => {
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
  boxMaker(gameMaster.board);
});


// Running a Game

playerNames = playerStart();
let player1 = playerFactory(playerNames[0], 'x');
let player2 = playerFactory(playerNames[1], 'o');

gameMaster.playSpot;
