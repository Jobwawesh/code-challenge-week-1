//CODE CHALLENGE 3
// The gradeGeneartor function takes in a value of a student's marks and logs the equivalent grade to the console.
let result = document.getElementById('#gradeOutput');

let button = document.querySelector('#grade');
button.addEventListener('click', gradeGenerator);

function gradeGenerator(){
    let marks = parseFloat(document.getElementById("marks").value);
    console.log(marks)
    let grade;
    // The if-else statements below are used to determine the grade based on the range that the student's marks fall into.
    if(marks>79 && marks<=100){
        grade = 'A';
    }
    else if(marks >=60 && marks<=79){
        grade = 'B';
    }
    else if(marks >=50 && marks <=59){
        grade = 'C';
    }
    else if(marks >=40 && marks <=49){
        grade = 'D';
    }
    else if(marks<40 && marks >=0){
        grade = 'E';
    }
    
    const finalGrade = document.querySelector("#gradeGenerator");
    finalGrade.textContent = grade;


}

// gradeGenerator()