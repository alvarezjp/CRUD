import { clientService } from "../service/client-service.js";


console.log(clientService);

const crearNuevaLinea = (nombre, email, id) => {
    console.log(id);
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
              type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click",() => {
      const id = btn.id;
      console.log("el click",id)
    })
    return linea;
  };
  
  const table = document.querySelector("[data-table]");

  clientService
  .listaClientes()
  .then((data) => {
    data.forEach(({nombre,email,id}) => { // esto se llama destructuring en vez de poner entre el parentecis amarillo agregar una variable, se destructura altiro
      const nuevaLinea = crearNuevaLinea(nombre,email,id);
      table.appendChild(nuevaLinea);
    });
  }).catch((error)=>alert("HAY PROBLEMAS"));




// CRUD   - Metodos http
// create - POST
// Read   - GET
// update - PUT/PATCH
// Delete - DELETE