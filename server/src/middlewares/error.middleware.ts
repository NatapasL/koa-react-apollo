import { Context } from 'koa'

export default async (ctx: Context, next: any) => {
  try {
    await next()
  } catch (error) {
    const status = error.statusCode || error.status || 500
    const { message } = error

    ctx.throw(status, JSON.stringify({ status, message }))
  }
}
