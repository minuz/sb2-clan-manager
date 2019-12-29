// {
//   "/api": {
//     "target": "https://api.clashofclans.com/v1",
//       "secure": true,
//         "pathRewrite": {
//       "^/api": "https://api.clashofclans.com/v1"
//     },
//     "changeorigin": true
//   }
// }

const PROXY_CONFIG = {
  "/api": {
    "target": "https://api.clashofclans.com/v1",
    "pathRewrite": {
      "^/api": "https://api.clashofclans.com/v1"
    },
    "secure": true,
    "changeorigin": true,
    "logLevel": "debug",
    "bypass": function (req, res, proxyOptions) {
      req.headers["Accept"] = "application/json";
      req.headers["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ3ZjA3MzU2LWRiYzctNDRiMy04NTk3LTcyMGRjZDRiOGJiMCIsImlhdCI6MTU3NzU5MDk1Miwic3ViIjoiZGV2ZWxvcGVyL2ZkYTZiMTIxLTM5ZTktZTQ4Ni1mNTY2LTA0NTkyNTBiNzY1YSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExNS42NC41Mi45NiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.yQUFn8Ava0BzjLIwcCDoxIGFHNMTov0ZibWdFonmv2f7VAHqftRKOQhWj1JeyuoLEvkzelnkxmj9-Wedl6gTYg";
    }
  }
}

module.exports = PROXY_CONFIG;
