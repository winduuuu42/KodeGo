function isCheck(){
    var day = document.getElementById('dayInput').value;

    switch (day){
        case "Monday":
            document.getElementById('result').innerHTML = "Don't fordet to be extra nice today!"
            break;
        case "Tuesday":
            document.getElementById('result').innerHTML = "Finish your Monday backlogs!"
            break;
        case "Wednesday":
            document.getElementById('result').innerHTML = "Busy at work? Breathe. Take a short break."
            break;
        case "Thursday":
            document.getElementById('result').innerHTML = "PUSH! Weekend is near!"
            break;
        case "Friday":
            document.getElementById('result').innerHTML = "Tomorrow's Weekend! Go home early so you have more time to rest."
            break;
        case "Saturday":
            document.getElementById('result').innerHTML = "WALWALAN NA!"
            break;
        case "Sunday":
            document.getElementById('result').innerHTML = "Sleep early. Mondays are traffic!"
            break;
        case "":
            document.getElementById('result').innerHTML = ""
            break;
    }
}