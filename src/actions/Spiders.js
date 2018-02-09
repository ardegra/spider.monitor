import * as axios from "axios";
import {BASE_API_URL} from "../config"

const loading = () => {return {type: "SPIDER_LOADING_ALL"}}
const fetched = (spiderList) => {return {type: "TABLE_SPIDER_FETCHED", spiderList: spiderList}}

export const fetchSpider = () => {return (dispatch) => {
    dispatch(loading())
    axios.get(`${BASE_API_URL}/spider`).then(response => {
        let spiderList = []
        response.data.data.map(value => {
            spiderList.push(value)
        })
        dispatch(fetched(spiderList))
    })
}}