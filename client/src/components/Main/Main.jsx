import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './Home/HomePage';
import RecipePage from './Recipe/RecipePage';
import FoodPage from './Food/FoodPage';

const Main = () => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path='/recipe' component={RecipePage}/>
            <Route path='/food' component={FoodPage}/>
        </div>
    </BrowserRouter>
        );

export default Main;