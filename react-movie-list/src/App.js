import React, {useEffect, useState} from 'react';
import './App.css';
import { Movies } from "./Movies";
import { MovieForm } from "./MovieForm";
import { Container } from "semantic-ui-react";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/movies').then((response) => response.json().then(data => {
            setMovies(data.movies)
        }))
    }, []);

    console.log(movies);

  return (
    <div className="App">
        <Container>
            <MovieForm />
            <Movies movies={ movies }/>
        </Container>
    </div>
  );
}

export default App;
