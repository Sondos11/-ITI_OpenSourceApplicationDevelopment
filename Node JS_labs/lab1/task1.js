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
        var sum = values[0] + values[1];
        res.writeHead(200, { "content-type": "text/html" });
        res.write(
          `<h1> The sum of ${values[0]} + ${values[1]} equal ${sum} <h1>`
        );
      } else if (operation == "mul") {
        var mul = values[0] * values[1];
        res.writeHead(200, { "content-type": "text/html" });
        res.write(
          `<h1> The multiply of ${values[0]} * ${values[1]} equal ${mul} <h1>`
        );
      } else if (operation == "sub") {
        var sub = values[0] - values[1];
        res.writeHead(200, { "content-type": "text/html" });
        res.write(
          `<h1> The subtraction of ${values[0]} - ${values[1]} equal ${sub} <h1>`
        );
      } else if (operation == "div") {
        var div = values[0] / values[1];
        res.writeHead(200, { "content-type": "text/html" });
        res.write(
          `<h1> The division of ${values[0]} / ${values[1]} equal ${div} <h1>`
        );
      }
    }
    res.end("<h1>finish<h1>");
  })
  .listen("7000", () => {
    console.log("Lisining on Port 7000");
  });
