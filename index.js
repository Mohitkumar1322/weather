const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homeFile = fs.readFileSync("home.html","utf-8");
const server = http.createServer((req ,res) => {
    if(req.url = "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=58215c105040edc71b88eb642b0f348c")
        .on("data" , (chunk) =>{
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(arrData[0].main.temp);
           
        })
        .on("end" , function(err){
            if (err) return console.log("connection closed" , err);
            console.log("end");
        });
        // simple event 
        // 58215c105040edc71b88eb642b0f348c api key
        // https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=58215c105040edc71b88eb642b0f348c
    }
});
server.listen(8000,"127.0.0.1");