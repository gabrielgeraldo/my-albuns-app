const PROXY_CONFIG = {
  "/api": {
      "target": "http://192.168.1.35:1234/app-root",
      "secure": true,
      "bypass": function (req, res, proxyOptions) {
          req.headers["Authorization"] = "Basic Z2FicmllbGdlcmFsZG86Z2FicmllbA==";
      }
  }
}

module.exports = PROXY_CONFIG;