import React from 'react';
import NewsContainer from '../news_container'
import './index.less'
export default class NewsIndex extends React.Component{
    render(){
        return <div className="container">
            {/*<NewsHeader/>*/}
            <NewsContainer/>
            {/*<NewsFooter/>*/}
        </div>
    }
}