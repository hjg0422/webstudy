import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './components/common/header'
import Footer from './components/common/footer'
import * as serviceWorker from './serviceWorker';
import Home from "./components/homepage";
import "antd/dist/antd.css";

ReactDOM.render(<BrowserRouter>
        <div>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/blog" render={()=><div>blog</div>}/>
            <Route path="/music" render={()=><p>music</p>}/>
            <Route path="/guestBook" render={()=><p>guestBook</p>}/>
            <Route path="/resume" render={()=><p>resume</p>}/>
            <Route path="/search" render={()=><p>search</p>}/>
            <Footer statement={"Copyright © Jun . All right reserved."} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
