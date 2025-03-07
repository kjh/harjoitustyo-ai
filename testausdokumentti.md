# Testausdokumentti
Testit suoritetaan komennolla npm test
Yksittäinen testi suite suoritetaan komennolla npm test game.test.js (suoritettavan testin tiedosto paremetrina)

Testauksessa on keskitetty yksittäisten funktioiden tai toimintojen testaamiseen. game.test.js tiedostossa testataan
tekoälyn tuottamia siirtoja.

Testikattavuuden saa komennolla npm test -- --coverage

Testikattavuus:


File       | % Stmts | % Branch | % Funcs | % Lines | 
-----------|---------|----------|---------|---------|
All files  |   87.59 |    82.94 |   92.59 |   88.21 |
 Board.jsx |   85.71 |      100 |      80 |     100 |
 minmax.js |   87.62 |    82.94 |   95.45 |   88.02 |  


##Testitiedostot/suitet

###Testattu funktio: checWin

checWin.test.js testsuite testit:

'should return true for a winning row'
- syöte: pelilauta jossa voittorivi
- testaa tunnistaako voittorivin

'should return true for a winning column'
- syöte: pelilauta jossa voittosarake
- testaa tunnistaako voittosarakkeen

'should return true for a winning diagonal'
- syöte: pelilauta jossa voittodiagonaalin
- testaa tunnistaako voittodiagonaalin

'should return true for a winning anti-diagonal'
- syöte: pelilauta jossa voittoantidiagonaalin
- testaa tunnistaako voittoantidiagonaalin

'should return false for no winning sequence'
- syöte: pelilauta jossa vain 1 siirto
- testaa että ei palauta voittoa jos sitä ei ole

###Testattu funktio: getNextMoves

getNextMoves.test.js testsuite testit:

'should return valid next moves for a 20x20 board'
- syöte: tyhjä pelilauta
- testaa että palauttaa oikeat siirrot

'should not include the current position in the next moves'
- syöte: nextMovesList joka sisältää arvon [10,10]
- testaa että nextMovesList ei sisällä siirtoa jonka suhteen lisättävät lasketaan.
Ja poistaa listasta pelatun siirron, jos tarpeen.

'should handle edge cases at the borders of the board'
- syöte: tyhjä pelilauta
- testaa että palauttaa oikeat siirrot kun pelataan pelilaudan kulmaan [0,0]

###Testatut funktio: scorePosition ja evaluateRows, evaluateColumns, evaluateDiagonals, evaluateAntiDiagonals, evaluateBoard

scorePosition.test.js testsuite testit:

'should return correct scores based on length and player'
- testattu funktio: scorePosition
- syöte: merkkijonon pituus ja pelaaja
- testaa että palauttaa oikeat arvot

'should calculate score for Rows correctly #1'
- testattu funktio: evaluateRows
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Rows correctly #2'
- testattu funktio: evaluateRows
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Rows correctly #3'
- testattu funktio: evaluateRows
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Rows correctly #4'
- testattu funktio: evaluateRows
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

should return 0 for an empty board
- testattu funktio: evaluateRows
- syöte: tyhjä pelilauta
- testaa että palauttaa 0 pistettä

'should calculate score for Columns correctly #1'
- testattu funktio: evaluateColumns
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Columns correctly #2'
- testattu funktio: evaluateColumns
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Columns correctly #3'
- testattu funktio: evaluateColumns
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Columns correctly #4'
- testattu funktio: evaluateColumns
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

should return 0 for an empty board
- testattu funktio: evaluateColumns
- syöte: tyhjä pelilauta
- testaa että palauttaa 0 pistettä

'should calculate score for Diagonals correctly #1'
- testattu funktio: evaluateDiagonals
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for Diagonals correctly #2'
- testattu funktio: evaluateDiagonals
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

should return 0 for an empty board
- testattu funktio: evaluateDiagonals
- syöte: tyhjä pelilauta
- testaa että palauttaa 0 pistettä

'should calculate score for AntiDiagonals correctly #1'
- testattu funktio: evaluateAntiDiagonals
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

'should calculate score for AntiDiagonals correctly #2'
- testattu funktio: evaluateAntiDiagonals
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet

should return 0 for an empty board
- testattu funktio: evaluateAntiDiagonals
- syöte: tyhjä pelilauta
- testaa että palauttaa 0 pistettä

'should calculate score for Board correctly #1'
- testattu funktio: evaluateBoard
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet 

'should calculate score for Board correctly #2'
- testattu funktio: evaluateBoard
- syöte: pelitilanne
- testaa että palauttaa oikeat pisteet 

'should return 0 for an empty board'
- syöte: tyhjä pelilauta
- testaa että palauttaa 0 pistettä

###Testattu funktio: minmax

game.test.js testsuite testit:

'AI should block player if opponent has 4'
- testattu funktio: minmax
- syöte: pelilaudan tilanne
- testaa että palauttaa oikeat arvot

##Testattu funktio: Board

Board.test.js testsuite testit:

'renders the game board with initial state'

- syöte: pelilaudan tyhjä ruudukko
- testaa että html-dokumentti sisältää 'grid'-elementin ja 400 'cell'-elementtiä

