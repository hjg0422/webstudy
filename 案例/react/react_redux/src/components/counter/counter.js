import React from 'react'
import Buttons from '../buttons/buttons'
let timer = null;
export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    //自增
    autoAdd(){
        clearInterval(timer)
        console.log(this)
        return timer = setInterval(this.props.onAdd,1000);
    }
    //自减
    autoDec(){
        clearInterval(timer)
       return timer = setInterval(this.props.onDec,1000)
    }
    render(){
        const {value,onAdd,onDec } = this.props
        return <div className="controll">
            <h1>{value?value:0}</h1><br/>
            <Buttons onClick = {onAdd} content='+' />'   '
            <Buttons onClick = {onDec} content='-' />'   '
            <Buttons onClick = {this.autoAdd.bind(this)} content='++' />'   '
            <Buttons onClick = {this.autoDec.bind(this)} content='--' />
        </div>
    }
}