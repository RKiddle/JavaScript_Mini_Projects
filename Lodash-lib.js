const _ = {};

_.clamp = function(number, lower, upper)
 {
  var lowerClampedValue = Math.max(number, lower);
  
  var clampedValue = Math.min(lowerClampedValue, upper);
  
  return clampedValue;
}




// Do not write or modify code below this line.
module.exports = _;
