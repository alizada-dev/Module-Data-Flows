// const getProfile = (url) => {
//     fetch(url)
//         // parses it as JSON into an object
//         .then((response) => response.json())
//         .then((data) => data.html_url)
//         .then((htmlurl) => console.log(htmlurl))
// }

// getProfile("https://api.github.com/users/alizada-dev")



const getProfile = async (url) => {
    const response = await fetch(url);
    return response.json();
}

getProfile("https://api.github.com/users/alizada-dev")
    .then((response) => console.log(response));



// fetch("https://api.github.com/users/alizada-dev")
//     .then((response) => response.json())
//     .then((res) => console.log(res))