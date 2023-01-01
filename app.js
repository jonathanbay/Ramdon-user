// https://randomuser.me/api/

let userData = [];

const fetchUser = async () => {
    await fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        // .then((data) => console.log(data.results));
        .then((data) => userData = data.results);
    
    console.log(userData);
}

fetchUser();
