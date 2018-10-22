import React from 'react'
import styles from './index.module.scss'
import {  notification, Icon } from 'antd';
import MinMusic from '../../common/music';

//需传入 背景图信息以及对应的reducer
export default class ImgBlock extends React.Component{
    constructor(props)
    {
        super(props)
    }
    handleClickPre(){
        notification.open({
            message: 'Notification',
            description: '暂无更多背景图',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    };
    handleClickNext(){
        notification.open({
            message: 'Notification',
            description: '暂无更多背景图',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    }
    render(){
        return <div className={styles["img-block"]}>
            <section className={styles["bold-word"]}>
                <span>Hi Jun!</span>
            </section>
            <section>
                <div className="motto">live well, love lots, and laugh often</div>
                <ul className="options">
                    <li onClick={this.handleClickPre.bind(this)}><Icon type="left" theme="outlined" /></li>
                    <li><Icon type="github" theme="outlined" /></li>
                    <li><Icon type="wechat" theme="outlined" /></li>
                    <li><Icon type="qq" theme="outlined" /></li>
                    <li onClick={this.handleClickNext.bind(this)}><Icon type="right" theme="outlined" /></li>
                    <li><MinMusic /></li>
                </ul>
            </section>
        </div>
    }

}