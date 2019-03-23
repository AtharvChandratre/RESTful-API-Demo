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

This is to be done in the browser. If you want to run the get requests, go to the following URLs:

* For complete movies list:
http://localhost:3000/api/movies/

* For searching for a movie by ID:
http://localhost:3000/api/movies/id/(id-number-here)

* For searching for a movie by genre:
http://localhost:3000/api/movies/genre/(genre-here)

* For searching for a movie by name:
http://localhost:3000/api/movies/name/(name-here)

To see the returned data as a JSON format in the browser and not as a single-line string, download the [JSONView Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en). It will make the returned data easier to understand and more aesthetic.

## POST Requests

This is to be done using POSTMAN software. [Download Here](https://www.getpostman.com/downloads)

Enter the following in the body of the request:

- Name - Name of the movie to be added (Minimum 3 characters long)
- Genre - Genre of the movie to be added (Minimum 3 characters long)

ID will be automatically added.

Once a POST request is successful, the data.json file should be updated with your newly added data appended to the end of original file.

### Note

If your machine is showing an error which says something like:

**Error: listen EADDRINUSE: port number 3000 already in use**

You may have to run the following command to stop all the currently running node instances:
```
killall node
```
