
function calculateCurrentGrade(){

    //Weight
    var weights = (hw + cw + tests + midterm + f)/ 100;

    //error
    document.getElementById("error").innerHTML =  "";
    if(weights > 1){
        document.getElementById("error").innerHTML = "error(404),the weights need to add up to 100.";
    }
    if(weights < 1){
        document.getElementById("error").innerHTML = "error(404), the weights need to add up to 100.";
    }

    //Homework
    var hw = (document.getElementById("Homework").value);
    var hwToArray = convertStringToArray(hw);
    var hwArrayToNumber = convertArrayStringToNumber(hwToArray);
    var averageHw = averageArray(hwArrayToNumber);
    var hwGrade = avg(convertArrayStringToNumber(document.getElementById("homework").value));
    console.log(hwGrade);
    document.getElementById("avgHw").innerHTML = "Your total homework grade is " +  hwGrade + "%";
    colorGrade(document.getElementById("avgHw"), hwGrade);

    //Classwork
    var cw = (document.getElementById("Classwork Grade").value);
    var cwToArray = convertStringToArray(cw);
    var cwArrayToNumber = convertArrayStringToNumber(cwToArray);
    var cwAverage = averageArray(cwArrayToNumber);

    //Quiz
    var quizGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("quiz").value)));
    console.log(quizGrade);
    document.getElementById("avgQuiz").innerHTML = "Your total quiz grade is " + quizGrade + "%";
    colorGrade(document.getElementById("avgQuiz"), quizGrade);

    //Tests
    var tests = (document.getElementById("Test Grades").value);
    var testsToArray = convertStringToArray(tests);
    var testsArrayToNumber = convertArrayStringToNumber(testsToArray);
    var testsAverage = averageArray(testsArrayToNumber);
    var testGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("test").value)));
    console.log(testGrade);
    document.getElementById("avgTest").innerHTML = "Your total test grade is " + testGrade + "%";
    colorGrade(document.getElementById("avgTest"), testGrade);

    //Midterm
    var midtermGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("midterm").value)));
    console.log(midtermGrade);
    document.getElementById("avgMidterm").innerHTML = "Your total midterm grade is " + midtermGrade + "%";
    colorGrade(document.getElementById("avgMidterm"), midtermGrade);

    //Total
    var hw = (hwGrade * hwWeight) / 100;
    var quiz = (quizGrade * qWeight) / 100;
    var test = (testGrade * tWeight) / 100;
    var midterm = (midtermGrade * mWeight) / 100;
    var currentGrade = Math.round(100 * ((hw + quiz + test + midterm) / (100 - fWeight)));
    console.log(currentGrade);
    document.getElementById("totalGrade").innerHTML = "Your current grade is a " + currentGrade + "%";
    colorGrade(document.getElementById("totalGrade"), currentGrade);
    calculateGradeNeeded(currentGrade);

}

function convertStringToArray(str) {
    var arr = str.split(",");
    return arr;
}

function convertArrayStringToNumber(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i])
    }
    return arr;
}

function averageArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    return avg;
}