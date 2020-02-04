// NEW SETS METHODS

// add
console.log("******** Add Methods ********");
var namesAdd = new Set();
namesAdd
  .add("Shaun")
  .add("Ryu")
  .add("Crystal")
  .add("Ryu");
console.log(namesAdd);

// size
console.log("******** Size Methods ********");
var namesSize = new Set();
namesSize
  .add("Shaun")
  .add("Ryu")
  .add("Crystal")
  .add("Ryu");
console.log(namesSize.size);

// delete
console.log("******** Delete Methods ********");
console.log("Delete Methods");
var namesDelete = new Set();
namesDelete
  .add("Shaun")
  .add("Ryu")
  .add("Crystal")
  .add("Ryu");
namesDelete.delete("Shaun");

console.log(namesDelete);

// has
console.log("******** Has Methods ********");
var namesHas = new Set();
namesHas
  .add("Shaun")
  .add("Ryu")
  .add("Crystal")
  .add("Ryu");
console.log(namesHas.has("Shaun"));
namesHas.delete("Ryu");
console.log(namesHas);
console.log(namesHas.has("Ryu"));

// clear
console.log("******** Clear Methods ********");
var namesClear = new Set();
namesClear
  .add("Shaun")
  .add("Ryu")
  .add("Crystal")
  .add("Ryu");
console.log(namesClear);
namesClear.clear();
console.log(namesClear);

// example 1
console.log("******** Example 1 ********");
var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"];
console.log(ninjas);

var refinedNinjas = new Set(ninjas);
console.log(refinedNinjas);

ninjas = [...refinedNinjas];
console.log(ninjas);
