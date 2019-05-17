// Write your function here:
function finalGrade(score1, score2, score3){
  const average = (score1 + score2 + score3)/3;
  
  if (score1 < 0 || score2 < 0 || score3 < 0) {
    return 'You have entered an invalid grade.';
  }
  
  if (score1 > 100 || score2 > 100 || score3 > 100) {
    return 'You have entered an invalid grade.';
  }
  
  if (average <= 59) {
    return 'F';
  }
  if (average <= 69) {
    return 'D';
  }
  if (average <= 79) {
    return 'C';
  }
  if (average <= 89) {
    return 'B';
  }
  if (average <= 100) {
    return 'A';
  }
  

  
  
}





// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
