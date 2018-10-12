import React from 'react'
import {Card} from 'antd'
import {Link} from "react-router-dom";
// import {Link} from 'react-router-dom'
export default class NewsImageBlock extends React.Component{
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
        const blockStyle = {
            display: "inline-block",

        }
        const styleImage = {
            display:"block",
            width:this.props.imageWidth,
            height:"90px"
        };
        const styleH3 = {
            width:this.props.imageWidth,
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        };
        const {news}=this.state;
        const newList = news.length ?
            news.map((newItem,index)=>{
                // console.log(newItem);
                return(<div className="imageBlock" key={index} style={blockStyle}>
                    <Link to={`details/${newItem.uniquekey}`} target="_blank">
                        <div className={"custom-image"}>
                            <img src={newItem.thumbnail_pic_s} alt="" style={styleImage}/>
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}>{newItem.title}</h3>
                            <p>{newItem.author_name}</p>
                        </div>
                    </Link>
                </div>)
            })
            :
            "获取不到资源"
        return <div className="topNewsList">
            <Card title={this.props.carTitle} bordered={true} style={{width:this.props.Width}}>
                {newList}
            </Card>
        </div>
    }
}