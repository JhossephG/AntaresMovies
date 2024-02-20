import './starred.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Starred() {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        const myList = localStorage.getItem("@antaresMovies");
        setMovies(JSON.parse(myList) || [])

    },[])

    function deleteMovie(id){
        let moviesFilter = movies.filter((item)=>{
            return (item.id !== id);
        })
        setMovies(moviesFilter);
        localStorage.setItem("@antaresMovies", JSON.stringify(moviesFilter));
        alert("Movie removed!")
    }

    return(
       <div className='mySM'>
        <h1>
            My saved movies
        </h1>

        {movies.length === 0 && <span> You haven't starred movies </span>}

        <ul>
            {movies.map((item)=> {
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/movie/${item.id}`}>See details</Link>
                            <button onClick={() => deleteMovie(item.id)}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
       </div>
           
       
    )
}

export default Starred;