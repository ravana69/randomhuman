const generateBtn = document.getElementById('generate-btn');
const randomUserImage = document.getElementById('random-user-image');

generateBtn.addEventListener('click', () => {
  fetchRandomUser();
});

function fetchRandomUser() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      const randomUser = data.results[0];
      const randomUserImageURL = randomUser.picture.large;
      randomUserImage.src = randomUserImageURL;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Load a random user image on page load
fetchRandomUser();
