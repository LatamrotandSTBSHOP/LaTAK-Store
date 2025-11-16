// firebase.js COMPLETO — LATaK STORE // Compatible 100% con GitHub Pages

// --- IMPORTS Firebase (CDN) --- import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"; import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// --- CONFIGURACIÓN DE TU FIREBASE --- const firebaseConfig = { apiKey: "AIzaSyARKe_fiXphpqc_6QbbcGo4yMI9FoJClUw", authDomain: "latak-store.firebaseapp.com", databaseURL: "https://latak-store-default-rtdb.firebaseio.com/", projectId: "latak-store", storageBucket: "latak-store.firebasestorage.app", messagingSenderId: "37124193954", appId: "1:37124193954:web:f0720f148e160b711fa1fb" };

// --- INICIALIZACIÓN --- export const app = initializeApp(firebaseConfig); export const auth = getAuth(app); export const db = getFirestore(app); export const rtdb = getDatabase(app); export const googleProvider = new GoogleAuthProvider();

// ===================================================================== //                            AUTENTICACIÓN // =====================================================================

// LOGIN con Google export async function loginGoogle() { try { const result = await signInWithPopup(auth, googleProvider); return result.user; } catch (error) { console.error("Error en Google Login:", error); } }

// REGISTRO con email y contraseña export async function registrarEmail(email, password) { try { const result = await createUserWithEmailAndPassword(auth, email, password); return result.user; } catch (error) { console.error("Error registrando usuario:", error); } }

// LOGIN con email y contraseña export async function loginEmail(email, password) { try { const result = await signInWithEmailAndPassword(auth, email, password); return result.user; } catch (error) { console.error("Error iniciando sesión:", error); } }

// ===================================================================== //                    GUARDAR Y CARGAR PRECIOS (FIRESTORE) // =====================================================================

// Guardar precio de un producto export async function guardarPrecio(idProducto, datos) { try { await setDoc(doc(db, "precios", idProducto), datos); console.log("Precio guardado correctamente"); } catch (error) { console.error("Error al guardar precio:", error); } }

// Obtener un precio export async function obtenerPrecio(idProducto) { try { const ref = doc(db, "precios", idProducto); const snap = await getDoc(ref); return snap.exists() ? snap.data() : null; } catch (error) { console.error("Error obteniendo precio:", error); } }

// Obtener todos los precios para mostrarlos en la tienda export async function obtenerTodosPrecios() { try { const ref = collection(db, "precios"); const snapshot = await getDocs(ref);

let precios = [];
snapshot.forEach(docu => {
  precios.push({ id: docu.id, ...docu.data() });
});

return precios;

} catch (error) { console.error("Error obteniendo lista de precios:", error); } }
