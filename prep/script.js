
const state = {
    films: [
        {
            title: "Intersteller",
            director: "Christopher Nolan",
            times: ["15:35"],
            certificate: "15",
            duration: 190
        },
        {
            title: "ZNMD",
            director: "Zoya Akhtar",
            times: ["15:00", "20:00"],
            certificate: "12A",
            duration: 153
        },
        {
            title: "PK",
            director: "Rajkumar",
            times: ["13:15", "15:15", "17:15"],
            certificate: "8B",
            duration: 165
        },
        {
            title: "3 Idiots",
            director: "Rajkumar Hirani",
            times: ["13:15", "15:15", "17:15"],
            certificate: "98C",
            duration: 198
        },
        {
            title: "Inception",
            director: "Christopher Nolan",
            times: ["13:00", "15:00"],
            certificate: "7C",
            duration: 128
        }
    ],

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

render();
