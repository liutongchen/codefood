import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { homeStyle } from './homeStyle';

const HomePage = () => (
    <div style={homeStyle}>
    <Card>
        <CardHeader
            title="Liutong Chen"
            subtitle="A coder who loves to cook"
            avatar="http://res.cloudinary.com/dla0ocfbw/image/upload/v1504138301/codeFood/IMG_7348.jpg"
        />
        <CardMedia
            overlay={<CardTitle title="Just Cook IT" subtitle="I cook what you dream not what you eat." />}
        >
            <img src="http://res.cloudinary.com/dla0ocfbw/image/upload/v1504139586/codeFood/IMG_6063_1.jpg" alt="A delicious meal by Liutong" />
        </CardMedia>
        <CardTitle title="Liutong Chen" subtitle="creativity & productivity" />
        <CardText>
           "Liutong is the best Chinese cook I've ever known. As a vegetarian, I don't eat meat except for the ones she cooks."  -- Clemens Wolff
    </CardText>
        <CardActions>
            <Link to='/food'><FlatButton label="Food" /></Link>
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
    </div>
);

export default HomePage;