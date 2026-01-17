// filter

// const lang = ['java', 'py', 'js', 'cpp']

// const langItem = lang.forEach( (item) => {
//     console.log(item); 
//     return item
// })
// console.log(langItem);
// for each loop returns nothing

// filter : 

 const lang = [1,2,3,4,5,6,7,8,9,10]
// langItem =lang.filter( (item) => item >= 5 )
// console.log(langItem);

// Note : if added scope using {} then do not forget to explicity return value;

// Activity

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // get non fiction books
// let userBooks = books.filter((bk) => {
//    return bk.genre === 'Non-Fiction'
//     // return bk;
// })

// console.log(userBooks);
  // get books publish after 2000

  // userBooks = books.filter( (bk) => bk.publish >= 2000)
  // console.log(userBooks);
  
  // get books edition is more or 2010

  //   userBooks = books.filter( (bk) => bk.edition >= 2010)
  // console.log(userBooks);

// using for each

const myLang = [];
lang.forEach( (ln) => {
  if (ln >= 5) {
    myLang.push(ln)
  }
})
console.log(myLang);

