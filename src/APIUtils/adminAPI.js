
export default async function login(username, password) {
const response = await fetch('https://eipf2exv0c.execute-api.us-east-1.amazonaws.com/sincek/adminlogin', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
    });
    const body = await response.json();
    console.log(body);
    if (body.token) {
        localStorage.setItem('sincek_token', body.token);  
        alert("Uspješna prijava!");
    } else{
        alert("Neuspješna prijava!");
    }  
};