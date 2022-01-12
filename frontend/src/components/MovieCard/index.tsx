import MovieScore from "../MovieScore";
import { Link } from "react-router-dom";
//import './styles.css';


function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg",
        title: "Peaky Blinders",
        count: 2,
        score: 4.5
    };

    const movie2 = {
        id: 2,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9EBKgrFIsCFSV1RZKWhYUdbtGiv.jpg",
        title: "Dexter",
        count: 5,
        score: 4.0
    };

    const movie3 = {
        id: 3,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        title: "O Espetacular Homem Aranha",
        count: 2,
        score: 3.7
    };

    const movie4 = {
        id: 4,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6gcHdboppvplmBWxvROc96NJnmm.jpg",
        title: "Round 6",
        count: 2,
        score: 4.9
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>

            <img className="dsmovie-movie-card-image" src={movie2.image} alt={movie2.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie2.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie2.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>

            <img className="dsmovie-movie-card-image" src={movie3.image} alt={movie3.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie3.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie3.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>

            <img className="dsmovie-movie-card-image" src={movie4.image} alt={movie4.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie4.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie4.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;