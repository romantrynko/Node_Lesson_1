const fs = require('fs');
const path = require('path');

const folder1 = path.join(process.cwd(), '1800');
const folder2 = path.join(process.cwd(), '2000');


const switchFolders = (dir1800, dir2000) => {

    fs.readdir(dir1800, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(
                file => {
                    {
                        fs.rename(path.join(dir1800, file), path.join(dir2000, file), err1 => {
                            console.log(err1);
                        })
                    }
                }
            )
        }
    })
};

switchFolders(folder1, folder2);
switchFolders(folder2, folder1);
