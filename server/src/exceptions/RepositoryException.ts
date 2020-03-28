class RepositoryException extends Error {
  message: string

  constructor(message: string) {
    super()
    this.message = message
  }
}

export default RepositoryException
