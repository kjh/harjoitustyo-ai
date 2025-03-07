# Testausdokumentti
Testit suoritetaan komennolla npm test
Yksittäinen testi suite suoritetaan komennolla npm test game.test.js (suoritettavan testin tiedosto paremetrina)

Testauksessa on keskitetty yksittäisten fuktioiden tai toimintojen testaamiseen. game.test.js tiedostossa testataan
tekoälyn tuottamia siirtoja.

Testitiedostot/suitet

checWin.test.js testsuite testit:

'should return true for a winning row'
- testaa tunnistaako voittorivin

'should return true for a winning column'
- testaa tunnistaako voittosarakkeen

'should return true for a winning diagonal'
- testaa tunnistaako voittodiagonaalin

'should return true for a winning anti-diagonal'
- testaa tunnistaako voittoantidiagonaalin

'should return false for no winning sequence'
- testaa että ei palauta voittoa jos sitä ei ole

Tänne:
- Yksikkötestauksen kattavuusraportti.
- Mitä on testattu, miten tämä tehtiin?
- Minkälaisilla syötteillä testaus tehtiin?
- Miten testit voidaan toistaa?

