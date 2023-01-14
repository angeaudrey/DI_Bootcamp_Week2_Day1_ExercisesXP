
/* Part II*/

/* question 1*/

 myWatchedSeries = ["black mirror","money heist","the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

/* question 2*/

let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);

/* question 3*/

console.log("I watched"+" "+myWatchedSeriesLength+" "+"series :"+" "+ myWatchedSeries);

/*Part II*/
/* question 1*/

let index = myWatchedSeries.indexOf("the big bang theory");
myWatchedSeries[index]="Game of thrones";
console.log(myWatchedSeries);

/* question 2*/

myWatchedSeries.push("wanted");
console.log(myWatchedSeries);

/* question 3*/

myWatchedSeries.unshift("Scorpion");
console.log(myWatchedSeries);

/* question 4*/

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

/* question 5*/
console.log(myWatchedSeries[1][2]);

/* question 6*/

console.log(myWatchedSeries);