/*
 * @Description: Config.js
 * @Author: cy2020
 * @Date: 2022-03-16 14:13:32
 * @LastEditTime: 2022-03-17 10:09:57
 */
module.exports = {
  title: '飞扬的博客',
  description: '专注于 JavaScript、Node.js、可视化 的前端开发',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    logo: '',
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
          text: "随笔小记",
          link: "/say/"
        },
        {
          text: "关于飞扬",
          link: "/about/"
        },
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
          title: '知识图谱',
          path: '/frontend/'
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
                },
                'vue/vue2/a',
                'vue/vue2/b',
                'vue/vue2/c'
              ]
            },
            // {
            //   title: 'Vue3',
            //   children: [
            //     {
            //       path: 'vue/vue3/',
            //       title: '前言'
            //     },
            //     'vue/vue3/a1',
            //     'vue/vue3/b1',
            //     'vue/vue3/c1'
            //   ]
            // },
            // {
            //   title: 'Plus',
            //   children: [
            //     {
            //       path: 'vue/plus/',
            //       title: '前言'
            //     },
            //     'vue/plus/a1',
            //     'vue/plus/b1',
            //     'vue/plus/c1'
            //   ]
            // },
            // {
            //   title: 'Strong',
            //   children: [
            //     {
            //       title: '前言',
            //       path: 'vue/strong/'
            //     },
            //     'vue/strong/a'
            //   ]
            // },
            {
              title: 'Vue3',
              children: [
                {
                  title: '前言',
                  path: 'vue/buff/'
                },
                'vue/buff/a'
              ]
            }
          ]
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
        }
      ]
    }
  }
}