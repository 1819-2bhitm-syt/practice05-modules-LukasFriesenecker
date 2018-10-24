let program1 = function () {
    console.log("*** Starting Program 1 ***");
    console.log("This is Program 1!");
};

let program2 = function () {
    console.log("*** Starting Program 2 ***");
    console.log("This is Program 2!");
};

let program3 = function () {
    console.log("*** Starting Program 3 ***");
    console.log("This is Program 3!");
};

const startProgram = require("./startProgram");

startProgram(15, "Program 1", program1);
startProgram(20, "Program 2", program2);
startProgram(10, "Program 3", program3);