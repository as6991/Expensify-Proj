fetch('POST https://www.expensify.com/api?command=Authenticate')
    .then(res => {
        if (res.ok) {
            console.log("Success")
            .then(res => res.json)
        }   else {
            console.log("Not Success")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))