// The speedDetector function takes in a value of a driver's speed.
// Based on the speed, if the speed is 70Km/hr or below, the function will log that the speed is ok.
// If the speed is above 70Km/hr, it will display how many points are deducted from the driver's license or whether the license is suspended.
function speedDetector (speed){
    // Points variable is used to assign the number of points to a driver.
    let points;

    // First set of if-else statements determine if the input is valid and if it is above the speed limit, it determines how many points are given.
    // 1 point is given after every 5Kms such that when the speed is 74, the points are 0 and 1 when at 75.
    if(speed <=70 && speed>0){
        points = null;
    }
    else if(speed>70){
        points = Math.floor((speed - 70)/5);
    }
    else{
        console.error(`${speed} is an invalid input.`);
        return;
    }
    // This set of if-else statements is used to log a message to the console based on a valid speed input.
    if(points==0){
        console.log(`Points: ${points}. You are above the speed limit!`);
    }
    else if(points<=12 && points !==null){
        console.log('Points: '+ points);
    }
    else if(points >12){
        console.log('License suspended');
    }
    else{
        console.log('That speed is OK!');
    }
}
speedDetector()