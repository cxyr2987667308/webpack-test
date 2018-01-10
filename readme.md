### 全局安装webpack
npm install -g webpack --save-dev

### 编译文件
webpack hello.js hello.bundle.js

### 安装css loader  
npm i css-loader style-loader --save-dev

### webpack 命令行指定loader
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'

### 文件样式自动改变
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch

### webpack 命令
--progress --display-modules --display-reasons --watch
