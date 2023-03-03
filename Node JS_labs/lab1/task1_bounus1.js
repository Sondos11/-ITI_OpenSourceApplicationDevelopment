var fs = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    if (req.url != "/favicon.ico") {
      var o = req.url.split("/");
      var operation = o[1];
      var values = [];
      for (var i = 2; i < o.length; i++) {
        values.push(parseInt(o[i]));
      }
      if (operation == "add") {
        var sum = 0;
        for (var j = 0; j < values.length; j++) {
          sum = sum + values[j];
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1> The result equal ${sum} <h1>`);
        fs.appendFileSync("result.txt", ` The result equal ${sum}`);
      } else if (operation == "mul") {
        var mul = 1;
        for (var j = 0; j < values.length; j++) {
          mul = mul * values[j];
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1> The result equal ${mul} <h1>`);
        fs.appendFileSync("result.txt", ` The result equal ${mul}`);
      } else if (operation == "sub") {
        var sub = 0;
        for (var j = 0; j < values.length; j++) {
          sub -= values[j];
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1> The result equal ${sub} <h1>`);
        fs.appendFileSync("result.txt", ` The result equal ${sub}`);
      } else if (operation == "div") {
        var div = 1;
        for (var j = 0; j < values.length; j++) {
          div /= values[j];
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`<h1> The result equal ${div} <h1>`);
        fs.appendFileSync("result.txt", ` The result equal ${div}`);
      }
    }
    res.end("<h1>finish<h1>");
  })
  .listen("7000", () => {
    console.log("Lisining on Port 7000");
  });
