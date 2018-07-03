import { action, observable } from "mobx";
import moment from "moment";
import * as constants from "../util/constants";

class ItemStore {
  @observable items = [];
  @observable updateDate = moment().format("HH:mm:ss");
  @observable loading = false;
  @observable
  updateDuration =
    localStorage.getItem(constants.SETTINGS) == undefined
      ? 5
      : JSON.parse(localStorage.getItem(constants.SETTINGS)).updateDuration;
  timerId = "";

  @action.bound
  add() {}

  @action.bound
  getSettings() {
    if (localStorage.getItem(constants.SETTINGS) == undefined) {
      this.updateDuration = 5;
    } else {
      this.updateDuration = JSON.parse(
        localStorage.getItem(constants.SETTINGS)
      ).updateDuration;
    }
  }
  @action.bound
  setSetting() {
    localStorage.setItem(
      constants.SETTINGS,
      JSON.stringify({
        updateDuration: this.updateDuration
      })
    );
  }

  @action.bound
  setTimer() {
    if (this.timerId != "") {
      clearInterval(this.timerId);
    }

    // 初回呼び出し
    this.add();
    this.timerId = setInterval(this.add, this.updateDuration * 60 * 1000);
  }
}

export default ItemStore;
