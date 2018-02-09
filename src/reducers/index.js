import {combineReducers} from "redux";

import listSpider from "./pages/listSpider";
import Spiders from "./pages/Spiders";
import AddSpider from "./pages/AddSpider";
import DetailSpider from "./pages/DetailSpider";
import HistorySpider from "./pages/HistorySpider";
import ModifySpider from "./pages/ModifySpider";
import spiderTestPage from "./pages/spiderTestPage";
import newsSpiderTestForm from "./form/newsSpiderTestForm";
import forumSpiderTestForm from "./form/forumSpiderTestForm";

export default combineReducers({
    listSpider,
    Spiders,
    AddSpider,
    DetailSpider,
    HistorySpider,
    ModifySpider,
    spiderTestPage,
    newsSpiderTestForm,
    forumSpiderTestForm
})