import { useEffect, useState } from 'react'; 
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function loadMovies(){
          const response = await  api.get("movie/now_playing", {
            params:{
                api_key: "761aa21a6e3d079927d0cea54826b690",
                language: "pt=BR",
                page: 1
            }
          });

          setMovies(response.data.results.slice(0,15));

        }
        loadMovies();

    }, [])

    return(
        <div className='container'>
            <div className='movies-list'>
                {movies.map((movie)=> {
                    return(
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.orh.t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>Access</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;