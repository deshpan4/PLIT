#!/usr/bin/env node

var
range = require("./range").range,
http = require("http");

function fizzbuzz() {
  return range(1, 101).map(function(n) {
    var a = n % 3, b = n % 5;

    if (a === 0 && b === 0) {
      return "FizzBuzz";
    }
    else if (a === 0) {
      return "Fizz";
    }
    else if (b === 0) {
      return "Buzz";
    }
    else {
      return "" + n;
    }
  });
}

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(fizzbuzz().join("\n"));
}).listen(8124, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8124/");
