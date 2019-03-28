const request = require('request');

const json = {
    "name": "Raj",
    "email": "rajpeer141@gmail.com",
};

request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});
