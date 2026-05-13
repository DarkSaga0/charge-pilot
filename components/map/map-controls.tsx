"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Target } from "lucide-react"

export function MapControls() {
  const [searchQuery, setSearchQuery] = useState("")
  const [radius, setRadius] = useState(20)

  const handleSearch = () => {
    // Geocoding yapılacak (Nominatim API)
    console.log("Arama:", searchQuery)
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Konum:", position.coords.latitude, position.coords.longitude)
          // Haritayı güncelle
        },
        (error) => {
          console.error("Konum alınamadı:", error)
        }
      )
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 space-y-4">
      {/* Arama */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Şehir veya konum ara (ör: Ankara, İzmir)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Button onClick={handleSearch} className="whitespace-nowrap">
          <Search className="w-4 h-4 mr-2" />
          Ara
        </Button>
      </div>

      {/* Filtreler */}
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <Input
            type="number"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            min={5}
            max={100}
            className="w-20"
          />
          <span className="text-sm text-muted-foreground">km çapında</span>
        </div>
        
        <Button variant="outline" onClick={handleGetLocation} className="whitespace-nowrap">
          <Target className="w-4 h-4 mr-2" />
          Konumumu Kullan
        </Button>
      </div>

      {/* Bilgi */}
      <div className="text-xs text-muted-foreground">
        💡 <strong>İpucu:</strong> Konumunuzu kullanarak en yakın istasyonları bulabilir, 
        şehir adı arayarak farklı bölgelerdeki istasyonları keşfedebilirsiniz.
      </div>
    </div>
  )
}
