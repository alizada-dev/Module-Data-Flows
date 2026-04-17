
const state = {
    films: [],

    searchTerm: "",
}

const template = document.getElementById("film-card");

const createFilmCard = (film) => {
    const card = template.content.cloneNode(true);

    card.querySelector("h3").textContent = film.title;

    card.querySelector("[data-director]").textContent = `Director: ${film.director}`;

    card.querySelector("time").textContent = `${film.duration} minutes`;

    card.querySelector("[data-certificate]").textContent = `Certificate: ${film.certificate}`;

    card.querySelector("[data-times]").textContent = film.times.join(", ")

    return card;
}

const container = document.getElementById("container");
const endpoint = "https://curriculum.codeyourfuture.io/itp/dummy-apis/films.json";

function render() {
    container.textContent = "";

    const filteredFilms = state.films.filter((film) => {

        const term = state.searchTerm.toLowerCase();
        
        return film.title.toLowerCase().includes(term) 
    });


    const filmCard = filteredFilms.map(createFilmCard);


    container.append(...filmCard);
}


const searchBox = document.getElementById("search");

searchBox.addEventListener("input", handleInput);

function handleInput(event) {
    state.searchTerm = event.target.value;
    render();
}

const fetchFilms = async () => {
    const response = await fetch(endpoint);
    return await response.json();
};

fetchFilms().then((films) => {
    state.films = films;
    render();
})

render();