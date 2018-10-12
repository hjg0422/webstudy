import React from 'react';
import { Carousel ,Row , Col , Tabs} from 'antd';
import NewsBlock from '../news_block/news_block';
import NewsImageBlock from "../news_block/news_image_block"
const {TabPane} = Tabs;
export default class NewsContainer extends React.Component{

    render(){
        // const setting = {
        //     infinite:true,
        //     dots:true,
        //     slidesToShow:1,
        //     autoplay:true
        // }
        return <div>
            <Row>
                <Col span={2}/>
                <Col span={20} className="news_container">
                    <div className="left_container">
                        <div className="left_carousel">
                            <Carousel autoplay>
                                <div><img src="http://img3.imgtn.bdimg.com/it/u=1341561014,3701678747&fm=27&gp=0.jpg" alt=""/></div>
                                <div><img src="http://1255995999.vod2.myqcloud.com/d3ffb89evodgzp1255995999/2ed5c82c7447398155123539470/7447398155123539471.jpeg" alt=""/></div>
                                <div><img src="http://gifyu.com/images/HorizonZeroDawn_20170306223851.jpg" alt=""/></div>
                                <div><img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/16/c1/24549453_1376646283287.jpg" alt=""/></div>
                            </Carousel>
                        </div>
                        <NewsImageBlock count={6} type="guoji" width={"400px"} carTitle={"国际新闻"} imageWidth={"112px"}/>
                    </div>
                    <Tabs className="new_tab">
                        <TabPane tab={"头条"} key={1}>
                            <NewsBlock type="top" count="22"/>
                        </TabPane>
                        <TabPane tab={"娱乐"} key={2}>
                            <NewsBlock type="yule" count="22"/>
                        </TabPane>
                        <TabPane tab={"国际"} key={3}>
                            <NewsBlock type="guoji" count="22"/>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={2}/>
            </Row>
        </div>
    }
}