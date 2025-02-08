const fs = require('node:fs/promises');
const path = require('node:path');

const FILE_1_PATH = path.join(__dirname, 'file1.txt');
const FILE_2_PATH = path.join(__dirname, 'file2.txt');
const FILE_3_PATH = path.join(__dirname, 'outfile.txt');

async function main() {
    const file1Content = await fs.readFile(FILE_1_PATH, { encoding: 'utf-8' });
    const file2Content = await fs.readFile(FILE_2_PATH, { encoding: 'utf-8' });

    // spliting around new line char
    const arr1 = file1Content.split('\n');
    const arr2 = file2Content.split('\n');

    // merging two arrays
    const res = arr1.concat(arr2);

    // sorting in increasing order
    res.sort((a, b) => a - b);


    // write back to output.txt
    const data = res.join('\n');

    await fs.writeFile(FILE_3_PATH, data);
    console.log('File written successfully');
}

main();