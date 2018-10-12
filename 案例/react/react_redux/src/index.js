import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux';
// import counter from './components/redux/reducer/reducer';
import Counter from './components/counter/counter';
import store from './components/redux/store/store';

const mapStateToProps = state =>{
	return {
		value : state
	}
}
const mapDispatchProps	= state =>{
	return	{
		onAdd: () => {
			store.dispatch({
				type:'INCREMENT'
			});
		},
		onDec:()=>{
			store.dispatch	({
				type:'DECREMENT'
			});
		}
	}
}
const App = connect(mapStateToProps ,mapDispatchProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root'));
