interface CoinType {
  type: string
  icon: string
  value: number
}

export const COIN_OPTION: CoinType[] = [
  {
    type: 'BTC',
    icon: 'bitcoin',
    value: 0.000123
  },
  {
    type: 'USD',
    icon: 'bitcoin',
    value: 0.000123
  }
]
