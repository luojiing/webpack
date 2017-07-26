import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        // document.getElementById('root')
        document.body.appendChild(document.createElement('div'))
    );
};

render(App);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    });
}