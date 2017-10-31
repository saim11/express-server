// registerHelper is used as components..
// registerHelper is used for reusablity of dynamic code in multiple places...
const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper("dateTime",()=>{
return new Date();
});
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  // res.send("Hello World..!!")
  res.render('home.hbs', {
    pageTitle: "Home page",
    // dateTime: new Date()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "About page",
    // dateTime: new Date()
  }

  );//it will find file in 'views' directory

});





app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
