const secondsOutput = document.querySelector('[data-seconds-output]')
const areaOutput = document.querySelector('[data-area-output]')
const resistanceOutput = document.querySelector('[data-resistance-output]')
const arrayOutput = document.querySelector('[data-array-output]')
const twoDigetsOutput = document.querySelector('[data-two-digits-output]')

function hoursToSeconds(ev){
    ev.preventDefault()
    let hour = ev.target.elements.hours.value;
    let minutes = hour*60
    let seconds = minutes*60
    secondsOutput.innerHTML = `in ${hour} hours there are ${seconds} s`
}

function triangleArea(ev){
    ev.preventDefault()
    areaOutput.innerHTML = ``;
let height = ev.target.elements.height.valueAsNumber
let base = ev.target.elements.base.valueAsNumber
let area = (height*base)/2
    areaOutput.innerHTML = `For a triangle that has a base of ${base}, and a height of ${height}, the area is <strong>${area}</strong>`
    ev.target.reset()
}

function handleResistance(ev){
    ev.preventDefault()
    resistanceOutput.innerHTML = ''
    let voltage = ev.target.elements.voltage.valueAsNumber
    let current = ev.target.elements.current.valueAsNumber
    let resistance = voltage/current
    resistanceOutput.innerHTML = `the resistance of your voltage(${voltage}) and current(${current}) is ${resistance}`
    ev.target.reset()
}

function handleArrayFromUser(ev){
    ev.preventDefault()
    let numbers = ev.target.elements.array.value;
    let intArray:any = Array.from(numbers)
    let arrayMin = Math.min(...intArray)
    let arrayMax = Math.max(...intArray)
    console.log(intArray)
    console.log(arrayMin)
    console.log(arrayMax)
    arrayOutput.innerHTML = `The lowest number is ${arrayMin} and the highest is ${arrayMax}`
    ev.target.reset()
}

// const array = [-9,3,5,65,2]
// function myArray(array:Array<number>) {
//     let myArrayMin = Math.min(...array)
//     let myArrayMax = Math.max(...array)
//     console.log(myArrayMin, myArrayMax)
// }
// myArray(array)

function handleTwoDigits(ev){
ev.preventDefault()
let twoDigetString = ev.target.elements.td.value
if (twoDigetString.length < 2) {
    console.log('give me more numbers! I need 2')
} else {
   let twoDigetsArray =  Array.from(twoDigetString)

    let arrayFlipped = twoDigetsArray.reverse()

    let twoDigetsFlipped = arrayFlipped.map(Number).join('')
    if (twoDigetString > twoDigetsFlipped){
        ev.target.reset()
        twoDigetsOutput.innerHTML = `<strong style="color:blue;">True</strong>, ${twoDigetString} > ${twoDigetsFlipped}`
    }else{
        twoDigetsOutput.innerHTML = `<strong style="color:red;">False</strong>, ${twoDigetString} < ${twoDigetsFlipped}`
    }
    ev.target.reset()
}

}

function stam(obj, name, value){
    obj[name]=value;
    console.log(obj)
}
stam({piano: 200}, 'guitar', 400)
