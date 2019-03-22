# RESTful-API-Demo
Basic Demo of a RESTful API using GET and POST

## Getting Started

First clone to your machine, then run the following commands:

```
npm install
npm install express --save
npm install body-parser
npm install joi
npm install nodemon
```

Then to run the Demo using the terminal:

```
nodemon index.js
```
## GET Requests

If you want to run the get requests:

* For complete movies list:
http://localhost:3000/api/movies/

* For searching for a movie by ID:
http://localhost:3000/api/movies/id/(id-number-here)

* For searching for a movie by genre:
http://localhost:3000/api/movies/genre/(genre-here)

* For searching for a movie by name:
http://localhost:3000/api/movies/name/(name-here)

## POST Requests
Use POSTMAN software. [Download Here](https://www.getpostman.com/downloads)

Enter the following in the body of the request:

- Name - Name of the movie to be added (Minimum 3 characters long)
- Genre - Genre of the movie to be added (Minimum 3 characters long)

ID will be automatically added
