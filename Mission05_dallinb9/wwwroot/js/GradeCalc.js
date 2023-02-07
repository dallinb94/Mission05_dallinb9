$(document).ready(function () {
    $("#calcButton").click(function () {

        // Using these variables cleans up the look of the "total" calculation below
        var assignments = parseFloat($("#assignment").val()) * 0.5;
        var groupProject = parseFloat($("#groupProject").val()) * 0.1;
        var quizzes = parseFloat($("#quiz").val()) * 0.1;
        var midtermExam = parseFloat($("#midtermExam").val()) * 0.1;
        var finalExam = parseFloat($("#finalExam").val()) * 0.1;
        var intex = parseFloat($("#intex").val()) * 0.1;

        // Here is the calculation for the total percentage
        var total = assignments + groupProject + quizzes + midtermExam + finalExam + intex;

        var letterGrade = "";

        // determining which letter the grade should be
        if (total >= 94) {
            letterGrade = "A";
        }
        else if (total >= 90) {
            letterGrade = "A-";
        }
        else if (total >= 87) {
            letterGrade = "B+";
        }
        else if (total >= 84) {
            letterGrade = "B";
        }
        else if (total >= 80) {
            letterGrade = "B-";
        }
        else if (total >= 77) {
            letterGrade = "C+";
        }
        else if (total >= 74) {
            letterGrade = "C";
        }
        else if (total >= 70) {
            letterGrade = "C-";
        }
        else if (total >= 67) {
            letterGrade = "D+";
        }
        else if (total >= 64) {
            letterGrade = "D";
        }
        else if (total >= 60) {
            letterGrade = "D-";
        }
        else {
            letterGrade = "E";
        }

        window.alert("Final Grade: " + letterGrade + " " + total.toFixed(2) + "%");
    });
});
