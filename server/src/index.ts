import 'module-alias/register'
import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-morgan'
import koaBody from 'koa-body'
import dotenv from 'dotenv'
import graphql from './graphql'
import errorMiddleware from '~/middlewares/error.middleware'
import models from '~/models'
import routes from './routes'

dotenv.config()

const app = new Koa()
const router = new Router()

models.sync()

router.use(routes.routes())

app.use(logger('tiny'))
app.use(koaBody())
app.use(errorMiddleware)
app.use(graphql.getMiddleware({ path: '/graphql' }))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3001)
