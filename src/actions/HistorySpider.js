import * as axios from "axios";
import {BASE_API_URL} from "../config"

const loading = () => {return {type: "HISTORY_SPIDER_LOADING"}}
const fetched = (HistorySpider) => {return {type: "HISTORY_SPIDER_FETCHED", HistorySpider: HistorySpider}}

export const fetchHistory = () => {return (dispatch) => {
    dispatch(loading())
    axios.get(`${BASE_API_URL}/agentJob/latest/10`).then(response => {
        let HistorySpider = []
        response.data.data.map(value => {
            HistorySpider.push(value)
        })
        dispatch(fetched(HistorySpider))
    })
}}