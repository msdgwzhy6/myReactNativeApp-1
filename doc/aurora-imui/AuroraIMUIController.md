# AuroaIMUIController

> 如有疑问，请移步 http://t.cn/RrTYhQ7

插入，更新，增加消息到 `MessageList`，你需要使用 `AuroraIMUIController（Native Module）` 来发送事件到 Native。

## appendMessages

> 参数：[{message}]

添加消息到 `MessageList` 底部，顺序为数组顺序。

**Example：**

```js
let messages = [{
	msgId: "1",
	status: "send_going",
	msgType: "text",
	text: "Hello world",
	isOutgoing: true,
	fromUser: {
		userId: "1",
		displayName: "Ken",
		avatarPath: "ironman"
	},
	timeString: "10:00"
}]
AuroraIMUIController.appendMessages(messages)
```

## updateMessage

> 参数：{message}

更新消息，可以使用该方法更新消息状态。

**Example：**

```js
var message = {
  msgId: "1",
  status: "send_going",
  msgType: "text",
  text: text,
  isOutgoing: true,
  fromUser: {
    userId: "1",
    displayName: "Ken",
    avatarPath: "ironman"
  },
  timeString: "10:00",
}
AuroraIMUIController.updateMessage(message)
```

## insertMessagesToTop

> 参数：[{message}]

将消息列表插入到聊天列表顶部。**被插入的消息列表必须按照时间顺序排序。**

**Example：**

```js
var messages = [{
	msgId: "1",
	status: "send_succeed",
	msgType: "text",
	text: "This",
	isOutgoing: true,
	fromUser: {
		userId: "1",
		displayName: "Ken",
		avatarPath: "ironman"
	},
	timeString: "10:00",
},{
	msgId: "2",
	status: "send_succeed",
	msgType: "text",
	text: "is",
	isOutgoing: true,
	fromUser: {
		userId: "1",
		displayName: "Ken",
		avatarPath: "ironman"
	},
	timeString: "10:10",
},{
	msgId: "3",
	status: "send_succeed",
	msgType: "text",
	text: "example",
	isOutgoing: true,
	fromUser: {
		userId: "1",
		displayName: "Ken",
		avatarPath: "ironman"
	},
	timeString: "10:20",
}];
AuroraIMUIController.insertMessagesToTop(messages);
```

## removeMessage

> 根据消息 id 删除消息

**Example：**

```js
AuroraIMUIController.removeMessage(msgId)
```

## removeAllMessage

> 清空所有消息

**Example：**

```js
AuroraIMUIController.removeAllMessage()
```

## hidenFeatureView

> 隐藏 inputView 的展开视图

```js
AuroraIMUIController.hidenFeatureView()
```

## stopPlayVoice

> 停止正在播放的音频，这里会停止所有的声音，包括 `ChatInput` 和 `MessageList` 正在播放的声音

**Example：**

```js
AuroraIMUIController.stopPlayVoice()
```

## MessageListDidLoadListener

### addMessageListDidLoadListener(cb)

`AuroraIMUIController` 初始化会先于 `MessageListView` 完成，如果需要调用对 `MessageListView` 的所有操作（添加消息，删除消息，更新消息）需要在 `MessageListDidLoad` 事件触发后才会起作用。

**Example：**

```js
AuroraIMUIController.addMessageListDidLoadListener(()=> {
  // do something ex: insert message to top
})
```

### removeMessageListDidLoadListener(cb)

取消对 `MessageListDidLoad` 事件的监听。

**Example：**

```js
AuroraIMUIController.removeMessageListDidLoadListener(cb)
```
