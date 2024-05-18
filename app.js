document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5432a5c9149748ad9a0a0cb6a1e80593';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';
  
        data.articles.forEach(article => {
          const articleElement = document.createElement('div');
          articleElement.className = 'news-article';
          articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          `;
          newsContainer.appendChild(articleElement);
        });
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        document.getElementById('news-container').innerText = 'Failed to load news.';
      });
  });
  