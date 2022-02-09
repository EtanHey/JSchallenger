/* this is meant to seperate each letter in a description ID */
var _a;
var text = document.querySelector("#description");
var strText = text.textContent;
var splitText = strText.split("");
console.log(splitText);
text.textContent = "";
splitText.forEach(function (i) {
    text.innerHTML += "<span>" + ("" + i) + "</span>";
});
// for (i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
/* this is the animation part */
var char = 0;
var timer = setInterval(onTick, 50);
function onTick() {
    var _a;
    var span = text === null || text === void 0 ? void 0 : text.querySelectorAll("span")[char];
    (_a = span === null || span === void 0 ? void 0 : span.classList) === null || _a === void 0 ? void 0 : _a.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = 0;
}
var mom = document === null || document === void 0 ? void 0 : document.getElementById("mom");
var dad = document === null || document === void 0 ? void 0 : document.getElementById("dad");
var Benji = document === null || document === void 0 ? void 0 : document.getElementById("Benji");
var Ning = document === null || document === void 0 ? void 0 : document.getElementById("Ning");
var Tamir = document === null || document === void 0 ? void 0 : document.getElementById("Tamir");
var Romi = document === null || document === void 0 ? void 0 : document.getElementById("Romi");
var Mejohnindavi = document === null || document === void 0 ? void 0 : document.getElementById("Mejohnindavi");
var Citron = document === null || document === void 0 ? void 0 : document.getElementById("Citron");
var Chen = document === null || document === void 0 ? void 0 : document.getElementById("Chen");
mom === null || mom === void 0 ? void 0 : mom.addEventListener("mouseenter", function () {
    text.innerHTML = "this is my mother, Mozhgan.";
});
mom === null || mom === void 0 ? void 0 : mom.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
(_a = dad === null || dad === void 0 ? void 0 : dad.addEventListener) === null || _a === void 0 ? void 0 : _a.call(dad, "mouseenter", function () {
    text.innerHTML = "this is my father, David.";
});
dad === null || dad === void 0 ? void 0 : dad.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
Benji === null || Benji === void 0 ? void 0 : Benji.addEventListener("mouseenter", function () {
    text.innerHTML = "this is my half brother, Benjamin (Benji).";
});
Benji === null || Benji === void 0 ? void 0 : Benji.addEventListener("mouseleave", function () {
    text.innerHTML = "his mother is to the right";
});
Ning === null || Ning === void 0 ? void 0 : Ning.addEventListener("mouseenter", function () {
    text.innerHTML = "this is Ning, she's my fathers wife.";
});
Ning === null || Ning === void 0 ? void 0 : Ning.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
Tamir === null || Tamir === void 0 ? void 0 : Tamir.addEventListener("mouseenter", function () {
    text.innerHTML = "this is my brother, Tamir.";
});
Tamir === null || Tamir === void 0 ? void 0 : Tamir.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
Romi === null || Romi === void 0 ? void 0 : Romi.addEventListener("mouseenter", function () {
    text.innerHTML = "this is my wife, Romina, she's from Paraguay.";
});
Romi === null || Romi === void 0 ? void 0 : Romi.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
Mejohnindavi === null || Mejohnindavi === void 0 ? void 0 : Mejohnindavi.addEventListener("mouseenter", function () {
    text.innerHTML =
        "oh no that picture again? are two of my best friends who dont have recent pics";
});
Mejohnindavi === null || Mejohnindavi === void 0 ? void 0 : Mejohnindavi.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
Citron === null || Citron === void 0 ? void 0 : Citron.addEventListener("mouseenter", function () {
    text.innerHTML = "this is my friend Citron.";
});
Citron === null || Citron === void 0 ? void 0 : Citron.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
Chen === null || Chen === void 0 ? void 0 : Chen.addEventListener("mouseenter", function () {
    text.innerHTML = "this is my friend Chen";
});
Chen === null || Chen === void 0 ? void 0 : Chen.addEventListener("mouseleave", function () {
    text.innerHTML = "Who's next?";
});
