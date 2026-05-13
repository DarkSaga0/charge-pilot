"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import Link from "next/link"

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false })

const OCM_API_KEY = "479ff18c-ad6d-4559-9025-f6375c702d88"

export default function MapPage() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(`https://api.openchargemap.io/v3/poi/?output=json&latitude=41.0082&longitude=28.9784&distance=20&distanceunit=km&maxresults=100&key=${OCM_API_KEY}`)
      .then(r => r.json())
      .then(data => {
        setStations(data)
        setLoading(false)
      })
  }, [])

  if (typeof window === "undefined") {
    return <div style={{ padding: "40px", textAlign: "center" }}>Harita yükleniyor...</div>
  }

  return (
    <div style={{ minHeight: "100vh", padding: "20px", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#667eea", textDecoration: "none", fontSize: "14px" }}>← Ana Sayfa</Link>
        
        <h1 style={{ fontSize: "2.5rem", marginTop: "20px", marginBottom: "10px" }}>Şarj İstasyonu Haritası</h1>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          {loading ? "Yükleniyor..." : `${stations.length} şarj istasyonu bulundu`}
        </p>
        
        <div style={{ height: "600px", width: "100%", borderRadius: "10px", overflow: "hidden", border: "1px solid #ddd" }}>
          <MapContainer center={[41.0082, 28.9784]} zoom={11} style={{ height: "100%", width: "100%" }}>
            <TileLayer 
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {stations.map((station) => {
              const { Latitude, Longitude } = station.AddressInfo
              if (!Latitude || !Longitude) return null
              
              return (
                <Marker key={station.ID} position={[Latitude, Longitude]}>
                  <Popup>
                    <div style={{ minWidth: "200px" }}>
                      <strong>{station.AddressInfo.Title || "Şarj İstasyonu"}</strong>
                      <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                        {station.AddressInfo.Town}, {station.AddressInfo.Country?.Title}
                      </p>
                      {station.OperatorInfo && (
                        <p style={{ fontSize: "12px" }}>İşletmeci: {station.OperatorInfo.Title}</p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}