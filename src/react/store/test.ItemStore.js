import * as rssConstants from "../../../__mocks__/rssConstants";
import * as constants from "../util/constants";
import ItemStore from "./ItemStore";

describe("ItemStore", () => {
  let store;

  beforeEach(() => {
    localStorage.clear();
    store = new ItemStore();
  });

  it("init", () => {
    expect(store.items.length).toBe(0);
    expect(store.updateDuration).toBe(5);
    expect(store.loading).toBe(false);
    expect(store.timerId).toBe("");
  });

  describe("getSettings", () => {
    it("Not Registed LocalStoreage", () => {
      store.getSettings();
      expect(store.updateDuration).toBe(5);
    });

    it("Registed LocalStoreage", () => {
      localStorage.setItem(
        constants.SETTINGS,
        JSON.stringify({
          updateDuration: 10
        })
      );
      store.getSettings();
      expect(store.updateDuration).toBe(10);
    });
  });

  it("setSettings", () => {
    store.updateDuration = 7;
    store.setSetting();
    expect(
      JSON.parse(localStorage.getItem(constants.SETTINGS)).updateDuration
    ).toBe(7);
  });

  describe("setTimer", () => {
    it("initialTimer", () => {
      store.setTimer();
      expect(store.timerId).not.toBe("");
    });

    it("initialTimer timerID reset", () => {
      store.timerId = "dummy";
      store.setTimer();
      expect(store.timerId).not.toBe("dummy");
    });
  });
});
