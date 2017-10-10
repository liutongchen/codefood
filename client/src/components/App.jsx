import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Header from './Commons/Header';
import Main from './Main/Main';
import muiTheme from './Commons/muiTheme';

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            {/*<Header />*/}
            <Main  />
        </div>
    </MuiThemeProvider>
)

export default App;