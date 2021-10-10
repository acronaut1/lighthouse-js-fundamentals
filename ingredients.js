const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients-[While Method]:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nIngredients-[ForLoop Method]:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
const reversed = ingredients.reverse();
  console.log('\nIngredients-Reversed:\n', reversed);
