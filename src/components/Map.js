import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

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
                        Laddoos - Jeevan Bima Nagar <br /> Phone: +91 93809 70276
                    </Popup>
                </Marker>
                <Marker position={[12.928078916305939, 77.67641032214665]}>
                    <Popup>
                        Laddoos - Bellandur <br /> Phone: +91 63636 45257
                    </Popup>
                </Marker>
                <Marker position={[12.913659663182521, 77.61016911626811]}>
                    <Popup>
                        Laddoos - BTM <br /> Phone: +91 63636 21722
                    </Popup>
                </Marker>
                <Marker position={[12.951325347444474, 77.71554226143915]}>
                    <Popup>
                        Laddoos - Munekollala <br /> Phone: +91 63637 04358
                    </Popup>
                </Marker>
                <Marker position={[12.971718421263633, 77.71172614859724]}>
                    <Popup>
                        Laddoos - Doddanekundi <br /> Phone: +91 97402 81222
                    </Popup>
                </Marker>
                <Marker position={[12.848878310095335, 77.65761347404461]}>
                    <Popup>
                        Laddoos - Electronic City <br /> Phone: +91 63637 02404
                    </Popup>
                </Marker>
                <Marker position={[12.9322018763794, 77.74229118188418]}>
                    <Popup>
                        Laddoos - Varthur <br /> Phone: +91 63644 26909
                    </Popup>
                </Marker>
                <Marker position={[13.031531059848765, 77.66957084476361]}>
                    <Popup>
                        Laddoos - Horamavu <br /> Phone: +91 96320 06609
                    </Popup>
                </Marker>
                <Marker position={[13.004910499891258, 77.66013969120293]}>
                    <Popup>
                        Laddoos - Kasturi Nagar <br /> Phone: +91 96320 01866
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;