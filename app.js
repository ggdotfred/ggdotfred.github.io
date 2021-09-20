// Your web app's Firebase configuration



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Igfaua4hBe89QT3_m8C5KIU-IZ083Gg",
  authDomain: "veggiebiteswebsite.firebaseapp.com",
  databaseURL: "https://veggiebiteswebsite-default-rtdb.firebaseio.com",
  projectId: "veggiebiteswebsite",
  storageBucket: "veggiebiteswebsite.appspot.com",
  messagingSenderId: "122871324662",
  appId: "1:122871324662:web:8f1ddaade383cb66d6b1d7",
  measurementId: "G-8375LVXJHL"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector("#contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let email = document.querySelector("#email").value;
  console.log(email);

  saveContactInfo(email);

  document.querySelector("#contactForm").reset();
}

// Save infos to Firebase
function saveContactInfo(email) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    email: email
  });
}
