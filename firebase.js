// Importar Firebase desde CDN (LO CORRECTO PARA GITHUB PAGES)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// CONFIGURACIÓN DE TU PROYECTO (AGREGA TU databaseURL)
const firebaseConfig = {
  apiKey: "AIzaSyARKe_fiXphpqc_6QbbcGo4yMI9FoJClUw",
  authDomain: "latak-store.firebaseapp.com",
  databaseURL: "https://latak-store-default-rtdb.firebaseio.com/", // <-- AGREGA ESTA URL
  projectId: "latak-store",
  storageBucket: "latak-store.firebasestorage.app",
  messagingSenderId: "37124193954",
  appId: "1:37124193954:web:f0720f148e160b711fa1fb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar autenticación y base de datos para usar en script.js
export const auth = getAuth(app);
export const db = getDatabase(app);
