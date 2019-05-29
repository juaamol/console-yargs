const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: 10,
    }
};

const argv = require('yargs')
    .command('list', 'Print in console the multiplication table of --base', opts)
    .command('create', 'Write in file the multiplication table of --base', opts)
    .argv;

module.exports = {
    argv,
}