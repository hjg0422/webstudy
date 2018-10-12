import React from 'react'
import {Row,Col} from 'antd'
import {Link} from "react-router-dom";
export default class MobileList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:''
        }
    }
    componentWillMount(){
        var myFetchOptons = {
            method:"GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptons)
            .then(responsive=>responsive.json()).then(json=>this.setState({news:json}));
    }
    render(){
        const {news}=this.state;
        const newList = news.length ?
            news.map((newItem,index)=>
                <section key={index} className={"clearfix"}>
                    <Link to={`details/${newItem.uniquekey}`} target="_blank" className="Link_a clearfix">
                        <div className="list_image">
                            <img src={newItem.thumbnail_pic_s} alt=""/>
                        </div>
                        <div className="list_info">
                            <h4>{newItem.title}</h4>
                            <div className="tag_date">
                                <span className="list_tag">{newItem.type}</span>
                                <span className="list_date">{newItem.date}</span>
                            </div>
                        </div>
                    </Link>
                </section>)
            :
            "获取不到充分的资源"
        return <div>
            <Row>
                <Col span={24}>
                    {newList}
                </Col>
            </Row>
        </div>
    }
}