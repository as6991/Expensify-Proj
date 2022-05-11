// Login Authentication Code //
const Logn = document.getElementById('Login'); // grabs the entire Login button node 
var AuthToken;
var transactionList =  [];
var transactions = {};
Logn.addEventListener("click", async (ev) => { // creates event listener on submit button to perform function 
    ev.preventDefault();
    const USER = document.getElementById('username').value; // grabs user input
    const PASS = document.getElementById('password').value; // grabs password input
    try {
        let url_1 = `https://www.expensify.com/api?command=Authenticate&partnerName=applicant&partnerPassword=d7c3119c6cdab02d68d9&partnerUserID=${USER}&partnerUserSecret=${PASS}` //saves in Authentication API 
        const response = await fetch(url_1, { //awaits fetch statement with defined URL and GET method
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`HTTP error : ${response.status}`);  // displays error if response from fetch fails
        }
        const json = await response.json(); // saves response as json
        AuthToken = json.authToken; // saves authentication token into global variable

        if (!AuthToken) { // if no authentication token is returned, display error message
            document.getElementById("login_failed").innerHTML = "Invalid Username or Password, Try Again!";
            throw new Error(`HTTP error : ${response.status}`);
        }

        if (response.ok == true) { // if authentication token is returned and response from fetch is ok, hide login elements and unhide transaction elements
            let e3 = document.getElementById("loginContent")
            e3.style.display = "none";
            let el = document.getElementById("transactionTable")
            el.style.display = "inline";
            let e4 = document.getElementById("text")
            e4.style.display = "inline";
            let e2 = document.getElementById("transactionForm")
            e2.style.display = "inline";

            // sets up transaction list
            let url_2 = `https://www.expensify.com/api?command=Get&authToken=${AuthToken}&returnValueList=${transactionList}`
            const respo = await fetch(url_2, {
                method: 'GET',
            });
            console.log(respo);
            if (!respo.ok) {
                throw new Error(`HTTP error : ${respo.status}`);  // displays error if response from fetch fails
            }
            const json = await respo.json();
            transactions = json.transaction;
            console.log(transactions);
        }
    }
    catch (error) { // logs error in console if error detected 
        console.error(`Invalid Username or Password:  ${error}`);
    }
    console.log(AuthToken);
});






