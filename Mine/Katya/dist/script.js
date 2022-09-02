// 1 write a %
var dif = {};
var resault = document.getElementById('resault');
function ged(a, b) {
    if (a === b) {
        console.log('nah');
    }
    else if (a < b) {
        dif = b % a;
        console.log("b is bigger, " + dif + " ");
        resault.innerHTML = "" + dif;
    }
    else if (b < a) {
        dif = a % b;
        console.log("a is bigger," + dif);
        resault.innerHTML = "" + dif;
    }
}
function handleResault(ev) {
    ev.preventDefault();
    var a = ev.target.elements.a.valueAsNumber;
    var b = ev.target.elements.b.valueAsNumber;
    ged(a, b);
}
// 2 write a string and get a few different things
var myArray = [];
var reverseArray = myArray;
var allNumbers = document.querySelector('#allNumbers');
function handleString(ev) {
    allNumbers.innerHTML = '';
    ev.preventDefault();
    var astring = ev.target.children.numbers.value;
    numberString(astring);
    console.dir(astring);
}
function numberString(astring) {
    var myArray = astring.split('');
    myArray.forEach(function (number) {
        allNumbers.innerHTML += "<li>" + number + "</li>";
    });
    reverseArray = myArray.reverse();
}
function handleReverseString(ev) {
    ev.preventDefault();
    sortReverse(reverseArray);
    console.log(reverseArray);
}
function sortReverse(reverseArray) {
    reverseArray = myArray.reverse();
}
function hoursToSeconds(hour) {
    hour = window.prompt('how many hours?', '');
    var minutes = hour * 60;
    var seconds = minutes * 60;
    console.log(seconds + " s");
}
