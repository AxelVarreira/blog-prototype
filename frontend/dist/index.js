"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('sucrase/register/ts');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const server = _express2.default.call(void 0, );

const PORT = process.env.PORT || 3333;

server.get("/", (req, res) => {
  return res.send("/index.html");
});

server.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
