let startProgram = function(waitTime, programName, program) {
    console.log("*** Starting " + programName + " in " + waitTime + " Seconds ***");

    setTimeout(program, (waitTime * 1000));
};

module.exports = startProgram;