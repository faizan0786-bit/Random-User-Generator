# 🧑‍💻 Random User Generator

A simple and modern web application that fetches random user details using the **RandomUser API**.
It demonstrates the use of **Async/Await**, **Promises**, **Callbacks**, **Error Handling**, and **Dynamic DOM Manipulation** in JavaScript.

---

## 🚀 Features

### ✔️ Fetch 1 or 5 Random Users

* **Get 1 User** button → Fetches a single random user
* **Get 5 Users** button → Fetches multiple users and displays them in a grid layout

### ✔️ Uses Async/Await for API Fetching

* Smooth asynchronous API calls
* Clean and readable code structure

### ✔️ Loader/Spinner

* Shows a loading animation while fetching data

### ✔️ Modern UI with Animations

* Fade-in and fade-out effects
* Stylish glass-morphism background
* Hover animation on user cards

### ✔️ Error Handling

* Displays proper message if API fails

### ✔️ Fully Responsive

* Works on all screen sizes
* User cards automatically adjust in grid layout

---

## 🧩 Tech Stack

* **HTML5**
* **CSS3** (Glassmorphism + Animations + Grid Layout)
* **JavaScript (Vanilla)**

  * Async / Await
  * Callback Events
  * Fetch API

---

## 📂 Project Structure

```
/project
│── index.html
│── style.css
└── script.js
```

---

## 🛠️ How It Works

### 1️⃣ User clicks a button

* `Get 1 User` → fetchUsers(1)
* `Get 5 Users` → fetchUsers(5)

### 2️⃣ Loader appears

```js
loader.classList.remove("hidden");
```

### 3️⃣ JavaScript fetches data from API

```js
const response = await fetch(`${API_URL}?results=${count}`);
```

### 4️⃣ The fetched users are displayed as cards

```js
displayUsers(data.results);
```

### 5️⃣ Each card shows:

* Profile Picture
* Full Name
* Email
* Country

---

## 📸 Screenshots (Add your images here)

```
![App Screenshot 1](your-image-link)
![App Screenshot 2](your-image-link)
```

---

## 🧪 Example Code Snippet

### Fetch Users Function

```js
async function fetchUsers(count = 1) {
    try {
        loader.classList.remove("hidden");

        const response = await fetch(`${API_URL}?results=${count}`);
        if (!response.ok) throw new Error("Failed to load!");

        const data = await response.json();
        displayUsers(data.results);

    } catch (error) {
        errorMsg.textContent = "Error fetching users";
    } finally {
        loader.classList.add("hidden");
    }
}
```

---

## 🌐 API Used

**RandomUser.me API**

* [https://randomuser.me/api/](https://randomuser.me/api/)
* Free, open-source API for random user data

---

## 📝 Future Enhancements

* 🔍 Search/filter users
* 🌙 Dark Mode toggle
* 📥 Download user card as image
* 💾 Save last fetched users in LocalStorage
* ✨ Slide animations

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.

---
