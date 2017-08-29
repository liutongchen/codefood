import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';

const HomePage = (props) => (
    <div style={{color: props.muiTheme.palette.textColor}}>
        Home Page
    </div>
);

export default muiThemeable()(HomePage);