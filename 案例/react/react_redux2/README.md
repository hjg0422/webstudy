#note
    *state状态树初始化的两种方法
        - 利用createStore(reducer,preloadState)第二个可选参数进行初始化state
        - 利用reducer 函数const (defaultState,action)={...}进行初始化
        