import { checkWin } from '../minmax';

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

describe('checkWin', () => {
    it('should return true for a winning row', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const player = 'X';
        for (let col = 0; col < 5; col++) {
            board[10][col] = player;
        }

        log(board)
        
        const result = checkWin(board, player, 10, 0);

        expect(result).toBe(true);
    });

    it('should return true for a winning column', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const player = 'X';
        for (let row = 0; row < 5; row++) {
            board[row][10] = player;
        }

        log(board)

        const result = checkWin(board, player, 0, 10);

        expect(result).toBe(true);
    });

    it('should return true for a winning column', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const player = 'X';
        for (let i = 0; i < 5; i++) {
            board[i][i] = player;
        }

        log(board)

        const result = checkWin(board, player, 0, 0);

        expect(result).toBe(true);
    });

    it('should return true for a winning diagonal', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const player = 'O';
        for (let i = 0; i < 5; i++) {
            board[i][i] = player;
        }

        log(board)

        const result = checkWin(board, player, 0, 0);

        expect(result).toBe(true);
    });

    it('should return true for a winning anti-diagonal', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const player = 'X';
        for (let i = 0; i < 5; i++) {
            board[i][19 - i] = player;
        }

        log(board)

        const result = checkWin(board, player, 0, 19);

        expect(result).toBe(true);
    });

    it('should return false for no winning sequence', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const player = 'X';
        board[0][0] = player;

        log(board)

        const result = checkWin(board, player, 0, 0);

        expect(result).toBe(false);
    });
});
