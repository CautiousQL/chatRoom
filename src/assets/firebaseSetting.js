import "https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.0.1/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/8.0.1/firebase-storage.js";
import "https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyByHoX49siWizQzHGQcnvj3UEMcG5jDcN0",
    authDomain: "videochat-175aa.firebaseapp.com",
    databaseURL:
        "https://videochat-175aa-default-rtdb.asia-southeast1.firebasedatabase.app",
    // https://videochat-175aa-default-rtdb.firebaseio.com/
    projectId: "videochat-175aa",
    storageBucket: "gs://videochat-175aa.appspot.com/",
};

const fb = firebase.initializeApp(firebaseConfig);

export default fb;
