import debug from "debug";
import { Server } from "http";
const express = require("express");

import { Request, Response, NextFunction } from "express";

const app = express();
const logger = debug("app:*");
const server = new Server(app);

export async function startServer() {
  app.get("/", async (req: Request, res: Response) => {
    logger("hello");
    console.log("object");
    res.send("hello");
  });
  await listen({ server });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const contentType = req.get("content-type");
    if (contentType && !contentType.startsWith("multipart/form-data")) {
      return res.status(400).json({
        statusCode: 400,
        code: "INVALID_CONTENT_TYPE",
        message: "content type not allowed",
        data: {},
      });
    }

    return next();
  });
  //   app.get("/", async (req: Request, res: Response) => {
  //     logger("hello");
  //     console.log("object");
  //     res.send("hello");
  //   });
}

async function listen({ server }: { server: Server }): Promise<void> {
  console.log("coming here");
  return new Promise((resolve) => {
    console.log(resolve, "resolve");
    server.listen(5000, async () => {
      logger("listening on ccc5000");
      console.log("listening on 5000");
    });
  });
}
// console.log(logger, "logger");
// async function listen({ server }: { server: Server }): Promise<void> {
//     return new Promise((resolve) => {
//       server.listen(PORT, async () => {
//         logger(`Listening on port ${PORT}`);

//         await initSeedData();

//         await generateDbml();

//         return resolve();
//       });
//     });
//   }
