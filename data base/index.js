
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCVEFsJbxS3WEFQ4ZMPQCKknjQDKekb3HE",
    authDomain: "database-d6701.firebaseapp.com",
    projectId: "database-d6701",
    storageBucket: "database-d6701.firebasestorage.app",
    messagingSenderId: "211827017087",
    appId: "1:211827017087:web:63f2c797f49c317837064a",
    measurementId: "G-524H5WR5W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle the form submission
document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault();

    // Get the form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const birth = document.getElementById("birth").value;
    
    // Get the selected gender
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    
    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    // Store data in Firebase Realtime Database
    set(ref(db, "student data/" + firstName), {
        Name: firstName,
        Last: lastName,
        Email: email,
        Password: password,
        Phone: phone,
        Birth: birth,
        Gender: gender
    });

    alert("Data Saved Successfully");
});
