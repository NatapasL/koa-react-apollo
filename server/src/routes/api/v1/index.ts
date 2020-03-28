import Router from 'koa-router'
import productsRouter from './products.router'

const router = new Router()

router.use('/products', productsRouter.routes())

export default router
