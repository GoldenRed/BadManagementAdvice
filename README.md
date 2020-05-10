# Bad Management Advice

A web app that unscrupulously doles out BAD advice for people in managerial and general leadership positions. It is completely serverless.

I made this web app for educational purposes, to experiment with serverless fullstack development. 

[http://badmanagementadvice.s3-website.eu-north-1.amazonaws.com/](http://badmanagementadvice.s3-website.eu-north-1.amazonaws.com/)

## TODO

- [x] - Setup base components
- [x] - Setup the backend
- [x] - Allow for random advice browsing.
- [x] - Add "About Project" and "About Creator".
- [ ] - Implement "Like" and "Dislike" APIs in the backend.
- [ ] - Implement "Lemme Contribute", to allow for the addition of new advices by new users. Requires a modal popup.
- [ ] - Implement search - search queries for a specific user should return their advice.
- [ ] - Implement error handling...............

## Frontend

The frontend is written in ReactJS and uses the Material UI design language. It communicates with the backend using REST API.

The project files were compiled and uploaded to an S3 bucket, from which the website is hosted without any servers to manage.

The thumbs down icon belongs to [Freepik](https://www.flaticon.com/free-icon/dislike_996622).

## Backend

The backend is a REST API composed of API Gateway for the endpoint(s), Lambda and DynamoDB.

### DynamoDB Data Modelling

There are two data entities: "Advice" and "User". The DynamoDB table has been designed like this:

| Entity | HASH KEY | SORT KEY | Attributes | Comment |
| --- | --- | --- | --- | --- |
| User | NAME | (Insert User's Name) | Equivalent User Number | To allow for Name -> ID lookup. |
| User | USER#(Insert User's Number) | #METADATA#(Insert User's Name) |  Password | The metadata of a user. Will be sorted higher than the advices. |
| Advice | USER#(Insert User's Number) | ADVICE#(Insert Advice's Number) |  Body, Points, EpochTime | An advice, associated with a user by their user number. |
| Table | Table_METADATA | None | Total User | We want to keep track of the total number of users. |

- The backend needs to be able to return a random piece of advice to the visitor. Every advice is associated with their user, and by storing them under the user ID number, the algorithm can first randomly pick an uploader/user before randomly picking one of their advices.

- We always store the total number of users in the table under Table_METADATA. DynamoDB has no built-in way to provide a random item in its table. Keeping track of the number of users makes querying for a random user very easy and efficient. On the other hand, when a user is returned we have the advice items as well. Perhaps it would be better to store the number of advices associated with a user in the #METADATA# item, so we only query that item and then use that number to generate a random Advice number ID which we could extract directly, instead of getting all of the advices at once.

- Since we want to be able to search for specific users and access their advice, we have the additional Name->ID lookup table incorporated into the DynamoDB table.


