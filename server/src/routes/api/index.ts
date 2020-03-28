import Router from 'koa-router'
import apiV1 from './v1'

const router = new Router()

router.use('/v1', apiV1.routes())

export default router
