# MessageList

> 有任何请移步：http://t.cn/RrTQnOq

## MessageList 事件回调

| 事件                             | PropTypes.function | 解释                                       |
| -------------------------------- | ------------------ | ------------------------------------------ |
| onAvatarClick                    | `(message) => { }` | 点击头像触发                               |
| onMsgClick                       | `(message) => { }` | 点击消息气泡触发                           |
| onMsgLongClick                   | `(message) => { }` | 长按消息气泡触发                           |
| onStatusViewClick                | `(message) => { }` | 点击消息状态按钮触发                       |
| onPullToRefresh                  | `() => { }`        | 滚动 MessageList 到顶部时，下拉触发[1]     |
| onTouchMsgList                   | `() => { }`        | 点击消息列表触发                           |
| onBeginDragMessageList(iOS only) | `() => { }`        | 开始滑动消息列表的时候触发，用于调整布局。 |

## MessageList props

### MessageList 自定义样式

在 Android 中，如果你想要自定义消息气泡，你需要将一张[点九图](http://www.ui.cn/detail/290941.html)放在 **drawable** 文件夹下。 点九图介绍，sample 项目的 `drawable-xhdpi` 文件夹下有示例。 在 iOS 中，如果想自定义消息气泡，需要把消息气泡图片加入到工程中，然后再 `sendBubble.imageName` 指定图片名字。

### bubble

- **sendBubble**：【object】`{ imageName: string, padding: { left: number,top: number,right: number,bottom: number}`，设置发送方的气泡样式。
- **receiveBubble**：【object】`{ imageName: string, padding: { left: number,top: number,right: number,bottom: number}`，设置接收方的气泡样式。
- **sendBubbleTextColor**：【string】`sendBubbleTextColor="#000000"`，设置发送消息的文本颜色。
- **receiveBubbleTextColor**：【string】`receiveBubbleTextColor="#000000"`，设置接收消息的文本颜色。
- **sendBubbleTextSize**：【number】，设置发送消息的文本大小，单位点。
- **receiveBubbleTextSize**：【number】，设置接收消息的文本大小，单位点。
- **sendBubblePadding**：【object】`{ left: number, top: number, right: number, bottom: number }`，发送消息泡泡的内边距。
- **receiveBubblePadding**：【object】`{ left: number, top: number, right: number, bottom: number }`，接收消息泡泡的内边距。

### date

- **dateTextSize**：【number】，消息时间文字的尺寸大小，单位点。
- **dateTextColor**：【string】`dateTextColor="#000000"`，消息时间文字的颜色。
- **datePadding**：【object】`{ left: number, top: number, right: number, bottom: number}`，设置时间的内边距。
- **dateBackgroundColor**：【string】`dateBackgroundColor={"#cecece"}`，设置时间的背景颜色。
- **dateCornerRadius**：【number】`dateCornerRadius={5}`，设置时间的背景圆角大小。

### avatar

- **avatarSize**：【object】`{ width: number, height: number }`，这个对象有宽高两个属性。
- **avatarCornerRadius**：【number】`avatarCornerRadius = {6}`，设置头像圆角半径。

### displayName

- **isShowDisplayName**：【boolean】`isShowDisplayName={ture}`，是否显示昵称（包括接收方和发送方）。
- **isShowIncomingDisplayName**：【boolean】`isShowIncomingDisplayName={true}`，设置是否显示接收方昵称。
- **isShowOutgoingDisplayName**：【boolean】`isShowOutgoingDisplayName={false}`，设置是否显示发送方昵称。
- **displayNameTextSize**：【number】`displayNameTextSize={14}`，设置昵称文字大小。
- **displayNameTextColor**：【string】`displayNameTextColor={"#cecece"}`，设置昵称的文字颜色。
- **displayNamePadding**：【object】`{left: number, top: number, right: number, bottom: number}`，设置昵称内边距。

### others

- **messageListBackgroundColor**：【string】`messageListBackgroundColor={"#f3f3f3"}`，设置消息列表背景颜色。
- **maxBubbleWidth**：【number】`maxBubbleWidth={0.7}`，设置气泡的最大宽度。值为屏幕宽度的百分比。
- **messageTextLineHeight**：【number】，`messageTextLineHeight={5}`，设置文字消息的行间距。
- **isAllowPullToRefresh**：【boolean】，`isAllowPullToRefresh={ture}`，是否开启下拉刷新功能。

> - [1] Android 中，需要把该事件放到 AndroidPtrLayout 下，可以参考 sample/app/app.js

## Android ChatInput 实例方法

- **refreshComplete()**：完成下拉刷新需要手动触发
