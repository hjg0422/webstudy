import React from 'react'
import {Icon} from 'antd'
import styles from './index.module.scss'
//测试图片
import img from '../../common/music/coverImgs/cartoon-3.jpg'
export default class MusicCard extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        this.setState({
            // playerStatus: !this.state.playerStatus
        })
    }
    render(){
        // const IconTag = this.state.playerStatus ?<Icon type="pause"/>:<Icon type="play-circle"/>
        return <div className={styles["music-card"]} onClick={this.props.onclick(2)}>
            <img src={img} alt="" onClick={this.handleClick.bind(this)} />
            <ul>
                <li>{this.props.musicName}</li>
                <li>{this.props.singer}</li>
                <li>{this.props.sepial}</li>
                <li><em>简介:&nbsp;</em>{this.props.musicInfo}</li>
                {/*<li onClick={this.handleClick.bind(this)}>{IconTag}</li>*/}
            </ul>
        </div>
    }
}