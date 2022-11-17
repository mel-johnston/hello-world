
function sayHi() {
    let usersName = prompt('What is your name?');
    // document.write('Hello ' + usersName + '!');
    if (usersName == "") {
        alert("You didn't type a name...");
        usersName = prompt("Please tell me your name.");
    }
    console.log("The user's name is: " + usersName);
    document.write("Hello and welcome to my page, " + usersName);

    return usersName;

}


// if (confirm("Do you like to travel?")) {
//         document.write(" since you like to travel, avoid these places!");
//     } else {
//         document.write(" you've come to the right place to justify staying home.");
//     }

function likesTravel() {
    let response = prompt("Do you like to travel?")
    if (response == "yes") {
        alert("Welcome and be sure to avoid these places!");
    } else if (response == "no") {
        alert("You've come to the right place to justify staying home!");
    } else {
        alert("I'm not sure what that means...");
    }
}


// function yourName() {
//     let name = prompt('What is your name?');

//     return document.write(name);
// }

// function timeOfDay() {
//     let time = prompt('What hour is it? (0-23)'); // 15;
//     let message = '';

//     if (time <= 11) {
//         message = 'Good Morning!';
//     } else if (time <= 18) {
//         message = 'Good Afternoon!';
//     } else if (time < 24) {
//         message = "Good Evening!";
//     } else {
//         message = "That hour does not exist!";
//     }

//     return message;
// }


// function functionName(){
//     code to execute;
// }

// function addTwoNumbers(number1, number2){
//     let sum = number1 + number2;
//     return sum;
// }

// console.log(addTwoNumbers(4,5));


// How would you rate traveling, 1-10?

// function numPlanes() {
//     let response = prompt("How much do you like traveling, 1-10?")
//     if (response == "1") { }



// }

function numPlanes() {
    let output = '';
    let rating = prompt('scale of 1-10, how many planes?');
    for(let i = 0; i < rating; i++){
        output += "<img class='plane' src='plane.png'/>";
    }

    return document.write(output);
}