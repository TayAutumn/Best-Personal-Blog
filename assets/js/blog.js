const postsContainer = document.querySelector('#postsContainer');
const toggleMode = document.querySelector('#toggleMode');
const backButton = document.querySelector('#backButton');
// Display blog posts
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
if (blogPosts.length > 0) {
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Author: </strong>${post.username}</p>
        `;
        postsContainer.appendChild(postElement);
    });
} else {
    postsContainer.innerHTML = '<p>No blog posts yet. Go back and add some!</p>';
};

// Handle light/dark mode toggle
toggleMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Handle back button
backButton.addEventListener('click', function () {
    window.location.href = '/index.html';
});