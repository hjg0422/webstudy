import Header from '../common/header'
import Footer from '../common/footer'
import Home from "../homepage";
import { BrowserRouter,Route } from 'react-router-dom';
import React from "react";

export default class MyComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props,"router");
        console.log(this.props.value.music);
        return  <BrowserRouter>
            <div>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" render={()=><div>blog</div>}/>
                <Route path="/music" render={()=><p>music</p>}/>
                <Route path="/guestBook" render={()=><p>guestBook</p>}/>
                <Route path="/resume" render={()=><p>resume</p>}/>
                <Route path="/search" render={()=><p>search</p>}/>
                <Footer statement={"Copyright © Jun . All right reserved."} switchMusic={this.props.value.music.switchMusic} />
            </div>
        </BrowserRouter>
    }
}