function calculateGrade() {
    var studentName = document.getElementById("studentName").value;
    var studentMarks = parseFloat(document.getElementById("studentMarks").value);


    if (!isNaN(studentMarks)) {
        var grade;


        if (studentMarks >= 79.5 && studentMarks <= 100) {
            grade = "A";
            var resultBox = document.getElementById("resultBox");
            resultBox.innerHTML = `${studentName} scored ${studentMarks}, which is grade ${grade}.`;


           
        } else if (studentMarks >= 60 && studentMarks <= 79) {
            grade = "B";
            var resultBox = document.getElementById("resultBox");
            resultBox.innerHTML = `${studentName} scored ${studentMarks}, which is grade ${grade}.`;
        } else if (studentMarks >= 50 && studentMarks <= 59) {
            grade = "C";
            var resultBox = document.getElementById("resultBox");
            resultBox.innerHTML = `${studentName} scored ${studentMarks}, which is grade ${grade}.`;
        } else if (studentMarks >= 40 && studentMarks <= 49) {
            grade = "D";
            var resultBox = document.getElementById("resultBox");
            resultBox.innerHTML = `${studentName} scored ${studentMarks}, which is grade ${grade}.`;
        }
        else if (studentMarks >= 0 && studentMarks <= 39) {
            grade = "E";
            var resultBox = document.getElementById("resultBox");
            resultBox.innerHTML = `${studentName} scored ${studentMarks}, which is grade ${grade}.`;


        } else {
            var resultBox = document.getElementById("resultBox").innerHTML = "";
            setTimeout(function(){
                alert(" Please enter a valid numeric value for student marks. ");
               
            }, 50);
       
           
           
           
        }
    } else {
        var resultBox = document.getElementById("resultBox").innerHTML = "";
            setTimeout(function(){
                alert(" Please enter an information in the spaces provided ");
               
            }, 50);
    }
}


