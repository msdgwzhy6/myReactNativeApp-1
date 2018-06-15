## 注册

去官网注册就可以：https://www.faceplusplus.com.cn/

## 创建API Key

去控制台创建即可：https://console.faceplusplus.com.cn/app/apikey/list

## 全局存放 key、secret

新建 `Const.js` 用户存放全局常量，并在 ``.gitignore` 中忽略该文件

## API 请求标准

调用每个API需要根据需求传不同的参数，每个API参数的详细定义请查看 人脸识别 。

- 所有 API 的调用都要使用 POST 请求
- 用户可以以 Query String 的形式将参数写进请求体中
- 正常的 `Content-Type` 为 `application/x-www-form-urlencoded`
- 传图片文件参数时则需要在请求体中使用 `multipart/form-data` 格式来编码

## 资源

- [【Face++】使用JS实现人脸识别Demo](https://www.jianshu.com/p/2e187a91ec7e)
- [一款入门级的人脸、视频、文字检测以及识别的项目](https://github.com/vipstone/faceai)
