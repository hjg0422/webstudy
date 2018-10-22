import React from 'react'
import styles from './index.module.scss';
import { Card ,Icon } from 'antd';
//测试图片
import cover from './coverImgs/cover-1.jpg'
export default class ContentBlock extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        //测试数据
        /*
        * hotblogs 数据
        * */
      const hotBlogs = {
        blog_1:{
            blogId:"1001",
            blogTitle:"不要怕！这只是演习1",
            blogTags:[1.2,3],
            blogAuthor:"Jun",
            BlogContent:"   这里是测试1，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
            cover:"./coverImgs/cover-1.jpg",
            watchNum:99,
            commentNum:12,
            likeNum:99
        },
          blog_2:{
              blogId:"1002",
              blogTitle:"不要怕！这只是演习2",
              blogTags:[1.2,3],
              blogAuthor:"Jun",
              BlogContent:"   这里是测试2，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
              cover:"./coverImgs/cover-2.jpg",
              watchNum:99,
              commentNum:11,
              likeNum:54
          },
          blog_3:{
              blogId:"1003",
              blogTitle:"不要怕！这只是演习3",
              blogTags:[1.2,3],
              blogAuthor:"Jun",
              BlogContent:"   这里是测试3，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
              cover:"./coverImgs/cover-3.jpg",
              watchNum:99,
              commentNum:12,
              likeNum:54
          }
      };
        /*
      * niceMusic
      * */

        const niceMusic = {
            music_1:{
                name:"lihun-1",
                artist: 'artist1',
                url: './musics/test.mp3',
                cover: './coverImgs/cover-1.jpg'
            },
            music_2:{
                name:"lihun-2",
                artist: 'artist2',
                url: './musics/test.mp3',
                cover: './coverImgs/cover-2.jpg'
            },
            music_3:{
                name:"lihun-3",
                artist: 'artist3',
                url: './musics/test.mp3',
                cover: './coverImgs/cover-3.jpg'
            }
        };
        return <div className={styles["content_block"]}>
            {/*欢迎语*/}
            <section>
               <span> HI !</span> Welcome to my <span>Blog!</span>
            </section>
            {/*热门博客*/}
                <ul className={styles["hot-blogs"]}>
                    <li>
                        <div>
                            <img src={cover} alt=""/>
                            <span>Jun</span>
                        </div>
                        <div>
                            <section>titlea啊发萨法沙发沙发沙发沙发沙发沙发沙发</section>
                            <div>
                                <article>
                                    conten阿大撒大撒大撒大撒大撒啊大苏打实打实tcoaaaa啊啊发发首发式发生法发啊沙发沙发沙发啊沙发沙发沙发啊沙发沙发沙发阿阿阿阿阿阿阿
                                </article>
                            </div>
                            <ul>
                                <li><Icon type={"eye"}/>12</li>
                                <li><Icon type={"message"}/>5</li>
                                <li><Icon type="like"/>12</li>
                            </ul>
                        </div>
                        {/*tags*/}
                        <ul>
                            <li>css</li>
                            <li>js</li>
                            <li>html</li>
                            <li>react</li>
                        </ul>
                        <section>2018/5/17</section>
                    </li>
                    <li>
                        <div>
                            <img src={cover} alt=""/>
                            <span>Jun</span>
                        </div>
                        <div>
                            <section>titlea啊发萨法沙发沙发沙发沙发沙发沙发沙发</section>
                            <div>
                                <article>
                                    conten阿大撒大撒大撒大撒大撒啊大苏打实打实tcoaaaa啊啊发发首发式发生法发啊沙发沙发沙发啊沙发沙发沙发啊沙发沙发沙发阿阿阿阿阿阿阿
                                </article>
                            </div>
                            <ul>
                                <li><Icon type={"eye"}/>12</li>
                                <li><Icon type={"message"}/>5</li>
                                <li><Icon type="like"/>12</li>
                            </ul>
                        </div>
                        {/*tags*/}
                        <ul>
                            <li>css</li>
                            <li>js</li>
                            <li>html</li>
                            <li>react</li>
                        </ul>
                        <section>2018/5/17</section>
                    </li>
                    <li>
                        <div>
                            <img src={cover} alt=""/>
                            <span>Jun</span>
                        </div>
                        <div>
                            <section>titlea啊发萨法沙发沙发沙发沙发沙发沙发沙发</section>
                            <div>
                                <article>
                                    conten阿大撒大撒大撒大撒大撒啊大苏打实打实tcoaaaa啊啊发发首发式发生法发啊沙发沙发沙发啊沙发沙发沙发啊沙发沙发沙发阿阿阿阿阿阿阿
                                </article>
                            </div>
                            <ul>
                                <li><Icon type={"eye"}/>12</li>
                                <li><Icon type={"message"}/>5</li>
                                <li><Icon type="like"/>12</li>
                            </ul>
                        </div>
                        {/*tags*/}
                        <ul>
                            <li>css</li>
                            <li>js</li>
                            <li>html</li>
                            <li>react</li>
                        </ul>
                        <section>2018/5/17</section>
                    </li>
                </ul>
            {/*nice music*/}
            <section>
                nicemusic
            </section>

        </div>
    }

}