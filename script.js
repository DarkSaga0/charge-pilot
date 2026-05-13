// ⚠️ ÖNEMLİ: API KEY'İNİZİ BURAYA EKLEYIN
// https://openchargemap.org/site/profile/edit adresinden API key alın
const OCM_API_KEY = '479ff18c-ad6d-4559-9025-f6375c702d88'; // ← API key'inizi buraya yapıştırın

// Global değişkenler
let map;
let markers = [];
let currentLat = 41.0082; // İstanbul varsayılan
let currentLng = 28.9784;
let currentRadius = 20; // km

// Haritayı başlat
function initMap() {
    // Harita oluştur
    map = L.map('map').setView([currentLat, currentLng], 11);

    // Tile layer ekle (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // İlk yükleme
    loadChargingStations(currentLat, currentLng, currentRadius);
}

// Open Charge Map API'den şarj istasyonlarını yükle
async function loadChargingStations(lat, lng, radius) {
    // Yükleniyor göster
    showLoading(true);

    // API URL'i oluştur
    const url = `https://api.openchargemap.io/v3/poi/?output=json&latitude=${lat}&longitude=${lng}&distance=${radius}&distanceunit=km&maxresults=100&compact=true&verbose=false&key=${OCM_API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Hatası: ${response.status}`);
        }

        const data = await response.json();

        // Mevcut marker'ları temizle
        clearMarkers();

        // Yeni marker'ları ekle
        data.forEach(station => {
            addStationMarker(station);
        });

        // İstatistikleri güncelle
        updateStats(data.length);

        console.log(`✅ ${data.length} şarj istasyonu yüklendi`);

    } catch (error) {
        console.error('❌ Veri yüklenirken hata:', error);

        // API key kontrolü
        if (OCM_API_KEY === 'BURAYA_API_KEY_YAPISTIRINIZ') {
            alert('⚠️ Lütfen script.js dosyasındaki OCM_API_KEY değişkenine API key\'inizi ekleyin!\n\nAPI key almak için: https://openchargemap.org/site/profile/edit');
        } else {
            alert('Şarj istasyonları yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    } finally {
        showLoading(false);
    }
}

// Haritaya istasyon marker'ı ekle
function addStationMarker(station) {
    const addressInfo = station.AddressInfo;

    if (!addressInfo || !addressInfo.Latitude || !addressInfo.Longitude) {
        return; // Koordinat yoksa atla
    }

    // Marker oluştur
    const marker = L.marker([addressInfo.Latitude, addressInfo.Longitude]).addTo(map);

    // Popup içeriği oluştur
    const popupContent = createPopupContent(station);
    marker.bindPopup(popupContent);

    // Marker'ı listeye ekle
    markers.push(marker);
}

// Popup içeriği oluştur
function createPopupContent(station) {
    const addr = station.AddressInfo;
    const connections = station.Connections || [];

    // Bağlantı tipleri
    let connectionsHTML = '';
    if (connections.length > 0) {
        connectionsHTML = '<div class="connections"><strong>Bağlantılar:</strong><ul>';
        connections.forEach(conn => {
            const type = conn.ConnectionType?.Title || 'Bilinmiyor';
            const power = conn.PowerKW ? `${conn.PowerKW} kW` : '';
            const level = conn.Level?.Title || '';
            connectionsHTML += `<li>${type} ${power} ${level}</li>`;
        });
        connectionsHTML += '</ul></div>';
    }

    // Durum bilgisi
    const status = station.StatusType?.Title || 'Durum bilinmiyor';
    const statusClass = station.StatusType?.IsOperational ? 'status-operational' : 'status-unknown';

    return `
        <div class="station-popup">
            <h3>${addr.Title || 'Şarj İstasyonu'}</h3>
            <div class="status ${statusClass}">${status}</div>
            
            <div class="address">
                📍 ${addr.AddressLine1 || ''}<br>
                ${addr.Town || ''}, ${addr.StateOrProvince || ''}<br>
                ${addr.Country?.Title || ''}
            </div>
            
            ${station.OperatorInfo ? `<div class="operator"><strong>İşletmeci:</strong> ${station.OperatorInfo.Title}</div>` : ''}
            
            ${station.NumberOfPoints ? `<div class="points"><strong>Şarj Noktası Sayısı:</strong> ${station.NumberOfPoints}</div>` : ''}
            
            ${connectionsHTML}
            
            ${station.UsageCost ? `<div class="cost"><strong>Ücret:</strong> ${station.UsageCost}</div>` : ''}
            
            <div class="actions">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${addr.Latitude},${addr.Longitude}" target="_blank" class="route-btn">
                    🗺️ Yol Tarifi Al
                </a>
            </div>
        </div>
    `;
}

// Marker'ları temizle
function clearMarkers() {
    markers.forEach(marker => marker.remove());
    markers = [];
}

// İstatistikleri güncelle
function updateStats(count) {
    const statsElement = document.getElementById('stationCount');
    if (statsElement) {
        statsElement.textContent = `${count} şarj istasyonu bulundu`;
    }
}

// Yükleniyor göstergesi
function showLoading(show) {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = show ? 'block' : 'none';
    }
}

// Kullanıcının konumunu al
function getUserLocation() {
    if (!navigator.geolocation) {
        alert('Tarayıcınız konum servislerini desteklemiyor.');
        return;
    }

    showLoading(true);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            currentLat = position.coords.latitude;
            currentLng = position.coords.longitude;

            // Haritayı kullanıcı konumuna getir
            map.setView([currentLat, currentLng], 13);

            // Kullanıcı konumu marker'ı ekle
            L.marker([currentLat, currentLng], {
                icon: L.icon({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                })
            }).addTo(map).bindPopup('📍 Sizin Konumunuz').openPopup();

            // Şarj istasyonlarını yükle
            loadChargingStations(currentLat, currentLng, currentRadius);
        },
        (error) => {
            showLoading(false);
            alert('Konum alınamadı: ' + error.message);
        }
    );
}

// Radius güncelle
function updateRadius() {
    const radiusInput = document.getElementById('radiusInput');
    if (radiusInput) {
        currentRadius = parseInt(radiusInput.value) || 20;
        loadChargingStations(currentLat, currentLng, currentRadius);
    }
}

// Konum ara (basit geocoding)
async function searchLocation() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (!query) {
        alert('Lütfen bir konum girin');
        return;
    }

    showLoading(true);

    try {
        // Nominatim API (OpenStreetMap geocoding)
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const results = await response.json();

        if (results.length > 0) {
            const location = results[0];
            currentLat = parseFloat(location.lat);
            currentLng = parseFloat(location.lon);

            map.setView([currentLat, currentLng], 12);
            loadChargingStations(currentLat, currentLng, currentRadius);
        } else {
            alert('Konum bulunamadı. Lütfen farklı bir arama deneyin.');
            showLoading(false);
        }
    } catch (error) {
        console.error('Arama hatası:', error);
        alert('Arama yapılırken bir hata oluştu.');
        showLoading(false);
    }
}

// Haritaya kaydır
function scrollToMap() {
    document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
}

// Sayfa yüklendiğinde haritayı başlat
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
