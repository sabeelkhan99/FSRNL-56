const API_BASE_URL = 'https://api.github.com';

async function fetchProfile(username) {
    const res = await fetch(`${API_BASE_URL}/users/${username}`);
    const profile = await res.json();
    return profile;
}

// Parellel Code
async function fetchProfilesByUsernamesOptimised(usernames) {
    const promiseList = [];
    for (let username of usernames) {
        promiseList.push(fetchProfile(username));
    }
    const result = await Promise.all(promiseList);
    return result;
}

// Series
async function fetchProfilesByUsernames(usernames) {
    const res = [];
    for (let username of usernames) {
        const product = await fetchProfile(username);
        res.push(product);
    }
    return res;
}

async function main() {
    console.time('timer');
    const usernames = ['sabeelkhan99', 'anand22981','MAbdurahman','Avipriya02'];
    const profileList = await fetchProfilesByUsernamesOptimised(usernames);
    console.log(profileList);
    console.timeEnd('timer');
}

main();





