import React from 'react';
import {Row,Col,BackTop} from 'antd';
import MobileHeader from '../mobile_header';
import MobileFooter from '../mobile_footer';
import Comments from '../common_comments';
export default class MobileDetail extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        }
    }
    componentDidMount(){
        var myFetchOptions = {
            method:"GET"
        };
        console.log(this.props.match.params);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.match.params.uniquekey,myFetchOptions)
            .then(response=>response.json()).then(json=>{this.setState({
            newsItem:json
        })
            //设置浏览器标题
            document.title = this.state.newsItem.title + " - React News | react study"
            })
    }
    createMarkup(){
        return { __html:this.state.newsItem.pagecontent};
    }
    render(){

        return <div className="detail_article">
            <MobileHeader/>
            <Row>
                <Col span={24}>
                    <div className="article_container" dangerouslySetInnerHTML={this.createMarkup()}>
                    </div>
                </Col>
                <Comments uniquekey = {this.props.match.params.uniquekey}/>
            </Row>
            <MobileFooter/>
            <BackTop/>
        </div>
    }
}