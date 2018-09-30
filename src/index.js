import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import thunk from 'redux-thunk'
import { counter } from './index.redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <h2>测试组件 {this.props.match.params.location}</h2>
    }
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>

            <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    {/* 只渲染命中的第一个Route */}
                    <Route path='/' exact component={App}></Route>
                    <Route path='/erying' component={Erying}></Route>
                    <Route path='/qibinglian' component={Qibinglian}></Route>
                    <Route path='/:location' component={Test}></Route>
                    {/* <Redirect to='/qibinglian'></Redirect> */}
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)