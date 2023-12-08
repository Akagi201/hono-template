import { pino } from "pino";

const formatters = {
	level(label: string, num: number) {
		return { level: label };
	},
};

export const logger = pino({
	base: undefined,
	level: "info",
	messageKey: "message",
	formatters: formatters,
	timestamp: () => `, "timestamp":"${Date.now().toString()}"`,
});

export const honoLogger = async (c: any, next: Function) => {
	const start = Date.now();
	await next();
	const responseTime = Date.now() - start;

	logger.info(
		`method: ${c.req.method}, path: ${c.req.url}, status: ${c.res.status}, resp_time: ${responseTime} ms`,
	);
};
