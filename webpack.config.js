module.exports = {
  // other webpack configurations

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: 'path/to/your/postcss.config.js',
              },
            },
          },
        ],
      },
    ],
  },
};
