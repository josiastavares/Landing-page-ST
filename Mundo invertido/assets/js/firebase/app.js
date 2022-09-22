
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBmA2d-D6-pvi376UtUdH5dYbEVFJBlaDY",
    authDomain: "projeto-teste-12c95.firebaseapp.com",
    projectId: "projeto-teste-12c95",
    storageBucket: "projeto-teste-12c95.appspot.com",
    messagingSenderId: "768315630488",
    appId: "1:768315630488:web:cdc3d9c4214af9585941ed",
    measurementId: "G-DF27G0LNBR"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app