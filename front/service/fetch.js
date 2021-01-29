

async function fetchHttp(url, body) {
    let result = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        mode: 'cors',
        credentials: 'include'
    });
    return result;
}

module.exports = {
    fetchHttp
}