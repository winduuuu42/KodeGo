let toDo = ["Eat cake.", "Cry because there is nothing to do.", "Play with your pet chase them around or let them chase you around.", "Dress up like you are in the 1800s.", "Eat or sleep all day.", "Print out a ton of pictures of Mr. Bean and place them all around the house.", "Eat some pasta.", "Eat some pasta.", "Wander around the house aimlessly.", "Put money under your pillow every night."];
random = toDo.length;
i = 0;
displayrandom = "";

while(i < random) {
    displayrandom += "<li>" + toDo[i] + "</li>";
    i++;
}
document.getElementById("list").innerHTML = displayrandom;