enum TransactionStatus {
  WAITING_USER_PAYMENT,
  USER_PAID,
  USER_REFUNDED, // Special

  // For cash on delivery
  COD_WAITING_FOR_PAYMENT,
  COD_PAYMENT_CONFIRMED,

  // For gcash manual
  GCASH_MANUAL_WAITING_FOR_CONFIRMATION
}

export default TransactionStatus