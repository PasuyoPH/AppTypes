enum JobStatus {
  PROCESSED,
  ACCEPTED,

  DELIVERY_PICKED_UP,
  
  DONE,
  CANCELLED = -1
}

const JobStatusAsText: string[] = [
  'Processed',
  'Accepted',
  'Delivery Picked Up',
  'Finished'
]

JobStatusAsText[-1] = 'Cancelled'

export default JobStatus
export { JobStatusAsText }