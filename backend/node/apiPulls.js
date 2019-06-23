const md5 = require('md5');
const http = require('http');


let timeStamp = Date.now().toString();
let privKey = '1532420b06e8c164faf908c94fcdd46d3c1f3be7';
let pubKey = '357e4f24022e44d7a0479d79761e9fc8';

//sometimes these have dots in between
let hash = md5
(
    timeStamp +
    privKey +
    pubKey
);


let query = 'http://gateway.marvel.com/v1/public/creators?ts=' + timeStamp + '&apikey=' + pubKey + '&hash=' + hash;


http.get(query, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log(JSON.stringify(data));
    });

}).on("error", (err) => {
    console.log(err.message);
});

