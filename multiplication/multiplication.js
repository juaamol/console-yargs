let fs = require('fs');
const colors = require('colors');
const colorsSafe = require('colors/safe');

let listTable = (base, limit = 10) => {
    if (!Number(base)) {
        reject(`${base} is not a number`);
        return;
    }

    console.log('=========================='.green);
    console.log(`======= Table for ${base}======`.green);
    console.log('=========================='.green);

    for (let i = 0; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        let table = '';
        if (!Number(base)) {
            reject(`${base} is not a number`);
            return;
        }

        for (let i = 0; i <= limit; i++) {
            table += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`./tables/table-${base}.txt`, table, (err) => {
            if (err)
                reject(err);
            else
                resolve(colorsSafe.green(`table-${base}.txt`));
        });
    });
}

module.exports = { createFile, listTable, };