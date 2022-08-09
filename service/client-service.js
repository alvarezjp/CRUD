const crearNuevaLinea = (nombre,email) => {
    const linea = document.createElement("tr")
    const contenido = `
    <td class="td" data-td>
    ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido ;
  return linea;
};

const table = document.querySelector("[data-table]");

const http = new XMLHttpRequest();

//abrir http(metodo,url)

// CRUD   - Metodos http
// create - POST
// Read   - GET
// update - PUT/PATCH
// Delete - DELETE
http.open("get","http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = http.response;
    console.log(data);
}

console.log(http);