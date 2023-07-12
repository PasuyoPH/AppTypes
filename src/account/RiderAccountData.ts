enum RiderAccountRanks {
  RANK_BRONZE,
  RANK_GOLD,
  RANK_PLATINUM,
  RANK_DIAMOND,
  RANK_BLACK_DIAMOND
}

interface RiderAccountData {
  uid: string
  email?: string
  phone?: string
  fullName?: string
  pin?: string
  referral?: string
  credits?: number
  profile?: string
  createdAt?: number
  verified?: boolean
  rank?: RiderAccountRanks
  xp?: number
  optInLocation?: boolean
  id?: string
}

export default RiderAccountData
export { RiderAccountRanks }