let fs = require('fs');

let listTable = (base, limit = 10) => {
    if (!Number(base)) {
        reject(`${base} is not a number`);
        return;
    }

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
                resolve(`table-${base}.txt`);
        });
    });
}

module.exports = { createFile, listTable, };