import { INITIAL_GAME_BOARD } from "../constant/index.js";
import { WINNING_COMBINATIONS } from "../constant/winning-combinations.js";

export function deriveActivePlayer(gamesTurns) {
  let currentPlayer = "X";

  if (gamesTurns.length > 0 && gamesTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

export function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare == secondSquare &&
      firstSquare == thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }
  return winner;
}

export function deriveGameBoard(gamesTurns) {
  let board = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gamesTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    board[row][col] = player;
  }

  return board;
}
