import React from 'react';
import styles from './index.module.scss'

const Footer = (props)=><footer className={styles["blog-footer"]}>
    <p>BLOG-Jun</p>
    <hr />
    <section>
        <div>Copyright © Jun . All right reserved.</div>
        {/*<div>{props.statement}</div>*/}
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">contact me</a></li>
            <li><a href="/">guestBook</a></li>
            <li><a href="/">other</a></li>
        </ul>
    </section>
</footer>;
export default Footer;