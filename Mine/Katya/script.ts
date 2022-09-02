// 1 write a %

let dif = {};
let resault = document.getElementById('resault')

function ged(a: number, b: number) {
    if(a === b) 
    {console.log('nah')
    }else if (a < b) {
        dif = b % a
        console.log(`b is bigger, ${dif} `)
        resault.innerHTML = `${dif}`
    }else if (b < a) {
        dif = a % b
        console.log(`a is bigger,${dif}`)
        resault.innerHTML = `${dif}`
}
}
function handleResault(ev:any){
    ev.preventDefault()
    let a = ev.target.elements.a.valueAsNumber
    let b = ev.target.elements.b.valueAsNumber
    ged(a,b)
}
// 2 write a string and get a few different things
let myArray:Array<any> = []
let reverseArray:Array<number> = myArray
let allNumbers = document.querySelector('#allNumbers')


function handleString(ev:any){
    allNumbers.innerHTML = ''
    ev.preventDefault()
    let astring = ev.target.children.numbers.value
    numberString(astring)
    console.dir(astring)
}
function numberString(astring){
    let myArray = astring.split('')
    myArray.forEach(number => {
        allNumbers.innerHTML += `<li>${number}</li>`
    })
    reverseArray = myArray.reverse()

}
function handleReverseString(ev:any){
ev.preventDefault()
sortReverse(reverseArray)
console.log(reverseArray)
}
function sortReverse(reverseArray:Array<number>){
reverseArray = myArray.reverse()

}

function hoursToSeconds(hour){
    hour = window.prompt('how many hours?', '')
    let minutes = hour*60
    let seconds = minutes*60
    console.log(`${seconds} s`)
}
