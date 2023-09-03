// write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]as the input parameter and will return the sum of the odd numbers

function getSumOfAnArray(numbers){
    let sum = 0;
    // console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


function getOddNumbersOfArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
       
        // console.log(i);
    }
    return oddNumbers;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumbersOfArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(myNumbers);
console.log('odd number sum', oddNumberSum);