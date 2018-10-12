import React from 'react';
import { Row,Col } from 'antd';
export default class NewsFooter extends React.Component{
    render(){
       return(
           <footer>
               <Row>
                   <Col span={2}/>
                   <Col span={20}>
                       &copy;&nbsp;2018 MyNews.All Rights Reserved.
                   </Col>
                   <Col span={2}/>
               </Row>
            </footer>);
    }
}