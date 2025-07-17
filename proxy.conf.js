const PROXY_CONFIG = {
  "/api": {
      "target": "http://192.168.1.34:1234/app-root",
      "secure": true,
      "bypass": function (req, res, proxyOptions) {
          // req.headers["Authorization"] = "Basic Z2FicmllbGdlcmFsZG86R2FicmllbCQ0MDc0";
          req.headers["Authorization"] = "Basic am9obkBleGFtcGxlLmNvbTphYmMxMjM=";
      }
  }
}

module.exports = PROXY_CONFIG;