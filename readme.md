## 项目介绍

-   本项目基于 webpack4+vue++typeScript+element+axios

## 开发

```
# 克隆项目
svn checkout https://github.com/Tzrong/vue-typeScript.git

# 进入文件夹
cd vue-typeScript

# 安装依赖
npm install
没有dll 文件夹可以先执行 npm run dll // DllPlugin结合DllRefrencePlugin插件的运用，对将要产出的bundle文件进行拆解打包(第三方库和自己写的代码可以分开打包)，可以很彻底地加快webpack的打包速度，从而在开发过程中极大地缩减构建时间。

# 进入开发
npm run start

# 打包
npm run build
```
