import "dotenv/config";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";

/**
 * Builds the Express app with every route registered, but does NOT call
 * app.listen(). This lets the exact same app be used:
 *  - locally / on a traditional Node host, via server/_core/index.ts (which
 *    adds app.listen() and the Vite dev middleware on top of this)
 *  - on Vercel, as a serverless function (api/[...all].ts imports this
 *    directly and exports the app itself, since Vercel invokes it per
 *    request instead of keeping a process alive)
 */
export function createApp() {
  const app = express();
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  return app;
}
