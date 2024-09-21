// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FavoritesProvider } from './FavoritesContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';




const App = () => {
    return (
        <FavoritesProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/details/:type/:id" component={Details} />
                    <Route path="/favorites" component={Favorites} />
                </Switch>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
