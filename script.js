const Logn = document.getElementById('Login');
var AuthToken;
var isLoginVisible = true;
Logn.addEventListener("click", async (ev) => {
    ev.preventDefault();
    const USER = document.getElementById('username').value;
    const PASS = document.getElementById('password').value;
    try {
        console.log(USER);
        console.log(PASS);
        let url = `https://www.expensify.com/api?command=Authenticate&partnerName=applicant&partnerPassword=d7c3119c6cdab02d68d9&partnerUserID=${USER}&partnerUserSecret=${PASS}` 
        const response = await fetch(url, {
            method: 'GET',
        });
        console.log(response);
        if (!response.ok){
            throw new Error(`HTTP error : ${response.status}`);
        }
        const json = await response.json();
        AuthToken = json.authToken;

        if (response.ok == true) {
            //unhide and hide stuff
        }
    }
    catch(error) {
        console.error(`Invalid Username or Password:  ${error}`);
    }
});
console.log(Logn);




