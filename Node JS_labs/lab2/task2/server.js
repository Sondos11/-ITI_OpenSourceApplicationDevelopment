const http = require("http");
const fs = require("fs");
let MainFileHTML = fs.readFileSync("./main.html").toString();
let WelcomeFileHTML = fs.readFileSync("./welcome.html").toString();
let StyleCSS = fs.readFileSync("./style.css").toString();
// let ScriptFile = fs.readFileSync("../ClientSide/script.js").toString();
let myIcon = fs.readFileSync("./favicon.ico");

var clientName = "";
var MobileNumber = "";
var Email = "";
var Address = "";

http
  .createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
      switch (req.url) {
        case "/main.html":
          res.writeHead(200, "Ok", { "content-type": "text/html" });
          res.write(MainFileHTML);
          break;
        case "/welcome.html":
          res.write(ProfileFileHTML);
          break;
        case "/style.css":
          res.writeHead(200, "Ok", { "content-type": "text/css" });
          res.write(StyleCSS);
          break;
        case "/favicon.ico":
          res.writeHead(200, "ok", {
            "content-type": "image/vnd.microsoft.icon",
          });
          res.write(myIcon);
          break;
        default:
          res.write("<h1>No Page Found</h1>");
          break;
      }
      res.end();
    }
    //#endregion

    //#region POST
    else if (req.method == "POST") {
      //url
      req.on("data", (data) => {
        clientName = data.toString().split("=")[1].split("+")[0].split("&")[0];
        MobileNumber = data.toString().split("=")[2].split("&")[0];
        Email = decodeURIComponent(data.toString().split("=")[3].split("&")[0]);
        Address = data.toString().split("=")[4];
      });
      req.on("end", () => {
        WelcomeFileHTML = WelcomeFileHTML.replace("{clientName}", clientName);
        WelcomeFileHTML = WelcomeFileHTML.replace(
          "{MobileNumber}",
          MobileNumber
        );
        WelcomeFileHTML = WelcomeFileHTML.replace("{Email}", Email);
        WelcomeFileHTML = WelcomeFileHTML.replace("{Address}", Address);
        res.write(WelcomeFileHTML);
        res.end();
      });
    }
  })
  .listen("7000", () => {
    console.log("http://localhost:7000");
  });
