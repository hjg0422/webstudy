import React from 'react'
import { Row ,Col ,Icon, Menu,Tabs,message,Form,Input,Button,Checkbox,Modal} from 'antd'
import {Link} from 'react-router-dom'
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
//当前时间
class CurrentTime extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTime:null,
        }
    }
    componentWillMount(){
        this.timer = setInterval(()=>this.setState({currentTime:new Date().toLocaleTimeString()}),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return <div className="logo-time">
            {this.state.currentTime}
        </div>
    }
}
 class NewsHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userId:0,
        }
    }
     componentWillMount(){
         if (localStorage.userid!='') {
             this.setState({hasLogined:true});
             this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
             console.log(localStorage)
         }
     };
    //modal的显示
    setModalVisible(value){
        this.setState({
            modalVisible:value,
        });
    }
    handleClick(e){
        //用户点击导航 显示高亮及modal
        if(e.key==="register")
        {
            this.setState({
                current:"register"
            })
            this.setModalVisible(true);
        }
        else{
            this.setState({
                current:e.key,
            });
        }
    }
    handleSubmit(e){
        //页面提交
        e.preventDefault();
        //封装fetch
        var myFetchOptions = {
            method:'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_username+"++&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirm,myFetchOptions)
            .then(response=>response.json()).then(json=>{
            // this.setState({userNickName: json.NickUserName, userid: json.UserId});
            localStorage.userid= "1111";
            localStorage.userNickName = "MaYun";
            this.setState({
                userNickName:"MaYun",userId:"1111"
            })
        })
        if (this.state.action==="login") {
            this.setState({hasLogined:true});
        }
        message.success("请求成功！");
        console.log(this.state);
        this.setModalVisible(false);
    }
     callback(key) {
         if (key == 1) {
             this.setState({action: 'login'});
         } else if (key == 2) {
             this.setState({action: 'register'});
         }
     };
     logout(){
         localStorage.userid= '';
         localStorage.userNickName = '';
         this.setState({hasLogined:false});
     };
    render(){
        //用于接收页面的参数
        let {getFieldProps} = this.props.form;
        const UserShow = this.state.hasLogined ?
            <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button" onClick={()=>console.log(this.state)}>{this.state.userNickName}</Button>
                <Button type="dashed" htmlType="button"><Link to='/usercenter' target="_blank">个人中心</Link></Button>
                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item> :
            <Menu.Item key="register" className="register">
            <Icon type="appstore"/>注册/登陆
            </Menu.Item>
        return(<header>
            <Row>
                <Col span={2}> </Col>
                <Col span={4}>
                    <a href="https://www.zhuye.kim/" className={'logo'}><CurrentTime /></a>
                </Col>
                <Col span={16}>
                    <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                        <Menu.Item key="top">
                            <Icon type="appstore" />头条
                        </Menu.Item>
                        <Menu.Item key="game">
                            <Link to='/test' target="_blank"><Icon type="appstore" />测试</Link>
                        </Menu.Item>
                        <Menu.Item key="social">
                            <Icon type="appstore" />社会
                        </Menu.Item>
                        <Menu.Item key="IT">
                            <Icon type="appstore" />IT
                        </Menu.Item>
                        <Menu.Item key="star">
                            <Icon type="appstore" />明星
                        </Menu.Item>
                        {UserShow}
                    </Menu>
    <Modal title="用户中心" wrapClassName={"vertical-center-modal"} visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)} cancelText={"取消"} onOk={()=>this.setModalVisible(false)} okText='关闭'>
        <Tabs type="card" defaultActiveKey={'1'} onChange={this.callback.bind(this)}>
            <TabPane tab="注册" key={'2'}>
                <Form horizontal={"true"} onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                        <Input placeholder="请输入您的账号" {...getFieldProps('r_username')}/>
                    </FormItem>
                    <FormItem label="密码">
                        <Input type={'password'} placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                    </FormItem>
                    <FormItem label="确认密码">
                        <Input type={"password"} placeholder="请再次输入您的密码" {...getFieldProps('r_confirm')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>注册</Button>
                </Form>
            </TabPane>
            <TabPane tab={"登陆"} key={'1'}>
                <Form horizontal={"true"} onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                        <Input placeholder="请输入您的账号" {...getFieldProps('r_username')}/>
                    </FormItem>
                    <FormItem label="密码">
                        <Input type={'password'} placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>登陆</Button>
                </Form>
            </TabPane>
        </Tabs>
    </Modal>
                </Col>
                <Col span={2}></Col>
            </Row>
        </header>);
    }
}
//form 的二次封装 获取控件的props
export default NewsHeader = Form.create({})(NewsHeader);