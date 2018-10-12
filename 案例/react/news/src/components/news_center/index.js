import React from 'react'
import { Icon, Menu,Tabs,message,Form,Input,Button,Modal,Row,Col,Upload,Card} from 'antd'
const TabPane = Tabs.TabPane;
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

export default class NewsUserCenter extends React.Component{
    constructor(){
        super();
        this.state={
            previewImage:'',
            previewVisible:false,
            userCollections:'',
            userComments:''
        }
    }

    handleCancel(){
        this.setState({
            previewVisible:false
        })
    }
    componentDidMount() {
        var myFetchOptions = {
            method: "GET"
        }
        //获取用户收藏
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
            .then(response => {
                console.log(response);
                console.log("r");
                return response.json();
            })
            .then(json=>this.setState({userCollections:json}));
        //获取用户评论
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid="+localStorage.userid,myFetchOptions)
            .then(response=>response.json()).then(json=>this.setState({userComments:json}));
    }


    render(){
        //antd upload
        const fileList = [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }];
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture-card',//图片展示类型
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            defaultFileList: [...fileList],
            onPreview:(file)=>{
                console.log(file);
                console.log(this.state);
                this.setState({
                    previewImage:file.url,
                    previewVisible:true
                })
            }
        };
        //
        const {userCollections,userComments} = this.state;
        var collectionList = userCollections.length ? userCollections.map((item,index)=><Card key={index} title={item.uniquekey}  extra={<a target="_blank" href={`/details/${item.uniquekey}`}>查看</a>}>
            <p>{item.Title}</p>
        </Card>):"您暂未收藏新闻，快去收藏吧";
        var commentsList = userComments.length ?
            userComments.map((item,index)=>(
                <Card key={index} title={`于 ${item.datetime} 评论了文章 ${item.uniquekey}`} extra={<a target="_blank" href={`/details/${item.uniquekey}`}>查看1</a>}>
                    <p>{item.Comments}</p>
                </Card>
            ))
            :
            '您还没有发表过任何评论。';
        return <div className="user_center">
            <Row>
                <Col span={2}/>
                <Col span={20}>
                    <Tabs defaultActiveKey={'1'}>
                        <TabPane tab={"我的收藏列表"} key={'1'}>
                            {collectionList}
                        </TabPane>
                        <TabPane tab={"我的评论列表"} key={'2'} >
                            {commentsList}
                        </TabPane>
                        <TabPane tab={"我的头像"} key={'3'}>
                            <div className="clearfix">
                                <Upload {...props}>
                                    <Icon type={"plus"}/>
                                    <div className="ant-upload-text">
                                        上传照片
                                    </div>
                                </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                        <img src={this.state.previewImage} alt="预览"/>
                                    </Modal>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={2}/>
            </Row>

        </div>
    }
}