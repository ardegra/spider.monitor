const homePage = (state ={
    addText: "",
    spiderList: [],
    isLoading: true
}, action) => {
    switch(action.type){
        case "LIST_SPIDER_START_STOP_CLICK":
            // let newSpiderList = []
            // for(var i=0; i<state.spiderList.length; i++){
            //     let value = state.spiderList[i];
            //     if(value.name === action.spiderName){
            //         newSpiderList.push({...value, status: !value.status})
            //     }else{
            //         newSpiderList.push(value)
            //     }
            // }
            let newSpiderList = state.spiderList.map((value) => {
                if(value.name === action.spiderName){
                    return {...value, status: !value.status}
                }else{
                    return value
                }
            })
            return Object.assign({}, state, {spiderList: newSpiderList})
        case "LIST_SPIDER_START_ALL_CLICK":
            let nnSpiderList = state.spiderList.map((value) => {
                if(value.status === false){
                    return {...value, status: true}
                }else{
                    return value
                }
            })
            return Object.assign({}, state, {spiderList: nnSpiderList})
        case "LIST_SPIDER_LOADING_ALL_SPIDER":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_LIST_SPIDER_FETCHED":
            return Object.assign({}, state, {
                spiderList: action.spiderList,  
                isLoading: false})
        default:
            return state
    }
}
export default homePage