fetch('https://www.expensify.com/api?command=Authenticate', {
    method: 'POST', /**Used to create a new user */
    headers: {   /** Changes formatting of code */                       
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({ /** Convert javascript to json string 
                            this also is used to display data */
        name:'User 1'
    })
})
    .then(res => {      /** checks the response of the fetch */
        if (res.ok) {
            console.log("Success")
            return res.json()

        }   else {
            console.log("Not Success")
        }
    })
    .then(data => console.log(data))    /** displays the data */
    .catch(error => console.log('ERROR'))