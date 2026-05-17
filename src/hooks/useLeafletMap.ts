import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export const useLeafletMap = (containerId: string) => {
  const mapRef = useRef<L.Map | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current || !document.getElementById(containerId)) {
      return
    }

    initializedRef.current = true

    // Initialize map centered on Bermuda Triangle (Miami, Bermuda, San Juan)
    const map = L.map(containerId).setView([25.3, -71.5], 6)

    // Dark CartoDB tiles
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; CartoDB',
        maxZoom: 19,
      }
    ).addTo(map)

    // Triangle polygon (Miami, Bermuda, San Juan)
    const triangle = L.polygon(
      [
        [25.7617, -80.1918], // Miami
        [32.2949, -64.8734], // Bermuda
        [18.4655, -66.1057], // San Juan, Puerto Rico
      ],
      {
        color: '#14b8a6',
        weight: 3,
        opacity: 0.7,
        fillColor: '#14b8a6',
        fillOpacity: 0.15,
      }
    ).addTo(map)

    // Markers with emojis
    const markers = [
      { lat: 25.7617, lng: -80.1918, emoji: '🌴', name: 'Miami' },
      { lat: 32.2949, lng: -64.8734, emoji: '🏝️', name: 'Bermuda' },
      { lat: 18.4655, lng: -66.1057, emoji: '🏖️', name: 'San Juan' },
    ]

    markers.forEach(({ lat, lng, emoji, name }) => {
      const markerElement = document.createElement('div')
      markerElement.style.fontSize = '32px'
      markerElement.textContent = emoji

      L.marker([lat, lng], {
        icon: L.divIcon({
          html: markerElement,
          iconSize: [40, 40],
          className: 'emoji-marker',
        }),
      })
        .bindPopup(`<div style="text-align: center; color: #14b8a6; font-weight: bold;">${name}</div>`)
        .addTo(map)
    })

    mapRef.current = map

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        initializedRef.current = false
      }
    }
  }, [containerId])

  return mapRef
}
