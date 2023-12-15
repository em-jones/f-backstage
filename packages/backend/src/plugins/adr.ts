import { createRouter } from "@backstage/plugin-adr-backend";
import type { Router } from "express";
import { PluginEnvironment } from "../types";
export default (
  { reader, cache, logger }: PluginEnvironment,
): Promise<Router> =>
  createRouter({
    reader,
    logger,
    cacheClient: cache.getClient(),
  });
