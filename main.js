var diffrence = 0;
function startTime() {
  
  var unix = Date.now() - diffrence;
  var bday = unix - 1259717760000; //x1000

  document.getElementById('un').innerHTML = bday/1000;
  document.getElementById('tu').innerHTML = Math.floor(bday/1000);
  
  setTimeout(startTime, 0.1);
}

async function getTime(){
	var url = "http://worldtimeapi.org/api/timezone/GMT";
    fetch(url) 
    .then((response) => response.json()) 
    .then((user) => {
    	var dt = user.datetime; 
    	var px = Date.now();
    	console.log(dt);
    	diffrence = diffTime(px, new Date(dt).getTime())
    });
}
  
function diffTime(a, b){
    return new Date(a).getTime() - new Date(b);
}
