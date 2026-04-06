// Asynchrononous Programming to Avoid Blocking

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) { resolve('Successful !!!') }
    else { reject('Rejected !!!') }
}).then((response) => {         // If Resovlved: .then will run
    console.log(response)
}).catch((response) => {        // If Rejected:.catch will run
    console.log(response)
})
