//CODE CHALLENGE 3
//Net salary calculation
//create a payroll whose role is to calculate an individual net salary
let marks = document.getElementById("netSalary").value
function netSalary(salary,benefits){
    let gross = salary + benefits;
    let NSSF = gross * 0.06;
    let netCalculator = gross;
    let netIncome;
    let NHIF;

    //calculate NSSF & TAX.
if (gross <= 24000) {
    netIncome = (gross*0.1)
}
else if (gross >= 32333) {
   netIncome = (gross*0.3)
}
else if (gross >= 24001) {
    netIncome = (gross*0.25)
}
console.log('Gross salary:', gross)
console.log('TAX deductions:', netIncome)
console.log('NSSF deduction:', NSSF)
//calculate NHIF
//if statements
    if (gross <= 5999 ){
       NHIF  = gross - (gross - 150) }
    else if (gross <= 7999) {
        NHIF =  gross - (gross - 300)
    }
    else if( gross <= 11999){
        NHIF = gross - (gross - 400) }
    else if ( gross <= 14999) {
        NHIF = gross - (gross - 500)}
    else if (gross <= 19999) {
        NHIF = gross - (gross - 600) }
    else if(gross <= 24999) {
        NHIF = gross - (gross - 750)}
    else if( gross <= 29999){
        NHIF = gross - (gross- 850)}
    else if (gross <= 34999) {
        NHIF = gross - (gross - 900) }
    else if (gross <= 39999) {
        NHIF = gross - (gross - 950)}
    else if (gross <= 44999) {
        NHIF = gross - (gross - 1000)}
    else if (gross <= 49999) {
        NHIF = gross - (gross - 1100) }
    else if  (gross <= 59999){
        NHIF = gross - (gross - 1200)}
    else if (gross <= 69999) {
        NHIF =  gross - (gross - 1300) }
    else if (gross <= 79999) {
        NHIF = gross - (gross - 1400)}
    else if  (gross <= 89999) {
        NHIF = gross - (gross- 1500) }
    else if (gross <= 99999) {
        NHIF = gross - (gross - 1600)}
    else if (gross >= 100000) {
        NHIF = gross - (gross - 1700)}
console.log('NHIF deduction:', NHIF)
console.log('TAX & NSSF & NHIF total:', (NSSF + netIncome + NHIF ))
console.log('Net salary:', gross - (NSSF + netIncome + NHIF ))
// putting the values in a table
const result={
    salary,
    benefits,
    gross,
    NSSF,
    NHIF,
}
console.table(result)

}
netSalary(55000,2000);