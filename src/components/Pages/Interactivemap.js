
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polygon, VideoOverlay } from 'react-leaflet';
// import L from 'leaflet'; // Import leaflet directly to access marker icon
// import 'leaflet/dist/leaflet.css';

// // Define custom marker icon
// const locationIcon = new L.Icon({
//   iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const Interactivemap = () => {
//   // Define coordinates for Gandhipuram, Peelamedu, and Ukkadam
//   const coordinates = [
//     [11.0183, 76.9558], // Gandhipuram
//     [11.0319, 77.0387], // Peelamedu
//     [10.9905, 76.9614], // Ukkadam
//   ];

//   return (
//     <MapContainer center={[11.0168, 76.9558]} zoom={12} style={{ height: '590px', width: '100%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {/* Marker for Gandhipuram */}
//       <Marker position={[11.0183, 76.9558]} icon={locationIcon}>
//         <Popup>
//           Gandhipuram
//         </Popup>
//       </Marker>
//       {/* Marker for Peelamedu */}
//       <Marker position={[11.0319, 77.0387]} icon={locationIcon}>
//         <Popup>
//           Peelamedu
//         </Popup>
//       </Marker>
//       {/* Marker for Ukkadam */}
//       <Marker position={[10.9905, 76.9614]} icon={locationIcon}>
//         <Popup>
//           Ukkadam
//         </Popup>
//       </Marker>
//       {/* Polygon connecting Gandhipuram, Peelamedu, and Ukkadam */}
//       <Polygon positions={coordinates} pathOptions={{ color: 'blue' }} />
//       {/* Video overlay */}
//       <VideoOverlay
//         bounds={coordinates} // The video overlay bounds should match the coordinates of the polygon
//         url="https://www.example.com/video.mp4" // Replace with the URL of your video
//       />
//     </MapContainer>
//   );
// };

// export default Interactivemap;





import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

const locationIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const popLocationIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  {
    name: 'Gandhipuram',
    position: [11.0183, 76.9558]
  },
  {
    name: 'Peelamedu',
    position: [11.0319, 77.0387]
  },
  {
    name: 'Kaniyur',
    position: [10.9252, 77.0046]
  },
  {
    name: 'Chettipalayam',
    position: [11.0604, 77.0216]
  },
  {
    name: 'Sulur',
    position: [11.0172, 77.0910]
  }
];

const connections = [
  { 
    start: 'Gandhipuram',
    end: 'Peelamedu',
    tank: 'Tank A'
  },
  { 
    start: 'Gandhipuram',
    end: 'Sulur',
    tank: 'Tank B'
  },
  { 
    start: 'Gandhipuram',
    end: 'Kaniyur',
    tank: 'Tank C'
  },
  { 
    start: 'Sulur',
    end: 'Chettipalayam',
    tank: 'Tank D'
  }
];

const InteractiveMap = () => {
  const [popupPosition, setPopupPosition] = useState(null);
  const [popupContent, setPopupContent] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    // Search for the entered location in the predefined locations
    const enteredLocation = searchInput.trim().toLowerCase();
    const foundLocation = locations.find(location => location.name.toLowerCase() === enteredLocation);
    if (foundLocation) {
      // If the location is found, set the popup position and content
      setPopupPosition(foundLocation.position);
      setPopupContent(`Location: ${foundLocation.name}`);
    } else {
      // If the location is not found, reset the popup position and content
      setPopupPosition(null);
      setPopupContent('');
      alert('Location not found. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          placeholder="Search Location" 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MapContainer center={[11.0168, 76.9558]} zoom={12} style={{ height: '590px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Pop Location */}
        {popupPosition && (
          <Marker position={popupPosition} icon={popLocationIcon}>
            <Popup closeButton={false} minWidth={200}>
              <div>{popupContent}</div>
            </Popup>
          </Marker>
        )}
        {/* Draw connections */}
        {connections.map((connection, index) => {
          const start = locations.find(location => location.name === connection.start).position;
          const end = locations.find(location => location.name === connection.end).position;
          return (
            <Polygon key={index} positions={[start, end]} color="blue">
              <Popup>{connection.tank}</Popup>
            </Polygon>
          );
        })}
        {/* Markers for all locations */}
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={locationIcon}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
        {/* Add other map elements like markers, polygons, and video overlays here */}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
