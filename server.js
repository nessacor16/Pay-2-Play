// =================================  SETTING-UP "PAY 2 PLAY APPLICATION"

// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App--Application running on PORT 6060   --- I type-in "localhost:6060".
// =============================================================
var app = express();
var PORT = process.env.PORT || 6060;

// const stripe = require("stripe")(sk_test_t1NJIH3v1HgOtE98eMb7qidb00Fk4tkl58);
// (async () => {
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 2000,
//     currency: 'usd',
//   });
//   return paymentIntent;
// })();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting-up Pay 2 Play Routes Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/creditCard-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);





// Play 2 Play Application is now listening on PORT 6060
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


