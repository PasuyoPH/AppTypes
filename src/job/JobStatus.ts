enum JobStatus {
  PROCESSED,
  ACCEPTED,

  DELIVERY_PICKED_UP,
  
  DONE,
  CANCELLED = -1
}

export default JobStatus