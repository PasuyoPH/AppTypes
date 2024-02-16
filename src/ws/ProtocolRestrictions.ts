type RestrictionsAllowed = 'backend' | 'a.panel' | 'm.panel' | 'user' | 'rider'
type ProtocolRestrictions = RestrictionsAllowed | RestrictionsAllowed[]

export type {
  RestrictionsAllowed,
  ProtocolRestrictions
}