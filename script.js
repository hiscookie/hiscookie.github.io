const timeSelect = document.getElementById('time-select');
const dateSelect = document.getElementById('date-select');
const skyContainer = document.getElementById('sky');

// Set the default sky view to be the night sky
let currentTime = 'night';

// Initialize Stellarium web viewer
let stellariumUrl = "https://stellarium-web.org/";
let skyView;

// Function to load the Stellarium Web Viewer based on the selected date and time
function loadSkyView() {
  const date = dateSelect.value || '2025-05-05';
  const timeOfDay = currentTime === 'day' ? 'day' : 'night';
  
  // Construct the URL with the selected date and time
  const viewerUrl = `${stellariumUrl}?date=${date}&time=${timeOfDay}`;
  
  skyContainer.innerHTML = `<iframe src="${viewerUrl}" width="100%" height="100%" frameborder="0"></iframe>`;
}

// Event listeners
timeSelect.addEventListener('change', (event) => {
  currentTime = event.target.value;
  loadSkyView();
});

dateSelect.addEventListener('change', () => {
  loadSkyView();
});

// Initial load
loadSkyView();
