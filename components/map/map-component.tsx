"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

// Leaflet'i sadece client-side yükle
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
)
const useMap = dynamic(
  () => import("react-leaflet").then((mod) => mod.useMap),
  { ssr: false }
)

// Open Charge Map API Key
const OCM_API_KEY = "479ff18c-ad6d-4559-9025-f6375c702d88"

interface Station {
  ID: number
  AddressInfo: {
    Title: string
    AddressLine1?: string
    Town?: string
    StateOrProvince?: string
    Country?: { Title: string }
    Latitude: number
    Longitude: number
  }
  NumberOfPoints?: number
  StatusType?: {
    Title: string
    IsOperational: boolean
  }
  OperatorInfo?: {
    Title: string
  }
  Connections?: Array<{
    ConnectionType?: { Title: string }
    PowerKW?: number
    Level?: { Title: string }
  }>
  UsageCost?: string
}

export function MapComponent() {
  const [stations, setStations] = useState<Station[]>([])
  const [loading, setLoading] = useState(true)
  const [center, setCenter] = useState<[number, number]>([41.0082, 28.9784]) // Istanbul
  const [zoom, setZoom] = useState(11)

  // İlk yüklemede İstanbul çevresindeki istasyonları getir
  useEffect(() => {
    loadStations(center[0], center[1], 20)
  }, [])

  const loadStations = async (lat: number, lng: number, radius: number) => {
    setLoading(true)
    try {
      const url = `https://api.openchargemap.io/v3/poi/?output=json&latitude=${lat}&longitude=${lng}&distance=${radius}&distanceunit=km&maxresults=100&compact=true&verbose=false&key=${OCM_API_KEY}`
      
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const data = await response.json()
      setStations(data)
    } catch (error) {
      console.error("Şarj istasyonları yüklenemedi:", error)
    } finally {
      setLoading(false)
    }
  }

  if (typeof window === "undefined") {
    return (
      <div className="w-full h-[600px] bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Harita yükleniyor...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border">
      {loading && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
          <p className="text-sm font-medium">Şarj istasyonları yükleniyor...</p>
        </div>
      )}
      
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {stations.map((station) => {
          const { Latitude, Longitude } = station.AddressInfo
          if (!Latitude || !Longitude) return null

          return (
            <Marker key={station.ID} position={[Latitude, Longitude]}>
              <Popup>
                <div className="min-w-[250px]">
                  <h3 className="font-semibold text-lg mb-2">
                    {station.AddressInfo.Title || "Şarj İstasyonu"}
                  </h3>
                  
                  {station.StatusType && (
                    <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${
                      station.StatusType.IsOperational 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}>
                      {station.StatusType.Title}
                    </div>
                  )}
                  
                  <div className="space-y-1 text-sm mb-3">
                    <p className="text-muted-foreground">
                      📍 {station.AddressInfo.AddressLine1 || ""}<br />
                      {station.AddressInfo.Town || ""}, {station.AddressInfo.StateOrProvince || ""}<br />
                      {station.AddressInfo.Country?.Title || ""}
                    </p>
                  </div>
                  
                  {station.OperatorInfo && (
                    <p className="text-sm mb-2">
                      <strong>İşletmeci:</strong> {station.OperatorInfo.Title}
                    </p>
                  )}
                  
                  {station.NumberOfPoints && (
                    <p className="text-sm mb-2">
                      <strong>Şarj Noktası:</strong> {station.NumberOfPoints}
                    </p>
                  )}
                  
                  {station.Connections && station.Connections.length > 0 && (
                    <div className="mb-2">
                      <strong className="text-sm">Bağlantılar:</strong>
                      <ul className="text-xs mt-1 space-y-1">
                        {station.Connections.slice(0, 3).map((conn, idx) => (
                          <li key={idx}>
                            • {conn.ConnectionType?.Title || "Bilinmiyor"} 
                            {conn.PowerKW && ` - ${conn.PowerKW} kW`}
                            {conn.Level && ` (${conn.Level.Title})`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {station.UsageCost && (
                    <p className="text-sm mb-3">
                      <strong>Ücret:</strong> {station.UsageCost}
                    </p>
                  )}
                  
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${Latitude},${Longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    🗺️ Yol Tarifi Al
                  </a>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
      
      <div className="absolute bottom-4 right-4 z-[1000] bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
        <p className="text-xs font-medium">
          {stations.length} istasyon gösteriliyor
        </p>
      </div>
    </div>
  )
}
