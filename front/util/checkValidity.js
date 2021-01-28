
function checkEmailValid(value) {
    let checkSentence = /[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]+/g;
    let processed = value.match(checkSentence);
    return processed != null;
}

module.exports = {
    checkEmailValid
}