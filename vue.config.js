module.exports = {
  devServer: {
    // proxy: 'http://localhost:4000'
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";
              @import "@/styles/_mixins.scss";`
      }
    }
  }
};
