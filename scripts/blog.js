// Chave de API do Dev.to (substitua pela sua chave)
const apiKey = 'SUA_CHAVE_DE_API';

// Função para buscar os últimos posts do seu perfil no Dev.to
async function getDevToPosts() {
  try {
    const response = await fetch(`https://dev.to/api/articles/me`, {
      headers: {
        'api-key': apiKey
      }
    });
    const data = await response.json();
    return data.slice(0, 4); // Pegar apenas os últimos 4 posts
  } catch (error) {
    console.error('Erro ao buscar posts do Dev.to:', error);
    return [];
  }
}

// Função para exibir os posts na tela
async function showPosts() {
  const posts = await getDevToPosts();
  const postsContainer = document.getElementById('posts-container');
  
  posts.forEach(post => {
    const postElement = document.createElement('p');
    const link = document.createElement('a');
    link.href = post.url;
    link.textContent = post.title;
    link.target = "_blank";
    postElement.appendChild(link);
    postsContainer.appendChild(postElement);
  });
}

// Chamada da função para exibir os posts
showPosts();