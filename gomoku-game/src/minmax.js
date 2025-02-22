const EMPTY = null
const PLAYER = 'X'
const AI = 'O'
const NEXT = 1
const WINNING_SCORE = Infinity
const LOSING_SCORE = -Infinity

const scorePosition = (len, plr) => {
    if (len == 0) return plr == AI ?  1 : -1
    if (len == 1) return plr == AI ?  2 : -2
    if (len == 3) return plr == AI ?  100 : -100
    if (len == 4) return plr == AI ?  1000 : -1000
    if (len >= 5) return plr == AI ?  10000 : -10000

    return 0 
}


const evaluateBoard = (board, isMaximizingPlayer) => {
    let score = 0

    let len_ai = 0
    let len_plr = 0

    // rows 

    for (let row = 0; row < board.length; row++) {
        len_ai = 0
        len_plr = 0
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === AI) {
                len_ai += 1
                score += scorePosition(len_plr, PLAYER) 
                len_plr = 0
            } else if (board[row][col] === PLAYER) {
                len_plr += 1
                score += scorePosition(len_ai, AI) 
                len_ai = 0
            }
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER) 
        }
    }
    

    // columns
    for (let col = 0; col < board[0].length; col++) {
        len_ai = 0
        len_plr = 0
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] === AI) {
                len_ai += 1
                score += scorePosition(len_plr, PLAYER) 
                len_plr = 0
            } else if (board[row][col] === PLAYER) {
                len_plr += 1
                score += scorePosition(len_ai, AI) 
                len_ai = 0
            }
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER) 
        }
    }

    let boardSize = 20

    // diagonals
    for (let row = 0; row < boardSize; row++) {
        let r = row, c = 0;
        len_ai = 0
        len_plr = 0
        while (r < boardSize && c < boardSize) {
            
            if (board[r][c] === AI) {
                len_ai += 1
                score += scorePosition(len_plr, PLAYER) 
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                score += scorePosition(len_ai, AI) 
                len_ai = 0
            }
            r++;
            c++;
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER) 
        }
    }

    for (let col = 1; col < boardSize; col++) {
        let r = 0, c = col;
        len_ai = 0
        len_plr = 0
        while (r < boardSize && c < boardSize) {
            
            if (board[r][c] === AI) {
                len_ai += 1
                score += scorePosition(len_plr, PLAYER) 
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                score += scorePosition(len_ai, AI) 
                len_ai = 0
            }
            r++;
            c++;
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER) 
        }
    }

    // anti diagonals
    for (let row = 0; row < boardSize; row++) {
        let r = row, c = boardSize - 1;
        len_ai = 0
        len_plr = 0
        while (r < boardSize && c >= 0) {
            if (board[r][c] === AI) {
                len_ai += 1
                score += scorePosition(len_plr, PLAYER) 
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                score += scorePosition(len_ai, AI) 
                len_ai = 0
            }
            r++;
            c--;
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER) 
        }
    }

    for (let col = boardSize - 2; col >= 0; col--) {
        let r = 0, c = col;
        len_ai = 0
        len_plr = 0
        while (r < boardSize && c >= 0) {
            if (board[r][c] === AI) {
                len_ai += 1
                score += scorePosition(len_plr, PLAYER) 
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                score += scorePosition(len_ai, AI) 
                len_ai = 0
            }
            r++
            c--
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER) 
        }
    }

    return score
}

export const checkWin = (board, isMaximizingPlayer) => {
    return false
}

export const getNextMoves = (board, nextMovesList, row, col) => {

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], // horizontal and vertical
        [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonals
    ]

    const filteredMoves = (nextMovesList === null || nextMovesList.length === 0) ? [] : nextMovesList.filter(move => !(move[0] === row && move[1] === col))
    const nextMovesSet = new Set(filteredMoves.map(JSON.stringify))



    directions.forEach(([dRow, dCol]) => {
        const newRow = row + dRow
        const newCol = col + dCol
        if (newRow >= 0 && newRow < board.length &&
            newCol >= 0 && newCol < board[0].length &&
            board[newRow][newCol] === null) {
            nextMovesSet.add(JSON.stringify([newRow, newCol]))
        }
    })

    const uniqueNextMoves = Array.from(nextMovesSet).map(JSON.parse)

    return uniqueNextMoves
}

const applyMove = (board, move, turn) => {
    return board.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
            rowIndex === move[0] && colIndex === move[1] ? turn : cell
        )
    )
}

export const minmax = (board, nextMovesList, depth, isMaximizingPlayer) => {
    const heuristic_score = evaluateBoard(board, isMaximizingPlayer)
    if (checkWin(board, isMaximizingPlayer) || depth === 0) {
        return { score: heuristic_score, row: null, col: null }
    }

    if (isMaximizingPlayer) {
        let best = { score: LOSING_SCORE, row: null, col: null }

        for (const move of nextMovesList) {
            const [i, j] = move
            if (board[i][j] === EMPTY) {

                const newBoard3 = applyMove(board, move, AI)

                const nextMovesList2 = getNextMoves(newBoard3, nextMovesList, i, j)
                const nextMovesList3 = nextMovesList2.map(move => [...move])

                let result = minmax(newBoard3, nextMovesList3, depth - 1, false)

                if (result.score > best.score) {
                    best = { score: result.score, row: i, col: j }
                }
            }
        }

        return best
    } else {
        let best = { score: WINNING_SCORE, row: null, col: null }

        for (const move of nextMovesList) {
            const [i, j] = move
            if (board[i][j] === EMPTY) {
                const newBoard3 = applyMove(board, move, PLAYER)

                const nextMovesList2 = getNextMoves(newBoard3, nextMovesList, i, j)
                const nextMovesList3 = nextMovesList2.map(move => [...move])

                let result = minmax(newBoard3, nextMovesList3, depth - 1, true)

                if (result.score < best.score) {
                    best = { score: result.score, row: i, col: j }
                }
            }
        }
        return best
    }
}
