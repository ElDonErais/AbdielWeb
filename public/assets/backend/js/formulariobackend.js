import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc , doc ,setDoc} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

//Reemplaza esta configuración con la de tu proyecto de Firebase y quitar los comentarios
/*const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId: 
};*/


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const formulario = document.getElementById("formulario");
const parametro1 = document.getElementById("parametro1");
const parametro2 = document.getElementById("parametro2");
const parametro3 = document.getElementById("parametro3");
const documentoId = "datos";
const documentoId2 = "datos2";

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const p1 = parametro1.value;
  const p2 = parametro2.value;
  const p3 = parametro3.value;


  try {
    await setDoc(doc(firestore, "Datos", documentoId), {
      nombre: p1,
      apellido: p2,
      textobotoncolor: p3
    });
  } catch (error) {
    console.error("Error al actualizar datos", error);
  }
});