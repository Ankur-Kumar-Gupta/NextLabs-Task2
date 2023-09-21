# Lazy Loading with Vanilla JavaScript

Lazy loading is a technique used in web development to enhance the user experience by loading content only when it's needed. This project demonstrates how to implement lazy loading using vanilla JavaScript, where additional data is loaded as the user scrolls down the page.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API](#api)

## Demo

You can see a live demo of this project [here](https://ankur-kumar-gupta.github.io/NextLabs-Task2/).

## Features

- Lazy loading of data as the user scrolls down the page.
- A 2-second delay with a loading animation before new data is fetched.
- Simple and responsive user interface for displaying loaded data.

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ankur-Kumar-Gupta/NextLabs-Task2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NextLabs-Task2
   ```

## Usage

1. Open the `index.html` file in your web browser.
2. As you scroll down the page, new data will be loaded automatically when you reach the end.

## API

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) to fetch dummy data for demonstration purposes. You can replace this API with any other publicly available API to load data relevant to your project.

### Customization

- To change the data source, update the `fetchData` function in `script.js` with the appropriate API endpoint.
- You can also customize the loading animation and styles by modifying the CSS in the `index.html` file.

```javascript
// Example API endpoint in script.js
fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
```

```css
/* Example CSS styles in index.html */
/* Customize the loading animation here */
#container {
    /* Your styles here */
}

.user-card {
    /* Your styles here */
}
```
