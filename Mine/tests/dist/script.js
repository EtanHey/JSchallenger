var stringObj = 'abcdefg';
function myFunction(stringObj) {
    var newStringObj = stringObj.slice(3);
    console.log(newStringObj);
}
myFunction(stringObj);
myFunction('1234');
myFunction('fgedcba');
var israel = { continent: 'Africa', country: 'Israel' };
function myFunction2(country) {
    console.log(country.country);
}
myFunction2({ continent: 'me', country: 'you' });
myFunction2(israel);
var user = { a: Number, b: Number, c: Number };
function minusB(user) {
    console.log(-user.b);
}
function aTimes2(user) {
    console.log(2 * user.a);
}
function bB4TimesAC(user) {
    console.log(((user.b) * (user.b)) - 4 * (user.a) * (user.c));
}
function quadraticEqaution(user) {
    if ((user.b * user.b - (4 * user.a * user.a)) > 0) {
        console.log('imposible');
        return;
    }
    var x1 = ((user.b * -1) + Math.sqrt(user.b * user.b - (4 * user.a * user.c))) / 2 * user.a;
    var x2 = ((user.b * -1) - Math.sqrt(user.b * user.b - (4 * user.a * user.c))) / 2 * user.a;
    console.log(x1);
    if (x1 === x2)
        return;
    console.log(x2);
}
function quadraticEq(user) {
    console.log(user.a + "x^2 " + user.b + " + " + user.c + " = 0");
}
function handleSubmit(ev) {
    user.a = ev.target.elements.a.valueAsNumber;
    user.b = ev.target.elements.b.valueAsNumber;
    user.c = ev.target.elements.c.valueAsNumber;
    ev.preventDefault();
    // user.a[ev.target.elements] 
    // user.b:number = ev.target.elements;
    minusB(user);
    aTimes2(user);
    bB4TimesAC(user);
    quadraticEq(user);
    quadraticEqaution(user);
}
