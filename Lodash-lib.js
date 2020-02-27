const _ = {};

_.clamp = function(number, lower, upper)
 {
  var lowerClampedValue = Math.max(number, lower);
  
  var clampedValue = Math.min(lowerClampedValue, upper);
  
  return clampedValue;
}

_.inRange = function (number, start, end) {
  if (end == undefined) {
    end = start;
    start = 0;
  }
  
  
  
  if (start > end) {
    temp = end;
    end = start;
    start = temp;
    
  }
  
  var isInRange = number >= start && number < end;
  
  return isInRange;
}



// Do not write or modify code below this line.
module.exports = _;
