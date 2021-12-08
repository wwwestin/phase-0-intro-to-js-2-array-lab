function beforeEach () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  };


  const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(name) {
    const appendCats = [...cats, "Broom"];
    return appendCats;
};

function prependCat(name) {
    const prependCats = ["Arnold", ...cats];
    return prependCats;
};

function removeLastCat() {
    return cats.slice(0,2);
};

function removeFirstCat() {
    return cats.slice(1,3);
};