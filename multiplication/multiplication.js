let fs = require('fs');

let table = '';
let createFile = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} is not a number`);
            return;
        }

        for (let i = 0; i < 10; i++) {
            table += `${base} * ${i} = ${base * i}\n`
            console.log(`${base} * ${i} = ${base * i}`);
        }

        fs.writeFile(`./tables/table-${base}.txt`, table, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}.txt`);
        });
    });
}

module.exports = { createFile };