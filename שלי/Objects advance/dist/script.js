var students = ['Marina', 'John', 'Michael', 'Michael Michael', 'Misha', 'Yoel', 'Etan', 'Simon'];
var fullStackClass = {
    lesson: [
        {
            title: 'objects - advanced',
            grades: []
        }
    ],
    createClass: function (newClass, studentList) {
        var _this = this;
        this.lesson.push({ title: newClass, grades: [] });
        studentList.forEach(function (student, i) {
            _this.lesson.slice(-1)[0].grades[i] = { name: student, grade: getRandomInt() };
        });
    }
};
function getRandomInt() {
    return Math.round(Math.random() * 60 + 40);
}
function createGrades(studentList, className) {
    for (var i = 0; i < studentList.length; i++) {
        fullStackClass.lesson[0].grades[i] = { name: studentList[i], grade: getRandomInt() };
    }
}
createGrades(students, fullStackClass);
function handleSubmit(ev) {
    ev.preventDefault();
    var madeUpClass = document.getElementsByName("className")[0].value;
    console.dir(madeUpClass);
    fullStackClass.createClass(madeUpClass, students);
}
console.log(fullStackClass);
//  console.dir(j)
//Object.keys(fullStackClass.lesson[0]
// fullStackClass = {
//     lessons: [{
//         title: 'Objects - advance',
//         grades: [
//             {
//                 name: 'moshe',
//                 grade: 45
//             },
//             {
//                 name: 'ahron',
//                 grade: 67
//             },
//             {
//                 name: 'miriam',
//                 grade: 78
//             },
//             {
//                 name: 'dan',
//                 grade: 45
//             },
//             {
//                 name: 'levi',
//                 grade: 45
//             }
//         ]
//     }
//     ]
// }
var age = 20 + "";
console.log(age);
