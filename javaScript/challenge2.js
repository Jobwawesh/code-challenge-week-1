//CODE CHALLENGE 2
// The speedDetector function takes in a value of a driver's speed.
// If the speed is 70Km/hr or below, the function will log that the speed is ok.
// If the speed is above 70Km/hr, it will display how many points are deducted from the driver's license or whether the license is suspended.

let result = document.getElementById('#pointsOutput');

let button = document.querySelector('#pointsBtn');
button.addEventListener('click', speedDetector);


function speedDetector (){
    let speed = parseFloat(document.getElementById("speed").value);
    let points
    let message
    // Points variable is used to assign the number of points to a driver.

    // First set of if-else statements determine if the input is valid and if it is above the speed limit, it determines how many points are given.
    // 1 point is given after every 5Kms such that when the speed is 74, the points are 0 and 1 when at 75.
    if(speed <=70 && speed>0){
        points = null;
    }
    else if(speed>70){
        points = Math.floor((speed - 70)/5);
    }
    else{
        return;
    }
    // This set of if-else statements is used to log a message to the console based on a valid speed input.
    if(points==0){
        message = `Points: ${points}. You are above the speed limit!`;
    }
    else if(points<=12 && points !==null){
        message = 'Points: '+ points;
    }
    else if(points >12){
        message = 'License suspended';
    }
    else{
        message = 'That speed is OK!';
    }

    const finalPoints = document.querySelector("#messageOutput");
    finalPoints.textContent = message;
}
//speedDetector()