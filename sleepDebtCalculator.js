const getSleepHours = day =>{
  switch (day){
   	case 'Monday':
      return 8; //hours of sleep//
    case 'Tuesday':
      return 8;
    case 'Wednesday':
      return 7;
    case 'Thursday':
      return 7;
    case 'Friday':
      return 6;
    case 'Saturday':
      return 8;
    case 'Sunday':
      return 10;
  };
  
};

const getActualSleepHours = () => 
  getSleepHours('Monday') + 			getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
;
const getIdealSleepHours = () => {
	const idealHours = 8; //ideal hours per night//
	return idealHours*7; 
};


// test getSleepHours, getActualSleepHours and getIdealSleepHours //
/*
console.log(getSleepHours('Tuesday'));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();

console.log(actualSleepHours-idealSleepHours);

if (actualSleepHours > idealSleepHours) console.log("More sleep than needed."); 

if (actualSleepHours < idealSleepHours) console.log("Get more rest."); 

if (actualSleepHours === idealSleepHours) console.log("Perfect amount of sleep."); 

};


calculateSleepDebt();
