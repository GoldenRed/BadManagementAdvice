# Bad Management Advice

A web app that unscrupulously doles out BAD advice for people in managerial and general leadership positions. It is completely serverless.

I made this web app to experiment with serverless fullstack development. 


## Frontend

The frontend is written in ReactJS and uses the Material UI design language. It communicates with the backend using REST API.

The project files were compiled and uploaded to an S3 bucket, from which the website is hosted without any servers to manage.

## Backend

The backend is a REST API composed of API Gateway for the endpoint(s), Lambda and DynamoDB.


### DynamoDB Data Modelling

There are two data entities: "Advice" and "User" and they have the following attributes:

- Advice:
  - Advice ID: Unique Advice ID?
  - User: The User who sent in the advice. 
  - Date: The date of submission.
  - Points: The score, which can be incremented or decremented.
  - Body: The actual text containing the advice.

- User:
  - Username: Unique name.
  - Advices: The (multiple) pieces of advices connected to it.
  - Password: Unique code associated with the user. The first time someone contributes with a specific user, the password used will become the user's password. Afterwards, they need to use that password with the  


In the end, because I wanted the search function to very simply be a search of a user, I went with the following pattern/schema:

Entity | HASH KEY | SORT KEY | Attributes
--- | --- | --- | --- | ---
User | USER#<USERNAME> | #METADATA#<USERNAME> | Password
Advice | USER#<USERNAME> | ADVICE#<USERNAME>#<TIMESTAMP> |  Body, Points

Inspired by [this AWS post](https://aws.amazon.com/getting-started/hands-on/design-a-database-for-a-mobile-app-with-dynamodb/4/).

The "Advice ID" is not implemented; it is instead the combined username+timestamp.
