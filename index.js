//Importing the various packages required for the API
const express=require('express'); //Express.js
const app=express();
const joi=require('joi'); //JOI package
var fs = require('fs'); //File Services (in-built in Node.js)


app.use(express.json()); //Middleware to allow interaction between Express and JSON

//Read the data.json file and store it as a variable called movies
const moviesData=fs.readFileSync('data.json');  
const movies=JSON.parse(moviesData);

//GET Requests

//Basic HelloWorld GET Request
app.get('/api/helloworld',(req,res) => {
    res.send('Hello world');
});

//GET Request to display all movies in the JSON file
app.get('/api/movies', (req,res) => {
    res.send((movies));
});

//GET Request to display movies in the JSON file by ID number
app.get('/api/movies/id/:id', (req,res) => {
    const movie= movies.find( m => m.id===parseInt(req.params.id));
    if(!movie)
    {
        res.status(404).send('The movie with the given ID was not found'); //Error handling if movie is not found
    }
    res.send((movie));
});

//GET Request to display movies in the JSON file by genre
app.get('/api/movies/genre/:genre', (req,res) => {
    const movie = movies.find( m => m.genre==req.params.genre);
    if(!movie)
    {
        res.status(404).send('The movie with the given genre was not found'); //Error handling if movie is not found
    }
    res.send((movie));
});

//GET Request to display movies in the JSON file by name of movie
app.get('/api/movies/name/:name', (req,res) => {
    const movie = movies.find( m => m.name==req.params.name);
    if(!movie)
    {
        res.status(404).send('The movie with the given name was not found');//Error handling if movie is not found
    }
    res.send((movie));
});

//POST Requests

//POST request to add a new movie to the existing data.json
app.post('/api/post/movies', (req,res) => {\
    
    //Checks if the name and genre have been given as a part of the POST request and both are having atleast 3 characters
    const schema = {
        name: joi.string().min(3).required(),
        genre: joi.string().min(3).required()
    };

    const result= joi.validate(req.body,schema);

    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);//Error handling if movie to be added did not meet the above criteria
    }

    //saving the POST body as a temporary variavle to be pushed to the movies array
    const movie={
        id: movies.length+1,
        name: req.body.name,
        genre: req.body.genre,
    };

    movies.push(movie);
    var moviesNewData=JSON.stringify(movies,null,2);
    fs.writeFileSync('data.json',moviesNewData);//writing the movies variable to the data.json file to persist changes
    res.send(movie);
});

const port=3000;
app.listen(port, () => console.log(`Listening at port ${port}`)); //Make the API listen at the localhost 3000 port
