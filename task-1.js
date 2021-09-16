/*
    Task 1
    Author : Ulvi Memmedov
*/
/*
    Input valiable.
    If you want to make changes in the inputs, change it here.
*/ 
var k = 3; 
var cars = [6, 2, 12, 7];

// Function
function carParking(cars, k) {

    var carsSorted = cars.sort((a, b) => { return a - b });

    var points = [];

    for (i = 0; i <= carsSorted.length - k; i++) {

        var sum = carsSorted[i + k - 1] - carsSorted[i] + 1;

        if (sum > 0) {

            points.push(sum);

        }

    }

    return points.sort((a, b) => { return a - b })[0];
};

console.log(carParking(cars,k)); // Output 6

