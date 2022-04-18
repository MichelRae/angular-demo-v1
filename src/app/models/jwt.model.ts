export interface JWT {
  exp: number
  iat: number
  isActive: boolean
  role: string
  sub: string
  userId: number
}
