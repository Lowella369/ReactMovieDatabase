import React, { useState, useEffect } from 'react';
//API
import API from '../API';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovie = async(page, searchTerm='') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page)
            console.log(movies)
        }catch(error){
            setError(true);
        }
    }

    //initial render
    useEffect(() => {
        fetchMovies(1);
    },[])

    return <div>Home Page</div>
}

export default Home;