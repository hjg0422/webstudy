import React from 'react'
import styles from './index.module.scss';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import MusicCard from '../music-card'
import {switchAction} from '../../../redux/action'
//测试图片
import cover from './coverImgs/cover-1.jpg'
// import * as store from "react-redux";
export default class ContentBlock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            blogShowList:[],
            currentListNum:0,
            musicPlayerStatus:false
        }
    }
    //获取store
    static contextTypes = {
        store:PropTypes.object
    }
    componentWillMount(){
        //测试数据
        /*
        * hotblogs 数据
        *   实际 axios 请求数据 blogLists 拼接 再触发
        * */
        this.li_cards=[];
        const hotBlogs = {
            blog_1:{
                blogId:"1001",
                blogTitle:"不要怕！这只是演习1",
                blogTags:[1,2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试1，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-1.jpg",
                watchNum:99,
                commentNum:12,
                likeNum:99,
                blogTime:"2018/10/10"
            },
            blog_2:{
                blogId:"1002",
                blogTitle:"不要怕！这只是演习2",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试2，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-2.jpg",
                watchNum:99,
                commentNum:11,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_3:{
                blogId:"1003",
                blogTitle:"不要怕！这只是演习3",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试3，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:99,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_4:{
                blogId:"1004",
                blogTitle:"不要怕！这只是演习4",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试4，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:19,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_5:{
                blogId:"1005",
                blogTitle:"不要怕！这只是演习5",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试5，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:19,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_6:{
                blogId:"1006",
                blogTitle:"不要怕！这只是演习6",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试6，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:19,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_7:{
                blogId:"1007",
                blogTitle:"不要怕！这只是演习7",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试7，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:19,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_8:{
                blogId:"1008",
                blogTitle:"不要怕！这只是演习8",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试3，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:19,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            },
            blog_9:{
                blogId:"1009",
                blogTitle:"不要怕！这只是演习9",
                blogTags:[1.2,3],
                blogAuthor:"Jun",
                blogContent:"   这里是测试9，这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试这里是测试",
                cover:"./coverImgs/cover-3.jpg",
                watchNum:19,
                commentNum:12,
                likeNum:54,
                blogTime:"2018/10/10"
            }
        };
        const blogLists = Object.keys(hotBlogs).map(key=>{
            const blogTags = hotBlogs[key].blogTags.map((index,key)=><li key={`tags-${key}`}>{index}</li>)
            return  <li className={"blog-card"} key={key} ref={li=>this.li_cards.push(li)}>
                <div>
                    <img src={cover} alt="博文图片"/>
                    <span>{hotBlogs[key].blogAuthor}</span>
                </div>
                <div>
                    <section>{hotBlogs[key].blogTitle}</section>
                    <div>
                        <article>
                            {hotBlogs[key].blogContent}
                        </article>
                    </div>
                    <ul>
                        <li><Icon type={"eye"}/>{hotBlogs[key].watchNum}</li>
                        <li><Icon type={"message"}/>{hotBlogs[key].commentNum}</li>
                        <li><Icon type="like"/>{hotBlogs[key].likeNum}</li>
                    </ul>
                </div>
                {/*tags*/}
                <ul>
                    {blogTags}
                </ul>
                <section>{hotBlogs[key].blogTime}</section>
            </li>
        });
        const arr = [];
        for(let i = 0 ; i < blogLists.length ; i+=4){
            arr.push(blogLists.slice(i,i+4))
        }
        this.setState({
            blogShowList: arr
        })
    }
    componentDidMount(){

    }
    handleClickPre(){
        const {currentListNum,blogShowList} = this.state;
        const listLength = blogShowList.length;
        this.setState({
            currentListNum: currentListNum <= 0 ? listLength-1:currentListNum-1
        })
    }
    handleClickNext(){
        const {currentListNum,blogShowList} = this.state;
        const listLength = blogShowList.length;
        this.setState({
            currentListNum: currentListNum >= listLength-1 ?0:currentListNum+1
        })
    }
    handleSwitchMusic(index){
        this.context.store.dispatch(switchAction(1));
        console.log("click")
    }

    render(){
       /*
      * niceMusic
      * */
        // console.log(this.context.store,"context");
        const {store} = this.context;
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
        console.log(this.state.blogShowList,this.state.currentListNum)
        return <div className={styles["content_block"]}>
            {/*欢迎语*/}
            <section>
               <span> HI !</span> Welcome to my <span>Blog!</span>
            </section>
            {/*热门博客*/}
                <ul className={styles["hot-blogs"]}>
                    {this.state.blogShowList[`${this.state.currentListNum}`]}
                    <span onClick={this.handleClickPre.bind(this)}><Icon type="left" /></span>
                    <span onClick={this.handleClickNext.bind(this)}><Icon type={"right"}/></span>
                </ul>
            {/*nice music*/}
            <section className={styles["nice-music"]}>
                <div className={styles.music}>
                    <MusicCard key={"1"} onclick={this.handleSwitchMusic}  musicName="离婚" singer="李志" sepial="201IO现场版" musicInfo={"卡卡卡卡卡卡卡卡卡卡卡卡卡啊卡卡卡卡卡卡卡卡卡卡卡卡卡卡卡阿卡卡卡卡卡啊卡卡爱卡卡爱阿卡"}/>
                    <MusicCard key={"2"} musicName="离婚" singer="李志" sepial="201IO现场版" musicInfo={"卡卡卡卡卡卡卡卡卡卡卡卡卡啊卡卡卡卡卡卡卡卡卡卡卡卡卡卡卡阿卡卡卡卡卡啊卡卡爱卡卡爱阿卡"}/>
                    <MusicCard key={"3"} musicName="离婚" singer="李志" sepial="201IO现场版" musicInfo={"卡卡卡卡卡卡卡卡卡卡卡卡卡啊卡卡卡卡卡卡卡卡卡卡卡卡卡卡卡阿卡卡卡卡卡啊卡卡爱卡卡爱阿卡"}/>
                </div>
            </section>

        </div>
    }

};
