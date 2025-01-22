const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
myVariable = "Nice"
/*This is a comment.*/
//This is ALSO a comment and much better.
/*let iceCream = "chocolate";
if (iceCream === "chocolate") { 
    alert("Yay, I love chocolate ice cream!");
} else{
    alert("Awwwww, but chocolate is NOTTTT my favorite...");
}
let myVariable = document.querySelector("h1");
alert("hello!")

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3); */

//document.querySelector("html").addEventListener("click", function () {
    //alert("Ouch! Stop poking me!")
//});

//document.querySelector("html").addEventListener("click", () => {
    //alert("Ouch! Stop poking me!");
//});

let myImage = document.querySelector('img');

myImage.onclick = function() {
   let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/google-logo.png");
    }else{
        myImage.setAttribute("src", "images/firefox-icon.png")
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt ("Please eneter your name.");
    if (!myName) {
        setUserName();
    } else {

    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }