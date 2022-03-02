const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        // the output of the webpack build will be in /dist directory
        path: path.resolve(__dirname, 'dist'),
        // the filename of the JS bundle will be bundle.js
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
                test: /\.(jsx|js)?$/,
                
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript to a suitable format
                
                loader: 'babel-loader',
                options: {
                    
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
                
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx','.css'],
      },
    // add a custom index.html as the template
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
};