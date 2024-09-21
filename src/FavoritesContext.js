// src/FavoritesContext.js
import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (item) => {
        setFavorites((prev) => [...prev, item]);
    };

    const removeFavorite = (item) => {
        setFavorites((prev) => prev.filter(fav => fav.id !== item.id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesProvider, FavoritesContext };
