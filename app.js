const { argv } = require('./config/yargs.config');
const { createFile, listTable } = require('./multiplication/multiplication');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then((filename) => console.log(`File ${filename} created`))
            .catch((error) => console.log(error));
        break;
    default:
        console.log('command unknown');
        break;
}