
const stringObj:string = 'abcdefg'

function myFunction(stringObj:string){
  let newStringObj = stringObj.slice(3)
   

    console.log(newStringObj)
}
myFunction(stringObj)
myFunction('1234')
myFunction('fgedcba')

interface Country{continent:string, country:string}
let israel:Country = {continent:'Africa', country: 'Israel'}

function myFunction2(country:Country) {
    console.log(country.country)
}

myFunction2({continent:'me', country:'you'})
myFunction2(israel)

const user = {a:Number, b:Number, c:Number}

function minusB (user:any){
console.log(-user.b)
}
function aTimes2 (user:any) {
    console.log(2*user.a)
}
function bB4TimesAC (user:any) {
console.log(((user.b)*(user.b)) - 4*(user.a)*(user.c))
}
function quadraticEqaution(user:any){
    if((user.b*user.b - (4*user.a*user.a)) > 0){
        console.log('imposible')
        return
    }
    let x1= ((user.b*-1) + Math.sqrt(user.b * user.b - (4*user.a*user.c))) / 2 *user.a
    let x2= ((user.b*-1) - Math.sqrt(user.b * user.b - (4*user.a*user.c))) / 2 *user.a
    console.log(x1);
    if(x1===x2)return;
    console.log(x2)
}
function quadraticEq(user:any){
    console.log(`${user.a}x^2 ${user.b} + ${user.c} = 0`)
}

function handleSubmit(ev:any){
    user.a = ev.target.elements.a.valueAsNumber
    user.b = ev.target.elements.b.valueAsNumber
    user.c = ev.target.elements.c.valueAsNumber
    ev.preventDefault()
    // user.a[ev.target.elements] 
    // user.b:number = ev.target.elements;
    minusB(user)
    aTimes2(user)
    bB4TimesAC(user)
    quadraticEq(user)
    quadraticEqaution(user)
}


