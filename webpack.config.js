module.exports = {
  entry:  __dirname + "/src/main.js",//唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  resolve:{
    alias:{
      'vue$': 'vue/dist/vue.esm.js' //解决vue编译版本问题
    }
  }
}