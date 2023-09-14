import TransactionStatus from './TransactionStatus'

interface Transaction {
  uid: string // id of transaction, use what payment services give us
  status: TransactionStatus
  amount: number
  user: string // user who made the transaction
  createdAt: number // when the transaction is made
  currency: string // what currency is used, should be PHP
}

export default Transaction