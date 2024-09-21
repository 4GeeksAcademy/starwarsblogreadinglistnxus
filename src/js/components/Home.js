// src/components/Home.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../FavoritesContext';

const Home = () => {
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const { addFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchData = async () => {
            const responsePeople = await fetch('https://swapi.tech/api/people');
            const dataPeople = await responsePeople.json();
            setPeople(dataPeople.results);

            const responseVehicles = await fetch('https://swapi.tech/api/vehicles');
            const dataVehicles = await responseVehicles.json();
            setVehicles(dataVehicles.results);

            const responsePlanets = await fetch('https://swapi.tech/api/planets');
            const dataPlanets = await responsePlanets.json();
            setPlanets(dataPlanets.results);
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Star Wars Entities</h1>
            <div className="row">
                {[...people, ...vehicles, ...planets].map((item) => (
                    <div className="col-md-4" key={item.uid}>
                        <div className="card mb-4">
                            <img src={`https://starwars-visualguide.com/assets/img/${item.type}/${item.uid}.jpg`} alt={item.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Short description about {item.name}</p>
                                <Link to={`/details/${item.type}/${item.uid}`} className="btn btn-primary">Details</Link>
                                <button className="btn btn-secondary ml-2" onClick={() => addFavorite(item)}>Favorite</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
