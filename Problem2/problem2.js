
var start = 1;
var end = 4000000000;
var evenTotal = 0;
var counter = [0, 1, 1];


while(counter[2]< end){
	if (counter[2] % 2 === 0) {
	  	evenTotal += counter[2];
	}
	    counter[0]=counter[2]+counter[1];
	    counter[1]=counter[2];
	    counter[2]=counter[0];
    
  }
 


document.getElementById("ans").innerHTML = evenTotal;
