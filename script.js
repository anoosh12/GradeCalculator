//
function calculateCurrentGrade() {
//error
    document.getElementById("error").innerHTML = "";
    if (weights > 1) {
        document.getElementById("error").innerHTML = "error(404),the weights need to add up to 100.";
    }
    if (weights < 1) {
        document.getElementById("error").innerHTML = "error(404), the weights need to add up to 100.";
    }

    //Weights
    var hwW = parseInt(document.getElementById("hwWeight").value);
    var qW = parseInt(document.getElementById("qWeight").value);
    var tW = parseInt(document.getElementById("tWeight").value);
    var mW = parseInt(document.getElementById("mWeight").value);
    var fW = parseInt(document.getElementById("fWeight").value);
    var weights = (hwW + qW + tW + mW + fW) / 100;

    //Homework
    var hwGrade = Math.round(average(convertArrayStringToNumber(document.getElementById("homework").value)));
    console.log(hwGrade);
    document.getElementById("averageHw").innerHTML = "Your total homework grade is " + hwGrade + "%";
    colorGrade(document.getElementById("averageHw"), hwGrade);

    //Quiz
    var quizGrade = Math.round(average(convertArrayStringToNumber(document.getElementById("quiz").value)));
    console.log(quizGrade);
    document.getElementById("averageQuiz").innerHTML = "Your total quiz grade is " + quizGrade + "%";
    colorGrade(document.getElementById("averageQuiz"), quizGrade);

    //Tests
    var testGrade = Math.round(average(convertArrayStringToNumber(document.getElementById("test").value)));
    console.log(testGrade);
    document.getElementById("averageTest").innerHTML = "Your total test grade is " + testGrade + "%";
    colorGrade(document.getElementById("averageTest"), testGrade);

    //Midterm
    var midtermGrade = Math.round(average(convertArrayStringToNumber(document.getElementById("midterm").value)));
    console.log(midtermGrade);
    document.getElementById("averageMidterm").innerHTML = "Your total midterm grade is " + midtermGrade + "%";
    colorGrade(document.getElementById("averageMidterm"), midtermGrade);

    //Total
    if (hwGrade <= 110){
        var hw = (hwGrade * hwW) / 100;
    }
    if (quizGrade <= 110){
        var quiz = (quizGrade * qW) / 100;
    }
    if (testGrade <= 110){
        var test = (testGrade * tW) / 100;
    }
    if (midtermGrade <= 110){
        var midterm = (midtermGrade * mW) / 100;
    }
    var currentGrade = Math.round(100 * ((hw + quiz + test + midterm) / (100 - fW)));
    if (isNaN(currentGrade) === true){
        document.getElementById("totalGrade").innerHTML = " You have entered bad data. Please try again";
    } else {
        document.getElementById("totalGrade").innerHTML = "Your current grade is a " + currentGrade + "%";
    }
    colorGrade(document.getElementById("totalGrade"), currentGrade);
    calculateGradeNeeded(currentGrade);

}
    function calculateGradeNeeded(grade) {
        var x = (1 - ((document.getElementById("fWeight").value) / 100)) * (grade / 100);
        var y = ((document.getElementById("dGrade").value) / 100) - x;
        var finalGradeNeeded = Math.round((y / ((document.getElementById("fWeight").value) / 100)) * 100);
        console.log(finalGradeNeeded);
        if (finalGradeNeeded >= 100) {
            return document.getElementById("finalGradeNeeded").innerHTML = "You need a " + finalGradeNeeded + "% on the final to get your desired grade.";
        }
        document.getElementById("finalGradeNeeded").innerHTML = "You need a " + finalGradeNeeded + "% on the final to get your desired grade.";
    }

    function convertArrayStringToNumber(string) {
        var array = string.split(",");
        for (var u = 0; u < array.length; u++) {
            if (isNaN(array[u]) === true) {
                return document.getElementById("error").innerHTML = "error, you have entered an invalid character.";
            }
        }
        for (var i = 0; i < array.length; i++) {
            array[i] = parseInt(array[i]);
        }
        return array;
    }

    function average(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum / arr.length;
    }

    function colorGrade(x, grade) {
        if (grade >= 90) {
            x.style.background = "Green";
        }
        if (grade >= 80 && grade < 90) {
            x.style.background = "GreenYellow";
        }
        if (grade >= 70 && grade < 80) {
            x.style.background = "Yellow";
        }
        if (grade >= 60 && grade < 70) {
            x.style.background = "Orange";
        }
        if (grade < 60) {
            x.style.background = "Red"
        }
    }
