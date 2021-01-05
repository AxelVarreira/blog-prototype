import express from "express";
import { Request, Response } from "express";
import nunjucks from "nunjucks";

const server = express();

const PORT = process.env.PORT || 3333;

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

function aboutPage(req: Request, res: Response) {
  return res.render("about.html");
}

function homePage(req: Request, res: Response) {
  return res.render("index.html");
}

server
  .use(express.static("public"))
  .get("/", homePage)
  .get("/about", aboutPage)
  .listen(PORT, () => {
    console.log(`listening port ${PORT}`);
  });
