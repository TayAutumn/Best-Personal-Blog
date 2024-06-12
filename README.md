# Best-Personal-Blog

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a simple Personal Blog application where users can create and view blog posts. The application consists of two main pages: one for submitting new blog posts and another for viewing the list of existing posts.

## Features
- Submit a new blog post with a username, title, and content.
- View a list of all submitted blog posts.
- Toggle between light and dark modes for better readability.
- Navigate back to the blog submission page from the blog posts page.

## Technologies Used
- HTML
- CSS
- JavaScript

## Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/personal-blog.git
    ```
2. Navigate to the project directory:
    ```sh
    cd personal-blog
    ```
3. Open `index.html` in your preferred web browser.

## Usage
1. **Submit a Blog Post:**
    - Open `index.html` in your browser.
    - Fill in the username, blog title, and content fields.
    - Click the "Submit" button to save the blog post. The post will be stored in the browser's local storage.

2. **View Blog Posts:**
    - After submitting a blog post, you will be redirected to `blog.html`.
    - You can see the list of all blog posts displayed.
    - Use the "Toggle Light-Dark Mode" button to switch between light and dark themes.
    - Click the "Back" button to return to the blog submission page.

## File Structure
```plaintext
personal-blog/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── blog.js
│       └── script.js
├── index.html
└── blog.html

## HTML Files
- **index.html**: The homepage for submitting new blog posts.
- **blog.html**: The page for viewing all blog posts.

## CSS Files
- **style.css**: Contains styles for the application, including light and dark mode styles.

## JavaScript Files
- **script.js**: Handles form submission and local storage for blog posts.
- **blog.js**: Manages the display of blog posts and handles the light/dark mode toggle and back navigation.

## Future Enhancements
- Implement user authentication for more secure and personalized blog posts.
- Add the ability to edit or delete blog posts.
- Improve the UI/UX with more advanced styling and animations.
- Integrate a backend server to store blog posts in a database.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is open-source and available under the MIT License.
