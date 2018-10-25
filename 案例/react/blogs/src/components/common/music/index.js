import React from 'react'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

export default class MinMusic extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){
        //请求数据 并封装 axios/fench
        //测试数据
        const musicInfo = [
            {
                name:"lihun-1",
                artist: 'artist1',
                url: './musics/test.mp3',
                cover: './coverImgs/cover-1.jpg'
            },
            {
                name:"lihun-2",
                artist: 'artist2',
                url: './musics/test.mp3',
                cover: './coverImgs/cover-2.jpg'
            },
            {
                name:"lihun-3",
                artist: 'artist3',
                url: './musics/test.mp3',
                cover: './coverImgs/cover-3.jpg'
            }
        ];
        //调用 aplayer
        const ap = new APlayer({
            container: document.getElementById('player'),
            fixed: true,
            mutex:true,
            autoplay:true,
            audio:musicInfo
        });
        ap.list.switch(this.props.switchMusic);

    }
    render() {
        console.log(this.props.switchMusic);
        return <div id="musicPlayer">
        </div>
    }
}