const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// filter
// Filter the list of inventors for those who were born in the 1500's

let inventors_15s = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1599 );

// console.table(inventors_15s);

// map
// Give is an array of the inventors first and last names

let inventorsNames = inventors.map((inventor) => {
    return { first: inventor.first, last: inventor.last };
});

// console.table(inventorsNames)

// sort
// Sort the inventors by birthdate, oldest to youngest

let inventorBirthdate = inventors.sort((a, b) => b.year - a.year);

// console.table(inventorBirthdate);

// reduce 
// how many years did all the investors live

let inventorsYears = inventors.reduce((acc, inventor) => {
  let totalYears = inventor.passed - inventor.year;

   return acc + totalYears;
}, 0);

// console.log(inventorsYears)

// sort the investors by years lived

const oldest = inventors.sort((a,b) => {
 
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;

  return lastInventor > nextInventor;
});

// console.table(oldest);


// Create a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = [...document.querySelectorAll('a')];

// const de = links
//            .map((link) => link.textContent )
//            .filter((streetName) => streetName.includes('de'));

// sort
// sort people alphabetically by last name

let allNames = people.sort((a,b) => {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return aLast - bLast;
});

// console.table(allNames);

// reduce
// sum up instances of data array

let numberOfTransport = data.reduce((acc, move) => {
  if(!acc[move]){
    acc[move] = 0;
  }
  acc[move]++;
  return acc;
}, {});

console.log(numberOfTransport)