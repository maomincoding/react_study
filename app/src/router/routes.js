import React from 'react'
import Loadable from 'react-loadable';

//通用的过场组件
const loadingComponent = () => {
    return (
        <div>loading</div>
    )
}
const routes = [
    {
        path: "/",
        component: Loadable({
            loader: () => import('../views/Home'),
            loading: loadingComponent
        }),
        title: "这是自定义的标题"
    }
]
export default routes
