import React from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {darkBlack, grey400} from 'material-ui/styles/colors';

class UploadedRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.getRecipes = this.getRecipes.bind(this);
    }

    getRecipes() {
        return {recipe1: {}, recipe2: {}}
    }

    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400}/>
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Share</MenuItem>
            </IconMenu>
        );
        const recipes = this.getRecipes();
        const eachRecipe = _.map(recipes, eachRecipe => (
            <List>
                <ListItem
                    leftAvatar={<Avatar src={eachRecipe.avatar}/>}
                    rightIconButton={rightIconMenu}
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>{eachRecipe.name}</span><br/>
                            {eachRecipe.description}
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true}/>
            </List>
        ));
        return (
            <Paper>
                <Subheader>Recipes</Subheader>
                {eachRecipe}
            </Paper>
        )
    }
}

export default UploadedRecipe;