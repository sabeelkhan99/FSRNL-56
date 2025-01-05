const form = document.querySelector('form');
const section = document.querySelector('section');

const BASE_URL = "https://api.tvmaze.com";

async function fetchShows(searchText) {
    try {
        const res = await axios.get(`${BASE_URL}/search/shows?q=${searchText}`);
        if (res.status !== 200) {
            throw new Error('Cannot fetch at the moment');
        }
        return res.data;
    }
    catch (err) {
        console.error('Error while fetching shows', err);
    }
}

function renderShowsToUI(shows) {
    while (section.firstChild) {
        section.firstChild.remove();
    }
    
    for (const item of shows) {
        if (!item.show.image) {
            continue;
        }
        const img = document.createElement('img');
        img.setAttribute('src', item.show.image.medium);
        img.setAttribute('class', 'm-2');
        section.append(img);
    }
}

async function searchAndDisplayResult(searchText) {
    const shows = await fetchShows(searchText);
    renderShowsToUI(shows);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchText = form.elements[0].value;
    if (searchText.trim().length === 0) {
        return;
    }
    searchAndDisplayResult(searchText)
})