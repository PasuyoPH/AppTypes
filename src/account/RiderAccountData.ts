enum RiderAccountRanks {
  RANK_BRONZE,
  RANK_GOLD,
  RANK_PLATINUM,
  RANK_DIAMOND,
  RANK_BLACK_DIAMOND
}

enum RiderMode {
  COMPLETE,
  BAG,
  UNIFORM
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
  mode?: RiderMode
}

export default RiderAccountData
export type { RiderAccountRanks, RiderMode }