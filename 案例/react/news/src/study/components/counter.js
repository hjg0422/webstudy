import React from 'react';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    incrementIFOdd = ()=>{
        if(this.props.value % 2 !==0 ){
            this.props.onIncrement()
        }
    }
    incrementAsync = ()=>{
        setTimeout(this.props.omIncrement,1000)
    }
    render(){
        const {value,onIncrement,onDecrement}= this.props;
        return <div className="counter">
            <h2>Clicked:{value} times</h2>
            <button onClick={onIncrement}>+</button>
            {"  "}
            <button onClick={onDecrement}>-</button>
            {"  "}
            <button onClick={this.incrementIFOdd}> odd : +1</button>
            {"  "}
            <button onClick={this.incrementAsync}> auto add 1 fater 1s</button>
        </div>
    }
}