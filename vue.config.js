const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // css样式独立抽取
  css: {
    extract: true
  },
  transpileDependencies: true,
  configureWebpack: {
    // 组件库编译官方默认配置
    output: {
      libraryExport: 'default'
    }
  }
});
