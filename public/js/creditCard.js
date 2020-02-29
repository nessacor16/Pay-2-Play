
$(document).ready(function() {


    // Require the Stripe library with a test secret key.
const stripe = require('stripe')('sk_test_t1NJIH3v1HgOtE98eMb7qidb00Fk4tkl58');

stripe.charges.retrieve('ch_1GHBW5LaOn4mgchkTuslHJSQ', {
    api_key: 'sk_test_t1NJIH3v1HgOtE98eMb7qidb00Fk4tkl58',
    stripeAccount: 'acct_1GGEOoLaOn4mgchk'
  }
  
  );

// Create a payment from a test card token.
const charge = await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        source: 'tok_amex',
        description: 'My First Test Charge (created for API docs)',
      },
      function(err, charge) {
        // asynchronously called
      });

switch (err.type) {
  case 'StripeCardError':
    // A declined card error
    err.message; // => e.g. "Your card's expiration year is invalid."
    break;
  case 'StripeRateLimitError':
    // Too many requests made to the API too quickly
    break;
  case 'StripeInvalidRequestError':
    // Invalid parameters were supplied to Stripe's API
    break;
  case 'StripeAPIError':
    // An error occurred internally with Stripe's API
    break;
  case 'StripeConnectionError':
    // Some kind of error occurred during the HTTPS communication
    break;
  case 'StripeAuthenticationError':
    // You probably used an incorrect API key
    break;
  default:
    // Handle any other types of unexpected errors
    break;
}

if (Request.Form["stripeToken"] != null) {
    var customers = new CustomerService();
    var charges = new ChargeService();

    var customer = customers.Create(new CustomerCreateOptions), {
        Email = Request.Form["stripeEmail"],
        SourceToken = Request.Form["stripeToken"]
    }

    var charge = charges.Create(new ChargeCreateOptions, {
        Amount = 500,
        Description = "Sample Charge",
        Currency = "usd",
        Customer = customer.Id
    });

    Console.WriteLine(charge);
}
return customer;
return Email;
return SourceToken;
});