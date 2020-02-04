// NEW STRING METHODS
// - repeat
// - startsWith
// - endsWith
// - includes

// example 1

var str = "graaaaavy ";

console.log(str.repeat(5));

// example 2

var str = "goodbye";

console.log(str.startsWith("good"));
console.log(str.startsWith("bye"));
console.log(str.startsWith("bye", 4));
console.log(str.endsWith("bye"));
console.log(str.endsWith("good"));
console.log(str.endsWith("good", str.length - 3));

// example 3

var youSay = "goodbye";

if (youSay.startsWith("goodbye")) {
  var iSay = "hello";
}

console.log(`you say ${youSay}, I say ${iSay}`);

// example 4

var test = "My name is Ikhwan";

console.log(test.includes("name"));
console.log(test.includes("names"));
