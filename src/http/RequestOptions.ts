import { RawAxiosRequestHeaders, AxiosHeaders } from 'axios'

interface RequestOptions {
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch'
  data?: any
  headers?: (RawAxiosRequestHeaders) | AxiosHeaders
  url: string
}

export default RequestOptions