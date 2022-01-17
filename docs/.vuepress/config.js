/*
 * 此文件是博客的配置文件，你可以在这里配置插件，还有主题配置项
 * 在使用的过程中，推荐对照这文档进行配置，主题文档地址https://aurora.xcye.xyz/，下面这些配置项，你在配置的时候，不用问我，每一个是什么，有什么用
 * 你自己配置之后，重新运行npm run dev，刷新网页，便可以看到效果，就知道他是什么
 *
 * 一定要记得，你修改过此文件，一定要重新运行npm run dev命令，为了配置方便，如果你还没有下载任何的编辑器的话，推荐下载一个vscode,官网https://code.visualstudio.com/Download
 * 如果有任何的问题，欢迎加入主题交流群询问: 681602026,
 * */

const { path } = require("@vuepress/utils");
module.exports = {
    dest: 'public',
    //base: '/REPO/',//如果你准备发布到 https://<USERNAME>.github.io/<REPO>/ ，也就是说你的仓库地址是 https://github.com/<USERNAME>/<REPO> ，则将 base 设置为 "/<REPO>/"。

    extendsMarkdown: (md) => {

    },
    bundler: '@vuepress/bundler-webpack',


    //在这里配置插件 plugins是一个数组对象
    plugins: [
        //为博客加入搜索功能 https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '请输入搜索内容',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            }
        ],

        //说说插件 请自行配置 https://aurora.xcye.xyz/plugin/coze
        [
            'vuepress-plugin-coze',
            {
                appId: '1P0mOx3mLrgpx12Dh1KJq3xt-MdYXbMMI',
                appKey: 'j776RXi9GcC675DBCdGpwsiA',
                masterKey: 'kiwcADbMFQB2MI1wzFWdHsDy',
                //下面这些是可选的
                avatarPath: '/avatar.jpg', //说说头像url
                registerPath: '/aurora-register', //自定义插件默认提供的注册页面路由，请在前面加上/
                onlyAdministrator: false //是否运行其他注册的用户发布说说，true表示只有管理员可以发布

            }
        ],

        //为博客加入音乐播放器功能 https://aurora.xcye.xyz/plugin/player
        [
            'player',
            {
                //网易云单个歌单id
                songIds: ['29723011', '1887893189', '1421069053'],
                //网易云歌单
                playlist: '7082462754',
                // 1363774655
                showPlaylist: false,
                //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
                disabledNetEaseMusic: true,

                //请求接口的baseURL
                serverUrl: 'https://netease-cloud-music-api-aurora.vercel.app/',

                //本地歌曲
                localSongs: {
                    coverUrl: 'https://s4.ax1x.com/2022/01/15/7JjkX6.png',
                    songs: [{
                            path: 'https://ooszy.cco.vin/music/Love%20Story.mp3',
                            //     http://m7.music.126.net/20211122125449/21a6c99de4d0329ee6df753bcda3c007/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2987355982/92c3/233a/d483/f901cdf76a32c8b912e80c093cc71cdc.mp3
                            songName: 'Love Story',
                            cover: 'https://s4.ax1x.com/2022/01/15/7JjkX6.png'
                        },
                        // {
                        //     path: '/song/2.mp3',
                        //     songName: '歌曲2',
                        //     cover: 'https://p2.music.126.net/8mnn6YiQldsRIHe_nER8wg==/109951162894925733.jpg'
                        // },
                    ]
                }
            }
        ],

        //为博客加入气泡功能 https://aurora.xcye.xyz/plugin/bubble 如果需要，请打开注释
        /*[
            'bubble',
            {
                //气泡数量 推荐0(不包括)到1之前的小数，
                bubbleNumber: 0.14,

                //气泡透明度 0到1之间的小数
                bubbleAlpha: 0.6,

                //透明度变化速度，越接近于0越好
                alphaChangeSpeed: 0.00001,

                //气泡大小，推荐0到1之间的值
                size: 0.4,

                //气泡大小变化速度 越小越好
                sizeChangeSpeed: 0.0002,

                //气泡上升速度
                riseSpeed: 0.4,

                //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
                color: '255,255,255',

                zIndex: -2
            }
        ],*/

        //为博客加入文章归档功能 https://aurora.xcye.xyz/plugin/archive
        [
            'archive',
            {
                //需要排除的页面url，在该数组里面的路径，都不会被统计
                excludes: ['/404.html', '/index.html', '/about/', '/mood/', '/link/', '/tag/', '/photo/',
                    '/aurora-archive/', '/aurora-coze/', '/aurora-music/', '/aurora-register/', '/archive/',
                ],
                //当某篇文章没有标题时，将使用下面值进行替换
                noTitle: '暂时没有标题配置'
            }
        ],
    ],
    //设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    head: [
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_3144524_7l6vulm3on7.js",
            },
        ],
        //设置站点icon
        [
            "link",
            {
                href: "https://s4.ax1x.com/2022/01/15/7JHV0J.png",
                rel: "icon",
            },
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2932340_r7zitafg82.css'
            }
        ],
        /*[
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2951154_btu3y5blqnn.css'
            }
        ]*/
    ],

    theme: path.resolve(__dirname, "../../Aurora-theme/lib/node/index.js"), //这里使用本地主题 打开此注释将使用本地主题 此处和theme: 'aurora'，只能二选一
    // theme: 'aurora', //如果需要使用在线主题，那么打开此注释

    //站点title
    title: "千篇壹律",

    lang: 'zh-CN',

    //设置运行npm run dev的端口
    port: 8080,

    //themeConfig的所有配置，都是主题配置，包含默认主题配置项
    themeConfig: {
        //这里配置导航栏项，建议将navbar提取出，比如navbar.js
        navbar: [

            // {
            //     text: '快速开始',
            //     link: '/readme/',
            //     iconClass: 'aurora-navbar-si-glyph-game-1'
            // },
            {
                text: 'Baidu',
                link: 'https://www.baidu.com/',
                iconClass: 'aurora-navbar-si-glyph-game-1'
            },
            /*{
                text: "所有配置",
                link: '/home/config.html',
                iconClass: 'aurora-link'
            },*/
            // {
            //     text: '好用网站',
            //     iconClass: 'aurora-navbar-si-glyph-glass-water',
            //     children: [{
            //             text: 'npm',
            //             children: [{
            //                     text: 'npm',
            //                     link: 'https://www.npmjs.com/'
            //                 },
            //                 {
            //                     text: '我自己的包',
            //                     link: 'https://www.npmjs.com/settings/qsyyke/packages'
            //                 }
            //             ]
            //         },
            //         {
            //             text: '搜索引擎',
            //             children: [{
            //                     text: "百度",
            //                     link: 'https://www.baidu.com/',
            //                 },
            //                 {
            //                     text: '谷歌',
            //                     link: 'https://www.google.com/'
            //                 }
            //             ]
            //         },
            //         {
            //             text: 'icon',
            //             children: [{
            //                     text: '阿里图标',
            //                     link: 'https://www.iconfont.cn/',
            //                 },
            //                 {
            //                     text: '好看网站',
            //                     link: 'https://solstice23.top/'
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     text: '问题和bug',
            //     iconClass: 'aurora-navbar-si-glyph-emoticon',
            //     children: [{
            //             text: 'CHANGELOG',
            //             children: [
            //                 '/issue/CHANGELOG.md'
            //             ]
            //         },
            //         {
            //             text: '主题详细搭建教程',
            //             children: [
            //                 '/readme/introduce.md',
            //                 '/use/useTheme.md'
            //             ]
            //         },
            //         {
            //             text: '问题',
            //             children: [
            //                 '/issue/',
            //             ]
            //         },
            //         {
            //             text: 'bug',
            //             children: [
            //                 '/issue/bug.md',
            //             ]
            //         }
            //     ]
            // },
            // {
            //     text: '其他配置',
            //     iconClass: 'aurora-navbar-shoulijindu-xuanzhong',
            //     children: [{
            //             children: [
            //                 "/home/deploy.md",
            //             ],
            //             text: "home",
            //         },
            //         {
            //             children: [
            //                 "/comment/README.md",

            //                 "/page/README.md",
            //             ],
            //             text: "其他配置",
            //         },
            //         {
            //             children: [
            //                 "/v1.3.0/README.md",

            //             ],
            //             text: "V1.3.2",
            //         }
            //     ],
            // },
            {
                text: "关于",
                link: "/about",
                iconClass: 'aurora-navbar-a-ziyuan107'
            },
            {
                text: '友链',
                link: '/link',
                iconClass: 'aurora-navbar-guide'
            },
            {
                text: '标签',
                link: '/tag',
                iconClass: 'aurora-navbar-hua2'
            },
            // {
            //     text: 'chat',
            //     link: '/mood',
            //     iconClass: 'aurora-navbar-weather'
            // },
            // {
            //     text: "photo",
            //     link: '/photo',
            //     iconClass: 'aurora-navbar-kechengguanli'
            // },
            {
                text: "时间线",
                link: '/archive',
                iconClass: 'aurora-navbar-si-glyph-egg'
            },
            {
                text: 'Evan-WH',
                link: 'https://github.com/Evan-WH',
                iconClass: 'aurora-navbar-github-circle'
            }
        ],

        //禁用黑夜模式，当前版本未提供
        darkMode: false,

        //项目地址
        // repo: "https://github.com/qsyyke/vuepress-theme-aurora",

        // repoIconClass: 'aurora-navbar-github',

        //md文件的仓库地址
        // docsRepo: 'https://github.com/qsyyke/aurora-docs',

        /*
         * 站点是否是使用github Actions自动部署，如果你使用github Actions完成自动部署，那么这里一定要为TRUE，为TRUE，假如你把此项目push
         * 到https://github.com/qsyyke/aurora-docs这个仓库中，那么你需要将docsRepo设置为https://github.com/qsyyke/aurora-docs，
         * 那么在文章页面，会根据根据你docsRepo和docsBranch设置正确的edit链接，也就是可以一键打开GitHub仓库中，此篇md文件的编辑
         * */
        githubActions: false,

        //md文件存放的仓库分支
        docsBranch: 'main',

        //顶部导航栏，你repo地址的超链接文本
        repoLabel: "Aurora-theme",

        //是否启用文章在线编辑
        editLink: true,

        //在线编辑文字
        editLinkText: "edit",
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "字体",

        //首页中间hero图片地址，默认为https://ooszy.cco.vin/img/blog-public/avatar.jpg
        //heroImg: '/avatar.jpg',
        heroImg: 'https://s4.ax1x.com/2022/01/15/7JlkqK.png',

        //logo图片地址，默认为https://ooszy.cco.vin/img/ico/yuan.png
        logo: "https://s4.ax1x.com/2022/01/15/7JHV0J.png",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "https://ooszy.cco.vin/img/blog-public/ljz.gif",

        //这是首页文章列表懒加载图片
        homePageLazyLoadingImg: 'https://ooszy.cco.vin/img/blog-public/ljz.gif',

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响

        socials: [{
                aHref: "javascript:;",
                //imgSrc: /assets/img/ico/wechat.svg,
                showImgSrc: "https://s4.ax1x.com/2022/01/15/7J1b7T.jpg",
                isHome: true,
                show: true,
                symbol: '#icon-weixin',
                sidebar: true
            },

            {
                aHref: "https://github.com/Evan-WH",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-github'
            },
            // {
            //     aHref: "https://stackoverflow.com/",
            //     isHome: true,
            //     show: true,
            //     symbol: '#icon-stackoverflow',
            //     sidebar: true
            // },
            // {
            //     aHref: "https://space.bilibili.com/483962286",
            //     isHome: true,
            //     show: true,
            //     sidebar: true,
            //     symbol: '#icon-bilibili-1'
            // },
            // {
            //     aHref: "https://music.163.com/#/user/home?id=1411050784",
            //     isHome: true,
            //     show: true,
            //     symbol: '#icon-wangyiyunyinle',
            //     sidebar: true
            // },
            {
                aHref: "2637405542wh@gmail.com",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-youxiang'
            },
            {
                //社交链接
                aHref: "https://c.tb.cn/s5.f3nql",
                // imgSrc: "https://s4.ax1x.com/2022/01/15/7YZtEj.png", //  从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置

                //true为在首页显示，反之
                isHome: true,

                //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
                show: true,

                //是否在侧边栏显示
                sidebar: true,

                //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
                symbol: '#icon-xianyu',


                //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
                // showImgSrc: "https://ooszy.cco.vin/img/blog-public/wechat.jpg",
            },
        ],

        // cancelIcoHref: "https://ooszy.cco.vin/img/ico/quxiao.svg", 在v1.3.2中移除

        //logo旁文字 默认值为Aurora
        logoTitle: "千篇壹律",

        headTitle: "标题",

        //站点描述
        description: "BLOG",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "BLOG",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 300000,

        //随机一言接口
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",
        //关于页面
        about: [{
                bar: false,
                title: "关于我",
                describe: [
                    "大三在读",
                    "喜欢安静,不喜社交",
                    // "目前正在学习java后端",
                    "主题Aurora",
                    // "目前除了编程没有什么兴趣爱好",
                ],
                tag: [
                    "WEB",
                    "社恐",
                    "安静",
                    "音乐",
                ],
                showTag: true,
            },
            {
                bar: false,
                title: "2022规划",
                describe: [
                    "准备比赛",
                    "软考",
                    "英语四级",
                ],
                tag: ["大家加油呀`Σ(￣□￣||)` ..."],
                showTag: false,
            },
            {
                bar: false,
                title: "未来规划",
                describe: ["前端工程师"],
                tag: ["tag"],
                showTag: true,
            },
            {
                bar: true,
                title: "技  能",
                describe: [{
                        name: "java",
                        score: 70,
                    },
                    {
                        name: "HTML5",
                        score: 87,
                    },
                    {
                        name: "javascript",
                        score: 82,
                    },
                    {
                        name: "css",
                        score: 73,
                    },
                    {
                        name: "python",
                        score: 10,
                    },
                    {
                        name: "redis",
                        score: 59,
                    },
                    {
                        name: "mysql",
                        score: 82,
                    },
                    {
                        name: "vue",
                        score: 80,
                    },
                    {
                        name: "spring",
                        score: 40,
                    },
                    {
                        name: "springMVC",
                        score: 70,
                    },
                    {
                        name: "springBoot",
                        score: 71,
                    },
                ],
                showTag: false,
            },

            {
                showTag: false,
                bar: true,
                title: "掌握框架",
                describe: [{
                        name: "spring",
                        score: 60,
                    },
                    {
                        name: "springMVC",
                        score: 60,
                    },
                    {
                        name: "springBoot",
                        score: 70,
                    },
                    {
                        name: "mybatis",
                        score: 82,
                    },
                    {
                        name: "vue",
                        score: 80,
                    },
                ],
            },
            {
                bar: true,
                showTag: false,
                title: "掌握技能",
                describe: [{
                        name: "Git",
                        score: 78,
                    },
                    {
                        name: "Ctrl C+V",
                        score: 100,
                    },
                ],
            },

        ],

        //拿取对象 在后续版本中，会对此项进行优化
        randomSawQuery: "hitokoto",
        method: "get",

        //这是配置随机背景；颜色 可以不设置，有默认值
        randomColor: [
            "#ff868c", "#96e2bf", "#7385ae", "#83f2da", "#84c7d0", "#83b5e0", "#00b4d8",
            "#78aff8", "#fbc4ab", "#fdc5f5", "#84dcc6", "#a9def9", "#fc8937", "#f0a6ca",
            "#459dfa", "#42a5f5", "#ff9800", "#b39ddb", "#6d45bb", "#b388ff", "#1565c0",
            "#26c6da", "#5e548e", "#4889f1", "#5b5f97", "#4c7ae6", "#42bfdd", "#72ddf7",
            "#8093f1", "#3195d8", "#be9159", "#ef90b3", "#b892ef", "#ac9cdd", "#5ddddd",
            "#5cc95b", "#ad7fe2", "#9c99fa", "#62b6cb", "#5fa8d3", "#0fa3b1", "#92c8fa",
            "#5fa8d3", "#62b6cb", "#b892ff",
        ],

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],

        //友情链接数组
        friendLinks: [{
            title: '我的朋友',
            links: [{
                //网站标题
                title: "千篇壹律",

                //站点链接
                url: "http://www.iswuhao.cn",

                //站点logo
                logo: " /avatar.jpg",

                //站点描述
                describe: "人生若只是初见,何事秋风悲画扇",
                cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1'
            }, ]
        }, ],

        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部
        siteInformation: {
            //站点标题
            title: "千篇壹律",

            //自己站点链接
            url: "www.iswuhao.cn",

            //自己站点logo
            logo: "https://s4.ax1x.com/2022/01/15/7JlkqK.png",

            //自己站点描述
            describe: "Aurora",
            cover: 'https://s4.ax1x.com/2022/01/15/7JTdUI.png',

            //自己的头像
            contact: "email: 2637405542wh@gmail.com, qq:2637405542",
            otherDescribe: [
                '这是一个html的测试<a href="www.iswuhao.cn" target="_blank">这是一个a标签</a>'
            ]
        },

        //需要排除的标签，自动生成的标签中，不会有这个标签，这是一个数组
        //excludeTag: ["note"],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by Evan-WH.",
        ],

        //是否显示页脚，控制全局
        isShowFooter: false,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: false,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "1/14/2022 12:22:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //公告，是一个数组，支持图片，HTML
        message: [
            '测试v1.0发布 2022.01.14',

        ],

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "`╮(￣▽￣)╭`",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //首页中间框的话语
        mood: "一木一浮生",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: false,

        //默认的圆角，传入数字
        defaultBorderRadius: 10,

        //默认的透明度，传入0到1之间的小数，0表示全透明
        defaultOpacity: 1,

        //首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随
        isHomePageFollow: true,

        //默认模糊度
        defaultBlur: 1,

        //手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE
        //mobilePageSidebar: false,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //赞赏信息
        donate: {

            //赞赏页面，支付二维码，推荐放置两张图片链接
            donateImg: [
                "https://s4.ax1x.com/2022/01/15/7J1b7T.jpg",
                "https://s4.ax1x.com/2022/01/15/7J1b7T.jpg",
            ],

            //是否在文章页面显示赞赏 默认显示
            articlePage: true,

            //是否在关于页面显示 默认显示
            aboutPage: true,

            //显示在赞赏页面的信息
            donateProduct: [{
                    //名字
                    name: "Test",

                    //图片地址
                    img: "https://ooszy.cco.vin/img/blog-public/nc.jpeg",

                    //价格
                    price: 0.01,

                    //前缀
                    prefix: "￥",
                },
                // {
                //     name: "全味奶茶",
                //     img: "https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?",
                //     price: 11,
                //     prefix: "￥",
                // },
            ],

            //是否显示在线支付的订单信息，如果需要开启，请自己写支付接口，自己修改源码，默认关闭
            //onlineList: true, v1.11.2已被移除

            //用户赞赏列表数组
            donateList: [{
                name: "初尘",
                msg: "cool",
                img: "https://ooszy.cco.vin/img/blog-public/nc.jpeg",
                price: 0.01,
                prefix: "￥",
            }],
        },

        //评论配置 请自己查看文档配置 https://aurora.cco.vin/config/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: 'https://pinglun-fadj5l621-evan-wh.vercel.app/',
            emojis: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo'
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "描述",

            //作者
            author: "Evan-WH",

            //博客前缀
            preBlog: "千篇壹律",

            //海报博客名称后缀
            suffixBlog: " 一木一浮生",

            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "/avatar.jpg",
        },

        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: false,

        //是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue
        showMoodEdit: false,

        //此项仅限我自己的增加说说请求配置，暂未提供注册服务，目前仅限自己使用，可能在以后完善之后，你们只需要简单配置下，就能使用了，期待
        addMood: {
            siteName: "localhost:8080",
            appId: "q4LlYVTTk2r39sNrJr7BL9A6p",
            appKey: "VxezWTppppyX2LTx4TUK8w6e2",
        },

        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: true,

            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                // "https://picoss.cco.vin/animate/wall/555260.png",
                // 'https://picoss.cco.vin/animate/wall/404901.png',
                // 'https://picoss.cco.vin/animate/wall/734386.png'
            ],
            //友情链接页面
            friend: [
                "https://picoss.cco.vin/animate/wall/669.png",
                // 'https://picoss.cco.vin/animate/wall/5332.png'
            ],
            //标签页面
            tag: [
                "https://picoss.cco.vin/animate/wall/669.png"
            ],
            //心情页面
            mood: [
                "https://picoss.cco.vin/animate/wall/669.png"
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            // 'https://ooszy.cco.vin/img/blog-note/illust_74502138_20211008_183343.png',
            "https://picoss.cco.vin/animate/wall/404901.png",
            // "https://picoss.cco.vin/animate/wall/734386.png",
            // "https://picoss.cco.vin/animate/wall/5332.png",
            // "https://picoss.cco.vin/animate/wall/6202.png", //使用网络上的图片
            '/bg/1.jpg', //使用本地图片
            '/bg/3.jpg',
        ],
        /* homeWps: [
             '/bg/1.jpg',
             '/bg/2.jpg',
             '/bg/3.jpg',
             '/bg/4.jpg',
             '/bg/5.jpg',
         ],*/

        //手机端首页背景图片
        /*homeWpsMobile: [
            "https://ooszy.cco.vin/img/blog-note/881770.jpg",
            "https://ooszy.cco.vin/img/blog-note/109136.jpg",
            "https://ooszy.cco.vin/img/blog-note/929842.jpg",
        ],*/
        homeWpsMobile: [
            '/bg/1.jpg',
            '/bg/3.jpg',
        ],

        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 4,

        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/Evan-WH",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: false,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 3,

        //首页文章列表封面图api接口
        homePageImgApi: "https://api.ixiaowai.cn/gqapi/gqapi.php",

        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "千篇壹律",

        //侧边栏标签处显示还是分类还是标签，只有两个值，默认为分类，如果为categories，那么就显示为类别，否则显示为标签
        sidebarTag: "categories",

        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: false,

        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: 'https://picture.cco.vin/pic/rmimg?type=bing',

        /*
         * 以下为v1.5.4新增功能
         * */

        //文章h2标签的icon
        articleH2Icon: '🍥',

        //文章h3标签的icon
        articleH3Icon: '🍖',

        //文章h4标签及h4标签之后的标签的icon
        articleH4Icon: '🍄',

        //v1.6.4新增配置
        sidebarAvatar: 'https://s4.ax1x.com/2022/01/15/7JlkqK.png',

        //1.7.1增加配置
        sugCountPerMin: 300,

        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: false,

        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: false,

        //这个global暂时没用
        global: {
            sidebar: {
                showStatus: true,
                perData: false,
                social: false,
                friendLink: true,
                navbar: false,
                latestPage: true,
                message: false,
                tag: true,
                siteData: false
            },
            footer: false,
        },

        //excludeTag: ["note"], 此配置项，不再需要使用

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ['/footer.html', '/v1.3.0/', '/plugin/', "/node.html", "/style.html"],

        //类别项是否包含文件夹名，默认包含
        categoriesIncludeFolderName: false,
        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.4,

            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255'
        },

        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: '1P0mOx3mLrgpx12Dh1KJq3xt-MdYXbMMI',
            appKey: 'j776RXi9GcC675DBCdGpwsiA',
            masterKey: 'kiwcADbMFQB2MI1wzFWdHsDy',
        },

        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: false,

        /*
         * 以下是1.11.0版本新增的配置项
         * */

        //随机一眼接口，请注意，一定要保证该接口直接返回Text文本，一定要保证该接口直接返回Text文本，而不是返回json
        randomSayApi: {
            method: 'GET',
            urlApi: 'https://v1.hitokoto.cn/?encode=text&c=a'
        },

        /*
         * 一下是v1.11.1版本增加的配置
         * */
        afDianUrl: 'https://afdian.net/@2637405542wh', //你的爱发电个人页面地址

        /*
         * 下面这些是v1.12.0版本新增的配置项
         * */

        // 首页置顶文字
        homeTopText: '置顶',

        //侧边栏一句话描述
        sidebarDesc: '一木一浮生',
        /*
         * 下面的是v1.13.0版本的配置
         * */

        /*
         * 如果你以前使用的是其他的主题或者工具，比如hexo的主题，reco主题等等，发现frontmatter中的标签并不是使用tag字段设置，而是使用比如tags进行设置的
         * 那么你可以像customTagName: 'tags'自定义标签的字段，此配置仅仅针对于md文件设置的标签并不是使用tag字段，请注意，谨慎使用
         * */
        //customTagName: 'tags',

        /*
         * 如果你以前使用的是其他的主题，比如hexo，reco等等，发现frontmatter中的类别并不是使用categories字段，而是使用比如category进行设置的
         * 那么你可以像customCategoriesName: "category"这样自定义类别的字段，此配置仅仅针对于md文件设置的类别并不是使用categories字段，请注意，谨慎使用
         * */
        //customCategoriesName: "category"
    }
};