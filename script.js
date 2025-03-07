const timeSelect = document.getElementById('time-select');
const dateSelect = document.getElementById('date-select');
const skyContainer = document.getElementById('sky');
const starsContainer = document.getElementById('stars');
const planetsContainer = document.getElementById('planets');
const constellationList = document.getElementById('constellation-list');
const skyInfo = document.getElementById('sky-info');

const starData = [
  { name: 'Orion', description: 'A prominent constellation located on the celestial equator.' },
  { name: 'Ursa Major', description: 'A constellation in the northern sky, containing the Big Dipper.' },
  { name: 'Leo', description: 'A zodiac constellation associated with the lion.' },
  // Add more constellations as needed
];

const planetData = [
  { name: 'Mercury', description: 'The smallest and closest planet to the Sun.' },
  { name: 'Venus', description: 'Second planet from the Sun, similar in size to Earth.' },
  { name: 'Earth', description: 'Our home planet, the third from the Sun.' },
  { name: 'Mars', description: 'The fourth planet, known as the Red Planet.' },
  // Add more planets as needed
];

// Function to simulate day and night sky
function updateSky() {
  const isDay = timeSelect.value === 'day';
  skyContainer.style.backgroundColor = isDay ? '#87CEEB' : '#111';
  starsContainer.innerHTML = '';  // Clear existing stars
  planetsContainer.innerHTML = '';  // Clear existing planets

  if (!isDay) {
    addStars();
    addPlanets();
  }
}

function addStars() {
  // For simplicity, generate some random stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.backgroundColor = 'white';
    star.style.borderRadius = '50%';
    starsContainer.appendChild(star);
  }
}

function addPlanets() {
  // Generate planets at random positions for simplicity
  planetData.forEach(planet => {
    const planetElem = document.createElement('div');
    planetElem.classList.add('planet');
    planetElem.style.position = 'absolute';
    planetElem.style.left = `${Math.random() * 100}%`;
    planetElem.style.top = `${Math.random() * 100}%`;
    planetElem.style.width = '10px';
    planetElem.style.height = '10px';
    planetElem.style.backgroundColor = 'yellow';
    planetElem.style.borderRadius = '50%';
    planetElem.title = planet.name;

    planetElem.addEventListener('click', () => {
      skyInfo.innerHTML = `<strong>${planet.name}</strong>: ${planet.description}`;
    });

    planetsContainer.appendChild(planetElem);
  });
}

function showConstellations() {
  constellationList.innerHTML = '';
  starData.forEach(constellation => {
    const listItem = document.createElement('li');
    listItem.textContent = constellation.name;
    listItem.addEventListener('click', () => {
      skyInfo.innerHTML = `<strong>${constellation.name}</strong>: ${constellation.description}`;
    });
    constellationList.appendChild(listItem);
  });
}

// Event listeners
timeSelect.addEventListener('change', updateSky);
dateSelect.addEventListener('change', () => {
  const selectedDate = dateSelect.value;
  skyInfo.innerHTML = `Sky view for ${selectedDate}`;
  updateSky();
});

// Initial setup
updateSky();
showConstellations();
