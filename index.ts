import { Request, Response } from "express";
import { startServer } from "./app";
const express = require("express");
import debug from "debug";
const logger = debug("ap");
const app = express();

(async () => {
  await startServer();
})();
