import * as axios from "axios";
import {BASE_API_URL} from "../config"

const loading = () => {return {type: "LIST_SPIDER_LOADING_ALL"}}
const fetched = (spiderList) => {return {type: "TABLE_LIST_SPIDER_FETCHED", spiderList: spiderList}}

export const fetchSpider = () => {return (dispatch) => {
    dispatch(loading())
    
    let promises = []
    promises.push(axios.get(`${BASE_API_URL}/spider`))
    promises.push(axios.get(`${BASE_API_URL}/agentJob/latest/10`))
    
    Promise.all(promises).then(results => {
        let resSpiderList = results[0];
        let resHistorySpider = results[1];
        
        let listSpider = resSpiderList.data.data.map(value => value)
        let historySpider = resHistorySpider.data.data.map(value => value)
        let spiderList = []
        
        console.log(listSpider);
        console.log(historySpider);
        listSpider.map((value,index) => {
            this.status = false
            this.queueing =false
            historySpider.map((isi,index) => {
                if(isi.spiderName===value.name&&isi.status==='queueing'){
                    this.status=false;
                    this.queueing=true;
                }else if(isi.spiderName===value.name&&isi.status==='working'){
                    this.status=true;
                    this.queueing=false;
                }
            })
            spiderList.push({...value, status:this.status, isQueueing:this.queueing})
        })
        dispatch(fetched(spiderList))
    })
}}

export const startStop = (spiderName) => {return {
    type: "LIST_SPIDER_START_STOP_CLICK",
    spiderName: spiderName
}}

const showSuccess = () => {return {
    type: "START_SPIDER_SUCCESS"
}}

export const startStopClick = (spiderName) => {return (dispatch,getState) => {
    let spiderlist = getState().listSpider.spiderList
    let idx
    spiderlist.map((value,index) => {
        if(spiderName === value.name){
            idx=index
        }  
    })
    if(spiderlist[idx].status===false){
        axios.post(`${BASE_API_URL}/agentJob`, {
            spiderName: spiderName,
            imageName: 'franziz/ardegra'
        }).then(response => {
            dispatch(showSuccess())
        })
    }
    dispatch(startStop(spiderName))
}}

export const startAllClick = () => {return (dispatch,getState) => {
    let spiderlist = getState().listSpider.spiderList
    spiderlist.map((value,index) => {
        axios.post(`${BASE_API_URL}/agentJob`, {
            spiderName: value.name,
            imageName: 'franziz/ardegra'
        }).then(response => {
            dispatch(showSuccess())
        }) 
    })
    dispatch(startAll())
}}

export const startAll = () => {return {
    type: "LIST_SPIDER_START_ALL_CLICK"
}}

export const loadAllSpider = () => {return {
    type: "LIST_SPIDER_LOAD_ALL_SPIDER"
}}