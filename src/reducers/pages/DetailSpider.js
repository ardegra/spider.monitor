const detail = (state ={
    spiderDetail: [],
    isLoading: true
}, action) => {
    switch(action.type){
        case "DETAIL_SPIDER_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "DETAIL_SPIDER_FETCHED" :
            return Object.assign({}, state, {spiderDetail: action.spiderDetail, isLoading: false})
        case "DETAIL_SPIDER_REFRESH" :
            return Object.assign({}, state, {isLoading: true})
        default:
            return state
    }
}
export default detail