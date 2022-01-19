"use strict";(self.webpackChunkdemo_blog_aurora=self.webpackChunkdemo_blog_aurora||[]).push([[459],{5723:(r,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t={key:"v-2487a49e",path:"/WEB/220117.html",title:"前后端部署到服务器所遇问题及解决办法",lang:"zh-CN",frontmatter:{date:"2022/01/17 15:15",sticky:!0,keyword:"设置keyword,设置keyword,设置keyword,设置keyword",description:"关于前后端部署问题",title:"前后端部署到服务器所遇问题及解决办法",tag:["部署"],categories:["问题解决"]},excerpt:"",headers:[{level:2,title:"后端部署",slug:"后端部署",children:[{level:3,title:"Eclips导出war包",slug:"eclips导出war包",children:[]},{level:3,title:"部署至Tomcat",slug:"部署至tomcat",children:[]}]},{level:2,title:"PC端及Mobile端部署",slug:"pc端及mobile端部署",children:[]},{level:2,title:"部署问题及解决方法",slug:"部署问题及解决方法",children:[{level:3,title:"页面访问空白页",slug:"页面访问空白页",children:[]},{level:3,title:"页面请求数据404",slug:"页面请求数据404",children:[]},{level:3,title:"部分图片访问404",slug:"部分图片访问404",children:[]}]}],git:{updatedTime:1642506318e3,contributors:[{name:"wuhao",email:"2637405542@qq.com",commits:1}]}}},2691:(r,a,l)=>{l.r(a),l.d(a,{default:()=>cr});var t=l(6252);const n=(0,t.uE)('<h1 id="部署及问题解决" tabindex="-1"><a class="header-anchor" href="#部署及问题解决" aria-hidden="true">#</a> 部署及问题解决</h1><p>使用软件:Eclipse，Visual Studio Code</p><p>本地服务器：Tomcat</p><p>后端示例框架：SSM</p><p>PC端及Mobile端：Vue</p><p>打包工具：Webpack</p><h2 id="后端部署" tabindex="-1"><a class="header-anchor" href="#后端部署" aria-hidden="true">#</a> 后端部署</h2><h3 id="eclips导出war包" tabindex="-1"><a class="header-anchor" href="#eclips导出war包" aria-hidden="true">#</a> Eclips导出war包</h3><p><strong>第一步</strong>：选中要打包的项目名称，鼠标右键选择Export菜单后点击WAR file默认导出.war文件。</p>',9),e={href:"https://imgtu.com/i/7aY0Ej",target:"_blank",rel:"noopener noreferrer"},o=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aY0Ej.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aY0Ej.png",data:"aurora"},null,-1),i=(0,t._)("p",null,"也可以选择Export--àExport…后选择Web进行选择WAR file进行导出文件选择",-1),s={href:"https://imgtu.com/i/7aYdbQ",target:"_blank",rel:"noopener noreferrer"},p=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aYdbQ.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aYdbQ.png",data:"aurora"},null,-1),c=(0,t._)("p",null,[(0,t.Uk)("​ "),(0,t._)("strong",null,"第二步"),(0,t.Uk)("：选择导出war放置的路径，例:这里是放在我的桌面")],-1),g={href:"https://imgtu.com/i/7aYaDg",target:"_blank",rel:"noopener noreferrer"},u=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aYaDg.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aYaDg.png",data:"aurora"},null,-1),h=(0,t._)("p",null,"导出完成后就可以在所处路径看见项目war包",-1),m=(0,t._)("h3",{id:"部署至tomcat",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#部署至tomcat","aria-hidden":"true"},"#"),(0,t.Uk)(" 部署至Tomcat")],-1),d=(0,t._)("p",null,[(0,t._)("strong",null,"第三步"),(0,t.Uk)("：将导出的war文件放入tomcat")],-1),_={href:"https://imgtu.com/i/7aYUKS",target:"_blank",rel:"noopener noreferrer"},b=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aYUKS.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aYUKS.png",data:"aurora"},null,-1),f=(0,t._)("p",null,[(0,t.Uk)("打开tomcat所在路径的webapps，将war包放进去，"),(0,t._)("strong",null,"运行tomcat后"),(0,t.Uk)("会自动添加一个同名war包的文件夹。")],-1),k=(0,t._)("p",null,"注：运行tomcat默认路径是localhost:8080,使用war文件需要加/打包的文件名，例：localhost:8080/Shopping",-1),x=(0,t._)("p",null,[(0,t._)("strong",null,"运行tomcat方法：找到tomcat所在路径的bin文件夹")],-1),U={href:"https://imgtu.com/i/7aYYgf",target:"_blank",rel:"noopener noreferrer"},z=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aYYgf.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aYYgf.png",data:"aurora"},null,-1),v=(0,t._)("p",null,"shutdown.bat:停止服务器，startup:运行服务器",-1),w=(0,t._)("h2",{id:"pc端及mobile端部署",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#pc端及mobile端部署","aria-hidden":"true"},"#"),(0,t.Uk)(" PC端及Mobile端部署")],-1),S=(0,t._)("h4",{id:"vue项目打包",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vue项目打包","aria-hidden":"true"},"#"),(0,t.Uk)(" vue项目打包")],-1),y=(0,t._)("p",null,[(0,t._)("strong",null,"第一步"),(0,t.Uk)("：使用命令npm run build 进行项目打包")],-1),j={href:"https://imgtu.com/i/7adS0S",target:"_blank",rel:"noopener noreferrer"},D=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7adS0S.png",originSrc:"https://s4.ax1x.com/2022/01/17/7adS0S.png",data:"aurora"},null,-1),W=(0,t._)("p",null,[(0,t.Uk)("运行命令后在当前目录新增一个"),(0,t._)("strong",null,"dist"),(0,t.Uk)("文件夹")],-1),Y={href:"https://imgtu.com/i/7adm0U",target:"_blank",rel:"noopener noreferrer"},E=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7adm0U.png",originSrc:"https://s4.ax1x.com/2022/01/17/7adm0U.png",data:"aurora"},null,-1),C=(0,t._)("h4",{id:"部署至tomcat-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#部署至tomcat-1","aria-hidden":"true"},"#"),(0,t.Uk)(" 部署至Tomcat")],-1),P=(0,t._)("p",null,[(0,t._)("strong",null,"第二步"),(0,t.Uk)("：将打包好的dist文件放入tomcat路径下的webapps")],-1),T={href:"https://imgtu.com/i/7adcB8",target:"_blank",rel:"noopener noreferrer"},V=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7adcB8.png",originSrc:"https://s4.ax1x.com/2022/01/17/7adcB8.png",data:"aurora"},null,-1),B=(0,t.uE)('<p>这里将pc和mobile打包成dist文件夹分别重命名为pc和mobile</p><h2 id="部署问题及解决方法" tabindex="-1"><a class="header-anchor" href="#部署问题及解决方法" aria-hidden="true">#</a> 部署问题及解决方法</h2><h3 id="页面访问空白页" tabindex="-1"><a class="header-anchor" href="#页面访问空白页" aria-hidden="true">#</a> 页面访问空白页</h3><p>当出现空白页时，首先考虑项目src里边router/index.js路由配置里边默认模式是hash，如果你改成了history模式的话，打开是一片空白。所以改为<strong>hash</strong>或者直接把<strong>模式配置删除</strong>，让它默认的就行。如果非要使用<strong>history</strong>模式的话，需要你在服务端加一个覆盖所有的情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个index.html,这个页面就是你app依赖页面。</p><p>以下情况就会出现打包部署后运行空白页。注释或者更改为hash模式，重新打包则可解决问题</p>',5),I={href:"https://imgtu.com/i/7a0sw8",target:"_blank",rel:"noopener noreferrer"},M=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7a0sw8.png",originSrc:"https://s4.ax1x.com/2022/01/17/7a0sw8.png",data:"aurora"},null,-1),F=(0,t._)("h3",{id:"页面请求数据404",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#页面请求数据404","aria-hidden":"true"},"#"),(0,t.Uk)(" 页面请求数据404")],-1),K=(0,t._)("p",null,[(0,t._)("strong",null,"当出现页面网络请求全部出现404，说明获取数据失败。")],-1),Q=(0,t._)("p",null,[(0,t._)("strong",null,"1"),(0,t.Uk)("、首先先检查后端运行情况，检查服务器是否正常运行。")],-1),R=(0,t._)("p",null,[(0,t._)("strong",null,"2"),(0,t.Uk)("、如果后端运行正常，再考虑到build打包路径问题：")],-1),q={href:"https://imgtu.com/i/7a0ImV",target:"_blank",rel:"noopener noreferrer"},A=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7a0ImV.png",originSrc:"https://s4.ax1x.com/2022/01/17/7a0ImV.png",data:"aurora"},null,-1),L=(0,t._)("p",null,[(0,t._)("strong",null,"3"),(0,t.Uk)("、修改config下面的index.js中"),(0,t._)("strong",null,"bulid模块"),(0,t.Uk)("导出的路径。因为index.html里边的内容都是通过script标签引入的，而你的路径不对，打开肯定是空白的。先看一下默认的路径。")],-1),H=(0,t._)("p",null,[(0,t._)("strong",null,"4"),(0,t.Uk)("、assetsPublicPath默认的是 ‘/’ 也就是根目录。而我们的index.html和static在同一级目录下面。 所以要改为 "),(0,t._)("strong",null,"‘./ ’")],-1),N=(0,t._)("h3",{id:"部分图片访问404",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#部分图片访问404","aria-hidden":"true"},"#"),(0,t.Uk)(" 部分图片访问404")],-1),Z=(0,t._)("p",null,"例如：历史订单前的图标引入失败，无法查看。",-1),G={href:"https://imgtu.com/i/7aDkUU",target:"_blank",rel:"noopener noreferrer"},J=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aDkUU.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aDkUU.png",data:"aurora"},null,-1),O=(0,t._)("p",null,[(0,t._)("strong",null,"1"),(0,t.Uk)("、"),(0,t._)("strong",null,"排除非打包放入服务器就出现未显示的情况")],-1),X=(0,t._)("p",null,[(0,t._)("strong",null,"2"),(0,t.Uk)("、解决办法：首先查看该图片的请求网址路径，从中可以看到请求路径为：")],-1),$={href:"https://imgtu.com/i/7aDPbV",target:"_blank",rel:"noopener noreferrer"},rr=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aDPbV.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aDPbV.png",data:"aurora"},null,-1),ar=(0,t._)("p",null,[(0,t._)("strong",null,"3"),(0,t.Uk)("、查看其他正常显示图片的请求路径，例:")],-1),lr={href:"https://imgtu.com/i/7aDCD0",target:"_blank",rel:"noopener noreferrer"},tr=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aDCD0.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aDCD0.png",data:"aurora"},null,-1),nr=(0,t._)("p",null,"可以看到正常显示的图片请求网址前面多了个mobile",-1),er=(0,t._)("p",null,[(0,t._)("strong",null,"3"),(0,t.Uk)("、直接打开dist打包文件夹，搜索该路径。(其他方法均未解决时斟酌使用)")],-1),or={href:"https://imgtu.com/i/7aDFET",target:"_blank",rel:"noopener noreferrer"},ir=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"7aDFET.png",originSrc:"https://s4.ax1x.com/2022/01/17/7aDFET.png",data:"aurora"},null,-1),sr=(0,t._)("p",null,"如图所示，有些项目打包会出现这种情况，因为识别不到项目名而请求失败。",-1),pr={},cr=(0,l(3744).Z)(pr,[["render",function(r,a){const l=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("p",null,[(0,t._)("a",e,[o,(0,t.Wm)(l)])]),i,(0,t._)("p",null,[(0,t._)("a",s,[p,(0,t.Wm)(l)])]),c,(0,t._)("p",null,[(0,t._)("a",g,[u,(0,t.Wm)(l)])]),h,m,d,(0,t._)("p",null,[(0,t._)("a",_,[b,(0,t.Wm)(l)])]),f,k,x,(0,t._)("p",null,[(0,t._)("a",U,[z,(0,t.Wm)(l)])]),v,w,S,y,(0,t._)("p",null,[(0,t._)("a",j,[D,(0,t.Wm)(l)])]),W,(0,t._)("p",null,[(0,t._)("a",Y,[E,(0,t.Wm)(l)])]),C,P,(0,t._)("p",null,[(0,t._)("a",T,[V,(0,t.Wm)(l)])]),B,(0,t._)("p",null,[(0,t._)("a",I,[M,(0,t.Wm)(l)])]),F,K,Q,R,(0,t._)("p",null,[(0,t._)("a",q,[A,(0,t.Wm)(l)])]),L,H,N,Z,(0,t._)("p",null,[(0,t._)("a",G,[J,(0,t.Wm)(l)])]),O,X,(0,t._)("p",null,[(0,t._)("a",$,[rr,(0,t.Wm)(l)])]),ar,(0,t._)("p",null,[(0,t._)("a",lr,[tr,(0,t.Wm)(l)])]),nr,er,(0,t._)("p",null,[(0,t._)("a",or,[ir,(0,t.Wm)(l)])]),sr],64)}]])}}]);