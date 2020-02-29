$(document).ready(function() {
    var stripe = require('stripe')('sk_test_t1NJIH3v1HgOtE98eMb7qidb00Fk4tkl58');

    stripe.accounts.create(
      {
        type: 'custom',
        country: 'US',
        email: 'bob@example.com',
        requested_capabilities: [
          'card_payments',
          'transfers',
        ],
      },
      function(err, account) {
        // asynchronously called
      }
    );
  });
  