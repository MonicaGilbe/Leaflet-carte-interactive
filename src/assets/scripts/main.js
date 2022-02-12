
const apiKey = "AAPK7093c98f9dce403db6986478aa0290e0DN9UUhk_ldJgXa7ogBD48SHn_TAJ_znJ8_9mBuykB_dPKpHsabhPmY94l_rNuxWvS";

// Coordonées
let centre = [48.543080950483116, -69.20983362777652];

// La carte
let map = L.map("map").setView(centre, 10);

//Fond de carte
let coucheDeBase = L.tileLayer(

    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
    {
        attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 1,
        maxZoom: 16,
        ext: "jpg",
    }
    ).addTo(map);

// Déclarations de variables

let villesLabel = L.esri.basemapLayer("TerrainLabels");

let centreEscoumins = [48.34866474740287, -69.40350096073513];
let centreBergeronnes = [48.244821464328574, -69.54854666282955];
let centreForestville = [48.738908756945705, -69.09546363786525];
let centrePortneuf = [48.616762982396324, -69.1012900179826];
let centreLongueRive = [48.54922000700041, -69.24988482716074];

// Création d'icones

let iconBergeronnes = L.icon({

    iconUrl: "/src/assets/images/whaletail.png",
    iconSize: [40, 40],
});

let iconEscoumins = L.icon({

    iconUrl: "/src/assets/images/boat.png",
    iconSize: [40, 40],
});

let iconForestville = L.icon({

    iconUrl: "/src/assets/images/tree.png",
    iconSize: [40, 40],
});

let iconPortneuf = L.icon({

    iconUrl: "/src/assets/images/crab.png",
    iconSize: [40, 40],
});

let iconLongueRive = L.icon({

iconUrl: "/src/assets/images/moose.png",
iconSize: [40, 40],
});

// Création de marqueurs avec popup qui indique la ville et le logo de la ville

let marqueurEscoumins = L.marker(centreEscoumins, {

    icon: iconEscoumins,
})
.bindPopup(
    '<div class="popup"><h1>Les Escoumins</h1><img src="data:image/jpeg;base64,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" alt="Logo Escoumins"></div>'
)
.addTo(map);

let marqueurForestville = L.marker(centreForestville, {

    icon: iconForestville,
})
.bindPopup(
    '<h1>Forestville</h1><img src="https://static.wixstatic.com/media/66afd7_95b43ba28c8247179f16de7afad30baf~mv2.gif" alt="Logo Forestville">'
)
.addTo(map);

let marqueurBergeronne = L.marker(centreBergeronnes, {

    icon: iconBergeronnes,
})
.bindPopup(
    '<h1>Les Bergeronnes</h1><img src="data:image/jpeg;base64,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" alt="Logo Bergronnes">'
)
.addTo(map);

let marqueurPortneuf = L.marker(centrePortneuf, {

    icon: iconPortneuf,
})
.bindPopup(
    '<h1>Portneuf-sur-mer</h1><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Logo_Portneuf-sur-Mer.jpg" alt="Logo Portneuf-sur-mer ">'
)
.addTo(map);

let marqueurLongueRive = L.marker(centreLongueRive, {

    icon: iconLongueRive,
})
.bindPopup(

    '<h1>Longue-Rive</h1><img src="https://www.longuerive.ca/fichiersUploadOpt/0-0-0-0-500-471-6a9cadec9fcd2a62dec8ac9a21539fec645549632a02888e2/20211109160207-logo-longue-rive.png" alt="Logo Longe-rive">'
)
.addTo(map);

// Création de control de couches
let villes = {

    "Escoumins": marqueurEscoumins,
    "Bergeronnes": marqueurBergeronne,
    "Forestville": marqueurForestville,
    "Portneuf-sur-mer": marqueurPortneuf,
    "Longue-rive": marqueurLongueRive,

};

let baseLayers = {

"Couche de Base": coucheDeBase,
villes: villesLabel,

};

let aireAlimentation = L.esri.dynamicMapLayer({
url: "https://gisp.dfo-mpo.gc.ca/arcgis/rest/services/FGP/BlueWhaleHabitat_HabitatBaleineBleue/MapServer/",
});

let phoques = L.esri.dynamicMapLayer({
url: "https://gisp.dfo-mpo.gc.ca/arcgis/rest/services/FGP/Seal_Phoque_Haulout/MapServer",
opacity: 0.9,
});

let rorqualBosse = L.esri
.dynamicMapLayer({
    url: "https://gisp.dfo-mpo.gc.ca/arcgis/rest/services/FGP/HumpbackWhales_RorqualBosse_Observation/MapServer",
    opacity: 0.7,
})
.addTo(map);

L.esri
.dynamicMapLayer({
    url: "https://gisp.dfo-mpo.gc.ca/arcgis/rest/services/FGP/ParticulateMatter_MatiereParticulaire_StLaurent/MapServer/0",
})
.addTo(map);

let baleine = {

"Habitat de la baleine bleu": aireAlimentation,
"Présence de phoques": phoques,
"Présence de Rorquals à bosse": rorqualBosse,

};

// ECHELLE

let echelle = L.control
.scale({
    metric: true,
    imperial: false,
})
.addTo(map);

// Control

let layerControl = L.control.layers(baseLayers, baleine).addTo(map);

//Localisation de l'utilisateur
let home = L.AwesomeMarkers.icon({
icon: "home",
prefix: "fa",
iconColor: "#fff",
markerColor: "blue",
spin: false,
});

let localisation = document.getElementById("localisation");
localisation.addEventListener("click", function () {
localisation.disabled = true; // on désactive le bouton pour evter le spam, la geolocaliation c'est long

map.on("locationfound", onLocationFound); // s'il vous trouve il lance cette fonction
map.on("locationerror", onLocationError); // s'il vous trouve pas, il lance cette fonction

map.locate({ setView: true, maxZoom: 16 });
});

function onLocationFound(e) {
    console.log(e.latlng);
    let marqueur = L.marker(e.latlng, { icon: home })
    .addTo(map)
    .bindPopup("<h3>Vous êtes ici</h3>")
    .openPopup();
}

function onLocationError(e) {

    localisation.disabled = false;
    alert(e.message);
}

// Géocodage / Trouver une adresse

let geocoder = L.Control.geocoder({

    defaultMarkGeocode: true,
    position: "topleft",
})
.on("markgeocode", function (e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest(),
    ]).addTo(map);

    map.fitBounds(poly.getBounds());
    poly.openPopup();
})
.addTo(map);