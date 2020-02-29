// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var stripe = require("stripe")("sk_test_t1NJIH3v1HgOtE98eMb7qidb00Fk4tkl58");

var stripe = require("stripe")



// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/creditCard", function(req, res) {

  
  stripe.charges.create({
    amount: 2000,
    currency: "usd",
    source: "tok_visa", // obtained with Stripe.js
    description: "My First Test Charge (created for API docs)"
  }, {
    idempotency_key: "dTN8sQ4QhsEQnx8V"
  }, function(err, charge) {
    // asynchronously called
  });
  });
}
    
  //   // In Node 10:
  //   for await (const customer of stripe.customers.list({limit: 3})) {
  //     // Do something with customer
  //   }
    
  //   // In other environments:
  //   stripe.customers.list({limit: 3})
  //     .autoPagingEach(function(customer) {
  //       // Do something with customer
  //     });
  

  
  
  // stripe.charges.retrieve(
  //   'ch_1GHBW9LaOn4mgchkh5SdsrgV',
  //   function(err, charge) {
  //     // asynchronously called
  //   }
  // );
  
  
  // stripe.charges.capture(
  //   'ch_1GHBW9LaOn4mgchkh5SdsrgV',
  //   function(err, charge) {
  //     // asynchronously called
  //   }
  // );
  
  
  // stripe.charges.list(
  //   {limit: 3},
  //   function(err, charges) {
  //     // asynchronously called
  //   }
  // );
  
  // stripe.creditNotes.preview(
  //   {
  //     invoice: 'in_1GHBWB2eZvKYlo2C8a7XRolW',
  //     lines: [
  //       {
  //         type: 'invoice_line_item',
  //         invoice_line_item: 'il_1GHBWBLaOn4mgchkZHafUkRr',
  //         quantity: 1,
  //       },
  //     ],
  //   },
  //   function(err, creditNote) {
  //     // asynchronously called
  //   }
  // );
  
  // stripe.creditNotes.retrieve(
  //   'cn_1GHBWBLaOn4mgchkoAdCMmFR',
  //   function(err, creditNote) {
  //     // asynchronously called
  //   });
