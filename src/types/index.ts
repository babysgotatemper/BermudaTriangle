export interface Section {
  id: string
  title: string
}

export interface Vessel {
  id: string
  emoji: string
  name: string
  date: string
  story: string
}

export interface Theory {
  id: string
  icon: string
  title: string
  desc: string
  color: string
}

export interface LocationData {
  emoji: string
  name: string
  sub: string
}
