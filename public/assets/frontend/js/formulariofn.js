import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc , doc ,setDoc, getDoc} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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
const documentoId = "datos";
const datosDiv = document.getElementById("mainpage");
const datosDiv2 = document.getElementById("botoncolor");

async function mostrarDatosmainpage() {
  const docRef = doc(firestore, "Datos", documentoId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    datosDiv.innerHTML = `Bienvenido ${docSnap.data().nombre} ${docSnap.data().apellido}, aqui he desarrollado algunas aplicaciones para que puedas utilizar`;
  } else {
    console.log("No se encontró el documento!");
  }
}

async function mostrarDatoscolor() {
  const docRef = doc(firestore, "Datos", documentoId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    datosDiv2.innerHTML = `${docSnap.data().textobotoncolor}`;
  } else {
    console.log("No se encontró el documento!");
  }
}

mostrarDatosmainpage();
mostrarDatoscolor();