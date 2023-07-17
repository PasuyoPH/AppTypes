interface RequestOptions {
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch'
  data?: any
  headers?: any
  url: string
}

export default RequestOptions