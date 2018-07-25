import { action, observable } from "mobx";
import * as constants from "../util/constants";
import feedParseUtil from "../util/feedParseUtil";

class FeedListStore {
  @observable feedList = [];
  @observable name = "";
  @observable url = "";

  constructor() {
    // rssListは旧仕様のため、入れ替える。
    if (localStorage.getItem(constants.RSS_LIST) != null) {
      localStorage.setItem(
        constants.FEED_LIST,
        localStorage.getItem(constants.RSS_LIST)
      );
      localStorage.removeItem(constants.RSS_LIST);
    }
  }

  @action.bound
  getFeedList() {
    if (
      localStorage.getItem(constants.FEED_LIST) == null ||
      localStorage.getItem(constants.FEED_LIST).length == 0
    ) {
      this.feedList = [];
    } else {
      this.feedList = JSON.parse(localStorage.getItem(constants.FEED_LIST));
    }
  }

  @action.bound
  setFeedList() {
    let ret, util;
    var host = this.url
      .split("#")[0]
      .split("?")[0]
      .split("/")[2];

      util = new feedParseUtil();
      ret = util.feedParse(this.url);
    return ret
      .then(() => {
        var duplicateList = this.feedList.filter(item => {
          if (item.name == this.name) {
            return item;
          }
        });

        // 重複しているものは登録しない
        if (duplicateList.length > 0) {
          return false;
        }

        this.feedList.push({ name: this.name, url: this.url });
        this.setlocalStorage();

        return true;
      })
      .catch(() => {
        // 正しいURLではない場合、return

        return false;
      });
  }

  @action.bound
  deleteFeedList(name) {
    this.feedList = this.feedList.filter(item => item.name != name);
    this.setlocalStorage();
  }

  setlocalStorage() {
    localStorage.setItem(constants.FEED_LIST, JSON.stringify(this.feedList));
  }
}

export default FeedListStore;
