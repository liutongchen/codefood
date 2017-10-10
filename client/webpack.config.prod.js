const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/index'],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    plugins: [
        new webpack.DefinePlugin({
            'process-env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        })
    ],

    resolve: {
        extensions: ['.js', 'jsx', 'css'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loaders: ['style-loader', 'css-loader']
            },
        ]
    }
}