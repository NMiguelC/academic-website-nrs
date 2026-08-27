import { createApp } from "../server/_core/app";

// Vercel invokes this file per request (no long-lived process, unlike
// server/_core/index.ts). Exporting the Express app directly works because
// an Express app is itself a valid (req, res) => void request handler.
// vercel.json rewrites route /api/* and /manus-storage/* here.
const app = createApp();

export default app;
