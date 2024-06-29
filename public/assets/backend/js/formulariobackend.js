import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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
const formulariousers = document.getElementById("formulariousers");
const parametro1 = document.getElementById("parametro1");
const parametro2 = document.getElementById("parametro2");
const parametro3 = document.getElementById("parametro3");
const username = document.getElementById("nombres");
const useraddress = document.getElementById("direccion");
const usermail = document.getElementById("correo");
const userphone = document.getElementById("telefono");
const userstatus = document.getElementById("estado");
const documentoId = "datos";

// Función para mostrar los datos en la página principal
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

// Función para agregar usuarios
formulariousers.addEventListener("submit", async function (event) {
  event.preventDefault();

  const p1 = username.value;
  const p2 = useraddress.value;
  const p3 = usermail.value;
  const p4 = userphone.value;
  const p5 = userstatus.value;

  // Leer el último id usado desde la colección Metadata
  const metadataDoc = await getDoc(doc(firestore, "Metadata", "lastId"));
  let lastId = metadataDoc.exists() ? metadataDoc.data().lastId : 0;

  // Incrementar el id
  const newId = lastId + 1;

  try {
    // Formar el nombre del documento usando el nuevo id
    const documentName = `usuario${newId}`;

    // Usar el nuevo id para nombrar el documento al agregarlo
    await setDoc(doc(firestore, "Datos", documentName), {
      id: newId,
      nombres: p1,
      direccion: p2,
      correo: p3,
      telefono: p4,
      estado: p5
    });

    // Actualizar el último id utilizado en Metadata
    await setDoc(doc(firestore, "Metadata", "lastId"), { lastId: newId });
  } catch (error) {
    console.error("Error al agregar datos", error);
  }
  formulariousers.reset();
  alert("Usuario agregado correctamente.");
  await loadAndDisplayUsers();
});

// Función para cargar y mostrar los usuarios
async function loadAndDisplayUsers() {
  const usersTableDiv = document.getElementById('usersTable');
  let tableHTML = '<table><tr><th>ID</th><th>Nombres</th><th>Dirección</th><th>Correo</th><th>Teléfono</th><th>Estado</th></tr>';

  try {
    const querySnapshot = await getDocs(collection(firestore, "Datos"));
    querySnapshot.forEach((doc) => {
      if (doc.id.startsWith("usuario")) { // Verificar si el ID comienza con "usuario"
        const user = doc.data();
        // Construir cada fila de la tabla solo para documentos que comienzan con "usuario"
        tableHTML += `<tr id="row-${doc.id}">
                        <td>${doc.id}</td>
                        <td>${user.nombres}</td>
                        <td>${user.direccion}</td>
                        <td>${user.correo}</td>
                        <td>${user.telefono}</td>
                        <td>${user.estado === 1 ? 'Habilitado' : 'Deshabilitado'}</td>
                        <td>
                          <button class="edit-btn" data-id="${doc.id}">Editar</button>
                          <button class="save-btn" data-id="${doc.id}" style="display:none;">Guardar</button>
                        </td>
                      </tr>`;
      }
    });
    tableHTML += '</table>';
    usersTableDiv.innerHTML = tableHTML;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    usersTableDiv.innerHTML = '<p>Error al cargar los datos.</p>';
  }
}

loadAndDisplayUsers();

// Función para convertir celdas en campos editables
function editRow(docId) {
  const row = document.getElementById(`row-${docId}`);
  const cells = row.querySelectorAll('td');
  cells.forEach((cell, index) => {
    if (index > 0 && index < 6) { 
      let input;
      if (index === 5) { // Columna de estado
        input = document.createElement('select');
        const optionHabilitado = document.createElement('option');
        optionHabilitado.value = '1';
        optionHabilitado.text = 'Habilitado';
        const optionDeshabilitado = document.createElement('option');
        optionDeshabilitado.value = '0';
        optionDeshabilitado.text = 'Deshabilitado';
        input.appendChild(optionHabilitado);
        input.appendChild(optionDeshabilitado);
        input.value = cell.innerText === 'Habilitado' ? '1' : '0';
      } else {
        input = document.createElement('input');
        input.type = 'text';
        input.value = cell.innerText;
      }
      cell.innerHTML = '';
      cell.appendChild(input);
    }
  });
  row.querySelector('.edit-btn').style.display = 'none';
  row.querySelector('.save-btn').style.display = 'inline';
}

// Función para guardar los cambios
async function saveRow(docId) {
  const row = document.getElementById(`row-${docId}`);
  // Selecciona tanto inputs como selects
  const inputs = row.querySelectorAll('input, select');
  const newData = {
    nombres: inputs[0].value,
    direccion: inputs[1].value,
    correo: inputs[2].value,
    telefono: inputs[3].value,
    
    estado: inputs[4].value === '1' ? 1 : 0 
  };

  try {
    await setDoc(doc(firestore, "Datos", docId), newData);
    // Actualizar UI
    loadAndDisplayUsers(); // Recargar la tabla para mostrar los datos actualizados
  } catch (error) {
    console.error("Error al guardar los datos", error);
  }
}



document.addEventListener('click', function(e) {
  if (e.target.classList.contains('edit-btn')) {
    editRow(e.target.getAttribute('data-id'));
  } else if (e.target.classList.contains('save-btn')) {
    saveRow(e.target.getAttribute('data-id'));
  }
});