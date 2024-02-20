import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Starred from './pages/Starred';
import Header from './components/Header';

import Error from './pages/Error';

function RoutesApp(){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="/starred" element={<Starred/>}/>

            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;


