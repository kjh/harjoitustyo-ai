import { applyMove, minmax, getNextMoves } from '../minmax';

// Constants 
const PLAYER = 'X'
const AI = 'O'

const DEBUG_MGS = false 

const log = (board) => {
    let msg = ''
    board.forEach(row => {
        msg += row.map(cell => cell === null ? '.' : cell).join(' ')
        msg += '\n'
    });
    if (DEBUG_MGS) 
        console.log(msg)
}

describe('test minmax', () => {
    it('AI should block player if opponent has 4', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        board[0][0] = AI;
        board[0][1] = AI;
        board[0][2] = PLAYER;
        board[0][3] = PLAYER;
        board[0][4] = PLAYER;

        const newBoard3 = applyMove(board, [0,5], PLAYER)

        const nextMovesList2 = getNextMoves(newBoard3, [], 0, 5)
        const nextMovesList3 = nextMovesList2.map(move => [...move]) // copy

        // AI's turn
        let result = minmax(newBoard3, nextMovesList3, 1, true, 0, 5, -Infinity, Infinity)

        const newBoard4 = applyMove(newBoard3, [result.row, result.col], AI)

        log(newBoard4)

        expect(result).toEqual({ score: -1000, row: 0, col: 6 });
    });
});