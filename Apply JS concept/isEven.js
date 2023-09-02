// peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help Peter write the program.

// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);

function isEven(number){
    const reminder = number % 2;
    // console.log(reminder);
    if(reminder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);