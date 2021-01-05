"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _nunjucks = require('nunjucks'); var _nunjucks2 = _interopRequireDefault(_nunjucks);

const server = _express2.default.call(void 0, );

const PORT = process.env.PORT || 3333;

_nunjucks2.default.configure("src/views", {
  express: server,
  noCache: true,
});

function aboutPage(req, res) {
  return res.render("about.html");
}

function homePage(req, res) {
  return res.render("index.html");
}

server
  .use(_express2.default.static("public"))
  .get("/", homePage)
  .get("/about", aboutPage)
  .listen(PORT, () => {
    console.log(`listening port ${PORT}`);
  });
