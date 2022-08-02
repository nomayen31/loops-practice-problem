/* for (var i = 1; i <=  20; i++) {
    console.log(i);
    if (i > 5) {
        break;
        
    }
    
} */


/* var rostGiven =0;
while (rostGiven < 8) {
    console.log('roast den');
    rostGiven++;
    if (rostGiven >= 5) {
        break;
        
    }
    
} */

var cars = ["Saab", "Volvo", "BMW", "rangeRover", "odi"];
for (var i = 0; i < cars.length ; i++) {
    var car = cars[i];
    if (car == "rangeRover")
     {
         break;
    }
    console.log(car);
}
