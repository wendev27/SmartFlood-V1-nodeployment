'use client';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from 'react-leaflet';

import L from 'leaflet';

const blueIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  iconSize: [32, 32],
});

const yellowIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
  iconSize: [32, 32],
});

const redIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
});

const sensors = [
  {
    id: 1,
    name: 'Tinajeros Sensor',
    lat: 14.668,
    lng: 120.956,
    level: 'normal',
  },
  { id: 2, name: 'Longos Sensor', lat: 14.671, lng: 120.949, level: 'warning' },
  { id: 3, name: 'Catmon Sensor', lat: 14.673, lng: 120.96, level: 'critical' },
];
function getColor(level: string) {
  if (level === 'critical') return '#ef4444'; // red
  if (level === 'warning') return '#facc15'; // yellow
  return '#3b82f6'; // blue
}

export default function FloodMap() {
  return (
    <MapContainer
      center={[14.669, 120.955]}
      zoom={14}
      className="h-[450px] w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {sensors.map((sensor) => {
        const color = getColor(sensor.level);

        return (
          <>
            <CircleMarker
              key={`pulse-${sensor.id}`}
              center={[sensor.lat, sensor.lng]}
              radius={18}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.2,
              }}
              className="sensor-pulse"
            />

            <Marker
              key={`marker-${sensor.id}`}
              position={[sensor.lat, sensor.lng]}
            >
              <Popup>
                <b>{sensor.name}</b>
                <br />
                Level: {sensor.level}
              </Popup>
            </Marker>
          </>
        );
      })}
    </MapContainer>
  );
}
