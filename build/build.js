'use strict'
require('./route.js')()
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

let components = [];

const files = fs.readdirSync(config.build.assetsRoot)
files.forEach(function (item, index) {
    let stat = fs.lstatSync(config.build.assetsRoot + '/' + item)
    if (stat.isDirectory() === true) {
      components.push(item);
    }

})

console.log(path.join(config.build.assetsRoot, config.build.assetsSubDirectory))
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {

  if(components.length>=5){
    console.log(components)
    var m = components[0].slice(1);
    for(var i=1;i<components.length;i++){ //循环数组 判断整个数组的最小值
      if(m > components[i].slice(1)) m = components[i].slice(1);
    }
    console.log(m)
    rm(path.join(config.build.assetsRoot, 's' + m),err=>{})
  }
  console.log(components.length)
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
