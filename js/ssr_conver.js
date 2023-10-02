var requestURL = $request.url;
console.log('当前请求的URL:'+ requestURL);

let body = $response.body;

// 在这里对响应的 body 进行修改，例如将 "original_text" 替换为 "modified_text"
console.log('当前请求的URL body :'+ body);

body = JSON.stringify({'a':'2'});


$done({ body: body });
