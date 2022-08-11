//import
const path = require('path'); // Node.js에서 언제든지 사용할 수 있는 전역모듈
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
//exports
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  // webpack은 html이 아닌 js파일을 진입점으로 설정
  entry: './js/main.js',

  //결과물(번들)을 반환하는 설정
  output: {
    // path는 Node.js에서 필요로하는 절대경로를 명시해야 함
    //path: path.resolve(__dirname, 'dist'), 
    //__dirname이라는 전역변수를 dist라는 폴더에 반환
    //__dirname은 현재 파일이 있는 그 경로를 지칭함
    //filename: 'main.js',
    clean: true
  },

  module:{
    rules:[
      {
        test:/\.s?css$/,
        use:[ // 아래의 작성순서는 지켜줘야 한다.
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns:[
        {from: 'static/'}
      ]
    }) 
  ],

  devServer:{
      host: 'localhost'
  }

}