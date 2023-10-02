/**

var requestURL = $request.url;
console.log('当前请求的URL:'+ requestURL);

let bodyStr = $response.body;

console.log('当前请求的URL body :'+ bodyStr);


***/
let bodyStr = '123456';

$done({ body: bodyStr });
