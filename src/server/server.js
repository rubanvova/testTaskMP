const http = require("http");
const https = require("https");
const port = 3003;

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    });

    var url = req.url;

    if (url === "/get-data") {
      https.get("https://www.mrsoft.by/data.json", (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data;
        });
        response.on("end", () => {
          res.write(body);
          res.end();
        });
      });
    }
  })
  .listen(port, function () {
    console.log("server start at port 3003");
  });
