import axios from "axios";
import Feedparser from "feedparser";
import stringToStream from "string-to-stream";
import * as constants from "./constants";

export default class feedParseUtil {
  feedparser = new Feedparser();
  // http://gigazine.net/news/rss_2.0/
  feedParse(url) {
    // 備忘：url.replace(/https?:\/\//, '')
    // 以下利用
    // https://codetabs.com/cors-proxy/cors-proxy.html
    return axios({ method: "get", url:  constants.CORS_PROXY + url, timeout: 3000})
      .then(res => {
        stringToStream(res.data).pipe(this.feedparser);
      })
      .then(() => {
        return this.parse();
      })
      .catch(e => {
        throw new Error();
      });
  }

  parse() {
    var promise = new Promise((resolve, reject) => {
      let items = [];
      this.feedparser.on("readable", function() {
        var stream = this;
        var item;
        while ((item = stream.read())) {
          items.push(item);
        }
      });

      this.feedparser.on("end", () => {
        resolve(items);
      });

      this.feedparser.on("error", err => {
        reject(err);
      });
    });

    return Promise.all([promise])
      .then(feed => {
        return feed[0];
      })
      .catch(err => {
        throw err;
      });
  }
}
