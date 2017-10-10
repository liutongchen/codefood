const uuidv4 = require('uuid/v4');

/**
 * create trial data before using dynamoDB
 */
const recipe = new Map();

const addNewPair = (avatar, name, description, content) => {
    const key = uuidv4();
    const value = {
        avatar,
        name,
        description,
    };

    recipe.set(key, value);
};

const trialData = () => {
    const avatar1 = 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg';
    const name1 = 'sushi';
    const description1 ='home made sushi';
    addNewPair(avatar1, name1, description1);

    const avatar2 = 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178';
    const name2 = 'spring roll';
    const description2 ='home made spring roll';
    addNewPair(avatar2, name2, description2);
};

trialData();

module.exports = {
    getAll() {
        return recipe;
    }
};
