module.exports = {
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
