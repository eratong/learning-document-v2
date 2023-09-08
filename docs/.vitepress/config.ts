import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/backend' }   
    ],

    sidebar: [
      {
        text: '垃圾后端',
        items: [
          { text: 'java', link: '/backend/java' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'mysql', link: '/db/mysql' },
          { text: 'redis', link: '/db/redis' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
