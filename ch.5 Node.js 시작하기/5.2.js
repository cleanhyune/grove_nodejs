const file_system = require('fs')

file_system.unlink('./tmp/hello', (err) => { // unlink is file delete method
    if(err) {
        throw err;
        return;
    }
    console.log('delete success')
})