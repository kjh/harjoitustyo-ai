const EMPTY = null;
const PLAYER = 'X';
const AI = 'O';
const WINNING_SCORE = 10000;
const LOSING_SCORE = -10000;

const evaluateBoard = (board, isMaximizingPlayer) => {
    console.log('evaluate board', isMaximizingPlayer)
    return Math.random() * 10 - 5;
};

export const checkWin = (board, isMaximizingPlayer) => {
    console.log('check win', isMaximizingPlayer)
    return false;
};

const isMovesLeft = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === EMPTY) {
                return true;
            }
        }
    }
    return false;
};

export const minmax = (board, depth, isMaximizingPlayer) => {
    const heuristic_score = evaluateBoard(board, isMaximizingPlayer);
    if (checkWin(board, isMaximizingPlayer) || depth === 0) {
        return { score: heuristic_score, row: null, col: null };
    }

    if (isMaximizingPlayer) {
        let best = { score: LOSING_SCORE, row: null, col: null };
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === EMPTY) {
                    board[i][j] = AI;
                    let result = minmax(board, depth - 1, false);
                    board[i][j] = EMPTY;
                    if (result.score > best.score) {
                        best = { score: result.score, row: i, col: j };
                    }
                }
            }
        }
        return best;
    } else {
        let best = { score: WINNING_SCORE, row: null, col: null };
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === EMPTY) {
                    board[i][j] = PLAYER;
                    let result = minmax(board, depth - 1, true);
                    board[i][j] = EMPTY;
                    if (result.score < best.score) {
                        best = { score: result.score, row: i, col: j };
                    }
                }
            }
        }
        return best;
    }
};
