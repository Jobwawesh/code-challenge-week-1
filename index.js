//CHALLENGE 1

//We are writing a function that will help us know how grades are being generated frommarks
function gradeGenerator (marks){
    let grade;
    if(marks>79){
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
    else{
        grade = 'E';
    }
    // We call the funtion outside the block of code
    // The value we input as the marks which is betwen 0-100 will give us a grade
    console.log(grade)
   
}
// Whatever value we put in the parenthesis will generate an overall grade
gradeGenerator()



//CHALLENGE 2
function speedDetector (speed){
    let points;
    if(speed <=70){
        points = null;
    }
    else{
        //  We will use math.floor to round down the number inorder to get an integer
        points = Math.floor((speed - 70)/5);
    }
    if(points<=12 && points !==null){
        console.log('Points: '+ points);
    }
    //Lincense get suspended when you get above 12 points
    else if(points >12){
        console.log('License suspended');
    }
    else{
        console.log('Ok');
    }
}
// Whatever value we put in the parenthesis will show how much points wll be issues.
// If you get more than 12 points your Lincese will be suspended
speedDetector()


//CHALLENGE 3

    let gross = salary + benefits;
// We want to declare a function that will help us to calculate how  much nssf someone is to pay
// Since the pensionable pay to NSSF is 6%, we will use 0.06 multiplying it to the basicSalary in ordr to get the actual amount

function calculateNSSF(basicSalary){
    let nssf;
    if(basicSalary<=6000){
    nssf = basicSalary*0.06;
    }
    else if(basicSalary>6000 && basicSalary<18000){
        nssf = (6000*0.06) + ((basicSalary-6000)*0.06);
    }
    else {
        nssf = 360+720;
    }
    return nssf;
} 
// In this function we will declare a calculateTax function in order to get what percentage of tax to be payed from someone's income tax
function calculateTax(taxableIncome){
    let tax = 0.01;
    if(taxableIncome<=24000){
        tax = taxableIncome*0.1;
    }
    else if(taxableIncome>24000 && taxableIncome<=32,333){
        tax = (24000*0.1)+((taxableIncome-24000)*0.25);
    }
    else{
        tax = (24000*0.1)+((32333-24000)*0.25)((taxableIncome-32333)*0.25);
        tax = (24000*0.1)+((8333)*0.25)+((taxableIncome-32333)*0.3);
    }
    return tax;

}
// The else statement helps to show how much one gets deducted in accorance to thir pay
// The more one is paid the more they will pay
function calculateNHIF(pay){
    let deduction;
    if(pay<=5999){
        deduction = 150;
    }
    else if(pay>=6000 && pay<8000){
        deduction = 300;
    }
    else if(pay>=8000 && pay<=11999){
        deduction = 400;
    }
    else if(pay >= 12000 && pay <= 14999){
        deduction = 500;
    }
    else if(pay >= 15000 && pay <= 19999){
        deduction = 600;
    }
    else if(pay >= 20000 && pay <= 24999){
        deduction = 750;
    }
    else if(pay >=25000 && pay <=29999){
        deduction = 850;
    }
    else if(pay >=30000 && pay <= 34999){
        deduction = 900;
    }
    else if(pay >= 35000 && pay <= 39999){
        deduction = 950;
    }
    else if(pay >= 40000 && pay <= 44999){
        deduction = 1000;
    }
    else if(pay >= 45000 && pay <= 49999){
        deduction = 1100;
    }
    else if(pay >= 50000 && pay <= 59999){
        deduction = 1200;
    }
    else if(pay >= 60000 && pay <= 69999){
        deduction = 1300;
    }
    else if(pay >= 70000 && pay <= 79999){
        deduction = 1400;
    }
    else if(pay >= 80000 && pay <= 89999){
        deduction = 1500;
    }
    else if(pay >= 90000 && pay <= 99999){
        deduction = 1600;
    }
    else{
        deduction = 1700;
    }

    return deduction;
}