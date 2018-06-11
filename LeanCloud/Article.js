import AV from 'leancloud-storage/live-query'

export default class Article extends AV.Object {
  constructor () {
    // 调用 父类构造函数，并注册
    super()
    AV.Object.register(Article)
  }

  // 保存文章
  static async saveArticle(jsonParams) {
    let obj = new AV.Object('Article')
    try {
      const savedObj = await obj.save(jsonParams)
      return savedObj
    } catch (err) {
      return err
    }
  }
}
