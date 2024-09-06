// placeholder list of music tracks

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: number;
}

export interface Mix {
  id: string;
  tracks: Track[];
}

export interface Set {
  id: string;
  name: string;
  mixes: Mix[];
}

const placeholderTrackList: Track[] = [
  {
    id: '1',
    title: 'Thriller',
    artist: 'Michael Jackson',
    duration: 357,
  },
  {
    id: '2',
    title: "Boys Don't Cry",
    artist: 'The Cure',
    duration: 175,
  },
  {
    id: '3',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: 183,
  },
  {
    id: '4',
    title: 'Hotel California',
    artist: 'Eagles',
    duration: 390,
  },
  {
    id: '5',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    duration: 301,
  },
  {
    id: '6',
    title: 'Purple Rain',
    artist: 'Prince',
    duration: 284,
  },
  {
    id: '7',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: 354,
  },
  {
    id: '8',
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    duration: 370,
  },
  {
    id: '9',
    title: 'Born to Run',
    artist: 'Bruce Springsteen',
    duration: 273,
  },
  {
    id: '10',
    title: 'What\u2019s Going On',
    artist: 'Marvin Gaye',
    duration: 237,
  },
  {
    id: '11',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: 293,
  },
  {
    id: '12',
    title: 'Wonderwall',
    artist: 'Oasis',
    duration: 258,
  },
  {
    id: '13',
    title: 'Sweet Child O\u2019 Mine',
    artist: 'Guns N\u2019 Roses',
    duration: 356,
  },
  {
    id: '14',
    title: 'Let It Be',
    artist: 'The Beatles',
    duration: 243,
  },
  {
    id: '15',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    duration: 480,
  },
  {
    id: '16',
    title: 'Hey Jude',
    artist: 'The Beatles',
    duration: 431,
  },
  {
    id: '17',
    title: 'I Want to Hold Your Hand',
    artist: 'The Beatles',
    duration: 145,
  },
  {
    id: '18',
    title: 'Rolling in the Deep',
    artist: 'Adele',
    duration: 228,
  },
  {
    id: '19',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 326,
  },
  {
    id: '20',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 326,
  },
  {
    id: '22',
    title: 'Thriller',
    artist: 'Michael Jackson',
    duration: 357,
  },
  {
    id: '23',
    title: "Boys Don't Cry",
    artist: 'The Cure',
    duration: 175,
  },
  {
    id: '24',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: 183,
  },
  {
    id: '25',
    title: 'Hotel California',
    artist: 'Eagles',
    duration: 390,
  },
  {
    id: '26',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    duration: 301,
  },
  {
    id: '27',
    title: 'Purple Rain',
    artist: 'Prince',
    duration: 284,
  },
  {
    id: '28',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: 354,
  },
  {
    id: '29',
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    duration: 370,
  },
  {
    id: '30',
    title: 'Born to Run',
    artist: 'Bruce Springsteen',
    duration: 273,
  },
  {
    id: '31',
    title: 'What\u2019s Going On',
    artist: 'Marvin Gaye',
    duration: 237,
  },
  {
    id: '32',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: 293,
  },
  {
    id: '33',
    title: 'Wonderwall',
    artist: 'Oasis',
    duration: 258,
  },
  {
    id: '34',
    title: 'Sweet Child O\u2019 Mine',
    artist: 'Guns N\u2019 Roses',
    duration: 356,
  },
  {
    id: '35',
    title: 'Let It Be',
    artist: 'The Beatles',
    duration: 243,
  },
  {
    id: '36',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    duration: 480,
  },
  {
    id: '37',
    title: 'Hey Jude',
    artist: 'The Beatles',
    duration: 431,
  },
  {
    id: '38',
    title: 'I Want to Hold Your Hand',
    artist: 'The Beatles',
    duration: 145,
  },
  {
    id: '39',
    title: 'Rolling in the Deep',
    artist: 'Adele',
    duration: 228,
  },
  {
    id: '40',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 326,
  },
  {
    id: '41',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 326,
  },
  {
    id: '42',
    title: 'Thriller',
    artist: 'Michael Jackson',
    duration: 357,
  },
  {
    id: '43',
    title: "Boys Don't Cry",
    artist: 'The Cure',
    duration: 175,
  },
  {
    id: '44',
    title: 'Imagine',
    artist: 'John Lennon',
    duration: 183,
  },
  {
    id: '45',
    title: 'Hotel California',
    artist: 'Eagles',
    duration: 390,
  },
  {
    id: '46',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    duration: 301,
  },
  {
    id: '47',
    title: 'Purple Rain',
    artist: 'Prince',
    duration: 284,
  },
  {
    id: '48',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: 354,
  },
  {
    id: '49',
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    duration: 370,
  },
  {
    id: '50',
    title: 'Born to Run',
    artist: 'Bruce Springsteen',
    duration: 273,
  },
  {
    id: '51',
    title: 'What\u2019s Going On',
    artist: 'Marvin Gaye',
    duration: 237,
  },
  {
    id: '52',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: 293,
  },
  {
    id: '53',
    title: 'Wonderwall',
    artist: 'Oasis',
    duration: 258,
  },
  {
    id: '54',
    title: 'Sweet Child O\u2019 Mine',
    artist: 'Guns N\u2019 Roses',
    duration: 356,
  },
  {
    id: '55',
    title: 'Let It Be',
    artist: 'The Beatles',
    duration: 243,
  },
  {
    id: '56',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    duration: 480,
  },
  {
    id: '57',
    title: 'Hey Jude',
    artist: 'The Beatles',
    duration: 431,
  },
  {
    id: '58',
    title: 'I Want to Hold Your Hand',
    artist: 'The Beatles',
    duration: 145,
  },
  {
    id: '59',
    title: 'Rolling in the Deep',
    artist: 'Adele',
    duration: 228,
  },
  {
    id: '60',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 326,
  },
  {
    id: '61',
    title: 'Lose Yourself',
    artist: 'Eminem',
    duration: 326,
  },
];

const placeholderMixes: Mix[] = [
  {
    id: '1',
    tracks: [
      {
        id: '1',
        title: 'Thriller',
        artist: 'Michael Jackson',
        duration: 357,
      },
      {
        id: '2',
        title: "Boys Don't Cry",
        artist: 'The Cure',
        duration: 175,
      },
    ],
  },
  {
    id: '2',
    tracks: [
      {
        id: '3',
        title: 'Imagine',
        artist: 'John Lennon',
        duration: 183,
      },
      {
        id: '4',
        title: 'Hotel California',
        artist: 'Eagles',
        duration: 390,
      },
    ],
  },
  {
    id: '3',
    tracks: [
      {
        id: '5',
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        duration: 301,
      },
      {
        id: '6',
        title: 'Purple Rain',
        artist: 'Prince',
        duration: 284,
      },
    ],
  },
  {
    id: '4',
    tracks: [
      {
        id: '7',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: 354,
      },
      {
        id: '8',
        title: 'Like a Rolling Stone',
        artist: 'Bob Dylan',
        duration: 370,
      },
    ],
  },
  {
    id: '5',
    tracks: [
      {
        id: '9',
        title: 'Born to Run',
        artist: 'Bruce Springsteen',
        duration: 273,
      },
      {
        id: '10',
        title: 'What\u2019s Going On',
        artist: 'Marvin Gaye',
        duration: 237,
      },
    ],
  },
  {
    id: '6',
    tracks: [
      {
        id: '11',
        title: 'Billie Jean',
        artist: 'Michael Jackson',
        duration: 293,
      },
      {
        id: '12',
        title: 'Wonderwall',
        artist: 'Oasis',
        duration: 258,
      },
    ],
  },
  {
    id: '7',
    tracks: [
      {
        id: '13',
        title: 'Sweet Child O\u2019 Mine',
        artist: 'Guns N\u2019 Roses',
        duration: 356,
      },
      {
        id: '14',
        title: 'Let It Be',
        artist: 'The Beatles',
        duration: 243,
      },
    ],
  },
  {
    id: '8',
    tracks: [
      {
        id: '15',
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        duration: 480,
      },
      {
        id: '16',
        title: 'Hey Jude',
        artist: 'The Beatles',
        duration: 431,
      },
    ],
  },
  {
    id: '9',
    tracks: [
      {
        id: '17',
        title: 'I Want to Hold Your Hand',
        artist: 'The Beatles',
        duration: 145,
      },
      {
        id: '18',
        title: 'Rolling in the Deep',
        artist: 'Adele',
        duration: 228,
      },
    ],
  },
  {
    id: '10',
    tracks: [
      {
        id: '19',
        title: 'Lose Yourself',
        artist: 'Eminem',
        duration: 326,
      },
      {
        id: '20',
        title: 'Lose Yourself',
        artist: 'Eminem',
        duration: 326,
      },
    ],
  },
  {
    id: '12',
    tracks: [
      {
        id: '23',
        title: "Boys Don't Cry",
        artist: 'The Cure',
        duration: 175,
      },
      {
        id: '24',
        title: 'Imagine',
        artist: 'John Lennon',
        duration: 183,
      },
    ],
  },
  {
    id: '13',
    tracks: [
      {
        id: '25',
        title: 'Hotel California',
        artist: 'Eagles',
        duration: 390,
      },
      {
        id: '26',
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        duration: 301,
      },
    ],
  },
  {
    id: '14',
    tracks: [
      {
        id: '27',
        title: 'Purple Rain',
        artist: 'Prince',
        duration: 284,
      },
      {
        id: '28',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: 354,
      },
    ],
  },
  {
    id: '15',
    tracks: [
      {
        id: '29',
        title: 'Like a Rolling Stone',
        artist: 'Bob Dylan',
        duration: 370,
      },
      {
        id: '30',
        title: 'Born to Run',
        artist: 'Bruce Springsteen',
        duration: 273,
      },
    ],
  },
  {
    id: '16',
    tracks: [
      {
        id: '31',
        title: 'What\u2019s Going On',
        artist: 'Marvin Gaye',
        duration: 237,
      },
      {
        id: '32',
        title: 'Billie Jean',
        artist: 'Michael Jackson',
        duration: 293,
      },
    ],
  },
  {
    id: '17',
    tracks: [
      {
        id: '33',
        title: 'Wonderwall',
        artist: 'Oasis',
        duration: 258,
      },
      {
        id: '34',
        title: 'Sweet Child O\u2019 Mine',
        artist: 'Guns N\u2019 Roses',
        duration: 356,
      },
    ],
  },
  {
    id: '18',
    tracks: [
      {
        id: '35',
        title: 'Let It Be',
        artist: 'The Beatles',
        duration: 243,
      },
      {
        id: '36',
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        duration: 480,
      },
    ],
  },
  {
    id: '19',
    tracks: [
      {
        id: '37',
        title: 'Hey Jude',
        artist: 'The Beatles',
        duration: 431,
      },
      {
        id: '38',
        title: 'I Want to Hold Your Hand',
        artist: 'The Beatles',
        duration: 145,
      },
    ],
  },
  {
    id: '20',
    tracks: [
      {
        id: '39',
        title: 'Rolling in the Deep',
        artist: 'Adele',
        duration: 228,
      },
      {
        id: '40',
        title: 'Lose Yourself',
        artist: 'Eminem',
        duration: 326,
      },
    ],
  },
  {
    id: '21',
    tracks: [
      {
        id: '41',
        title: 'Lose Yourself',
        artist: 'Eminem',
        duration: 326,
      },
      {
        id: '42',
        title: 'Thriller',
        artist: 'Michael Jackson',
        duration: 357,
      },
    ],
  },
  {
    id: '22',
    tracks: [
      {
        id: '23',
        title: "Boys Don't Cry",
        artist: 'The Cure',
        duration: 175,
      },
      {
        id: '24',
        title: 'Imagine',
        artist: 'John Lennon',
        duration: 183,
      },
    ],
  },
  {
    id: '23',
    tracks: [
      {
        id: '25',
        title: 'Hotel California',
        artist: 'Eagles',
        duration: 390,
      },
      {
        id: '26',
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        duration: 301,
      },
    ],
  },
  {
    id: '24',
    tracks: [
      {
        id: '27',
        title: 'Purple Rain',
        artist: 'Prince',
        duration: 284,
      },
      {
        id: '28',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: 354,
      },
    ],
  },
  {
    id: '25',
    tracks: [
      {
        id: '29',
        title: 'Like a Rolling Stone',
        artist: 'Bob Dylan',
        duration: 370,
      },
      {
        id: '30',
        title: 'Born to Run',
        artist: 'Bruce Springsteen',
        duration: 273,
      },
    ],
  },
  {
    id: '26',
    tracks: [
      {
        id: '31',
        title: 'What\u2019s Going On',
        artist: 'Marvin Gaye',
        duration: 237,
      },
      {
        id: '32',
        title: 'Billie Jean',
        artist: 'Michael Jackson',
        duration: 293,
      },
    ],
  },
  {
    id: '27',
    tracks: [
      {
        id: '33',
        title: 'Wonderwall',
        artist: 'Oasis',
        duration: 258,
      },
      {
        id: '34',
        title: 'Sweet Child O\u2019 Mine',
        artist: 'Guns N\u2019 Roses',
        duration: 356,
      },
    ],
  },
  {
    id: '28',
    tracks: [
      {
        id: '35',
        title: 'Let It Be',
        artist: 'The Beatles',
        duration: 243,
      },
      {
        id: '36',
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        duration: 480,
      },
    ],
  },
  {
    id: '29',
    tracks: [
      {
        id: '37',
        title: 'Hey Jude',
        artist: 'The Beatles',
        duration: 431,
      },
      {
        id: '38',
        title: 'I Want to Hold Your Hand',
        artist: 'The Beatles',
        duration: 145,
      },
    ],
  },
  {
    id: '30',
    tracks: [
      {
        id: '39',
        title: 'Rolling in the Deep',
        artist: 'Adele',
        duration: 228,
      },
      {
        id: '40',
        title: 'Lose Yourself',
        artist: 'Eminem',
        duration: 326,
      },
    ],
  },
  {
    id: '31',
    tracks: [
      {
        id: '41',
        title: 'Lose Yourself',
        artist: 'Eminem',
        duration: 326,
      },
      {
        id: '42',
        title: 'Thriller',
        artist: 'Michael Jackson',
        duration: 357,
      },
    ],
  },
];

const placeholderSets: Set[] = [
  {
    id: '1',
    name: 'Ultimate Classics',
    mixes: [
      {
        id: '1',
        tracks: [
          {
            id: '1',
            title: 'Thriller',
            artist: 'Michael Jackson',
            duration: 357,
          },
          {
            id: '2',
            title: "Boys Don't Cry",
            artist: 'The Cure',
            duration: 175,
          },
        ],
      },
      {
        id: '2',
        tracks: [
          {
            id: '3',
            title: 'Imagine',
            artist: 'John Lennon',
            duration: 183,
          },
          {
            id: '4',
            title: 'Hotel California',
            artist: 'Eagles',
            duration: 390,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Rock Legends',
    mixes: [
      {
        id: '3',
        tracks: [
          {
            id: '5',
            title: 'Smells Like Teen Spirit',
            artist: 'Nirvana',
            duration: 301,
          },
          {
            id: '6',
            title: 'Purple Rain',
            artist: 'Prince',
            duration: 284,
          },
        ],
      },
      {
        id: '4',
        tracks: [
          {
            id: '7',
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            duration: 354,
          },
          {
            id: '8',
            title: 'Like a Rolling Stone',
            artist: 'Bob Dylan',
            duration: 370,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Greatest Hits',
    mixes: [
      {
        id: '5',
        tracks: [
          {
            id: '9',
            title: 'Born to Run',
            artist: 'Bruce Springsteen',
            duration: 273,
          },
          {
            id: '10',
            title: 'What\u2019s Going On',
            artist: 'Marvin Gaye',
            duration: 237,
          },
        ],
      },
      {
        id: '6',
        tracks: [
          {
            id: '11',
            title: 'Billie Jean',
            artist: 'Michael Jackson',
            duration: 293,
          },
          {
            id: '12',
            title: 'Wonderwall',
            artist: 'Oasis',
            duration: 258,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Timeless Anthems',
    mixes: [
      {
        id: '7',
        tracks: [
          {
            id: '13',
            title: 'Sweet Child O\u2019 Mine',
            artist: 'Guns N\u2019 Roses',
            duration: 356,
          },
          {
            id: '14',
            title: 'Let It Be',
            artist: 'The Beatles',
            duration: 243,
          },
        ],
      },
      {
        id: '8',
        tracks: [
          {
            id: '15',
            title: 'Stairway to Heaven',
            artist: 'Led Zeppelin',
            duration: 480,
          },
          {
            id: '16',
            title: 'Hey Jude',
            artist: 'The Beatles',
            duration: 431,
          },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Legendary Tracks',
    mixes: [
      {
        id: '9',
        tracks: [
          {
            id: '17',
            title: 'I Want to Hold Your Hand',
            artist: 'The Beatles',
            duration: 145,
          },
          {
            id: '18',
            title: 'Rolling in the Deep',
            artist: 'Adele',
            duration: 228,
          },
        ],
      },
      {
        id: '10',
        tracks: [
          {
            id: '19',
            title: 'Lose Yourself',
            artist: 'Eminem',
            duration: 326,
          },
          {
            id: '20',
            title: 'Lose Yourself',
            artist: 'Eminem',
            duration: 326,
          },
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'Ultimate Classics',
    mixes: [
      {
        id: '13',
        tracks: [
          {
            id: '25',
            title: 'Hotel California',
            artist: 'Eagles',
            duration: 390,
          },
          {
            id: '26',
            title: 'Smells Like Teen Spirit',
            artist: 'Nirvana',
            duration: 301,
          },
        ],
      },
      {
        id: '14',
        tracks: [
          {
            id: '27',
            title: 'Purple Rain',
            artist: 'Prince',
            duration: 284,
          },
          {
            id: '28',
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            duration: 354,
          },
        ],
      },
    ],
  },
  {
    id: '8',
    name: 'Rock Legends',
    mixes: [
      {
        id: '15',
        tracks: [
          {
            id: '29',
            title: 'Like a Rolling Stone',
            artist: 'Bob Dylan',
            duration: 370,
          },
          {
            id: '30',
            title: 'Born to Run',
            artist: 'Bruce Springsteen',
            duration: 273,
          },
        ],
      },
      {
        id: '16',
        tracks: [
          {
            id: '31',
            title: 'What\u2019s Going On',
            artist: 'Marvin Gaye',
            duration: 237,
          },
          {
            id: '32',
            title: 'Billie Jean',
            artist: 'Michael Jackson',
            duration: 293,
          },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'Greatest Hits',
    mixes: [
      {
        id: '17',
        tracks: [
          {
            id: '33',
            title: 'Wonderwall',
            artist: 'Oasis',
            duration: 258,
          },
          {
            id: '34',
            title: 'Sweet Child O\u2019 Mine',
            artist: 'Guns N\u2019 Roses',
            duration: 356,
          },
        ],
      },
      {
        id: '18',
        tracks: [
          {
            id: '35',
            title: 'Let It Be',
            artist: 'The Beatles',
            duration: 243,
          },
          {
            id: '36',
            title: 'Stairway to Heaven',
            artist: 'Led Zeppelin',
            duration: 480,
          },
        ],
      },
    ],
  },
  {
    id: '10',
    name: 'Timeless Anthems',
    mixes: [
      {
        id: '19',
        tracks: [
          {
            id: '37',
            title: 'Hey Jude',
            artist: 'The Beatles',
            duration: 431,
          },
          {
            id: '38',
            title: 'I Want to Hold Your Hand',
            artist: 'The Beatles',
            duration: 145,
          },
        ],
      },
      {
        id: '20',
        tracks: [
          {
            id: '39',
            title: 'Rolling in the Deep',
            artist: 'Adele',
            duration: 228,
          },
          {
            id: '40',
            title: 'Lose Yourself',
            artist: 'Eminem',
            duration: 326,
          },
        ],
      },
    ],
  },
  {
    id: '11',
    name: 'Legendary Tracks',
    mixes: [
      {
        id: '21',
        tracks: [
          {
            id: '41',
            title: 'Lose Yourself',
            artist: 'Eminem',
            duration: 326,
          },
          {
            id: '42',
            title: 'Thriller',
            artist: 'Michael Jackson',
            duration: 357,
          },
        ],
      },
      {
        id: '22',
        tracks: [
          {
            id: '23',
            title: "Boys Don't Cry",
            artist: 'The Cure',
            duration: 175,
          },
          {
            id: '24',
            title: 'Imagine',
            artist: 'John Lennon',
            duration: 183,
          },
        ],
      },
    ],
  },
  {
    id: '12',
    name: 'Ultimate Classics',
    mixes: [
      {
        id: '13',
        tracks: [
          {
            id: '25',
            title: 'Hotel California',
            artist: 'Eagles',
            duration: 390,
          },
          {
            id: '26',
            title: 'Smells Like Teen Spirit',
            artist: 'Nirvana',
            duration: 301,
          },
        ],
      },
      {
        id: '14',
        tracks: [
          {
            id: '27',
            title: 'Purple Rain',
            artist: 'Prince',
            duration: 284,
          },
          {
            id: '28',
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
            duration: 354,
          },
        ],
      },
    ],
  },
  {
    id: '13',
    name: 'Rock Legends',
    mixes: [
      {
        id: '15',
        tracks: [
          {
            id: '29',
            title: 'Like a Rolling Stone',
            artist: 'Bob Dylan',
            duration: 370,
          },
          {
            id: '30',
            title: 'Born to Run',
            artist: 'Bruce Springsteen',
            duration: 273,
          },
        ],
      },
      {
        id: '16',
        tracks: [
          {
            id: '31',
            title: 'What\u2019s Going On',
            artist: 'Marvin Gaye',
            duration: 237,
          },
          {
            id: '32',
            title: 'Billie Jean',
            artist: 'Michael Jackson',
            duration: 293,
          },
        ],
      },
    ],
  },
  {
    id: '14',
    name: 'Greatest Hits',
    mixes: [
      {
        id: '17',
        tracks: [
          {
            id: '33',
            title: 'Wonderwall',
            artist: 'Oasis',
            duration: 258,
          },
          {
            id: '34',
            title: 'Sweet Child O\u2019 Mine',
            artist: 'Guns N\u2019 Roses',
            duration: 356,
          },
        ],
      },
      {
        id: '18',
        tracks: [
          {
            id: '35',
            title: 'Let It Be',
            artist: 'The Beatles',
            duration: 243,
          },
          {
            id: '36',
            title: 'Stairway to Heaven',
            artist: 'Led Zeppelin',
            duration: 480,
          },
        ],
      },
    ],
  },
  {
    id: '15',
    name: 'Timeless Anthems',
    mixes: [
      {
        id: '19',
        tracks: [
          {
            id: '37',
            title: 'Hey Jude',
            artist: 'The Beatles',
            duration: 431,
          },
          {
            id: '38',
            title: 'I Want to Hold Your Hand',
            artist: 'The Beatles',
            duration: 145,
          },
        ],
      },
      {
        id: '20',
        tracks: [
          {
            id: '39',
            title: 'Rolling in the Deep',
            artist: 'Adele',
            duration: 228,
          },
          {
            id: '40',
            title: 'Lose Yourself',
            artist: 'Eminem',
            duration: 326,
          },
        ],
      },
    ],
  },
  {
    id: '16',
    name: 'Legendary Tracks',
    mixes: [
      {
        id: '21',
        tracks: [
          {
            id: '41',
            title: 'Lose Yourself',
            artist: 'Eminem',
            duration: 326,
          },
          {
            id: '42',
            title: 'Thriller',
            artist: 'Michael Jackson',
            duration: 357,
          },
        ],
      },
      {
        id: '22',
        tracks: [
          {
            id: '23',
            title: "Boys Don't Cry",
            artist: 'The Cure',
            duration: 175,
          },
          {
            id: '24',
            title: 'Imagine',
            artist: 'John Lennon',
            duration: 183,
          },
        ],
      },
    ],
  },
];

export { placeholderTrackList, placeholderMixes, placeholderSets };
