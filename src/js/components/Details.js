// src/components/Details.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../FavoritesContext';

const Details = () => {
    const { type, id } = useParams();
    const [details, setDetails] = useState({});
    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://swapi.tech/api/${type}/${id}`);
            const data = await response.json();
            setDetails(data.result.properties);
        };

        fetchDetails();
    }, [type, id]);

    const isFavorite = favorites.some(fav => fav.uid === details.uid);

    return (
        <div className="container mt-4">
            <h1>{details.name}</h1>
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} alt={details.name} />
            <p>{JSON.stringify(details)}</p>
            <button 
                className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`} 
                onClick={() => isFavorite ? removeFavorite(details) : addFavorite(details)}
            >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default Details;
