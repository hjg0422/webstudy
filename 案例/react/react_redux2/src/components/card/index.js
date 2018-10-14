import React from 'react'
import { Icon } from 'antd'
import imgSrc from '../../imgs/card_child.jpg'
import './index.scss'
//函数式组件 名片头像
const ImgInfo = (props)=>{
    return <section className="imgInfo">
        <img src={imgSrc} alt="用户头像"/>
        <Icon type="sync" theme="outlined" className="icon-sync"/>
    </section>
};
//函数式组件 按钮
const Button = (props)=>{
    return <button onClick={props.onClick}>{props.content}</button>
};
// card_info
const CardInfo = props =>
    <section className="cardInfo">
    <p>{props.cardTime}</p>
    <section className="card_like"><span className="card_like_count"><Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /><i>{props.likeCount}</i></span></section>
    <p className="userName"><em>作者&nbsp;&nbsp;</em>{props.userName}</p>
    <p>{props.imgSignature}</p>
    <p><a href={props.gallery}>画廊/作品集</a></p>
    </section>;
//底部按钮组件
class BottomSection extends React.Component{
    constructor(props){
        super(props)
    }
    handleClickAddLike(){
        this.props.addLike();
    }
    handleClickDecLike(){
        this.props.decLike();
    }
    handleClickDescription(){
        this.props.description()
    }
    render(){
        return <section className="bottomButton">
            <span className="dislike" onClick={this.handleClickDecLike.bind(this)}><Icon type="frown" theme="twoTone" twoToneColor="#c6c6c6" /></span>
            <span className="description" onClick={this.handleClickDescription.bind(this)}><Icon type="message" theme="outlined" /></span>
            <span className="like" onClick={this.handleClickAddLike.bind(this)}><Icon type="smile" theme="twoTone" twoToneColor="#eb2f96"/></span>
        </section>
    }
}
export default class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        const {addLike,decLike,description} = this.props;
        return <div className="user_card">
            <ImgInfo userImg={this.props.value.userImg} />
            <CardInfo cardTime={this.props.value.cardTime} likeCount={this.props.value.likeCount} userName={this.props.value.userName} imgSignature={this.props.value.imgSignature} gallery={this.props.value.gallery}/>
            <BottomSection addLike={addLike} decLike={decLike} description={description} />
        </div>
    }
}