/*
function functionName (parameters){
    // function body
    // return
}

var returnValue = functionName(parameters value)
*/

function getAvarage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far:',myAverage);
