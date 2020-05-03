const articlesSection = document.querySelector('.writing')

axios.get('https://dev.to/api/articles?username=aspittel').then((articles) => {
  articles.data
    .sort((a, b) => a.positive_reactions_count - b.positive_reactions_count)
    .slice(20, 30)
    .reverse()
    .forEach((article) => {
      const link = document.createElement('a')
      link.setAttribute('href', article.url)
      link.textContent = article.title
      articlesSection.appendChild(link)
    })
  const link = document.createElement('a')
  link.setAttribute('href', 'https://dev.to/aspittel')
  link.textContent = 'View All'
  link.classList.add('more-link')
  articlesSection.appendChild(link)
})
