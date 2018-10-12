import React from 'react';
import MobileHeader from '../mobile_header'
import MobileFooter from '../mobile_footer'
import {Carousel, Tabs,BackTop} from 'antd'
import MobileList from '../mobile_list'
import './index.less'
const {TabPane} = Tabs;
export default class NewsIndex extends React.Component{
    render(){
        return <div className="container">
            <MobileHeader/>
            <Tabs defaultActiveKey={'1'}>
                <TabPane key={'1'} tab={'头条'}>
                    <div className="left_carousel">
                        <Carousel autoplay>
                            <div><img src="http://img3.imgtn.bdimg.com/it/u=1341561014,3701678747&fm=27&gp=0.jpg" alt=""/></div>
                            <div><img src="http://1255995999.vod2.myqcloud.com/d3ffb89evodgzp1255995999/2ed5c82c7447398155123539470/7447398155123539471.jpeg" alt=""/></div>
                            <div><img src="http://gifyu.com/images/HorizonZeroDawn_20170306223851.jpg" alt=""/></div>
                            <div><img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/16/c1/24549453_1376646283287.jpg" alt=""/></div>
                        </Carousel>
                    </div>
                    <MobileList type={"top"} count={10}/>
                </TabPane>
                <TabPane key={'2'} tab={'社会'}>
                    <div className="left_carousel">
                        <Carousel autoplay>
                            <div><img src="http://img3.imgtn.bdimg.com/it/u=1341561014,3701678747&fm=27&gp=0.jpg" alt=""/></div>
                            <div><img src="http://1255995999.vod2.myqcloud.com/d3ffb89evodgzp1255995999/2ed5c82c7447398155123539470/7447398155123539471.jpeg" alt=""/></div>
                            <div><img src="http://gifyu.com/images/HorizonZeroDawn_20170306223851.jpg" alt=""/></div>
                            <div><img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/16/c1/24549453_1376646283287.jpg" alt=""/></div>
                        </Carousel>
                    </div>
                    <MobileList type={"shehui"} count={10}/>
                </TabPane>
                <TabPane key={'3'} tab={'娱乐'}>
                    <div className="left_carousel">
                        <Carousel autoplay>
                            <div><img src="http://img3.imgtn.bdimg.com/it/u=1341561014,3701678747&fm=27&gp=0.jpg" alt=""/></div>
                            <div><img src="http://1255995999.vod2.myqcloud.com/d3ffb89evodgzp1255995999/2ed5c82c7447398155123539470/7447398155123539471.jpeg" alt=""/></div>
                            <div><img src="http://gifyu.com/images/HorizonZeroDawn_20170306223851.jpg" alt=""/></div>
                            <div><img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/16/c1/24549453_1376646283287.jpg" alt=""/></div>
                        </Carousel>
                    </div>
                    <MobileList type={"yule"} count={10}/>
                </TabPane>
                <TabPane key={'4'} tab={'国际'}>
                    <div className="left_carousel">
                        <Carousel autoplay>
                            <div><img src="http://img3.imgtn.bdimg.com/it/u=1341561014,3701678747&fm=27&gp=0.jpg" alt=""/></div>
                            <div><img src="http://1255995999.vod2.myqcloud.com/d3ffb89evodgzp1255995999/2ed5c82c7447398155123539470/7447398155123539471.jpeg" alt=""/></div>
                            <div><img src="http://gifyu.com/images/HorizonZeroDawn_20170306223851.jpg" alt=""/></div>
                            <div><img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/16/c1/24549453_1376646283287.jpg" alt=""/></div>
                        </Carousel>
                    </div>
                    <MobileList type={"guoji"} count={10}/>
                </TabPane>
                <TabPane key={'5'} tab={'明星'}>
                    123
                </TabPane>
                <TabPane key={'6'} tab={'政治'}>
                    123
                </TabPane>
                <TabPane key={'7'} tab={'科技'}>
                    123
                </TabPane>
                <TabPane key={'8'} tab={'美女'}>
                    <div className="left_carousel">
                        <Carousel autoplay>
                            <div><img src="http://img3.imgtn.bdimg.com/it/u=1341561014,3701678747&fm=27&gp=0.jpg" alt=""/></div>
                            <div><img src="http://1255995999.vod2.myqcloud.com/d3ffb89evodgzp1255995999/2ed5c82c7447398155123539470/7447398155123539471.jpeg" alt=""/></div>
                            <div><img src="http://gifyu.com/images/HorizonZeroDawn_20170306223851.jpg" alt=""/></div>
                            <div><img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/16/c1/24549453_1376646283287.jpg" alt=""/></div>
                        </Carousel>
                    </div>
                    <MobileList type={"meinv"} count={10}/>
                </TabPane>
            </Tabs>
            <BackTop/>
            <MobileFooter/>
        </div>
    }
}