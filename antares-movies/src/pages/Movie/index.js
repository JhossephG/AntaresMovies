import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';
import './movie.css';
import { ToastContainer, toast } from 'react-toastify';

function Movie() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({}); 
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadMoveDetails(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "761aa21a6e3d079927d0cea54826b690",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Movie not found");
                navigate("/", {replace: true})
                return;
            })
        }

        loadMoveDetails();

        return () => {
            console.log("desmontado!");
        }

    },[navigate, id])

    function saveMovie(){
        const myList = localStorage.getItem("@antaresMovies");

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((saveMovie) => saveMovie.id === movie.id);
        if(hasMovie){
            alert("Movie was already added to the list!");
            return;
        }
        savedMovies.push(movie);
        localStorage.setItem("@antaresMovies", JSON.stringify(savedMovies));
        alert("Movie succesfully saved!");

    }

    if(loading){
        return(
            <div className="movie-info">
                <h1>Loading details...</h1>
            </div>
        )
    }

    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            <h2>Synopsis</h2>
            <span>{movie.overview}</span> <br/>
            <strong>Rating: {movie.vote_average} / 10</strong>

            <div className="area-button">
                <button onClick={saveMovie}>Save</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Movie;