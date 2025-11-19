const singleBtn = document.getElementById("singleUserBtn");
const fiveBtn = document.getElementById("fiveUsersBtn");
const loader = document.getElementById("loader");
const container = document.getElementById("user-container");
const errorMsg = document.getElementById("error");

const API_URL = "https://randomuser.me/api/";// fetch users

async function fetchUsers(count = 1) {
    try {
        loader.classList.remove("hidden");

        const response = await fetch(`${API_URL}?results=${count}`);// fetch users
        if (!response.ok) throw new Error("Failed to load!");// Error handling

        const data = await response.json();// Converts raw data into JS objects
        displayUsers(data.results);

    } catch (error) {
        errorMsg.textContent = "Error fetching users ";
    } finally {
        loader.classList.add("hidden");
    }
} // display users

function displayUsers(users) {
    
    container.classList.add("fade-out");
    setTimeout(() => {
        container.innerHTML = ""; // clear old cards
        container.classList.remove("fade-out");

        users.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("card", "fade-in"); // add fade-in animation

            card.innerHTML = `
                <img src="${user.picture.large}" alt="">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.email}</p>
                <p>${user.location.country}</p>
            `;

            container.appendChild(card);
        });
    }, 400); // matches CSS fade-out duration
}


// button callbacks
singleBtn.addEventListener("click", () => fetchUsers(1));// fetch single user
fiveBtn.addEventListener("click", () => fetchUsers(5));// fetch five users
