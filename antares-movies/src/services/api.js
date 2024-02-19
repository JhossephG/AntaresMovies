//base da URL: https://api.themoviedb.org/3/
//URL da api: https://api.themoviedb.org/3/movie/500?api_key=761aa21a6e3d079927d0cea54826b690

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;