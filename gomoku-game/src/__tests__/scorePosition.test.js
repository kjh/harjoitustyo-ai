import { scorePosition, evaluateRows, evaluateColumns, evaluateDiagonals, evaluateAntiDiagonals, evaluateBoard } from '../minmax';

// Constants for AI and PLAYER
const AI = 'O';
const PLAYER = 'X';

const DEBUG_MGS = true

const log = (board) => {
    let msg = ''
    board.forEach(row => {
        msg += row.map(cell => cell === null ? '.' : cell).join(' ')
        msg += '\n'
    });
    if (DEBUG_MGS) 
        console.log(msg)
}

describe('scorePosition', () => {
    it('should return correct scores based on length and player', () => {
        expect(scorePosition(1, AI)).toBe(1);
        expect(scorePosition(1, PLAYER)).toBe(-1);
        expect(scorePosition(2, AI)).toBe(2);
        expect(scorePosition(2, PLAYER)).toBe(-2);
        expect(scorePosition(3, AI)).toBe(10);
        expect(scorePosition(3, PLAYER)).toBe(-10);
        expect(scorePosition(4, AI)).toBe(1000);
        expect(scorePosition(4, PLAYER)).toBe(-1000);
        expect(scorePosition(5, AI)).toBe(Infinity);
        expect(scorePosition(5, PLAYER)).toBe(-Infinity);
        expect(scorePosition(10, AI)).toBe(Infinity);
        expect(scorePosition(10, PLAYER)).toBe(-Infinity);
    });
});


describe('evaluateRows', () => {
    it('should calculate score for Rows correctly #1', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[0][1] = AI;
        board[0][2] = PLAYER;
        board[0][3] = PLAYER;
        board[0][4] = PLAYER;

        log(board)

        // Score should be AI: 2 (len 1), PLAYER: -10 (len 3)
        expect(evaluateRows(board)).toBe(2 - 10);
    });

    it('should calculate score for Rows correctly #2', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[0][1] = AI;
        board[0][2] = AI;
        board[0][3] = AI;
        board[0][5] = PLAYER;
        board[0][6] = PLAYER;
        board[0][7] = PLAYER;
        board[0][8] = PLAYER;

        log(board)

        // Score should be AI: 1000 (len 4), PLAYER: -1000 (len 4)
        expect(evaluateRows(board)).toBe(1000 - 1000);
    });

    it('should calculate score for Rows correctly #3', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[0][1] = null;
        board[0][2] = AI;
        board[0][3] = AI;
        board[0][4] = null;
        board[0][5] = AI;
        board[0][6] = AI;
        board[0][7] = AI;
        board[0][8] = null;
        board[0][9] = AI;
        board[0][10] = AI;
        board[0][11] = AI;
        board[0][12] = AI;
        board[0][13] = null;
        board[0][14] = AI;
        board[0][15] = AI;
        board[0][16] = AI;
        board[0][17] = AI;
        board[0][18] = AI;
        board[0][19] = null;

        log(board)

        // Score should be AI: 1 + 2 + 10 + 1000 + Infinity = Infinity, PLAYER: 0 (len 0)
        expect(evaluateRows(board)).toBe(Infinity);
    });

    it('should calculate score for Rows correctly #4', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][14] = PLAYER;
        board[0][15] = PLAYER;
        board[0][16] = PLAYER;
        board[0][17] = PLAYER;
        board[0][18] = PLAYER;

        log(board)

        // Score should be AI: 2 (len 1), PLAYER: -10 (len 3)
        expect(evaluateRows(board)).toBe(-Infinity);
    });

    it('should return 0 for an empty board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        log(board)

        // Score should be AI: 0 (len 0), PLAYER: 0 (len 0)
        expect(evaluateRows(board)).toBe(0);
    });
});

describe('evaluateColumns', () => {
    it('should calculate score for Columns correctly  #1', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[1][0] = AI;
        board[2][0] = PLAYER;
        board[3][0] = PLAYER;
        board[4][0] = PLAYER;

        log(board)

        // Score should be AI: 2 (len 1), PLAYER: -10 (len 3)
        expect(evaluateColumns(board)).toBe(2 - 10);
    });

    it('should calculate score for Columns correctly #2', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[1][0] = AI;
        board[2][0] = AI;
        board[3][0] = AI;
        board[5][0] = PLAYER;
        board[6][0] = PLAYER;
        board[7][0] = PLAYER;
        board[8][0] = PLAYER;

        log(board)

        // Score should be AI: 1000 (len 4), PLAYER: -1000 (len 4)
        expect(evaluateColumns(board)).toBe(1000 - 1000);
    });

    it('should calculate score for Columns correctly #3', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0]= AI;
        board[1][0]= null;
        board[2][0]= AI;
        board[3][0]= AI;
        board[4][0]= null;
        board[5][0]= AI;
        board[6][0]= AI;
        board[7][0]= AI;
        board[8][0]= null;
        board[9][0]= AI;
        board[10][0] = AI;
        board[11][0] = AI;
        board[12][0] = AI;
        board[13][0] = null;
        board[14][0] = AI;
        board[15][0] = AI;
        board[16][0] = AI;
        board[17][0] = AI;
        board[18][0] = AI;
        board[19][0] = null;

        log(board)

        // Score should be AI: 1 + 2 + 10 + 1000 + Infinity = Infinity, PLAYER: 0 (len 0)
        expect(evaluateColumns(board)).toBe(Infinity);
    });

    it('should calculate score for Columns correctly #4', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        board[14][0] = PLAYER;
        board[15][0] = PLAYER;
        board[16][0] = PLAYER;
        board[17][0] = PLAYER;
        board[18][0] = PLAYER;

        log(board)

        // Score should be AI: 2 (len 1), PLAYER: -10 (len 3)
        expect(evaluateColumns(board)).toBe(-Infinity);
    });

    it('should return 0 for an empty board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        log(board)

        // Score should be AI: 0 (len 0), PLAYER: 0 (len 0)
        expect(evaluateColumns(board)).toBe(0);
    });
});

describe('evaluateDiagonals', () => {
    it('should calculate score for Diagonals correctly #1', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[1][1] = AI;
        board[2][2] = PLAYER;
        board[3][3] = PLAYER;
        board[4][4] = PLAYER;

        log(board)

        // Score should be AI: 2 (len 2), PLAYER: -10 (len 3)
        expect(evaluateDiagonals(board)).toBe(2 - 10);
    });

    it('should calculate score for Diagonals correctly #2', () => {
       const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0]= AI;
        board[1][1]= null;
        board[2][2]= AI;
        board[3][3]= AI;
        board[4][4]= null;
        board[5][5]= AI;
        board[6][6]= AI;
        board[7][7]= AI;
        board[8][8]= null;
        board[9][9]= AI;
        board[10][10] = AI;
        board[11][11] = AI;
        board[12][12] = AI;
        board[13][13] = null;
        board[14][14] = AI;
        board[15][15] = AI;
        board[16][16] = AI;
        board[17][17] = AI;
        board[18][18] = AI;
        board[19][19] = null;

        log(board)

        // Score should be AI: 1 + 2 + 10 + 1000 + Infinity = Infinity, PLAYER: 0 (len 0)
        expect(evaluateDiagonals(board)).toBe(Infinity);
    });

    it('should not calculate corner Diagonals if lenght < 5', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[16][0] = AI;
        board[17][1] = AI;
        board[18][2] = PLAYER;
        board[19][3] = PLAYER;

        log(board)

        // Score should be AI: skip, PLAYER: skip 
        expect(evaluateDiagonals(board)).toBe(0);
    });

    it('should return 0 for an empty board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        log(board)

        // Score should be AI: 0 (len 0), PLAYER: 0 (len 0)
        expect(evaluateDiagonals(board)).toBe(0);
    });
});

describe('evaluateAntiDiagonals', () => {
    it('should calculate score for Antidiagonals correctly #0', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[6][12] = AI;
        board[7][11] = AI;
        board[8][10] = AI;
        board[9][9] = AI;
        log(board)

        // Score should be AI: 2 (len 4) 1000
        expect(evaluateAntiDiagonals(board)).toBe(1000);
    });

    it('should calculate score for Antidiagonals correctly #1', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][4] = AI;
        board[1][3] = AI;
        board[2][2] = PLAYER;
        board[3][1] = PLAYER;
        board[4][0] = PLAYER;
        log(board)

        // Score should be AI: 2 (len 2), PLAYER: -10 (len 3)
        expect(evaluateAntiDiagonals(board)).toBe(2 - 10);
    });

    it('should calculate score for Antidiagonals correctly #2', () => {
       const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][19]= AI;
        board[1][18]= null;
        board[2][17]= AI;
        board[3][16]= AI;
        board[4][15]= null;
        board[5][14]= AI;
        board[6][13]= AI;
        board[7][12]= AI;
        board[8][11]= null;
        board[9][10]= AI;
        board[10][9] = AI;
        board[11][8] = AI;
        board[12][7] = AI;
        board[13][6] = null;
        board[14][5] = AI;
        board[15][4] = AI;
        board[16][3] = AI;
        board[17][2] = AI;
        board[18][1] = AI;
        board[19][0] = null;

        log(board)

        // Score should be AI: 1 + 2 + 10 + 1000 + Infinity = Infinity, PLAYER: 0 (len 0)
        expect(evaluateAntiDiagonals(board)).toBe(Infinity);
    });

    it('should not calculate corner Antidiagonals if length < 5', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][3] = AI;
        board[1][2] = AI;
        board[2][1] = PLAYER;
        board[3][0] = PLAYER;

        log(board)

        // Score should be AI: skip 0, PLAYER: skip 0 
        expect(evaluateDiagonals(board)).toBe(0);
    });

    it('should return 0 for an empty board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        log(board)

        // Score should be AI: 0 (len 0), PLAYER: 0 (len 0)
        expect(evaluateAntiDiagonals(board)).toBe(0);
    });
});

describe('evaluateBoard', () => {
    it('should calculate score for Board correctly', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[0][1] = AI;
        board[0][2] = AI;
        board[0][3] = AI;
        board[0][5] = PLAYER;
        board[0][6] = PLAYER;
        board[0][7] = PLAYER;
        board[0][8] = PLAYER;
        console.log("ERROR")
        log(board)

        // Score should be AI: -4 (no antidiagonals for ai)
        expect(evaluateBoard(board)).toBe(-4);
    });

    it('should calculate score for Board correctly #1', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        board[0][0] = AI;
        board[0][1] = null;
        board[0][2] = AI;
        board[0][3] = AI;
        board[0][4] = null;
        board[0][5] = AI;
        board[0][6] = AI;
        board[0][7] = AI;
        board[0][8] = null;
        board[0][9] = AI;
        board[0][10] = AI;
        board[0][11] = AI;
        board[0][12] = AI;
        board[0][13] = null;
        board[0][14] = AI;
        board[0][15] = AI;
        board[0][16] = AI;
        board[0][17] = AI;
        board[0][18] = AI;
        board[0][19] = null;

        log(board)

        // Score should be AI: 1 + 2 + 10 + 1000 + Infinity = Infinity, PLAYER: 0 (len 0)
        expect(evaluateBoard(board)).toBe(Infinity);
    });

    it('should calculate score for Board correctly #2', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        board[0][14] = PLAYER;
        board[0][15] = PLAYER;
        board[0][16] = PLAYER;
        board[0][17] = PLAYER;
        board[0][18] = PLAYER;

        log(board)

        // Score should be AI: 0, PLAYER: -Infinity
        expect(evaluateBoard(board)).toBe(-Infinity);
    });

    it('should return 0 for an empty board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        log(board)

        // Score should be AI: 0 (len 0), PLAYER: 0 (len 0)
        expect(evaluateBoard(board)).toBe(0);
    });
});