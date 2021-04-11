module.exports = {
  "title": "dd-code-site",
  "description": "",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "nav": [
      {
        "text": "首页💡",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线⏱",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "课程📚",
        "icon": "reco-message",
        "items": [
          {
            "text": "22讲通关Go语言",
            "link": "/docs/twenty-two-speaking-go-language/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/twenty-two-speaking-go-language/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类🤡"
      },
      "tag": {
        "location": 3,
        "text": "标签🏷"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "https://cdn.dd-code.site/PicGo/WechatIMG4.jpeg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "柳旦旦",
    "authorAvatar": "https://cdn.dd-code.site/PicGo/WechatIMG4.jpeg",
    "record": "宁ICP备2021001341号-1",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}