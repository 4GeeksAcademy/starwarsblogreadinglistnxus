// src/components/Favorites.js
import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div className="container mt-4">
            <h1>Your Favorites</h1>
            <div className="row">
                {favorites.map((item) => (
                    <div className="col-md-4" key={item.uid}>
                        <div className="card mb-4">
                            <img src={`https://starwars-visualguide.com/assets/img/${item.type}/${item.uid}.jpg`} alt={item.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={`/details/${item.type}/${item.uid}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
