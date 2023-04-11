const express = require("express");
const cors = require("cors");
const path = require("path");
const expressStaticGzip = require("express-static-gzip");
const basePath = "/tms-min-side-tjenester";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN;

server.use(cors({ origin: [corsAllowedOrigin, "https://www.intern.dev.nav.no"] }));

server.use(
  basePath,
  expressStaticGzip(buildPath, {
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

server.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

server.listen(7700, () => console.log("Server listening on port 7700"));
