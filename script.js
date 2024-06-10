document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');
    const postsContainer = document.getElementById('postsContainer');
    const toggleMode = document.getElementById('toggleMode');
    const backButton = document.getElementById('backButton');

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            
            if (username && title && content) {
                const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
                blogPosts.push({ username, title, content });
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                errorMessage.textContent = '';
                window.location.href = 'blog.html';
            } else {
                errorMessage.textContent = 'Please fill out all fields.';
            }
        });
    }

    // Display blog posts
    if (postsContainer) {
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
        }
    }

    // Handle light/dark mode toggle
    if (toggleMode) {
        toggleMode.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Handle back button
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});

