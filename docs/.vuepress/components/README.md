# 自定义页面

你可以在此文件夹中，创建你自己的组件，然后在`docs/.vuepress/clientAppEnhance.js`文件中，将该组件注册为全局
组件，然后在`docs`目录下，创建一个md文件，加入`my-con.md`，然后在此md文件顶部加入下面内容，你便可以直接在浏览器中，输入`/my-con.html`访问你创建的这个组件了

```markdown
---
layout: UseBlog
---
```

