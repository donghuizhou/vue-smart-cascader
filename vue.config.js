const { defineConfig } = require('@vue/cli-service')

const currEnv = process.env.NODE_ENV

module.exports = defineConfig({
  configureWebpack: {
    entry: currEnv === 'development' ? './example/main.js' : './src/main.js'
  }
})
