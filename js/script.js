//STEP 1
window.console.log("\nStep 1: ");
var x = ['Inglourious Basterds', 'Pulp Fiction', 'The Godfather', 'The Departed', 'American beauty'];
window.console.log('Second Movie: ', x[1]);

//STEP 2
window.console.log("\nStep 2: ");
var movies = new Array(5);
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
window.console.log('First Movie: ', movies[0]);

//STEP 3
window.console.log("\nStep 3: ");
var movies = new Array(5);
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies.splice(2, 0, 'The Dark Knight');
window.console.log('New Array Length:', movies.length);

//STEP 4
window.console.log("\nStep 4: ");
var movies = [];
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
delete movies[0];
window.console.log(movies);

//STEP 5
var movies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
window.console.log('Step 6\n');
for(i in movies) {
    window.console.log((parseInt(i)+1) + '. ' + movies[i]);
}

//STEP 6
var movies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
window.console.log('Step 5\n');
for(i of movies) {  
    "use strict";
    window.console.log((i+1) + '. ' + movies[i]);
}

//STEP 7
var movies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
movies.sort();
window.console.log('Step 7\n');
for(i of movies) {  
    "use strict";
    window.console.log((i+1) + '. ' + movies[i]);
}

//STEP 8
var movies = [];
var leastFavMovies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
window.console.log('Step 8\n\nMovies I like:\n\n');
for(i=0;i<movies.length;i++) {
    window.console.log((i+1) + '. ' + movies[i]);
}
window.console.log('\nMovies I regret watching:\n\n');
for(i=0;i<leastFavMovies.length;i++) {
    window.console.log((i+1) + '. ' + leastFavMovies[i]);
}
window.console.log('\n');

//STEP 9
var movies = [];
var leastFavMovies = [];
var i;
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
movies = movies.concat(leastFavMovies);
window.console.log('Step 9\nMerged Array in reverse sorted order:\n\n');
movies.sort().reverse();
for(i=0;i<movies.length;i++) {
    window.console.log((i+1) + '. ' + movies[i]);
}

//STEP 10
var movies = [];
var leastFavMovies = [];
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log("\nStep 10: ");
window.console.log('\nLast Element of the array: ',movies.slice(-1)[0]);

//STEP 11
window.console.log("\nStep 11: ");
var movies = [];
var leastFavMovies = [];
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
movies = movies.concat(leastFavMovies);
window.console.log('\nFirst Element of the array: ',movies.shift());

//STEP 12
window.console.log("\nStep 12: ");
var movies = [];
var leastFavMovies = [];
movies[0] = 'Inglourious Basterds';
movies[1] = 'Pulp Fiction';
movies[2] = 'The Godfather';
movies[3] = 'The Departed';
movies[4] = 'American beauty';
movies[5] = 'The Dark Knight';
movies[6] = 'Saving Private Ryan';
leastFavMovies[0] = 'Joker';
leastFavMovies[1] = 'Doctor Strange in the Multiverse of Madness';
leastFavMovies[2] = 'Fantastic Four';
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
var leastFavIndices = [];

movies.forEach((movie, i) => {
    if (leastFavMovies.includes(movie)) {
        leastFavIndices.push(i); }
});

var favMovies = ["Final Destination","1917","Parasite"]

leastFavIndices.forEach((i) => {
    movies[i] = favMovies.shift();
});

for (i = 0; i < movies.length; i++) {
    "use strict";
    window.console.log(movies[i] );
}
window.console.log("\n");


//STEP 13
window.console.log("\nStep 13: ");
var movies = [
    ["Django Unchained", 1], ["1917", 2], ["American Beauty", 3], ["Inglorious Bastards", 4], ["Hacksaw Ridge", 5]
];

var namesOnly = movies.filter(function(m) {
  return typeof m[0] === "string";
});

window.console.log(namesOnly.map(m => m[0]));


//STEP 14
window.console.log("\nStep 14: ");
var e = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var displayE = function(emp) {
  window.console.log("Employees: "); 
  e.forEach(function(empp) {
    window.console.log(empp);
  });
};

displayE(e);

//STEP 15

window.console.log("\nStep 15: ");
var x = [58, '', 'abcd', true, null, false, 0];

var y = function(v){
    return v.filter(function(val) {
  return val !== false && val !== null && val !== 0  && val !== "";
});
};

window.console.log(y([58, '', 'abcd', true, null, false, 0]));

//STEP 16

window.console.log("\nStep 16: ");

var nums = function(vals) {
    return vals[Math.floor(Math.random() * vals.length)];
};
var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(nums(collection));

//STEP 17

window.console.log("\nStep 17: ");

var mxNumber = function(x){
    return Math.max(...x);
}

var arr = [1, 2, 10, 9, 8, 7, 3, 4, 5, 6];

window.console.log(mxNumber(arr));