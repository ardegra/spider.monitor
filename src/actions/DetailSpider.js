import * as axios from "axios";
import {BASE_API_URL} from "../config"

// const loaded = () => {return {type: "DETAIL_SPIDER_LOAD"}}
const loading = () => {return {type: "DETAIL_SPIDER_LOADING"}}
const fetched = (spiderDetail) => {return {type: "DETAIL_SPIDER_FETCHED", spiderDetail: spiderDetail}}

export const refresh = () => {return {type: "DETAIL_SPIDER_REFRESH"}}
export const fetchDetail = (namenow) => {return (dispatch) => {
    // dispatch(loaded())
    dispatch(loading())

    axios.get(`${BASE_API_URL}/spider/`+namenow).then(response => {
        let spiderDetail = response.data.data[0];
        // response.data.data.map(value => {
        //     spiderDetail.push(value)
        // })
        //console.log(spiderDetail)
        dispatch(fetched(spiderDetail))
    })
}}