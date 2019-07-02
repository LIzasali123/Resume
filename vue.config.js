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
        }//,
        // {
        //   test: /\.scss$/,
        //   use: [
        //     'vue-style-loader',
        //     'css-loader',
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         data: `@import "@/styles/_variables.scss";
        //                @import "@/styles/_mixins.scss";`
        //       }
        //     }
        //   ]
        // }
      ]
    }
  }//,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "@/styles/_variables.scss";
  //             @import "@/styles/_mixins.scss";`
  //     }
  //   }
  // }
};
