interface HttpResult<T> {
  error?: boolean
  code: number
  value?: T
}

export default HttpResult