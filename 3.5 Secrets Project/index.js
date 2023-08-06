//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
const myPass = 'ILoveProgramming';

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
});
app.post('/check', function(req, res){
  var inputPass = req.body.password;
  console.log(inputPass);
  if (inputPass === myPass) {
    res.sendFile(__dirname + '/public/secret.html')
  }else {
    res.send("<h2>Incorect password</h2>")
  }
});

app.listen(port, (req, res) => {
  console.log("Listening port: => " + port);
});
