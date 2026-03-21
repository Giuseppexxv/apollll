/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * 🎬 ZONA EDITING FILM - DATABASE LOCALE
 * 
 * In questo file puoi gestire tutti i contenuti cinematografici del Teatro Apollo.
 * Modifica gli oggetti qui sotto per aggiornare titoli, orari, immagini e dettagli.
 * 
 * STRUTTURA:
 * - MOVIES_TODAY: I film proiettati oggi (Sezione "Oggi in Sala")
 * - UPCOMING_MOVIES: I film di prossima uscita (Sezione "Prossimamente")
 */

import { Movie } from '../types';

export const MOVIES_TODAY: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Sci-Fi / Action",
    duration: "166 min",
    rating: "8.8",
    image: "https://picsum.photos/seed/dune/400/600",
    time: "16:30",
    synopsis: "Paul Atreides si unisce a Chani e ai Fremen sul sentiero della vendetta contro i cospiratori che hanno distrutto la sua famiglia. Di fronte alla scelta tra l'amore della sua vita e il destino dell'universo conosciuto, Paul intraprende una missione per impedire un terribile futuro che solo lui è in grado di prevedere.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin", "Austin Butler"],
    director: "Denis Villeneuve",
    country: "USA / Canada",
    pegi: "12+",
    trailer: "https://www.youtube.com/embed/Way9Dexny3w",
    isUpcoming: false,
    isWeeklyChoice: true
  },
  {
    id: 2,
    title: "Oppenheimer",
    genre: "Drama / History",
    duration: "180 min",
    rating: "8.4",
    image: "https://picsum.photos/seed/oppenheimer/400/600",
    time: "18:15",
    synopsis: "La storia del fisico teorico J. Robert Oppenheimer, il cui lavoro nel Progetto Manhattan portò alla creazione della bomba atomica.",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr.", "Florence Pugh"],
    director: "Christopher Nolan",
    country: "USA / UK",
    pegi: "12+",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
    isUpcoming: false
  },
  {
    id: 3,
    title: "Poor Things",
    genre: "Comedy / Sci-Fi",
    duration: "141 min",
    rating: "8.0",
    image: "https://picsum.photos/seed/poor/400/600",
    time: "21:00",
    synopsis: "La storia incredibile e l'evoluzione fantastica di Bella Baxter, una giovane donna riportata in vita dal brillante e poco ortodosso scienziato Dr. Godwin Baxter.",
    cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe", "Ramy Youssef"],
    director: "Yorgos Lanthimos",
    country: "Irlanda / UK / USA",
    pegi: "14+",
    trailer: "https://www.youtube.com/embed/RlbR5N6veqw",
    isUpcoming: false
  }
];

export const UPCOMING_MOVIES: Movie[] = [
  {
    id: 101,
    title: "Joker: Folie à Deux",
    genre: "Crime / Musical",
    releaseDate: "4 Ottobre 2024",
    image: "https://picsum.photos/seed/joker/400/600",
    synopsis: "Il sequel del film Joker del 2019, che vede il ritorno di Joaquin Phoenix nel ruolo del protagonista, affiancato da Lady Gaga nel ruolo di Harley Quinn.",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz", "Brendan Gleeson"],
    director: "Todd Phillips",
    country: "USA",
    pegi: "14+",
    trailer: "https://www.youtube.com/embed/xy8aJw1vYHo",
    isUpcoming: true
  },
  {
    id: 102,
    title: "Gladiator II",
    genre: "Action / Adventure",
    releaseDate: "22 Novembre 2024",
    image: "https://picsum.photos/seed/gladiator/400/600",
    synopsis: "Anni dopo aver assistito alla morte dell'eroe Massimo per mano di suo zio, Lucio è costretto a entrare nel Colosseo dopo che la sua casa è stata conquistata dai tirannici imperatori che ora guidano Roma con il pugno di ferro.",
    cast: ["Paul Mescal", "Pedro Pascal", "Denzel Washington", "Connie Nielsen"],
    director: "Ridley Scott",
    country: "USA / UK",
    pegi: "14+",
    trailer: "https://www.youtube.com/embed/4rgYUipGJNo",
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 103,
    title: "Wicked",
    genre: "Fantasy / Musical",
    releaseDate: "27 Novembre 2024",
    image: "https://picsum.photos/seed/wicked/400/600",
    synopsis: "La storia mai raccontata delle streghe di Oz, focalizzata sulla bionda e popolare Glinda e sulla verde e incompresa Elphaba.",
    cast: ["Cynthia Erivo", "Ariana Grande", "Michelle Yeoh", "Jeff Goldblum"],
    director: "Jon M. Chu",
    country: "USA",
    pegi: "T",
    trailer: "https://www.youtube.com/embed/6COmYeLsz4c",
    isUpcoming: true
  },
  {
    id: 104,
    title: "Moana 2",
    genre: "Animation / Adventure",
    releaseDate: "27 Novembre 2024",
    image: "https://picsum.photos/seed/moana/400/600",
    synopsis: "Dopo aver ricevuto una chiamata inaspettata dai suoi antenati, Vaiana deve viaggiare verso i mari lontani dell'Oceania e in acque pericolose e perdute da tempo per un'avventura diversa da qualsiasi cosa abbia mai affrontato.",
    cast: ["Auli'i Cravalho", "Dwayne Johnson"],
    director: "David G. Derrick Jr.",
    country: "USA",
    pegi: "T",
    trailer: "https://www.youtube.com/embed/hDZ7y8RP5HE",
    isUpcoming: true
  },
  {
    id: 105,
    title: "Sonic the Hedgehog 3",
    genre: "Action / Adventure",
    releaseDate: "20 Dicembre 2024",
    image: "https://picsum.photos/seed/sonic/400/600",
    synopsis: "Sonic, Knuckles e Tails si riuniscono contro un nuovo potente avversario, Shadow, un misterioso cattivo con poteri diversi da qualsiasi cosa abbiano mai affrontato prima.",
    cast: ["Ben Schwartz", "Jim Carrey", "Keanu Reeves", "Idris Elba"],
    director: "Jeff Fowler",
    country: "USA / Japan",
    pegi: "T",
    trailer: "https://www.youtube.com/embed/qSu6i2iFKn0",
    isUpcoming: true
  },
  {
    id: 106,
    title: "Nosferatu",
    genre: "Horror / Fantasy",
    releaseDate: "25 Dicembre 2024",
    image: "https://picsum.photos/seed/nosferatu/400/600",
    synopsis: "Un racconto gotico di ossessione tra una giovane donna tormentata e il terrificante vampiro infatuato di lei, causando un orrore indicibile sulla sua scia.",
    cast: ["Bill Skarsgård", "Nicholas Hoult", "Lily-Rose Depp", "Willem Dafoe"],
    director: "Robert Eggers",
    country: "USA",
    pegi: "14+",
    trailer: "https://www.youtube.com/embed/nulvWqYUM8k",
    isUpcoming: true
  }
];
