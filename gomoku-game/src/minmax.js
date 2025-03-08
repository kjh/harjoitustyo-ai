const EMPTY = null
const PLAYER = 'X'
const AI = 'O'
const WINNING_SCORE = Infinity
const LOSING_SCORE = -Infinity

export const scorePosition = (len, plr) => {
    let score = 0

    if (len == 1) score = (plr === AI) ? 1 : -1
    if (len == 2) score = (plr === AI) ? 2 : -2
    if (len == 3) score = (plr === AI) ? 10 : -10
    if (len == 4) score = (plr === AI) ? 1000 : -1000
    if (len >= 5) score = (plr === AI) ? WINNING_SCORE : LOSING_SCORE

    debugLog('score', score, len, plr)

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
        if (boardSize - row < 5) {
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
        if (boardSize - col < 5) {
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

    if (score === NaN) return 0 // Infinity + -Infinity

    return score
}

export const evaluateBoard = (board, isMaximizingPlayer) => {
    let score1 = evaluateRows(board)
    debugLog('rows ', score1)
    let score2 = evaluateColumns(board)
    debugLog('cols ', score2)
    let score3 = evaluateDiagonals(board)
    debugLog('diag ', score3)
    let score4 = evaluateAntiDiagonals(board)
    debugLog('anti ', score4)

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

export const getNextMoves = (board, nextMovesList, row, col) => {
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], // horizontal and vertical
        [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonals
    ]
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
    debugLog('next moves', uniqueNextMoves)

    return uniqueNextMoves
}

export const applyMove = (board, move, turn) => {
    return board.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
            rowIndex === move[0] && colIndex === move[1] ? turn : cell
        )
    )
}

export const minmax = (board, nextMovesList, depth, isMaximizingPlayer, ri, cj, alpha, beta) => {
    //console.log('\nminmax d:',depth, 'r:', ri, 'c:', cj)
    const turn = isMaximizingPlayer ? AI : PLAYER
    const opponent = !isMaximizingPlayer ? AI : PLAYER
    const threat = checkImmediateThreat(board, opponent)

    if (checkWin(board, turn, ri, cj)) {
        console.log('win node for:', turn)
        log(board)
        if (isMaximizingPlayer)
            return { score: WINNING_SCORE, row: null, col: null }
        else
            return { score: -LOSING_SCORE, row: null, col: null }
    }

    if (threat) {
        console.log('immediate threat at next turn:', threat, 'for opponent:', opponent)
        log(board)
    }

    if (depth === 0) {
        console.log('terminal node')
        log(board)
        const heuristic_score = evaluateBoard(board, isMaximizingPlayer)
        console.log('terminal node score', heuristic_score)
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

                let result = minmax(newBoard3, nextMovesList3, depth - 1, false, i, j, alpha, beta)

                if (result.score > best.score) { // todo: >  can result error but >= is not working -> plays poorly
                    best = { score: result.score, row: i, col: j }
                }
                alpha = Math.max(alpha, result.score)
                if (beta <= alpha) {
                    break // Alpha Beta Pruning
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

                let result = minmax(newBoard3, nextMovesList3, depth - 1, true, i, j, alpha, beta)

                if (result.score < best.score) {
                    best = { score: result.score, row: i, col: j }
                }
                beta = Math.min(beta, result.score)
                if (beta <= alpha) {
                    break // Alpha Beta Pruning
                }
            }
        }

        return best
    }
}


/*
 * DEBUG
 */

const DEBUG = false
const debugLog = (msg) => {
    if (DEBUG)
        console.log(msg)
}

const DEBUG2 = true
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