const http = require("http");

const routes = require("./routes");

console.log(routes.someText);

//sintaks dibawah ini akan menghasilkan error dan bisa terdeteksi pada editor yang digunakan
cons server = http.createServer(routes.handler);

server.listen(3000);
