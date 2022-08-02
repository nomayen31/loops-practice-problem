//  skip your give number 
 
 
 var numbers = [45, 87, 89, 56, 22, 33, 44, 35, 65, 85, ];
 for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
    
 }
