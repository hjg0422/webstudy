import React from 'react'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

export default class MinMusic extends React.Component{

    render() {
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
        //请求数据 并封装 axios/fench
        const ap = new APlayer({
            container: document.getElementById('player'),
            fixed: true,
            audio:musicInfo
        });
        return <div id="musicPlayer">
            {/*<audio src="./musics/test.mp3" controls="controls">*/}
               {/*Your browser can't support the tag;*/}
            {/*</audio>*/}
        </div>
    }
}