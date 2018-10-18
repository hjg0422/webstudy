import React from 'react';
import { render } from 'react-dom';
import App from './App'

const renderDom = Component => {
    render(
        <Component />,
        document.getElementById('app')
    );
}
renderDom(App);
if (module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        renderDom(App);
    })
}