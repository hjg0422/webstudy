import React from 'react'
import addC from 'classnames'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import { FaGoogle } from 'react-icons/fa'
import styles from './index.module.scss'
const navInfo = {
    home:{
        url:'/',
        icon:'home'
    },
    blog:{
        url:'/blog',
        icon:'read'
    },
    music:{
        url:'/music',
        icon:'customer-service'
    },
    guestBook:{
        url:'/guestBook',
        icon:'book'
    },
    resume:{
        url:'/resume',
        icon:"coffee"
    },
    search:{
        url:'/search',
        icon:"search"
    }
};
export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    const navBar = Object.keys(navInfo).map(key=>{
        console.log(`header-${navInfo[key].icon}`);
        return  <li key={key} className={styles[`header-${key}`]}><Link  to={navInfo[key].url}><Icon className={addC(styles["header-icon"],styles[`icon-${navInfo[key].icon}`])}  type={navInfo[key].icon}/> {key}</Link></li>
        }

    );
        return <header className={styles["blog-header"]}>
            <a href="/" ><FaGoogle /><span>BLOG-Jun</span></a>
            <nav>
                <ul>
                    {navBar}
                </ul>
            </nav>
        </header>
    }
}