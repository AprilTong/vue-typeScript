## 项目介绍

-   本项目基于 webpack4+vue++typeScript+element+axios

## 开发

```
# 克隆项目
git clone https://github.com/Tzrong/vue-typeScript.git

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

## 项目规范

-   代码代码风格详见.prettierrc 文件
-   eslint 校验代码质量

## 文件介绍

-   build webpack 相关配置
-   src 主开发目录

1. api 请求的接口文件
2. assets 图片等以及公共的 css 样式文件
3. components 封装的一些公共组件
4. pages 页面
5. router vue-router 路由管理
6. store vuex 状态管理
7. utils 常用的工具方法封装

-   static 放置一些变化不大的 json 文件，一般不会修改
