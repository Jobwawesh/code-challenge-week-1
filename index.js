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
    return
    // We call the funtion outside the block of code
    // The value we input as the marks which is betwen 0-100 will give us a grade
    console.log(`Having this ${marks} will give you this ${grade}`);
   
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
const prompt = require('prompt-sync')();

const monthlyGrossPay = prompt("Your monthly gross salary: ")

//This function calculates the PAYE 
function monthlyPAYE(PAYEDeduction) {
    if (monthlyGrossPay > 0 && monthlyGrossPay <= 24000) {
        PAYEDeduction = monthlyGrossPay * 0.1
        return PAYEDeduction
    } else if (monthlyGrossPay >= 24001 && monthlyGrossPay <= 32333) {
        PAYEDeduction = monthlyGrossPay * 0.25
        return PAYEDeduction
    } else {
        PAYEDeduction = monthlyGrossPay * 0.3
        return PAYEDeduction
    }
}
monthlyPAYE()

//This function will calculate NSSF
function NHIFDeductions (NHIFRate) {
    if (monthlyGrossPay > 0 && monthlyGrossPay < 6000) {
        NHIFRate = 150
        return NHIFRate
    } else if (monthlyGrossPay >= 6000 && monthlyGrossPay < 8000) {
        NHIFRate = 300
        return NHIFRate
    } else if (monthlyGrossPay >= 8000 && monthlyGrossPay < 12000) {
        NHIFRate = 400
        return NHIFRate
    } else if (monthlyGrossPay >= 12000 && monthlyGrossPay < 15000) {
        NHIFRate = 500
        return NHIFRate
    } else if (monthlyGrossPay >= 15000 && monthlyGrossPay < 20000) {
        NHIFRate = 600
        return NHIFRate
    } else if (monthlyGrossPay >= 20000 && monthlyGrossPay < 25000) {
        NHIFRate = 750
        return NHIFRate
    } else if (monthlyGrossPay >= 25000 && monthlyGrossPay < 30000) {
        NHIFRate = 850
        return NHIFRate
    } else if (monthlyGrossPay >= 30000 && monthlyGrossPay < 35000) {
        NHIFRate = 900
        return NHIFRate
    } else if (monthlyGrossPay >= 35000 && monthlyGrossPay < 40000) {
        NHIFRate = 950
        return NHIFRate
    } else if (monthlyGrossPay >= 40000 && monthlyGrossPay < 45000) {
        NHIFRate = 1000
        return NHIFRate
    } else if (monthlyGrossPay >= 45000 && monthlyGrossPay < 50000) {
        NHIFRate = 1100
        return NHIFRate
    } else if (monthlyGrossPay >= 50000 && monthlyGrossPay < 60000) {
        NHIFRate = 1200
        return NHIFRate
    } else if (monthlyGrossPay >= 60000 && monthlyGrossPay < 70000) {
        NHIFRate = 1300
        return NHIFRate
    } else if (monthlyGrossPay >= 70000 && monthlyGrossPay < 80000) {
        NHIFRate = 1400
        return NHIFRate
    } else if (monthlyGrossPay >= 80000 && monthlyGrossPay < 90000) {
        NHIFRate = 1500
        return NHIFRate
    } else if (monthlyGrossPay >= 90000 && monthlyGrossPay < 100000) {
        NHIFRate = 1600
        return NHIFRate
    } else {
        NHIFRate = 1700
        return NHIFRate
    }
}
NHIFDeductions()

//This function calculates NSSF (National Social Security Fund)
function NSSFDeductions () {
    let nssf = 0
        if (gross > 0 && gross <= 17999){
            return gross*0.06
        }else if (gross >= 18000){
            return nssf = 1080
        }
        return nssf
}
NSSFDeductions()
//Function that calculates net salary by deducting PAYE, NHIF and NSSF from Gross Salary
function netSalary(gross, paye, nhif, nssf) {
    const total = gross - paye - nhif - nssf
    return `PAYE tax = ${paye}\nNHIF deductions = ${nhif}\nNSSF deduction = ${nssf}\nNet Salary = ${total}`
}
console.log(netSalary(monthlyGrossPay, monthlyPAYE(), NHIFDeductions(), NSSFDeductions()))