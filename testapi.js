const http = require("http"); // standard http server
const express = require("express"); // express library
const cors = require('cors'); // cors middleware to have a great API experience
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000

const coffees = require("./coffee.json")
const  ip = require('./ip'); // get local ip address

(async () => {
    console.log(await ip())    
})();

app.get("/",(req,res)=> {
    res.json(coffees);
});

let server = http.createServer(app);
server.listen(port);
console.log("http server listening on http://localhost:%d", port); 