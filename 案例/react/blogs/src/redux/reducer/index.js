import {type} from '../action/index'
const defaultState ={
    //用户信息 以及登陆状态
    userInfo:{
        isLogin:false
    },
    //music
    music:{
        //选择播放的音乐
        switchMusic: 0,
        //音乐列表
        musicList:{
            music_1:{}
        }
    }
};
export default (state = defaultState,action) =>{
    switch (action.type) {
        case type.SWTICH_MUSIC:
            return {
                ...state,
                switchMusic: action.index
            }
        default:
            return {
                ...state
            }
    }
}