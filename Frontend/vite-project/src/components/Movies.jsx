import { useState } from "react";
import "./Movies.css";
import Movie from "./Movie";
import Carousel from "./ui/Carousel";
import ChairSvg from "../assets/Chair.svg";

const Movies = () => {
    const [movies, setMovies] = useState([
        { title: "DeadPool", id: 1,
            date: "31.03", 
        image: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg" },
        { title: "Blink Twice", id: 2,
            date: "31.03",
            image: "https://m.media-amazon.com/images/M/MV5BMzczYmQ0NTUtMTM5OS00Mzc4LWExZDYtOWE4YjRkOWJkYWRlXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"         },
    
        { title: "Inception", id: 3,
            date: "22.02",
            image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg"        },
        { title: "Scary Movie", id: 4,
            date: "31.03",
            image: "https://m.media-amazon.com/images/M/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg"         },
    ]);

    const images = [
        { src: "https://m.media-amazon.com/images/M/MV5BOTI4MTkxOTYtMjEzMC00NTdhLWE1YTUtMzUzMTRhOTA1YzNmXkEyXkFqcGc@._V1_.jpg", title: "DeadPool" },
        { src: "https://m.media-amazon.com/images/M/MV5BZTE5Yzg2NzMtZDdhOC00NDg3LWI0MTktYjczNjUyY2YwZmRmXkEyXkFqcGc@._V1_.jpg", title: "Blink Twice" },
        { src: "https://m.media-amazon.com/images/M/MV5BMTk1NDM4MDMwMF5BMl5BanBnXkFtZTcwMjY0OTk1Mw@@._V1_.jpg", title: "Inception" },
        { src: "https://m.media-amazon.com/images/M/MV5BMTY3NDAyNDc4MV5BMl5BanBnXkFtZTcwODY5NzgwMw@@._V1_.jpg", title: "Blink Twice" },
    ];

    return (
        <div className="container">
        <div className="movieVertical">
        <ul id="moviesul">
            {movies.map((movie) => (
                <Movie key={movie.id} movie={ movie } />
            ))}
        </ul>
        <img src={ChairSvg} alt="chair" className="chairSvg"/>
        </div>

        <Carousel images={images} />

        </div>
    );
};

export default Movies;