const EMPTY = null
const PLAYER = 'X'
const AI = 'O'
const WINNING_SCORE = 1000000 // Infinity
const LOSING_SCORE = -1000000 // -Infinity

export const scorePosition = (len, plr) => {
    let score = 0

    if (len == 1) score = (plr === AI) ? 1 : -1
    if (len == 2) score = (plr === AI) ? 2 : -2
    if (len == 3) score = (plr === AI) ? 10 : -10
    if (len == 4) score = (plr === AI) ? 1000 : -1000
    if (len >= 5) score = (plr === AI) ? WINNING_SCORE : LOSING_SCORE

    return score
}

export const evaluateRows = (board) => {
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
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
            } else if (board[row][col] === PLAYER) {
                len_plr += 1
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            } else {
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)

                }
                len_plr = 0
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)

                }
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

    if (score === NaN) return 0 // Infinity + -Infinity

    return score
}

export const evaluateColumns = (board) => {
    let score = 0

    let len_ai = 0
    let len_plr = 0

    // columns
    for (let col = 0; col < board[0].length; col++) {
        len_ai = 0
        len_plr = 0
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] === AI) {
                len_ai += 1
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
            } else if (board[row][col] === PLAYER) {
                len_plr += 1
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            } else {
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
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

    if (score === NaN) return 0 // Infinity + -Infinity

    return score
}

export const evaluateDiagonals = (board) => {
    let score = 0

    let len_ai = 0
    let len_plr = 0

    let boardSize = 20

    // diagonals
    for (let row = 0; row < boardSize; row++) {
        let r = row, c = 0
        len_ai = 0
        len_plr = 0

        // only len 5 or over
        if (boardSize - row < 5) {
            continue
        }

        while (r < boardSize && c < boardSize) {

            if (board[r][c] === AI) {
                len_ai += 1
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            } else {
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            }
            r++
            c++
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER)
        }
    }

    for (let col = 1; col < boardSize; col++) {
        let r = 0, c = col
        len_ai = 0
        len_plr = 0

        // only len 5 or over
        if (boardSize - col < 5) {
            continue
        }

        while (r < boardSize && c < boardSize) {
            if (board[r][c] === AI) {
                len_ai += 1
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            } else {
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            }
            r++
            c++
        }
        if (len_ai > 0) {
            score += scorePosition(len_ai, AI)
        }
        if (len_plr > 0) {
            score += scorePosition(len_plr, PLAYER)
        }
    }

    if (score === NaN) return 0 // Infinity + -Infinity

    return score
}

export const evaluateAntiDiagonals = (board) => {
    let score = 0

    let len_ai = 0
    let len_plr = 0

    let boardSize = 20

    // anti diagonals
    for (let row = 0; row < boardSize; row++) {
        let r = row, c = boardSize - 1
        len_ai = 0
        len_plr = 0

        // only len 5 or over
        if (row > 15) {
            continue
        }

        while (r < boardSize && c >= 0) {
            if (board[r][c] === AI) {
                len_ai += 1
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            } else {
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
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

    for (let col = boardSize - 2; col >= 0; col--) {
        let r = 0, c = col;
        len_ai = 0
        len_plr = 0

        // only len 5 or over
        if (col < 4) {
            continue
        }

        while (r < boardSize && c >= 0) {
            if (board[r][c] === AI) {
                len_ai += 1
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
            } else if (board[r][c] === PLAYER) {
                len_plr += 1
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
                len_ai = 0
            } else {
                if (len_plr >= 1) {
                    score += scorePosition(len_plr, PLAYER)
                }
                len_plr = 0
                if (len_ai >= 1) {
                    score += scorePosition(len_ai, AI)
                }
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

    if (score === NaN) return 0 // Infinity + -Infinity

    return score
}

export const evaluateBoard = (board) => {
    let score1 = evaluateRows(board)
    //console.log('rows ', score1)
    let score2 = evaluateColumns(board)
    //console.log('cols ', score2)
    let score3 = evaluateDiagonals(board)
    //console.log('diag ', score3)
    let score4 = evaluateAntiDiagonals(board)
    //console.log('anti ', score4)

    return score1 + score2 + score3 + score4
}

function checkImmediateThreat(board, player) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === null) {
                // Test the opponent's move
                board[row][col] = player
                if (checkWin(board, player, row, col)) {
                    board[row][col] = null
                    return [row, col] // return winning move
                }
                board[row][col] = null // Undo move
            }
        }
    }
    return null;
}


/**
 * Used to check after playing a move if that player has won.
 * 
 *
 * @param {Array.<Array.<number|null>>} board - The 2D array representing the game board
 * @param {string} player - who played
 * @param {number} moveRow - row of the move
 * @param {number} moveCol - col of the move
 * @returns {boolean} - true if player has 5 or more
 */
export const checkWin = (board, player, moveRow, moveCol) => {
    let len = 0

    // row
    for (let col = 0; col < board[0].length; col++) {
        if (board[moveRow][col] === player) {
            len += 1
            if (len >= 5) {
                debugLog2('row: win for ', player, len)
                return true
            }
        } else {
            len = 0
        }
    }

    len = 0
    // col
    for (let row = 0; row < board.length; row++) {
        if (board[row][moveCol] === player) {
            len += 1
            if (len >= 5) {
                debugLog2('col: win for ', player, len)
                return true
            }
        } else {
            len = 0
        }
    }

    // diagonal
    len = 0
    let r = moveRow
    let c = moveCol
    while (r >= 0 && c >= 0) {
        if (board[r][c] === player) {
            len += 1
            if (len >= 5) {
                debugLog2('diagonal: win for ', player, len)
                return true
            }
        } else {
            break
        }
        r -= 1
        c -= 1
    }
    r = moveRow + 1
    c = moveCol + 1
    while (r <= 19 && c <= 19) {
        if (board[r][c] === player) {
            len += 1
            if (len >= 5) {
                debugLog2('diagonal: win for ', player, len)
                return true
            }
        } else {
            break // only from current position
        }
        r += 1
        c += 1
    }

    // anti diagonal
    len = 0
    r = moveRow
    c = moveCol
    while (r >= 0 && c <= 19) {
        if (board[r][c] === player) {
            len += 1
            if (len >= 5) {
                debugLog2('anti diagonal: win for ', player, len)
                return true
            }
        } else {
            break
        }
        r -= 1
        c += 1
    }
    r = moveRow + 1
    c = moveCol - 1
    while (r <= 19 && c >= 0) {
        if (board[r][c] === player) {
            len += 1
            if (len >= 5) {
                debugLog2('anti diagonal: win for ', player, len)
                return true
            }
        } else {
            break
        }
        r += 1
        c -= 1
    }

    return false
}

/**
 * Calculates and maintains the list of next possible moves. Adds adjacent moves.
 * 
 *
 * @param {Array.<Array.<number|null>>} board - The 2D array representing the game board
 * @param {Array.<Array.<number>>} nextMovesList - The list of next possible moves
 * @param {number} row - row of the move
 * @param {number} col - col of the move
 * @returns {Array.<Array.<number>>} - An array of unique next moves as [row, col] pairs
 */
export const getNextMoves = (board, nextMovesList, row, col) => {
    const directions_1 = [
        [0, 1], [1, 0], [0, -1], [-1, 0], // horizontal and vertical +1
        [1, 1], [1, -1], [-1, 1], [-1, -1], // diagonals +1
    ]
    
    let add_directions = directions_1

    const DISTANCE_2 = true // increase search distance if enough processing power

    if (DISTANCE_2) {
        add_directions = [
            ...directions_1,
            [0, 2], [2, 0], [0, -2], [-2, 0],
            [2, 2], [2, -2], [-2, 2], [-2, -2], 
            [1, 2], [2, 1], [1, -2], [2, -1], 
            [-1, 2], [-2, 1], [-1, -2], [-2, -1] 
        ]
    }

    const directions = add_directions

    const isNextMovesListEmpty = nextMovesList === null || nextMovesList.length === 0
    const filteredMoves = isNextMovesListEmpty ? [] : nextMovesList.filter(move => !(move[0] === row && move[1] === col))
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

export const applyMove = (board, move, turn) => {
    return board.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
            rowIndex === move[0] && colIndex === move[1] ? turn : cell
        )
    )
}

/**
 * Minimax algorithm with alpha-beta pruning.
 *
 * @param {Array} board - Game board
 * @param {Array} nextMovesList - List of  next moves
 * @param {number} depth - The current depth in the tree
 * @param {boolean} isMaximizingPlayer - Is maximizing player's turn
 * @param {number} ri - Last moves row index
 * @param {number} cj - Last moves column index
 * @param {number} alpha - Alpha value
 * @param {number} beta - Beta value 
 * @returns {Object} The best move found with properties:
 *                   - score: The minimax score of the move
 *                   - row: The row of the move
 *                   - col: The column of the move
 */

export const minmax = (board, nextMovesList, depth, isMaximizingPlayer, ri, cj, alpha, beta) => {
    const turn = isMaximizingPlayer ? AI : PLAYER
    const opponent = !isMaximizingPlayer ? AI : PLAYER

    // Speed up seach
    // Check immediate win/threat 
    let threat = false
    let winning_move = false

    // depth 4 
    if (depth == 4) {
        threat = checkImmediateThreat(board, opponent)
        winning_move = checkImmediateThreat(board, turn)
    }

    const DEBUG_ON = false

    if (DEBUG_ON) {
        console.log('\nminmax d:',depth, 'r:', ri, 'c:', cj)
    }

    if (checkWin(board, turn, ri, cj)) {
        if (DEBUG_ON) {
            console.log('win node for:', turn)
            log(board)
        }
        if (isMaximizingPlayer)
            return { score: WINNING_SCORE, row: null, col: null }
        else
            return { score: LOSING_SCORE, row: null, col: null }
    }

    if (DEBUG_ON && threat) {
        console.log('immediate threat at next turn:', threat, 'for opponent:', opponent)
        log(board)
    }

    if (depth === 0) {
        const heuristic_score = evaluateBoard(board)

        if (DEBUG_ON) {
            console.log('terminal node')
            log(board)
            console.log('terminal node score', heuristic_score)
        }

        return { score: heuristic_score, row: null, col: null }
    }

    if (isMaximizingPlayer) {
        if (winning_move) 
            return { score: WINNING_SCORE, row: winning_move[0], col: winning_move[1] }

        if (threat)
            return { score: LOSING_SCORE, row: threat[0], col: threat[1] }

        let best = { score: LOSING_SCORE, row: null, col: null }

        for (const move of nextMovesList) {
            const [i, j] = move
            const newBoard3 = applyMove(board, move, AI)
            const nextMovesList2 = getNextMoves(newBoard3, nextMovesList, i, j)
            const nextMovesList3 = nextMovesList2.map(m => [...m])

            let result = minmax(newBoard3, nextMovesList3, depth - 1, false, i, j, alpha, beta)

            if (result.score > best.score) { 
                best = { score: result.score, row: i, col: j }
            }
            alpha = Math.max(alpha, result.score)
            if (beta <= alpha) {
                break // Alpha Beta Pruning
            }

        }

        return best
    } else {
        if (winning_move) 
            return { score: LOSING_SCORE, row: winning_move[0], col: winning_move[1] }

        if (threat)
            return { score: WINNING_SCORE, row: threat[0], col: threat[1] }

        let best = { score: WINNING_SCORE, row: null, col: null }

        for (const move of nextMovesList) {
            const [i, j] = move
            const newBoard3 = applyMove(board, move, PLAYER)
            const nextMovesList2 = getNextMoves(newBoard3, nextMovesList, i, j)
            const nextMovesList3 = nextMovesList2.map(m => [...m])

            let result = minmax(newBoard3, nextMovesList3, depth - 1, true, i, j, alpha, beta)

            if (result.score < best.score) {
                best = { score: result.score, row: i, col: j }
            }
            beta = Math.min(beta, result.score)
            if (beta <= alpha) {
                break // Alpha Beta Pruning
            }

        }

        return best
    }
}


/*
 * DEBUG
 */

// checkWin
const DEBUG2 = false
const debugLog2 = (msg, player, len) => {
    if (DEBUG2)
        console.log(msg, player, len)
}

const log = (board) => {
    let msg = ''
    board.forEach(row => {
        msg += row.map(cell => cell === null ? '.' : cell).join(' ')
        msg += '\n'
    })
    console.log(msg)
}