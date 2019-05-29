const { createFile } = require('./multiplication/multiplication');
let receivedArgv = process.argv;

if (receivedArgv < 3) {
    console.log('You have to write the base');
    exit(1);
}
let receivedArg = receivedArgv[2];
console.log(receivedArg.split('='));
let base = Number(receivedArg.split('=')[1]);

createFile(base)
    .then((filename) => console.log(`File ${filename} created`))
    .catch((error) => console.log(error));