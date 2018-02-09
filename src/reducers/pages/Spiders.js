const detail = (state ={
    spiderList: [],
    isLoading: true
}, action) => {
    switch(action.type){
        case "SPIDER_LOADING_ALL":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_SPIDER_FETCHED" :
            return Object.assign({}, state, {spiderList: action.spiderList, isLoading: false})
        default:
            return state
    }
}
export default detail