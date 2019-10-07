var value = [1,7,-3,9];
var numbers = [2,45,3,78,12];


function highestNumber(array){
document.getElementById("hvalue").innerHTML = (Math.max(...array));
}

 highestNumber(numbers);