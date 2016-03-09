module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/, //for now
            loaders: ['style', 'css', 'sass']   // Pipeline goes right > left.
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};
