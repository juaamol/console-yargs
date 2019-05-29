const argv = require('yargs')
    .command('list', 'Print in console the multiplication table of --base', {
        base: {
            demand: true,
            alias: 'b',
        },
        limit: {
            alias: 'l',
            default: 10,
        }
    })
    .command('create', 'Write in file the multiplication table of --base', {
        base: {
            demand: true,
            alias: 'b',
        },
        limit: {
            alias: 'l',
            default: 10,
        }
    })
    .argv;

const { createFile } = require('./multiplication/multiplication');


let command = argv._[0];

switch (command) {
    case 'list':
        listFile(argv.base, argv.limit);
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