import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const food = require('./food').food;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const FoodPage = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Liutong's creation</Subheader>
      {food.map((eachFood) => (
        <GridTile
          key={eachFood.img}
          title={eachFood.title}
          subtitle={<span>by <b>{eachFood.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={eachFood.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default FoodPage;