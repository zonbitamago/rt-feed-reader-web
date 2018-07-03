import * as constants from "../util/constants";
import FeedListStore from "./FeedListStore";

describe("FeedListStore", () => {
  let store;

  beforeEach(() => {
    localStorage.clear();
  });

  it("init", () => {
    store = new FeedListStore();
    expect(store.feedList.length).toBe(0);
  });

  describe("getFeedList", () => {
    it("Not Registed", () => {
      store = new FeedListStore();
      store.getFeedList();
      expect(store.feedList.length).toBe(0);
    });

    it("Registed 1items", () => {
      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );
      store = new FeedListStore();
      store.getFeedList();
      expect(store.feedList.length).toBe(1);
    });

    it("Registed 2items", () => {
      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          },
          {
            name: "yahoo.com",
            url: "https://yahoo.com"
          }
        ])
      );
      store = new FeedListStore();
      store.getFeedList();
      expect(store.feedList.length).toBe(2);
    });

    it("rssList_to_feedList", () => {
      localStorage.setItem(
        constants.RSS_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );
      store = new FeedListStore();
      store.getFeedList();

      expect(localStorage.getItem(constants.FEED_LIST)).not.toBeNull();
      expect(localStorage.getItem(constants.RSS_LIST)).toBeNull();
    });
  });

  describe("setFeedList", () => {});

  describe("deleteFeedList", () => {
    it("delete　single", () => {
      store = new FeedListStore();

      var feedList = [
        {
          name: "google.com",
          url: "https://google.com"
        },
        {
          name: "yahoo.com",
          url: "https://yahoo.com"
        }
      ];
      localStorage.setItem(constants.FEED_LIST, JSON.stringify(feedList));
      store.feedList = feedList;

      store.deleteFeedList("google.com");

      expect(store.feedList.length).toBe(1);
      expect(JSON.parse(localStorage.getItem(constants.FEED_LIST)).length).toBe(
        1
      );
    });

    it("delete　double", () => {
      store = new FeedListStore();

      var feedList = [
        {
          name: "google.com",
          url: "https://google.com"
        },
        {
          name: "yahoo.com",
          url: "https://yahoo.com"
        }
      ];
      localStorage.setItem(constants.FEED_LIST, JSON.stringify(feedList));
      store.feedList = feedList;

      store.deleteFeedList("google.com");
      store.deleteFeedList("yahoo.com");

      expect(store.feedList.length).toBe(0);
      expect(JSON.parse(localStorage.getItem(constants.FEED_LIST)).length).toBe(
        0
      );
    });
  });
});
