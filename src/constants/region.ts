interface RegionType {
  country: string
  code: string
  places: string[]
}

export const REGION: RegionType[] = [
  {
    country: 'United States (EN)',
    code: 'US',
    places: ['California', 'New York', 'Florida', 'Texas', 'Illinois']
  },
  {
    country: 'United Kingdom',
    code: 'GB',
    places: ['Cornwall', 'Essex', 'Kent', 'Yorkshire', 'Surrey']
  },
  {
    country: 'French',
    code: 'FR',
    places: ['Île-de-France', 'Brittany', 'Normandy', 'Provence-Alpes-Côte d’Azur', 'New Aquitaine']
  },
  {
    country: 'Italy',
    code: 'IT',
    places: ['Lazio', 'Tuscany', 'Lombardy', 'Sicily', 'Campania']
  }
]
