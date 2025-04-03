import { getNextMoves } from '../minmax';

describe('getNextMoves', () => {
    it('should return valid next moves for a 20x20 board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const row = 10;
        const col = 10;
        const nextMovesList = [];

        const expectedMoves = [
            [8,8], [8,9], [8,10], [8,11], [8,12], 
            [9,8], [9,9], [9,10], [9,11], [9,12], 
            [10,8], [10,9], [10,11], [10,12],
            [11,8], [11,9], [11,10], [11,11], [11,12],
            [12,8], [12,9], [12,10], [12,11], [12,12],
        ];

        const result = getNextMoves(board, nextMovesList, row, col);

        console.log(result);
        
        expect(result).toHaveLength(24); 
        expectedMoves.forEach(move => {
            expect(result).toContainEqual(move);
        });
    });

    it('should not include the current position in the next moves', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const row = 10;
        const col = 10;
        const nextMovesList = [[10, 10]];

        const result = getNextMoves(board, nextMovesList, row, col);
        
        result.forEach(move => {
            expect(move).not.toEqual([10, 10]);
        });
    });

    it('should handle edge cases at the borders of the board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const row = 0;
        const col = 0;
        const nextMovesList = [];

        const expectedMoves = [
            [0, 1], [0 ,2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2]
        ];

        const result = getNextMoves(board, nextMovesList, row, col);
        
        expect(result).toHaveLength(8);
        expectedMoves.forEach(move => {
            expect(result).toContainEqual(move);
        });
    });
});
