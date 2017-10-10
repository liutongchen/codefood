import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import UploadedRecipe from './UploadedRecipe';

const Recipe = () => (
    <div>
        <RaisedButton
            containerElement='label'
            label='Upload Recipe'>
            <input type='file' style={{display: 'none'}}/>
        </RaisedButton>
        <UploadedRecipe/>
    </div>
);

export default Recipe;