# issue

在使用路由的时候一直报错，错误如下：
> Uncaught Error: Invariant Violation: Element type is invalid: expected a string .

原因：
`react-router` 最新版v4做了修改。原本顶层路由是这样的`<Router history={hashHistory}/>` ，而现在只需要写`<HashRouter>`. 所有组件从`react-router-dom`导出.

```js
import {HashRouter,Route} from 'react-router-dom';

<HashRouter>
    <Route path = "/getapp" component = {MainApp} />
</HashRouter>
```