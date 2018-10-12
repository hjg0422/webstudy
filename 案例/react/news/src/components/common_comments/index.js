import React from 'react'
import { Icon,Tabs,message,Form,Input,Button,Card,Row,Col,notification} from 'antd'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // //控制评论模块开启与关闭
            // commentMoudle:true,
            comments:''
        }

    }
    //获取评论
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        });
        console.log(this.state);
    };
    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
            message.success("评论成功");
            this.componentDidMount();//重新加载评论
        })
    };
    addUserCollection() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            //收藏成功以后进行一下全局的提醒
            notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
        });
    };
    render(){
        let {getFieldProps} = this.props.form;
        const {comments} = this.state;
        const commentsList = comments.length ? comments.map((item,index)=>{
            // console.log(item);
            // console.log("item");
            return  <Card title={item.UserName} key={index} extra={<i>{item.datetime}</i>} className={"all_comments"}>
               <p>{item.Comments}</p>
           </Card>
        }):"尚未加载到更多评论";
        return <div className="common_comment">
            <Row>
                <Col span={24}>
                    {commentsList}
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label={"您的评论"}>
                            {/*<Input placeholder="写点什么..." type="textarea" {...getFieldProps('remark',{initialValue:''})}/>*/}
                            <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initialValue: ''})}/>
                        </FormItem>
                        <Button type={"primary"} htmlType={"submit"}>提交</Button>
                        <Button type={"primary"} htmlType={"button"} onClick={this.addUserCollection.bind(this)}>收藏</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    }
}
export default Comments = Form.create({})(Comments);