import { Hono} from 'hono'
import {handle} from 'hono/vercel'

import steamFamilyGroup from "./_routes/familygroup";
import steamCommon from "./_routes/common";
import steamHelper from "./_routes/helper";
import info from "./_routes/info";
import steamAuth from "./_routes/auth";
import cron from "@/app/api/[[...routes]]/cron";
import {CommonExtractor} from "./_middlewares/query-extractor";
import {BizError} from "@/app/api/[[...routes]]/errors";

export const runtime = 'edge';

const app = new Hono()

app.use(CommonExtractor)
app.route('/', steamFamilyGroup)
app.route('/', steamCommon)
app.route('/', steamAuth)
app.route('/', steamHelper)
app.route('/', info)
app.route('/', cron)

app.onError((err, c) => {
  console.error(err)
  if (err instanceof BizError) {
    return c.json({
      success: false,
      errorType: err.name,
      errorMessage: err.message
    }, err?.code as any ?? 400)
  }
  return c.json({ success: false, errorType: "Unknown Error"}, 500)
})

app.get('/api/ping', async(c) => {
  return c.json({data: "pong"})
})


export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)