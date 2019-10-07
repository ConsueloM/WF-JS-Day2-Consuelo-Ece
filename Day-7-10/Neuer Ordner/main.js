var temperatur = Math.random()*(25-(-5))+(-5);

if (-5 <=temperatur<=10 ) {

	 document.getElementById("result").innerHTML = "The weather is cold";


} else{

	 document.getElementById("result").innerHTML = "The weather is moderate";


}


var value = [1,7,-3,9];
document.getElementById("hvalue").innerHTML = (Math.max(...value));