import React from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'
export default class NewsBlock extends React.Component{
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
            news.map((newItem,index)=><li key={index}>
                    <Link to={`details/${newItem.uniquekey}`} target="_blank">
                        {newItem.title}
                    </Link>
                {/*{newItem.title}*/}
            </li>)
            :
            "获取不到充分的资源"
        return <div className="topNewsList">
            <Card>
                <ul>
                    {newList}
                </ul>
            </Card>
        </div>
    }
}