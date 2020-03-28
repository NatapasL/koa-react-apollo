
import {
  Model,
  Column,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript'

@Table({
  timestamps: true,
})
class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price?: number

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date
}

export default Product
