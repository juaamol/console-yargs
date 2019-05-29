const { createFile } = require('./multiplication/multiplication');

let base = 'aaa';


createFile(base)
    .then((filename) => console.log(`File ${filename} created`))
    .catch((error) => console.log(error));