// https://randomuser.me/api/

let userData = [];

const fetchUser = async () => {
    await fetch("https://randomuser.me/api/?results=24")
        .then((res) => res.json())
        // .then((data) => console.log(data.results));
        .then((data) => userData = data.results);
    
    console.log(userData);
}
const userDisplay =async () => {
    await fetchUser();

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return newDate;
    };

    // 
    const daycalc = (date) => {
        let today = new Date();
        let todayTimestamp = Date.parse(today);
        let timestamp = Date.parse(date)

        return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
    }

    document.body.innerHTML = userData.map((user) => 
        `
            <div class="card">
                <img src=${user.picture.large} alt="photo de ${user.name.last}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>${dateParser(user.dob.date)} </p>
                <em>Membre depuis : ${daycalc(user.registered.date)} jours </em>
            </div>

        `).join("");
}

userDisplay();
