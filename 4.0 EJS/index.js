import express from 'express';

const port = 3000;
const app = express();

app.get('/', function(req, res){
  const date = new Date();
  const today = date.getDay();
  let dayInWeak = "";
  let type = "a weekday";
  let adv = "it's time to work hard";
  switch (today) {
    case 0:
      dayInWeak = "Sunday";
      break;
    case 1:
      dayInWeak = "Monday";
      break;
    case 2:
      dayInWeak = "Tuesday";
      break;
    case 3:
      dayInWeak = "Wednesday";
      break;
    case 4:
      dayInWeak = "Thursday";
      break;
    case 5:
      dayInWeak = "Friday";
      break;
    case 6:
      dayInWeak = "Saturday";
      break;
  }
  if (today === 0 || today === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayInWeak: dayInWeak,
    dayType: type,
    advice: adv,
  });
});



app.listen(port, function(req, res){
  console.log("Listening port: => " + port);
});
