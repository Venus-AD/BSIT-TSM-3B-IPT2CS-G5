
document.addEventListener('DOMContentLoaded', () => {
  const jokeElement = document.getElementById('joke');
  const newJokeButton = document.getElementById('new-joke-button');

  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        jokeElement.innerHTML = `<p>${data.setup}</p><p>${data.punchline}</p>`;
      })
      .catch(error => {
        console.error('Error fetching the joke:', error);
        jokeElement.innerText = 'Failed to load joke.';
      });
  };
  fetchJoke();
  newJokeButton.addEventListener('click', fetchJoke);
});
