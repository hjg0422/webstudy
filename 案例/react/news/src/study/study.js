import React from 'react'
import './index.less'
import {createStore} from 'redux'
import Counter from './components/counter'
import reducers from './redux/reducers'

const store = createStore(reducers);
export default class MainBody extends React.Component{


}