import BaseRepository from '~/repositories/BaseRepository'
import HttpException from '~/exceptions/HttpException'

abstract class BaseController<T> {
  protected readonly repository: BaseRepository

  constructor(repository: BaseRepository) {
    this.repository = repository
  }

  protected static handleError(error: Error): void {
    const { message } = error
    const status = error.name === 'NotFoundRepositoryException' ? 404 : 400
    throw new HttpException(status, message)
  }
}

export default BaseController
