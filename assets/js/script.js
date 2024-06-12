    const form = document.querySelector('#blogForm');
    // const errorMessage = document.querySelector('#errorMessage');

    // Handle form submission
    form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const username = document.querySelector('#username').value;
            const title = document.querySelector('#title').value;
            const content = document.querySelector('#content').value;
            
            if (username && title && content) {
                const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
                blogPosts.push({ username, title, content });
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                window.location.href = '/blog.html';
            } else {
                errorMessage.textContent = 'Please fill out all fields.';
            }
        });
