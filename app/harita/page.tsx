import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapComponent } from "@/components/map/map-component"
import { MapControls } from "@/components/map/map-controls"
import { MapStats } from "@/components/map/map-stats"

export const metadata = {
  title: "Şarj İstasyonu Haritası | ChargePilot",
  description: "Türkiye genelinde EV şarj istasyonlarını haritada görüntüleyin",
}

export default function MapPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Başlık */}
          <div className="text-center mb-8 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Şarj İstasyonu Haritası
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              500,000+ gerçek şarj istasyonu verisi ile en yakın istasyonu bulun
            </p>
          </div>

          {/* İstatistikler */}
          <MapStats />

          {/* Kontroller */}
          <MapControls />

          {/* Harita */}
          <div className="mt-6">
            <MapComponent />
          </div>

          {/* Bilgi Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">🗺️ Gerçek Zamanlı</h3>
              <p className="text-sm text-muted-foreground">
                Open Charge Map API ile dünya genelinde anlık şarj istasyonu verileri
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">⚡ Detaylı Bilgi</h3>
              <p className="text-sm text-muted-foreground">
                Güç kapasitesi, soket tipi, işletmeci ve ücret bilgileri
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">📍 Konum Tabanlı</h3>
              <p className="text-sm text-muted-foreground">
                GPS ile konumunuza en yakın istasyonları anında bulun
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
