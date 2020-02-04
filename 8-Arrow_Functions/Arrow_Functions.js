// example 1

var ninjaGreeting = (name1, name2) =>
  console.log(`${name1} and ${name2} says 
hiiiiiyaaa`);

ninjaGreeting("ikhwan", "alin");

// example 2

var ninja = {
  name: "Ikhwan",
  chop(x) {
    window.setInterval(() => {
      if (x > 0) {
        console.log(this.name + " chopped the enemy");
        x--;
      }
    }, 1000);
  }
};
ninja.chop(5);
