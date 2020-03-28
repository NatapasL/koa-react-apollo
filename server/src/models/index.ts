
import { Sequelize } from 'sequelize-typescript'
import Product from '~/models/Product'

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
})

sequelize.addModels([Product])

export default sequelize
