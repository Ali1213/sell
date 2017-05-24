const express = require('express');
const config = require('./config');

const port = process.env.PORT || config.build.port;

const app = express();

const router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

var appData = require("./data.json");
let {seller, goods, ratings} = appData;


router.get("/seller", function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

router.get("/goods", function (req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

router.get("/ratings", function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use("/api", router);

app.use(express.static('./dist'));

var server = app.listen(port);


