import { gameBoard } from "./gameboard.js";
import { knightsTravails } from "./algorithm.js";

// DOM for chess board module
const appController = (function () {
    gameBoard();
    knightsTravails([3,3], [4,3]);
})();