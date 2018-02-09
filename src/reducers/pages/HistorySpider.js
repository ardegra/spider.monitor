const history = (state ={
    HistorySpider: [],
    isLoading: true
}, action) => {
    switch(action.type){
        case "HISTORY_SPIDER_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "HISTORY_SPIDER_FETCHED" :
            return Object.assign({}, state, {HistorySpider: action.HistorySpider, isLoading: false})
        default:
            return state
    }
}
export default history