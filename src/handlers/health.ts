import { HelloResp } from '../models/health';
import { Context } from 'hono';

export async function health_check(c: Context) {
  const resp: HelloResp = {
    ok: true,
  };
  return c.json(resp);
}