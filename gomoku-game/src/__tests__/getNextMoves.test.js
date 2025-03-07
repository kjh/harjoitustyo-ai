import { getNextMoves } from '../minmax';

describe('getNextMoves', () => {
    it('should return valid next moves for a 20x20 board', () => {
        const board = Array(20).fill(null).map(() => Array(20).fill(null));
        const row = 10;
        const col = 10;
        const nextMovesList = [];

        const expectedMoves = [
            [9, 10], [11, 10], [10, 9], [10, 11], 
            [9, 9], [11, 11], [9, 11], [11, 9]
        ];

        const result = getNextMoves(board, nextMovesList, row, col);
        
        expect(result).toHaveLength(8); 
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
            [0, 1], [1, 0], [1, 1]
        ];

        const result = getNextMoves(board, nextMovesList, row, col);
        
        expect(result).toHaveLength(3);
        expectedMoves.forEach(move => {
            expect(result).toContainEqual(move);
        });
    });
});
