interface HttpResult<T> {
  error?: boolean
  code: number
  value?: T
  message?: string
}

export default HttpResult