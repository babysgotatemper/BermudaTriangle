import { Section, LocationData } from '../types'

export const sections: Section[] = [
  { id: 'hero', title: '🔺 Бермудський трикутник' },
  { id: 'what', title: '🌊 Що це таке?' },
  { id: 'location', title: '🗺️ Де він знаходиться?' },
  { id: 'name', title: '📚 Чому така назва?' },
  { id: 'disappeared', title: '👻 Хто там зник?' },
  { id: 'theories', title: '🤔 А чому це відбувається?' },
  { id: 'reality', title: '🔬 А насправді?' },
  { id: 'footer', title: '🏝️ Кінець' },
]

export const locations: LocationData[] = [
  {
    emoji: '🌴',
    name: 'Маямі',
    sub: 'Флорида, США',
  },
  {
    emoji: '🏝️',
    name: 'Бермуди',
    sub: 'Британська територія',
  },
  {
    emoji: '🏖️',
    name: 'Сан-Хуан',
    sub: 'Пуерто-Ріко',
  },
]
