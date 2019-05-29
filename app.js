let fs = require('fs');

let base = 2;
let table = '';

for (let i = 0; i < 10; i++) {
    table += `${base} * ${i} = ${base * i}\n`
    console.log(`${base} * ${i} = ${base * i}`);
}

fs.writeFile(`./tables/table-${base}.txt`, table, (err) => {
    if (err) throw err;

    console.log(`File table-${base}.txt has been created`);
});