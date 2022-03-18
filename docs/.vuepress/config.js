module.exports = {
  title: '飞扬的博客',
  base: '/blog-docs/',
  description: '专注于 JavaScript、Node.js、可视化方向的前端开发',
  head: [
    ['meta', { name: 'keywords', content: '飞扬的博客'}]
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  theme: 'reco',
  themeConfig: {
    logo: '',
    lastUpdated: '上次更新', // string | boolean
    nextLinks: false,
    prevLinks: false,
    nav: [
        {
          text: "前言概述",
          link: "/"
        },
        {
          text: "聊聊前端",
          link: "/frontend/"
        },
        {
          text: "Java开发",
          link: "/java/"
        },
        // {
        //   text: "随笔小记",
        //   link: "/say/"
        // },
        {
          text: "掘金",
          link: "https://juejin.cn/user/835284568380510"
        },
        {
          text: "Github",
          link: "https://github.com/chongyangwang"
        }
    ],
    sidebar: {
      '/frontend/': [
        {
          title: '学习大纲',
          path: '/frontend/PATH'
        },
        {
          title: '前端秘籍',
          path: '/frontend/'
        },
        {
          title: 'JavaScript',
          children: [
            {
              title: '前言',
              path: 'javascript/'
            },
            'javascript/原型链'
          ]
        },
        {
          title: 'Vue系列',
          children: [
            {
              title: '前言',
              path: 'vue/'
            },
            {
              title: 'Vue2',
              children: [
                {
                  path: 'vue/vue2/',
                  title: '前言'
                }
              ]
            },
            {
              title: 'Vue3',
              children: [
                {
                  title: '前言',
                  path: 'vue/buff/'
                }
              ]
            }
          ]
        }
      ],
      '/java/': [
        {
          title: '学习路线',
          path: '/java/'
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}