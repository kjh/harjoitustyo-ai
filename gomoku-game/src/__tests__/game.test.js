import { applyMove, minmax, getNextMoves } from '../minmax';

// Constants 
const PLAYER = 'X'
const AI = 'O'

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
        let result = minmax(newBoard3, nextMovesList3, 1, true, 0, 5, -1000000, 1000000)

        //console.log('result', result)

        const newBoard4 = applyMove(newBoard3, [result.row, result.col], AI)

        log(newBoard4)


        expect(result).toEqual({ score: -1000, row: 0, col: 6 });
    });

    it('AI should block player if opponent has 4 d=4', () => {
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
        let result = minmax(newBoard3, nextMovesList3, 4, true, 0, 5, -1000000, 1000000)

        //console.log('result', result)

        const newBoard4 = applyMove(newBoard3, [result.row, result.col], AI)

        log(newBoard4)

        expect(result).toEqual({ score: -1000000, row: 0, col: 6 });
    }); 

    it('AI should win player if has row of 4 on board d=3', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        board[0][0] = AI;
        board[0][1] = AI;
        board[0][2] = AI;
        //board[0][3] = AI;
        

        const newBoard3 = applyMove(board, [0,3], AI)

        const nextMovesList2 = getNextMoves(newBoard3, [], 0, 3)
        const nextMovesList3 = nextMovesList2.map(move => [...move]) // copy

        // AI's turn
        let result = minmax(newBoard3, nextMovesList3, 3, true, 0, 3, -1000000, 1000000)

        console.log('result', result)

        const newBoard4 = applyMove(newBoard3, [result.row, result.col], AI)

        log(newBoard4)

        expect(result).toEqual({ score: 1000000, row: 0, col: 4 });
    });

    it('AI should win if it has diagonal of 4 on board d=4', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        //board[6][12] = AI;
        board[7][11] = AI;
        board[8][10] = AI;
        board[9][9] = AI;
        
        const newBoard3 = applyMove(board, [6,12], AI)

        const nextMovesList2 = getNextMoves(newBoard3, [], 6, 12)
        const nextMovesList3 = nextMovesList2.map(move => [...move]) // copy

        // AI's turn
        let result = minmax(newBoard3, nextMovesList3, 4, true, 6, 12, -1000000, 1000000)

        //console.log('result', result)

        const newBoard4 = applyMove(newBoard3, [result.row, result.col], AI)

        log(newBoard4)

        expect(result).toEqual({ score: 1000000, row: 5, col: 13 });
    });

    it('AI should find win (score = 1000000) at depth 5 if it has (two length 2 lines) special 5 turn win shape on board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        let nextMovesList = []; 
        board[11][10] = AI;
        nextMovesList = getNextMoves(board, [], 11, 10);
        board[12][10] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 12, 10);

        board[10][11] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 10, 11);
        board[10][12] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 10, 12);
        
        // Special 5 turn win shape
        log(board)
        console.log(nextMovesList)

        // AI's turn d=5
        let result = minmax(board, nextMovesList, 5, true, 11, 10, -1000000, 1000000)

        console.log('result', result)

        const newBoard2 = applyMove(board, [result.row, result.col], AI)

        log(newBoard2)

        expect(result).toEqual({ score: 1000000, row: 10, col: 10 }); // Only move
    });

    // Check win after two moves from 5 turn win shape
    it('(special 5 turn win shape continuation test. Check win (score = 1000000) at depth 3)', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));

        let nextMovesList = []; 

        board[11][10] = AI;
        nextMovesList = getNextMoves(board, [], 11, 10);
        board[12][10] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 12, 10);

        board[10][11] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 10, 11);
        board[10][12] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 10, 12);

        // Add best move to staring position
        board[10][10] = AI;
        nextMovesList = getNextMoves(board, nextMovesList, 10, 10);


        // Add players response (can't win but can try to block)
        board[9][10] = PLAYER
        nextMovesList = getNextMoves(board, nextMovesList, 9, 10);
        
        log(board)
        console.log(nextMovesList)

        // AI d=3
        let result = minmax(board, nextMovesList, 3, true, 9, 10, -1000000, 1000000)

        console.log('result', result)

        const newBoard2 = applyMove(board, [result.row, result.col], AI)

        log(newBoard2)

        // Best move is to make open 4
        expect(result.row === 10 && (result.col === 9 || result.col === 13)).toEqual(true) 

        // Should see win (Score is 1000000)
        expect(result.score).toEqual(1000000)
    });
});