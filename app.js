// const {createUser, test, var22 } = require('./dir/file2');


// global.www = 'React';

// let roman = createUser('Roman', 32);

// console.log(roman);
// console.log(var22);
// console.log(test());
// console.log(global.framework);

// // console.log(process.env);

// process.env.SECURE_KEY = 'Secret';

// console.log(process.env.MSYSTEM);


const fs = require('fs-extra');
const path = require('path');

let filePath = path.join(process.cwd(), 'dir', 'myFile.txt');
let filePathNew = path.join(process.cwd(), 'dir', 'photos', 'photo.txt');

// console.log(filePath);

// fs.writeFile(filePath, 'Created file', err => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.appendFile(filePath, ' \n new text', err => {
//     console.log(err);
// });

// fs.mkdir(path.join(__dirname, 'zoom', 'videos', '23.11.2020'), {recursive: true}, err => {
//     console.log(err);
// });

// fs.rmdir(path.join(__dirname, 'zoom'), {recursive: true}, err => {
//     console.log(err);
// });

// fs.readdir(path.join(process.cwd(), 'dir'), (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         files.forEach(file => {
//             fs.stat(path.join(process.cwd(), 'dir', file), (err1, stats) => {
//                 console.log(stats);
//                 console.log('___________________________________');
//             });
//         })
//     }
// });

// fs.unlink(filePath, err => {
//     console.log(err);
// });

// fs.rename(filePath, filePathNew, err => {
//     console.log(err);
// });

// for (let i = 0; i < 1000; i++) {
//    fs.appendFile(filePath, `Roman \n`, err => {
//        console.log(err);
//    });
// };

// fs.readFile(filePath, (err, data) => {
//     console.log(data.toString());
// });

const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(filePathNew);

// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     console.log('_____________________________');
//     writeStream.write(chunk)
// });
console.time('time');
readStream.pipe(writeStream);
console.timeEnd('time');