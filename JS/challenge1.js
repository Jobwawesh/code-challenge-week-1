// The gradeGeneartor function takes in a value of a student's marks and logs the equivalent grade to the console.
function gradeGenerator (marks){
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
    // The else statements is used when a user inputs an invalid input(a number not between 0-100)
    else{
        console.error(`${marks} is not a valid input. Input should be a number between 1 and 100`);
        return;
    }
    console.log(`Having marks of ${marks} is equal to the grade: ${grade}`);
}
gradeGenerator()