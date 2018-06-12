## 跳转到新的页面

```js
// Details 必须是已经注册过的
this.props.navigation.navigate('Details')
```

> 如果我们使用未在 **stack navigator** 中定义的路由名称调用 `this.props.navigation.navigate` 方法，则不会发生任何事情。 换句话说，我们只能导航到已经在我们的 stack navigator 上定义的路由; 不能随便导航到任意组件。
