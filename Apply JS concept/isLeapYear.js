function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('your year is leap year', year);
        return true;
    }
    else{
        // console.log('your yesr is not a leap year', year);
        return false;
    }
}


const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('her year:', isHerYearLeapYear);