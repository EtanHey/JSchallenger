var secondsOutput = document.querySelector('[data-seconds-output]');
var areaOutput = document.querySelector('[data-area-output]');
var resistanceOutput = document.querySelector('[data-resistance-output]');
var arrayOutput = document.querySelector('[data-array-output]');
var twoDigetsOutput = document.querySelector('[data-two-digits-output]');
function hoursToSeconds(ev) {
    ev.preventDefault();
    var hour = ev.target.elements.hours.value;
    var minutes = hour * 60;
    var seconds = minutes * 60;
    secondsOutput.innerHTML = "in " + hour + " hours there are " + seconds + " s";
}
function triangleArea(ev) {
    ev.preventDefault();
    areaOutput.innerHTML = "";
    var height = ev.target.elements.height.valueAsNumber;
    var base = ev.target.elements.base.valueAsNumber;
    var area = (height * base) / 2;
    areaOutput.innerHTML = "For a triangle that has a base of " + base + ", and a height of " + height + ", the area is <strong>" + area + "</strong>";
    ev.target.reset();
}
function handleResistance(ev) {
    ev.preventDefault();
    resistanceOutput.innerHTML = '';
    var voltage = ev.target.elements.voltage.valueAsNumber;
    var current = ev.target.elements.current.valueAsNumber;
    var resistance = voltage / current;
    resistanceOutput.innerHTML = "the resistance of your voltage(" + voltage + ") and current(" + current + ") is " + resistance;
    ev.target.reset();
}
function handleArrayFromUser(ev) {
    ev.preventDefault();
    var numbers = ev.target.elements.array.value;
    var intArray = Array.from(numbers);
    var arrayMin = Math.min.apply(Math, intArray);
    var arrayMax = Math.max.apply(Math, intArray);
    console.log(intArray);
    console.log(arrayMin);
    console.log(arrayMax);
    arrayOutput.innerHTML = "The lowest number is " + arrayMin + " and the highest is " + arrayMax;
    ev.target.reset();
}
// const array = [-9,3,5,65,2]
// function myArray(array:Array<number>) {
//     let myArrayMin = Math.min(...array)
//     let myArrayMax = Math.max(...array)
//     console.log(myArrayMin, myArrayMax)
// }
// myArray(array)
function handleTwoDigits(ev) {
    ev.preventDefault();
    var twoDigetString = ev.target.elements.td.value;
    if (twoDigetString.length < 2) {
        console.log('give me more numbers! I need 2');
    }
    else {
        var twoDigetsArray = Array.from(twoDigetString);
        var arrayFlipped = twoDigetsArray.reverse();
        var twoDigetsFlipped = arrayFlipped.map(Number).join('');
        if (twoDigetString > twoDigetsFlipped) {
            ev.target.reset();
            twoDigetsOutput.innerHTML = "<strong style=\"color:blue;\">True</strong>, " + twoDigetString + " > " + twoDigetsFlipped;
        }
        else {
            twoDigetsOutput.innerHTML = "<strong style=\"color:red;\">False</strong>, " + twoDigetString + " < " + twoDigetsFlipped;
        }
        ev.target.reset();
    }
}
function stam(obj, name, value) {
    obj[name] = value;
    console.log(obj);
}
stam({ piano: 200 }, 'guitar', 400);
