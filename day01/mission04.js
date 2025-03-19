let fruits = ["Apple", "Orange", "Banana", "Grapes"];

var i = 0;

while (i < fruits.length) {
  if (fruits[i] === "Banana") {
    console.log("Banana가 있습니다.");
    break;
  }
  i = i + 1;
}
