function myFunction(obj:any) {
    return obj.country
  }
 console.log( myFunction({  continent: 'Asia',  country: 'Japan'}))
 console.log( myFunction({  country: 'Sweden',  continent: 'Europe'})
 )
  

 function myFunction2(a, b){
let has = b in a

return has}
console.log(myFunction2({a:1,b:2,c:3},'b'))

function myFunction3(a){
let obj = {key: a}
  return obj
}
console.log(myFunction3('a'));

function myFunction4(a){
  return a.slice(0, -3)
}
console.log(myFunction4('7213'));

function myFunction5(a){
  let count = 0;
  for(let i in a){
    if (a[i] < 0)
    count++
  }
return count
}
console.log(myFunction5([1,-2,2,-4]))

function myFunction6(a){
  
    return a.sort()
  
}
console.log(myFunction6(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

function myFunction7(a){
return a.slice(-3)
}

console.log(myFunction7([5,4,3,2,1,0]));

function myFunction8(set, val){
  let has = set.has(val)

  return has
}

console.log(myFunction8(new Set([123]), 2));

function myFunction9(a,n){

  for( n of a){
  let result =  a[n]
  return result
  }
}
console.log(myFunction9([10,9,8,7,6],5));
