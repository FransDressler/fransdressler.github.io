const path = require('path');

module.exports = {
    // Entry point of your application
    entry: './src/index.js',
    
    // Configuration for the output of the build process
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    
    // Module rules and loaders
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Target both .js and .jsx files
          exclude: /node_modules/, // Exclude the node_modules directory
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
  
    // Resolve file extensions (allows you to leave off the extension when importing)
    resolve: {
      extensions: ['.js', '.jsx']
    },
    
    // Setup for development server
    devServer: {
      static: './dist',
      open: true // Automatically open the browser
    }
  };
  