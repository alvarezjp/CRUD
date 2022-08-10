const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

const crearCliente = (nombre,email) => {
  return fetch("http://localhost:3000/perfil",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({nombre,email,id: uuid.v4()})
  });
};

const eliminarCliente = (id) => {
  console.log("eliminar a --> ",id);
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "DELETE",
  })
}

export const clientService = {
  listaClientes,
  crearCliente,
  eliminarCliente,
}




// comenzar a usar servidor--> json-server --watch db.json