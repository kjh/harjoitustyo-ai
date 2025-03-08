# Toteutusdokumentti

Algoritmit ja tekoäly harjoitustyö.

Opinto-ohjelma: tietojenkäsittelytieteen kandidaatti (TKT)

## Aihe: Ristinolla/Gomoku

(Gomoku termiä käytetään mm. koodissa. Tässä harjoitustyössä näillä termeillä tarkoitetaan samaa peliä.)

## Ohjelman yleisrakenne

Teköälyvastustaja ja siirrot etsivä minmax-algoritmi on toteutettu minmax.js tiedostossa. 

Tärkeimmät funktiot ovat:

```javascript export const minmax = (board, nextMovesList, depth, isMaximizingPlayer, ri, cj, alpha, beta)```
- Tehdään syvyyssuuntainen haku pelipuusta syvyyteen depth tai lopetetaan haku ennen syvyyttä, jos laudalla on voittorivi
- alpha-beta-karsinnalla tehostetaan hakua edelleen, karsimalla turhat haut pelipuusta.
- alpha-beta karsinta hyötyy, jos paremmat siirrot käsitellään ensin. Eli siirtojen järjestyksellä voidaan tehostaa algoritmia.

```javascript export const getNextMoves = (board, nextMovesList, row, col)```
- Jokaisen siirron jälkeen lisätään hakulistaan - suhteessa pelattuun merkkiin - yhden päässä olevat ruudut. 
- Tätä parametria voisi muokata niin, että lisätään 2 päässä olevat siirrot. (Ei toteutettu, mutta hyvä parannusehdotus.)
- Lisäksi paremmat siirrot kannattaa kokeilla ensin. (Ei toteutettu, mutta hyvä parannusehdotus.)

```javascript export const evaluateBoard = (board, isMaximizingPlayer) ja export const scorePosition = (len, plr)```
 - Nämä funktion pisteyttävät hakupuun maksimisyvyydessä olevat lehtisolmut.
 - Maksimoiva pelaaja (AI/'O') saa positiiviset pisteet ja minimoiva pelaaja (PLAYER/'X') negatiiviset pisteet.
 - scorePosition pisteyttää pelilaudan. Esim. yksi X on 1 pisteen arvoinen, XX on 2 pisteen, XXX on 10 jne. 
 - Tämä ei tarkista onko suora avoin (voi voittaa) suljettu (ei voi voittaa). (Ei toteutettu, mutta hyvä parannusehdotus.)

```javascript checkWin = (board, player, moveRow, moveCol)```
 - Tämän avulla tarkistetaan onko siirto voittava (5 tai enemmän samaa merkkiä).
 - Minmax-haku keskeytetään, jos voitto löytyy, muuten jatketaan hakusyvyyteen.

## Ohjelmointikielet
- Javascript
- Kirjastot: React JS ja Vite

## Algoritmit ja tietorakenteet
- Minmax-aloritmi alpha-beta-karsinnalla [1].
- Tietorakenne pelipuu.
- Tehostetaan tekoälyn toimintaa kurssisivun materiaalissa mainituilla optimoinneilla [2].

## Minkä ongelman ratkaiset?
- Luodaan tekoälyvastustaja ristinollaan/gomoku peliin.
- Pelilaudan koko: 20x20 ruudukko
- Pelin voittaa vähintään viiden merkin pituisella rivillä.

## Mitä syötteitä ohjelma saa ja miten niitä käytetään? 
Algoritmi saa työtteenä pelilaudan tilan, josta lähdetään etsimään parasta siirtoa.

## Saavutetut aika- ja tilavaativuudet
Minmax-algoritmin aikavaativuus on luokkaa: O(b^d), missä b on pelipuun haarautumisaste (sallittujen siirtojen
lukumäärä) ja d on haun syvyys (monta siirtoa eteenpäin lasketaan). [1]

Algorimit tilavaativuus on on d (haun syvyys), joka on siis vakio O(1). [1]

Aika- ja tilavaativuuksien optimoinnit:

Haarautumisaste on rajoitettu etsimällä aloitussiirrot 1 päähän pelatuista. 

Haku tehdään syvyyssuuntaisena hakuna. Koska hakusyvyys on rajoitettu tilavaativuus ei ole rajoite.

Pelin käyttämä oletushakusyvyys on 4 ja sillä asetuksella tuottaa järkeviä siirtoja. Hakuaika on pelin alussa hyvä vielä tällä syvyydellä.    

## Puutteet ja parannusehdotukset
- Lisätään 2 päässä olevat siirrot etsittäviin. 
- Paremmat siirrot kannattaa kokeilla ensin.
- Parempi heuristiikka: esim. onko suora avoin (voi voittaa) suljettu (ei voi voittaa).
- Välittömiin uhkiin reagointi.
- Kattavampi testaus minmax-algoritmille.
- Jos laskenta vie liikaa aikaa, selain ei tykkää tästä ja kysyy odotetaanko vai lopetetaan suoritus. Tämä johtuu siitä että
javascript on suoritetaan yhdessä säikeessä. Javascriptin 'web worker' ominaisuuden avulla laskennan voisi suorittaa omassa säikeessä ilman, että selainikkuna jumiutuu tai herjaa.

## Viitteet
1. https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning
2. https://algolabra-hy.github.io/topics-fi#ristinolla--gomoku

## Laajojen kielimallienkäyttö:
- React.js projektin alkuun saamiseen (mm. käyttöliittymä, mutta jatkokehitetty/muokattu itse).
- Lisäksi kielimalleja on hyödynnetty osassa yksikkötestejä (jatkokehitetty/muokattu itse). 