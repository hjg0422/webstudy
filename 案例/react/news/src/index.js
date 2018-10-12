import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import NewsIndex from './components/news_index';
import MobileIndex from "./components/mobile_index";
//引用媒体查询模块
import MediaQuery from 'react-responsive';
import registerServiceWorker from './registerServiceWorker';
import NewsDetail from "./components/news_detail";
import NewsFooter from "./components/news_footer";
import NewsHeader from './components/news_header';
import MobileDetail from './components/mobile_detail'
import NewsUserCenter from "./components/news_center";
import MainBody from "./study/study";

ReactDOM.render(
    <div>
        <MediaQuery query="(min-device-width:1224px)">
            <BrowserRouter>
                <div>
                    <NewsHeader/>
                    <Route path="/" exact component={NewsIndex}/>
                    <Route path="/details/:uniquekey"component={NewsDetail}/>
                    <Route path="/usercenter" component={NewsUserCenter}/>
                    <Route path="/test" component={MainBody}/>
                        <NewsFooter/>
                </div>
            </BrowserRouter>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={MobileIndex}/>
                    <Route path="/details/:uniquekey"component={MobileDetail}/>

                </div>
            </BrowserRouter>
        </MediaQuery>
    </div>

    , document.getElementById('root'));
registerServiceWorker();
