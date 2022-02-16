const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
]
destructivelyAppendCat("Ralph");
cats.pop();
destructivelyPrependCat("Bob");
cats.shift();
destructivelyRemoveLastCat();
destructivelyAppendCat("Garfield");
destructivelyRemoveFirstCat();
destructivelyPrependCat("Milo");
// done with first five tests, resets to original array each time

const copyOfCats = appendCat("Broom"); // makes a copy of array with Broom at the end
prependCat("cat name")
removeLastCat();
removeFirstCat();

// removes first cat, returns new array, non-destructive
function removeFirstCat() {
    return cats.slice(1, cats.length);
}


function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function prependCat(name) {
    return [name, ...cats];
}

function appendCat(name) {
    return [...cats, name];
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyAppendCat(name) {
   cats.push(name);
}



console.log(cats);
console.log(copyOfCats); 

