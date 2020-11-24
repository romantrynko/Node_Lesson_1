const var22 = 'Node';

function createUser(name, age) {
    return `Hello from ${name} - ${age}`
}

// exports.func = createUser;
// exports.qwert = var22;


function test() {
    console.log('Hi Roman');
    return 'return'; 
}


module.exports = {
    test,
    createUser,
    var22
}


// console.log('_________________');
// console.log(__dirname);
// console.log(__filename);
// console.log(global.www);
// console.log(process.cwd());
// console.log('_________________');


// global.framework = 'Angular';
