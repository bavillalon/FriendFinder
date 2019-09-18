//standard requires
var express=require("express");
var path=require("path");

//creating an instance of express and getting the port from either the environment variables or using the default 3000 port we've been using.
var app=express();
var PORT=process.env.PORT||3000;

//doing this because we were told to. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//including the api and html routes. the code for what to do on a get and push are in those files.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listening to the port and express will execute any get or push from the api routes.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  