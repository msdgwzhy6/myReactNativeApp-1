import AV from 'leancloud-storage/live-query'

export default class Article extends AV.Object {
  constructor() {
    // 调用 父类构造函数，并注册
    super()
    AV.Object.register(Article)
  }

  // 保存文章
  static async saveArticle(jsonParams, id) {
    let article = null
    if (id) {
      article = AV.Object.createWithoutData('Article', id)
    } else {
      article = new AV.Object('Article')
    }
    try {
      const savedObj = await article.save(jsonParams)
      return savedObj
    } catch (err) {
      return err
    }
  }

  static async getArticles() {
    const query = new AV.Query('Article')
    try {
      const result = await query.find()
      const data = []
      result.forEach((item) => {
        data.push(item.toJSON())
      })
      return data
    } catch (err) {
      return err
    }
  }
}
