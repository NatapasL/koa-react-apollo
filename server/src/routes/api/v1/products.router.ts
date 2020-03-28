import { Context } from 'koa'
import Router from 'koa-router'
import ProductsController from '~/controllers/ProductsController'

const router = new Router()

const productsController = new ProductsController()

// GET
router.get('/', (ctx: Context) => productsController.index(ctx))
router.get('/:id', (ctx: Context) => productsController.show(ctx))

// POST
router.post('/', (ctx: Context) => productsController.create(ctx))

// PUT
router.put('/:id', (ctx: Context) => productsController.update(ctx))

// DEL
router.del('/:id', (ctx: Context) => productsController.destroy(ctx))

export default router
