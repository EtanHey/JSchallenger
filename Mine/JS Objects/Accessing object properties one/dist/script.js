function myFunction(obj) {
    return obj.country;
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }));
function myFunction2(a, b) {
    var has = b in a;
    return has;
}
console.log(myFunction2({ a: 1, b: 2, c: 3 }, 'b'));
function myFunction3(a) {
    var obj = { key: a };
    return obj;
}
console.log(myFunction3('a'));
function myFunction4(a) {
    return a.slice(0, -3);
}
console.log(myFunction4('7213'));
function myFunction5(a) {
    var count = 0;
    for (var i in a) {
        if (a[i] < 0)
            count++;
    }
    return count;
}
console.log(myFunction5([1, -2, 2, -4]));
function myFunction6(a) {
    return a.sort();
}
console.log(myFunction6(['z', 'c', 'd', 'a', 'y', 'a', 'w']));
function myFunction7(a) {
    return a.slice(-3);
}
console.log(myFunction7([5, 4, 3, 2, 1, 0]));
function myFunction8(set, val) {
    var has = set.has(val);
    return has;
}
console.log(myFunction8(new Set([123]), 2));
function myFunction9(a, n) {
}
console.log(myFunction9([10, 9, 8, 7, 6], 5));
function myFunction10(a) {
    var sum = 0;
    for (var i in a) {
        if (a.hasOwnProperty(i)) {
            sum += (a[i]);
        }
    }
    return sum;
}
console.log(myFunction10({ a: 1, b: 2, c: 3 }));
function myFunction11(a) {
    return a.slice(0, 3);
}
console.log(myFunction11([5, 4, 3, 2, 1, 0]));
function myFunction12(a, b) {
    if (a < b) {
        return a / b;
    }
    return a * b;
}
console.log(myFunction12(10, 100));
console.log(myFunction12(90, 45));
function myFunction13(a, b) {
    var _a;
    a = (_a = {}, _a[a] = b, _a);
    return a;
}
console.log(myFunction13('z', 'x'));
function myFunction14(set) {
    return Array.from(set);
}
console.log(myFunction14(new Set([1, 2, 3])));
function myFunction15(a, n) {
    return a.slice(-n);
}
console.log(myFunction15([1, 2, 3, 4, 5, 6, 7, 8], 3));
function myFunction16(obj) {
    delete obj.b;
    return obj;
}
console.log(myFunction16({ e: 6, f: 4, b: 5, a: 3 }));
function myFunction17(a, b) {
    if (a.includes(b)) {
        return b + a;
    }
    return a + b;
}
console.log(myFunction17(' think, therefore I am', 'I'));
console.log(myFunction17('lips', 's'));
console.log(myFunction17('Java', 'script'));
console.log(myFunction17('Cheese', 'cake'));
function myFunction18(a, b) {
    if (a.hasOwnProperty(b)) { }
}
console.log(myFunction18([1, 2, '2'], '2'));
function myFunction19(a, n) {
    return a.substring(n - 1, n);
}
console.log(myFunction19('zyxbwpl', 5));
function myFunction20(a, b, c, d, e, f) {
    return Math.pow((((a + b) - c) * d / e), f);
}
console.log(myFunction20(6, 2, 1, 4, 2, 3));
function myFunction21(a) {
    return;
}
console.log(myFunction21(-111));
console.log(myFunction21(5));
console.log(myFunction21(-4));
