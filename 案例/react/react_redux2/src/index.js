import React from 'react'
import ReactDom from 'react-dom'
import {store} from './components/redux/store'
import {Provider,connect} from 'react-redux'
import Card from './components/card'
// import PropTypes from 'prop-type'

const mapStateToProps = state =>{
    return{
        value : state
    }
}
const mapDispatchProps = state =>{
    return {
        addLike:()=>{
            console.log("add");
            store.dispatch({
                type:'ADD_LIKE'
            });
        },
        decLike:()=>{
            console.log("dec");
            store.dispatch({
                type:'DEC_LIKE'
            });
        },
        description:()=>{
            console.log("des");
            store.dispatch({
                type:'DESCRIPTION'
            })
        }
    }
}
const App = connect(mapStateToProps,mapDispatchProps)(Card);

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('root'));