// Login Authentication Code //
const Logn = document.getElementById('Login'); // grabs the entire Login button node 
const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
var AuthToken;
const transactionList = new String();
var Transactions;
var head = ["Transaction Dates", "Merchant", "Amount", "CardID", "TransactionID"];

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
            let url_2 = `https://www.expensify.com/api?command=Get&authToken=${AuthToken}&returnValueList=transactionList`
            // loadInData(url_2, document.querySelector("table"))
            const respo = await fetch(url_2, {
                method: 'GET',
            });
        
            if (!respo.ok) {
                throw new Error(`HTTP error : ${respo.status}`);  // displays error if response from fetch fails
            }
            const json = await respo.json();
            Transactions = json.transactionList;
            console.log(Transactions);

            //Saves Transaction dates into String
            const dot = Transactions.map(date => {
                return `<p>Transaction Date: ${date.inserted}</p>` 
            }).join('');
            //Saves Merchant names into String
            const merch = Transactions.map(mercha => {
                return `<p>Merchant: ${mercha.merchant}</p>`
            }).join('');
            //Saves Transaction amount into String
            const amoun = Transactions.map(amo => {
                return `<p>Amount: ${amo.amount}</p>`
            }).join('');
            //Saves cardID into String
            const carID = Transactions.map(ca => {
                return `<p>Amount: ${ca.cardID}</p>`
            }).join('');
            //Saves transactionID into String
            const traID = Transactions.map(tra => {
                return `<p>Amount: ${tra.transactionID}</p>`
            }).join('');

            //Clear the table
            tableHead.innerHTML = "<tr></tr>";
            tableBody.innerHTML = "";

            //Populate the headers
            for (const headerText of head) {
                const headerElement = document.createElement("th");
                headerElement.textContent = headerText;
                tableHead.querySelector("tr").appendChild(headerElement);
            }

            console.log(dot); 
            console.log(merch);
            console.log(amoun);
            console.log(carID);
            console.log(traID);
        }
    }
    catch (error) { // logs error in console if error detected 
        console.error(`Invalid Username or Password:  ${error}`);
    }
    console.log(AuthToken);

});






