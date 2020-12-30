import express from "express";
import { Request, Response } from "express";
import nunjucks from "nunjucks";

const server = express();

const PORT = process.env.PORT || 3333;

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

function homePage(req: Request, res: Response) {
  return res.render("index.html");
}

server.get("/", homePage);

server.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
