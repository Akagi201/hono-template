import { Hono } from "hono";
import { health_check } from "./handlers/health";
import { honoLogger } from "./middlewares/logger";
import { panicLogger } from "./middlewares/panic";
import { cors } from "hono/cors";
export function setupRouter(app: Hono) {
	app.use("*", honoLogger);
	app.use("*", panicLogger);
	app.use(
		"*",
		cors({
			origin: "*",
			allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			allowHeaders: ["*"],
			maxAge: 86400,
			credentials: true,
		}),
	);
	app.get("/health", health_check);
}
