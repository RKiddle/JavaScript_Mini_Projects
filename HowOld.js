// Write your function here:
function howOld(age, year){
  let currentDate = new Date();
  let theCurrentYear = currentDate.getFullYear();
  let yearDifference = year - theCurrentYear;
	let newAge = age + yearDifference;
  
   if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
  
  
}

console.log(howOld(39, 1900));


// Once your function is written, write function calls to test your code!
