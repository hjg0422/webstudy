import React from 'react';
import {Row,Col} from 'antd';
import NewsImageBlock from "../news_block/news_image_block"
import Comments from '../common_comments'
export default class NewsDetail extends React.Component{
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
            <Row>
                <Col span={2}/>
                <Col span={14} >
                    <div className="article_container" dangerouslySetInnerHTML={this.createMarkup()}>
                    </div>
                    <Comments uniquekey = {this.props.match.params.uniquekey}/>
                </Col>
                <Col span={1}/>
                <Col span={7}>
                    <NewsImageBlock count={40} type="yule"  carTitle={"其他热点"} imageWidth={"80px"}/>
                </Col>
            </Row>
        </div>
    }
}