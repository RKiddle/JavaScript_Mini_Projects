const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (var i = 0; i < input.length; i++)
{
    //console.log(i);
  if (input[i] === "e") {
     resultArray.push(input[i])
   };
   if (input[i] === "u") {
     resultArray.push(input[i])
  };
  for (const [j, value] of vowels.entries()) {
    //console.log('%d: %s', j, value);
   if (input[i] === vowels[j]) {
     resultArray.push(input[i])
   };
   
    };
};
console.log(resultArray.join('').toUpperCase())
