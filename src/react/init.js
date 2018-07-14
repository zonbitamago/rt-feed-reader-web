import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page/Page";
import ItemStore from "./store/ItemStore";
import FeedListStore from "./store/FeedListStore";

const store = {
  ItemStore: new ItemStore(),
  FeedListStore: new FeedListStore()
};

store.ItemStore.setTimer();

const rootDom = document.getElementById("root-dom");
ReactDOM.render(<Page store={store} />, rootDom);
