module.exports = {
  base: '/',
  dest: './dist',
  title: '小两口',
  port: '8100',
  description: '启程',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于我们', link: 'http://www.jhacx.com' },
      {
        text: '我们的项目',
        items: [
          { text: 'thinkjs-vue-admin', link: 'http://admin.jhacx.com' },
        ]
      }
    ],
    sidebar: {
      '/blog/': [
        'git',
        'vue-amap',
        'js-function',
        'vuepress-theme',
        'vuepress',
        'vue-business-component',
        'stylus-converter',
        'json-server'
      ]
    }
  }
}
