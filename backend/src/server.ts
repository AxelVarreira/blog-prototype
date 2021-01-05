import express from "express";
import { Request, Response } from "express";

const server = express();
const PORT = 8080;

function homePage(res: Response, req: Request) {
  return res.send("<p>Olá mundo!</p>");
}

server.get("/", homePage);
server.listen(PORT, () => {
  console.log(`Server on! Port ${PORT}`);
});
