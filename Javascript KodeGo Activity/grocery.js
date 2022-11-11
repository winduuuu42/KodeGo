
// Grocery Items
let groceryItems = ["red cabbage", "Goji berry", "anchovy paste", "asparagus", "coconut milk", "cooking wine", "chutney", "fennel seeds", "almond butter", "cheddar cheese", "cookies", "plantains", "cumin", "bacon grease", "vinegar", "sweet chili sauce", "ale", "parsley", "duck", "orange peels"];
displayGroceryList = "";

for(i = 0; i < groceryItems.length; i++) {
    displayGroceryList += "<li>" + groceryItems[i] + "</li>";
}
document.getElementById("groceryItems").innerHTML = displayGroceryList;