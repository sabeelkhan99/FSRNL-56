const API_BASE_URL = 'https://api.github.com';

async function fetchProfile(username) {
    const res = await fetch(`${API_BASE_URL}/users/${username}`);
    const profile = await res.json();
    return profile;
}

// 3 ms 

async function fetchProfilesByUsernames(usernames) {
    const promiseList = [];
    for (let username of usernames) {
        promiseList.push(fetchProfile(username));
    }
    const result = await Promise.all(promiseList); // 3.4 ms
    return result;
}

async function main() {
    console.time('timer');
    const usernames = ['sabeelkhan99', 'anand22981','MAbdurahman','Avipriya02'];
    const profileList = await fetchProfilesByUsernames(usernames);
    console.log(profileList);
    console.timeEnd('timer');
}

main();





