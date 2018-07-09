/**
 * aurora model：http://t.cn/RrTlGyt
 * dayjs：http://t.cn/R1eka6F
 * uuid：http://t.cn/RrTlafj
 */
import dayjs from 'dayjs'

export default class Model {
  static constructNormalMessage(jsonParams) {
    const message = {
      msgId: dayjs().valueOf().toString(),
      status: 'send_succeed',
      msgType: jsonParams.msgType,
      isOutgoing: true,
      fromUser: {
        userId: '', // 可以是leancloud objectId
        displayName: '杨俊宁', // 可以是leancloud username
        avatarPath: 'https://placeimg.com/200/200/any',
      },
      timeString: dayjs().format('HH:mm'),
      extras: jsonParams.extras, // 选填，可以在消息中添加附加字段
    }
    if (jsonParams.msgType == 'text') { // 文本消息
      message.text = jsonParams.text
    } else if (jsonParams.msgType == 'image') { // 图片消息
      message.mediaPath = jsonParams.mediaPath
    } else if (jsonParams.msgType == 'voice') { // 语音消息
      message.duration = jsonParams.duration // 注意这个值是由用户自己设置时长，单位秒
      message.mediaPath = jsonParams.mediaPath
    } else if (jsonParams.msgType == 'custom') { // 自定义消息
      message.contentSize = jsonParams.contentSize
      message.content = jsonParams.content
    } else if (jsonParams.msgType == 'event') { // 事件消息
      return {
        msgId: dayjs().valueOf().toString(),
        msgType: 'event',
        text: jsonParams.text,
        timeString: dayjs().format('HH:mm'),
      }
    }
    return message
  }
}
