const movies = [
    { title: "Movie 1", image: "image1.jpg" },
    { title: "Movie 2", image: "image2.jpg" },
    { title: "Movie 3", image: "image3.jpg" },
    // Add more movies
];

const moviesContainer = document.getElementById('movies-container');

movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';
    movieDiv.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
    `;
    moviesContainer.appendChild(movieDiv);
});
