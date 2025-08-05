const PROXY_CONFIG = {
  "/api": {
      "target": "http://localhost:1234/app-root",
      "secure": true,
      "bypass": function (req, res, proxyOptions) {
          req.headers["Authorization"] = "Basic Z2FicmllbGdlcmFsZG86Z2FicmllbA==";
      }
  }
}

module.exports = PROXY_CONFIG;