-- DROP DATABASE IF EXISTS pay2Play;
CREATE DATABASE pay2Play;

-- user Model 
USE pay2Play;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(16),
  email VARCHAR(24) NOT NULL,
  password VARCHAR (12) NOT NULL,
  confirm_password VARCHAR(12),
  PRIMARY KEY (id)
);


-- credit-card Model 
USE pay2Play;
CREATE TABLE creditCard (
  amount INT (6) NOT NULL,
  currency VARCHAR (15) NOT NULL,
  source VARCHAR (6) NOT NULL,
  description VARCHAR (12) NOT NULL,
  email VARCHAR(24) NOT NULL
);


SELECT * FROM users;
SELECT * FROM creditCard;


SELECT users.user, creditCard.amount, users.email
FROM users
INNER JOIN creditCard ON users.email=creditCard.email;



