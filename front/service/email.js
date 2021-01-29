
import { fetchHttp } from './fetch';

function sendEmail(name, email, message, callback = ()=>{}) {
    let body = { name: name, email: email, message: message };
    let sent = fetchHttp("http://localhost:8000/mail/send", JSON.stringify(body));
    sent.then(response => response.json()).then(data => {
        callback(data.response == 200);
    }).catch(error => {
        callback(false);
    });
    return;
}

module.exports = {
    sendEmail
}