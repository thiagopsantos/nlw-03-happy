// Create map options
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

// Create map
const map = L.map("mapid", options).setView([-27.222633, -49.6455874], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([-27.222633, -49.6455874], { icon })
  .addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll('.images button');

  buttons.forEach(button => button.classList.remove('active'));

  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  imageContainer.src = image.src;

  button.classList.add('active');
}
