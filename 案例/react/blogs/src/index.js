import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import * as serviceWorker from './serviceWorker';
import {switchAction} from './redux/action'
import {store} from './redux/store'
import "antd/dist/antd.css";
import { Provider ,connect} from 'react-redux'
import MyComponent from "./components/router";
const mapStateToProps  = state =>{ return{
    value:state
}};
const mapDispatchProps = state => {
    return {
        switchM:(index)=>{
            const action = switchAction(index);
            store.dispatch(action)
        },
    }
};
const App = connect(mapStateToProps,mapDispatchProps)(MyComponent);
ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
