// Função para buscar os posts do Medium
async function getMediumPosts(username) {
    const parser = new RSSParser();
    const feed = await parser.parseURL(`https://medium.com/feed/${username}`);
    return feed.items;
}

  // Função para exibir os posts na tela
async function showPosts(username) {
    const posts = await getMediumPosts(username);
    const postsContainer = document.getElementById('posts-container');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${new Date(post.isoDate).toLocaleDateString()}</p>
            <p>${post.contentSnippet}</p>
            <a href="${post.link}" target="_blank">Read more</a>
            <hr>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Chamada da função para exibir os posts (substitua 'your-username' pelo seu username do Medium)
showPosts('migmoroni');