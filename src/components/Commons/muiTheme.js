import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan900,
    },

    appBar: {
        height: 50,
    }
});

export default muiTheme;