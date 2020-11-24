const var22 = 'Node';

function createUser(name, age) {
    return `Hello from ${name} - ${age}`
}

exports.func = createUser;
exports.qwert = var22;


function test() {
    console.log('Hi Roman');
}


module.exports = {
    var22,
    test,
    createUser
}