module.exports = {
    dest: 'dd-code-site',
    theme: 'reco',
    title: "dd-code-site",
    description: '旦旦的code博客，记录学习，记录生活',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#2395f1'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#2395f1'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    themeConfig: {
        type: 'blog',
        huawei: false,
        nav: [
            {text: '首页', link: '/', icon: 'reco-home'},
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            {text: '关于', link: '/about/', icon: 'reco-account'},
            {text: 'GitHub', link: 'https://github.com/dd-code-site', icon: 'reco-github'}
        ],
        friendLink: [
            // {
            //     title: 'dd-code-site',
            //     desc: 'Enjoy when you can, and endure when you must.',
            //     email: '1064265199@qq.com',
            //     link: 'https://www.dd-code.site'
            // },
        ],
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        logo: 'http://phpmianshiwang-s2.test.upcdn.net/PicGo/WechatIMG4.jpeg',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 1,
        displayAllHeaders: false,
        sidebar: {
            '/note/': ''
        },
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'Dawson Liu',
        authorAvatar: 'http://phpmianshiwang-s2.test.upcdn.net/PicGo/WechatIMG4.jpeg',
        // 备案号
        record: '域名备案中...',
        recordLink: 'http://www.beian.miit.gov.cn/',
        cyberSecurityRecord: '域名备案中...',
        cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=',
        // 项目开始时间
        startYear: '2020',
        /**
         * valine 评论设置 (if you need valine comment )
         */
        valineConfig: {
            appId: 'Uq3wKLrtu72RGe3vCTYGEjfc-gzGzoHsz',// your appId
            appKey: 'mFJmjw4QjR5eWODRh1btODc8', // your appKey
            placeholder: '是时候展现真正的技术了',
            avatar: 'retro',
            serverUrl: 'https://uq3wklrt.lc-cn-n1-shared.com'
        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: []
}  