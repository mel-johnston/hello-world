
function sayHi() {
    let usersName = prompt('What is your name?');
    // document.write('Hello ' + usersName + '!');
    while (usersName == "") {
        alert("You didn't type a name...");
        usersName = prompt("Please tell me your name.");
    }
    console.log("The user's name is: " + usersName);
    document.write("Hello and welcome to my page, " + usersName);

    return usersName;
}

function likesTravel() {
    let response = prompt("Do you like to travel? Yes or No")
    if (response == "yes") {
        alert("Welcome and be sure to avoid these places!");
    } else if (response == "no") {
        alert("You've come to the right place to justify staying home!");
    } else {
        alert("I'm not sure what that means...");
    }
}

function numPlanes() {
    let output = '';
    let rating = prompt('Scale of 1-10, how much do you like planes?');
    for (let plane = 0; plane < rating; plane++) {
        output += "<img class='plane' src='plane.png'/>";
    }

    return document.write(output);
}