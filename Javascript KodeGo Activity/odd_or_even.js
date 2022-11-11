function isCheck(){
    var num = document.getElementById('oddEven').value;
    if ((num % 2) == 0){
        document.getElementById('result').innerHTML = num+ " is an even number."
    }
    else{
        document.getElementById('result').innerHTML = num+ " is an odd number."
    }
    if (num == ""){
        document.getElementById('result').innerHTML = ""
    }
    else if ((num % 1) !== 0){
        document.getElementById('result').innerHTML = "<code class='invalid'>" + "INVALID! Not a whole number." + "</code>"
    }
}