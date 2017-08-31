import React from 'react';
import AppBar from 'material-ui/AppBar/';
import AutoComplete from 'material-ui/AutoComplete/';
import FontIcon from 'material-ui/FontIcon/';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation/';
import Paper from 'material-ui/Paper/';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className='material-icons'>restore</FontIcon>
const favoritesIcon = <FontIcon className='material-icons'>favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

const recipe = ['Sour beans', 'Cheese Eggs', 'Curry mussel', 'Curry beaf', 'Scallop tart'];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
        this.select = this.select.bind(this);
    }

    select(index) {
        this.setState({
            selectedIndex: index,
        })
    }

    render() {
        return (
            <div>
                <AppBar title='Supposedly navbar'>
                    <AutoComplete
                        dataSource={recipe}
                        floatingLabelText='Recipe'
                        filter={AutoComplete.fuzzyFilter}
                        maxSearchResults={3}
                    />
                </AppBar>

                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Recents"
                            icon={recentsIcon}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label='favorites'
                            icon={favoritesIcon}
                            onClick={() => this.select(1)} 
                        />
                        <BottomNavigationItem
                            label='nearby'
                            icon={nearbyIcon}
                            onClick={() => this.select(2)} 
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
};

export default Header;