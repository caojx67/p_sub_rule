var zlib = require('zlib');

var requestURL = $request.url;
console.log('当前请求的URL: ' + requestURL);

var body = $response.body;

// 解压缩 Gzip 压缩的响应主体
if ($response.headers['Content-Encoding'] == 'gzip') {
  body = zlib.gunzipSync(body);
  console.log('解压缩后的响应主体: ' + body);
}

// 在这里对响应的 body 进行修改，例如将 "original_text" 替换为 "modified_text"
// body = body.toString('utf-8').replace('original_text', 'modified_text');
body = "12345678";

// 重新压缩响应主体为 Gzip 格式
if ($response.headers['Content-Encoding'] == 'gzip') {
  body = zlib.gzipSync(body);
}

$done({ body: body });
