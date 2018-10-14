import { type } from '../action';
const defaultState = {
    userImg:'../../../public/imgs/card_child.jpg',
    userName:'PonyXX',
    cardTime:'2018/10/10',
    likeCount: 15,
    imgSignature:'Very Beautiful',
    gallery:"./",
    desStatus: false
}
export default (state = defaultState,action)=>{
    switch (action.type) {
        case type.ADD_LIKE:
            return {
                ...state,
                likeCount:state.likeCount+1
            };
        case type.DEC_LIKE:
            return{
                ...state,
                likeCount:state.likeCount-1
            }
        case type.DESCRIPTION:
            return {
                ...state,
                desStatus:!state.desStatus
            }
        default:
            return{
                ...state
            }
    }
}