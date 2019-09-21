原文地址：https://blog.csdn.net/iamlujingtao/article/details/101108624

# 你遇到的问题
- 是不是被一堆git命令搞到晕？
- 是不是在cmd打命令再切换到编辑器写代码，麻烦得一b？
- 是不是装webpack踩到各种坑？
- 是不是不知道怎么配合webpack写一个vue的Hello vue？
- 是不是不知道怎么把写好的代码同步GitHub代码？

来来来，这里用一篇文章介绍怎样搭建一个傻瓜式多人协作的vue工作环境，利用VSCode这神器，把一切都简单化。（笔者也是踩过各种坑啊）

[GitHub地址](https://github.com/lujingtao/Simple-Demo-with-GitHub-Desktop-VSCode-Webpack-Vue)，你可以直接下载就有一个最基础的webpack+vue工作环境了，给个`Star` 不过分吧。

当前使用版本：
    "vue": "^2.6.10",
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9"

# 前提工作
以下前提工作请自行百度处理，括号有tips说明，让你少踩坑
- [注册GitHub账号](https://github.com)（GitHub是境外服务器，可以修改host来加速）
- [下载并安装GitHub Desktop](https://desktop.github.com/) 软件（本地可视化操作GitHub）
- [下载并安装Git](https://git-scm.com/downloads)（[安装说明参考](https://www.cnblogs.com/xiuxingzhe/p/9300905.html)，安装上就可以了，不用记操作代码）
- [下载安装VSCode](https://code.visualstudio.com/)（神器）

# 使用GitHub Desktop 
- **新建repository**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921155449787.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
左侧看到你的远程仓库，右侧可以克隆远程仓库、创建本地仓库、从本地已存在的仓库创建，现在创建一个本地仓库
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921155801826.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
- **把本地仓库推送到远程仓库**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921161645978.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
推送成功后，打开你GitHub网址就能看到这个test repository了

- **设置关联VSCode**
创建仓库后左侧只会列出变更内容，现在我们关联VSCode来变更文件，如下操作关联VSCode （`File-->Options-->Advanced`）
![-](https://img-blog.csdnimg.cn/20190921155956367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70) 
- **关联方式用VSCode打开仓库**
按 Ctrl + Alt +A 或者 `Repository-->Open in Visual Studio Code` 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921162631225.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
现在我们修改README.md 文件，并保存，此时我们看到README.md变成了土黄色，并有M提示，左侧的“代码管理器”也有数字1提示，这个“代码管理器”关联了你当前的本地仓库，所有修改都可以直观地在这里看到，而且有更多可视化指令。

# VSCode同步远程仓库
- **“代码管理器”使用**
接上操作，我们修改了README.md文件后，点开“代码管理器”来把更改push到远程仓库，操作如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921162952188.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921163227984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
先要输入修改说明才能push，相当于git的commit命令，然后再推送（**下拉菜单有所有git命令，根本不用手打code，简直傻瓜**）。
推送成功后打开你GitHub网址就能看到变化了。

# 使用VSCode终端安装webpack和vue

我们之前安装webpack是不是在cmd输入？其实VSCode本身就集成了命令工具，点击 `终端-->新建终端`
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019092116425960.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)

- **初始化npm**
`npm init -y`
- 安装webpack和webpack-cli
`npm i webpack webpack-cli -d`
- **安装vue**
`npm i vue -s`
- **手动建立文件架构**
你可以手动建立文件架构，也可以用下面命令方式构建
`cd>webpack.config.js //新建文件`
`md src //新建src文件夹`
`cd src //进入src文件夹`
`cd>main.js//新建文件`
`cd>index.html //新建文件`
`cd .. //回到一级目录`
最终架构如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921165401599.png)
# 编写并运行Hello vue
- **配置webpack.config.js**
此代码配置是最基础的webpack知识，主要注意 `'vue$': 'vue/dist/vue.esm.js'` 这一行，用于解决vue编译版本问题，否则你运行vue的时候会失败
```js
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
```
- **修改 package.json 增加webpack命令**
修改 package.json 文件，找到scripts，并增加 "dev","bulid" 2行代码，用于使用npm执行打包操作，关键代码如下：
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
```
- **编写main.js**
导入vue，然后创建vue实例，定义变量 message
```js
import Vue from 'vue';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue!'
  }
})
```
- **编写index.html**
在 #app里面输出message变量，并手动增加 bundle.js 链接
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<body>
    <div id="app">
    {{ message }}
    </div>
    <script src="../dist/bundle.js"></script>
</body>
</html>
```

- **运行webpack打包命令**
我们刚才在 package.json 的 scripts里面增加了dev 对应的webpack命令，现在在终端输入 `npm run dev` 来执行，结果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190921172233619.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2lhbWx1amluZ3Rhbw==,size_16,color_FFFFFF,t_70)
# 把成果推送到远程仓库
成功了啊大兄弟，终于建立了一个`GitHub Desktop + VSCode + Webpack + Vue` 的工作环境，最后把我们的成果推送到远程仓库，具体参考上文 **VSCode同步远程仓库** 步骤。

[GitHub地址](https://github.com/lujingtao/Simple-Demo-with-GitHub-Desktop-VSCode-Webpack-Vue)，你可以直接下载就有一个最基础的webpack+vue工作环境了，给个`Star` 不过分吧。
