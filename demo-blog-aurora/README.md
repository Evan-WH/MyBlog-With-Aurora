## 欢迎🎉🎉🎉🎉🎉

非常感谢你使用Aurora主题，当你看到这个页面的时候，说明你已经使用[Aurora脚手架](https://github.com/vuepress-aurora/theme-cli)搭建好博客了，如果你还没有运行成功，那么请先看一下[这个视频](https://ooszy.cco.vin/theme-template/%E4%B8%BB%E9%A2%98%E5%AE%89%E8%A3%85.mp4)，在你配置博客之前，请先阅读该[文章](https://aurora.xcye.xyz/issue/)，对你的博客配置很有帮助，一定要读

如果你在使用该主题的过程中，有任何的问题，都可以通过以下方式联系我

| QQ                                                           | 主题交流群                                                   | 微信                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://ooszy.cco.vin/img/blog-note/image-20211024233620332.png?x-oss-process=style/pictureProcess1" style="zoom:33%;" /> | <img src="https://ooszy.cco.vin/img/blog-note/image-20211024233827133.png?x-oss-process=style/pictureProcess1" alt="image-20211024233827133" style="zoom:33%;" /> | <img src="https://ooszy.cco.vin/img/blog-note/image-20211024233735110.png?x-oss-process=style/pictureProcess1" alt="image-20211024233735110" style="zoom: 39%;" /> |



### 项目地址

> 如果可以的话，能帮我点个Star✨✨么，球球啦

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=vuepress-aurora&repo=vuepress-theme-aurora)](https://github.com/vuepress-aurora/vuepress-theme-aurora)



## 主题文档

主题文档地址为[Aurora docs](https://aurora.xcye.xyz/)



## **npm**常用命令

1. 本地启动博客

   ```sh
   npm run dev
   ```

2. 打包(`默认生成的静态文件在docs/.vuepress/dist内`)

   ```sh
   npm run build
   ```

3. 安装依赖

   ```sh
   npm install
   ```



## 博客配置

1. [所有配置项](https://aurora.xcye.xyz/home/config.html)
2. [首页配置](https://aurora.xcye.xyz/homeconfig.html)
3. [部署](https://aurora.xcye.xyz/home/deploy.html)
4. [插件](https://aurora.xcye.xyz/plugin/coze)
5. [Leancloud官网](https://console.leancloud.app/)


## Quick start

### Node安装

运行环境需要依赖`node`，如果你未安装`node`，请先安装node，我安装的版本为`v14.17.3`

> 安装node可查看[Node 安装](https://aurora.xcye.xyz/node.html)

### 安装CLI

- npm

  ```sh
  npm i vuepress-theme-cli -g
  ```

- yarn

  ```sh
  yarn global vuepress-theme-cli
  ```



### 创建博客

待脚手架cli安装成功之后，进入cmd中

![image-20211127104249135](https://ooszy.cco.vin/img/blog-note/image-20211127104249135.png?x-oss-process=style/pictureProcess1)



在命令行处输入下面命令(`之后一直按Enter键`)

```sh
aurora blog-demo
```

> `blog-demo`是你的博客文件件名称，会自动创建以此名字命名的文件夹
>
> 当你输入`aurora blog-demo`命令之后，会需要你填写一下`description`和`logoText(首页logo文字)`，你可以随便填一下
>
> 如果提示下面错误，请看[这里](https://aurora.xcye.xyz/issue/cli-issue.md)
>
> ```sh 
> 'aurora' 不是内部或外部命令，也不是可运行的程序
> 或批处理文件。
> ```



![image-20211129213029591](https://ooszy.cco.vin/img/blog-note/image-20211129213029591.png?x-oss-process=style/pictureProcess1)



> 这个过程大概几秒，取决于你的网速，待安装成功之后，你会发现在当前目录下，多了一个目录



![image-20211129213052601](https://ooszy.cco.vin/img/blog-note/image-20211129213052601.png?x-oss-process=style/pictureProcess1)



不知道你有没有注意到上图红色框中的信息，当博客模板下载完成之后，你还需要三步，才能启动博客，也就是上图中的`step1,step2,step3`

现在你需要根据`你自己电脑的环境`执行上图中白色部分的相应命令

> 这里举个例子:
>
> 假如你电脑没有安装`yarn`，那么需要执行带有`npm`的命令，对于`yarn`的命令，就不需要执行
>
> 推荐看一下[这个视频](https://ooszy.cco.vin/theme-template/%E4%B8%BB%E9%A2%98%E5%AE%89%E8%A3%85.mp4)



![image-20211130110845273](https://ooszy.cco.vin/img/blog-note/image-20211130110845273.png?x-oss-process=style/pictureProcess1)

待依赖安装成功之后，运行`npm run dev`，会出现一个地址，你只需要在浏览器中，输入这个地址，就可以看到下面的页面



![image-20211010232918219](https://ooszy.cco.vin/img/blog-note/image-20211010232918219.png?x-oss-process=style/pictureProcess1)





恭喜你，到这里，你已经安装成功了，接下来便可以尽情书写博客和修改配置(`上图展示出来的效果是默认配置，你可以更改`)

为了更好的对主题进行配置，你可以直接复制我GitHub中的<a href="https://github.com/vuepress-aurora/vuepress-theme-aurora/blob/master/docs/.vuepress/config-copy.js" target="_blank">config.js</a>文件

推荐阅读

- [主题所有配置](/home/config.md)
- [问题及报错解决](/issue/bug.md)
- [注意更新日志](/issue/CHANGELOG.md)


