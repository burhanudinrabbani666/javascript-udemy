const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
const a = books[0].author;
// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook); // ✅
console.log(`------------------`);

// 1.2
const [, , thirdBook] = [books[0], books[1], books[2]];
console.log(thirdBook); // ✅
console.log(`------------------`);

// 1.3
const [rating, ratingsCount] = [
  books[7].thirdParty.goodreads.rating,
  books[7].thirdParty.goodreads.ratingsCount,
];
console.log(rating, ratingsCount); // ✅
console.log(`------------------`);

// 1.4
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = [
  books[7].thirdParty.goodreads.fiveStarRatingCount,
  books[7].thirdParty.goodreads.oneStarRatingCount,
  ,
];
console.log(fiveStarRatings, oneStarRatings, threeStarRatings); // ✅


// 2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);
console.log(`------------------`);

// 2.2
const { keywords: tags } = books[0];
console.log(tags); // ✅
console.log(`------------------`);

// 2.3
const { programmingLanguage = `unknown`, language } = books[6];
console.log(programmingLanguage, language); // ✅
console.log(`------------------`);

//2.4
let bookTitle = title; //data from destructuring line 256
let bookauthor = author;
console.log(bookTitle, bookauthor); // ✅
console.log(`------------------`);

// 2.5
// Please do most of the work on the left side of the assignment operator: const ... = books[0];

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0]; // use : to change the variable name
console.log(bookRating);
console.log(`------------------`);

// 2.6
function printBookInfo({ title, author, year }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({ title: 'Deep Work', author: 'Cal Newport', year: 2016 }); // ✅
console.log(`------------------`);

// spread operator
// 3.1
const bookauthors = [...books[0].author, ...books[1].author];
console.log(bookauthors); // ✅
console.log(`------------------`);

// 3.2
function spellWord(word) {
  console.log(...word);
}

spellWord(`Hello World`); // ✅
console.log(`------------------`);

// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

//4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

//4.3

function printBookAuthor(title, ...author) {
  console.log(`The Book ${title} has ${author.length} authors`);
}
printBookAuthor(books[0].title, `robert sedewig`, `muldoko`);


// 5.1

function hasExampleInJava(book) {
  console.log(book.programmingLanguage === `Java` || `no data avaible`);
}
hasExampleInJava(books[0]);

//5.2

for (let index = 0; index < books.length; index++) {
  const online = books[index].onlineContent
    ? `${books[index].title} provides online content`
    : `not`;
  console.log(online);
}

for (let index = 0; index < books.length; index++) {
  books[index].onlineContent &&
    console.log(`${books[index].title} provides online content`);
}


// 6.1
for (let index = 0; index < books.length; index++) {
  books[index].onlineContent ??
    console.log(`${books[index].title} provides no data its online content`);
}


// 7.1
for (let index = 0; index < books.length; index++) {
  books[index].edition ||= 1;
  console.log(`${books[index].title} is ${books[index].edition} edition`);
}

//7.2
for (let index = 0; index < books.length; index++) {
  (books[index].highlighted && books[index].thirdParty.goodreads.rating != 4.2) &&= books[index].highlighted = false
}  // ❎

for (let index = 0; index < books.length; index++) {
  books[index].highlighted &&= !(books[index].thirdParty.goodreads.rating , 4.2)
}
  

// 8.1
let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
} //✅

//8.2

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === `string`) {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) allAuthors.push(author);
  }
}

//8.3

for (const [index, element] of allAuthors.entries())
  console.log(`${index + 1}: ${element}`);


//9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],

  // ...
}; // ✅

//9.2

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
}; // ✅
*/
