// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCN_ZRMGePzUPppflRqsZLGCV1CxMVakeI",
  authDomain: "casamento-fabio-e-maria.firebaseapp.com",
  databaseURL: "https://casamento-fabio-e-maria-default-rtdb.firebaseio.com",
  projectId: "casamento-fabio-e-maria",
  storageBucket: "casamento-fabio-e-maria.firebasestorage.app",
  messagingSenderId: "256442734615",
  appId: "1:256442734615:web:90be4e12eb477b5fed6452",
  measurementId: "G-R00VX1D3MD"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
