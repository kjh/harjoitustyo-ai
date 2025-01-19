# Määrittelydokumentti

Algoritmit ja tekoäly harjoitustyö.

## Aihe: Ristinolla

## Ohjelmointikielet
- Javascript
- Kirjastot: React JS ja Vite

### Hallitut kielet: Java, Javascript, Python, Ruby, C/C++

## Algoritmit ja tietorakenteet
- Minmax-aloritmi alpha-beta-karsinnalla [1].
- Tietorakenne pelipuu.
- Tehostetaan tekoälyn toimintaa kurssisivun materiaalissa mainituilla optimoinneilla [2].

## Minkä ongelman ratkaiset?
- Luodaan tekoälyvastustaja ristinollaan.
- Pelilaudan koko: 20x20 ruudukko
- Pelin voittaa vähintään viiden merkin pituisella rivillä.

## Mitä syötteitä ohjelma saa ja miten niitä käytetään? 
Algoritmi saa työtteenä pelilaudan tilan, josta lähdetään etsimään parasta siirtoa.

## Tavoitteena olevat aika- ja tilavaativuudet
Minmax-algoritmin aikavaativuus on luokkaa: O(b^d), missä b on pelipuun haarautumisaste (sallittujen siirtojen
lukumäärä) ja d on haun syvyys (monta siirtoa eteenpäin lasketaan). [1]

Algorimit tilavaativuus on myös luokkaa: O(b^d). [1]

## Viitteet
1. https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning
2. https://algolabra-hy.github.io/topics-fi#ristinolla--gomoku
