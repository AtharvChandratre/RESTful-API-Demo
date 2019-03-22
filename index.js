const express=require('express');
const app=express();
const joi=require('joi');

app.use(express.json());

const movies=[
    {id:1,name:'La La Land',genre:'Romantic Comedy'},
    {id:2,name:'Shutter Island',genre:'Thriller'},
    {id:3,name:'Journey to the center of the Earth',genre:'Adventure'},
    {id:4,name:'Mortal Combat',genre:'Fighting'},
    {id:5,name:'Jobs',genre:'Biopic'}
];

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

app.post('/api/movies', (req,res) => {
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
    res.send(movie);
});

const port=process.env.PORT||3000;
app.listen(port, () => console.log(`Listening at port ${port}`));