import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function Map() {
    return (
        <div id="mapContainer">
            <MapContainer center={[12.949084408114732, 77.71664858547852]} zoom={11.4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[12.967778739816191, 77.65306186885338]}>
                    <Popup>
                        Laddoos Jeevanbhimanagar <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[12.928078916305939, 77.67641032214665]}>
                    <Popup>
                        Laddoos Bellandur <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[12.913659663182521, 77.61016911626811]}>
                    <Popup>
                        Laddoos BTM <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[12.951325347444474, 77.71554226143915]}>
                    <Popup>
                        Laddoos Munekollala <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[12.971718421263633, 77.71172614859724]}>
                    <Popup>
                        Laddoos Doddanekundi <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[12.848878310095335, 77.65761347404461]}>
                    <Popup>
                        Laddoos Electronic City <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[12.9322018763794, 77.74229118188418]}>
                    <Popup>
                        Laddoos Varthur <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[13.031531059848765, 77.66957084476361]}>
                    <Popup>
                        Laddoos Horamavu <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;