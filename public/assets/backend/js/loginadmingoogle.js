const firebase = window.firebase;
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


const initializeApp = firebase.initializeApp;
const firebaseApp = firebase.initializeApp(firebaseConfig);

const getAnalytics = firebase.analytics;
const getAuth = firebase.auth;
const signInWithPopup = firebase.auth().signInWithPopup;
const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

const provider = new firebase.auth.GoogleAuthProvider();
const analytics = getAnalytics(firebaseApp);
const auth = firebaseApp.auth();

window.call_login_google = function () {
  auth.signInWithPopup(provider)
      .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...

          // Aquí puedes agregar la acción que deseas realizar después de que se confirme la identidad del usuario.
          // Por ejemplo, podrías redirigir al usuario a otra página:
          window.location.href = "/manager";

          // O podrías mostrar un mensaje de bienvenida:
          alert(`Bienvenido, ${user.displayName}!`);

          // Asegúrate de reemplazar estos ejemplos con la acción que realmente deseas realizar.
      }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // ...

          // Muestra un mensaje de error al usuario
          alert(`Error: ${errorMessage}`);
      });
}