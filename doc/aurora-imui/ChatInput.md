# ChatInput

> 有任何疑问，请移步 http://t.cn/Rd0PsGS

## ChatInput 事件回调

| 事件                     |             PropTypes.function              | 解释                                                         |
| ------------------------ | :-----------------------------------------: | ------------------------------------------------------------ |
| onSendText               |              `(result) => {}`               | 输入文字后点击发送按钮触发，result 参数为 `{text: string}`   |
| onSendGalleryFiles       |              `(result) => {}`               | 选中视频或图片后点击发送按钮触发，result 参数为 `{mediaFiles: [string]}`, 图片路径数组。 |
| onTakePicture            |              ` (result) => {}`              | 点击拍照按钮触发， result 参数为 `{mediaPath: string}`。     |
| onStartRecordVideo       |                 `() => {} `                 | 点击录制视频按钮触发。                                       |
| onFinishRecordVideo      |             ` (result) => {} `              | 完成录制视频触发，result 参数为 `{mediaPath: string, durationTime: number}`。 |
| onCancelRecordVideo      |                ` () => {} `                 | 取消录制视频触发。                                           |
| onStartRecordVoice       |                 `() => {} `                 | 点击录音按钮触发。                                           |
| onFinishRecordVoice      |             ` (result) => {} `              | 录音完成后松开手指触发，result 参数为 `{mediaPath: string, duration: number}`。 |
| onCancelRecordVoice      |                 `() => {}`                  | 手指移动到取消录音区域后，抬起手指触发。                     |
| onSwitchToMicrophoneMode |                 `() => {}`                  | 点击菜单栏麦克风按钮触发。                                   |
| onSwitchToGalleryMode    |                 `() => {}`                  | 点击菜单栏图片按钮触发。                                     |
| onSwitchToCameraMode     |                 `() => {}`                  | 点击菜单栏拍照按钮触发。                                     |
| onSwitchToEmojiMode      |                 `() => {}`                  | 点击菜单栏表情按钮触发。                                     |
| onSizeChange             | ` ({width: number, height: number}) => {} ` | 输入组件尺寸变更时触发。                                     |
| onClickSelectAlbum       |                 `() => {}`                  | 点击选择相册按钮触发(选择相册按钮默认是可见的，可以通过 [showSelectAlbumBtn](https://github.com/jpush/aurora-imui/blob/master/ReactNative/docs/APIs_zh.md#showSelectAlbumBtn) 改变 ) |
| onTouchEditText          |              （Android only）               | 点击输入框触发。                                             |

## props

### customLayoutItems（iOS Only）

> PropTypes.string

自定义 ChatInput 组件和布局。

Eample:

```js
// 可以在 ChatInput 的 left/right/bottom 放置各功能 item，(可以重复但不建议)
customLayoutItems={{
  left: ['voice'],
  right: ['send'],
  bottom: ['gallery','emoji','camera','camera']
}}
// 如果 left/right/bottom 没有提供则不会显示，直接隐藏。
customLayoutItems={{
  left: ['voice'],
  right: ['send']
}}
```

### other props

- **chatInputBackgroupColor**：【string】`chatInputBackgroupColor="#000000"`，设置输入组件背景颜色。
- **showSelectAlbumBtn(Android Only)**：【boolean】`showSelectAlbumBtn={true}`，设置选择相册按钮的可见性。
- **inputPadding**：【object】`{left: number, top: number, right: number, bottom: number}`，设置输入框内边距。
- **inputTextColor**：【string】`inputTextColor={"#808080"}`，设置输入框文字颜色。
- **inputTextSize**：【number】`inputTextSize={14}`，设置输入框文字大小。
- **inputTextLineHeight**：【number】，设置输入框行间距。
