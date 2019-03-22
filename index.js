const express=require('express');
const app=express();
const joi=require('joi');
var fs = require('fs');


app.use(express.json());

const moviesData=fs.readFileSync('data.json');
const movies=JSON.parse(moviesData);

app.get('/api/helloworld',(req,res) => {
    res.send('Hello world');
});

app.get('/api/movies', (req,res) => {
    res.send((movies));
});

app.get('/api/movies/id/:id', (req,res) => {
    const movie= movies.find( m => m.id===parseInt(req.params.id));
    if(!movie)
    {
        res.status(404).send('The movie with the given ID was not found');
    }
    res.send((movie));
});

app.get('/api/movies/genre/:genre', (req,res) => {
    const movie = movies.find( m => m.genre==req.params.genre);
    if(!movie)
    {
        res.status(404).send('The movie with the given genre was not found');
    }
    res.send((movie));
});

app.get('/api/movies/name/:name', (req,res) => {
    const movie = movies.find( m => m.name==req.params.name);
    if(!movie)
    {
        res.status(404).send('The movie with the given name was not found');
    }
    res.send((movie));
});

app.post('/api/post/movies', (req,res) => {
    const schema = {
        name: joi.string().min(3).required(),
        genre: joi.string().min(3).required()
    };

    const result= joi.validate(req.body,schema);

    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const movie={
        id: movies.length+1,
        name: req.body.name,
        genre: req.body.genre,
    };

    movies.push(movie);
    var moviesNewData=JSON.stringify(movies,null,2);
    fs.writeFileSync('data.json',moviesNewData);
    res.send(movie);
});

const port=3000;
app.listen(port, () => console.log(`Listening at port ${port}`));