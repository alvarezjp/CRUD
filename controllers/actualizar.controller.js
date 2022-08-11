import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "/screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
   
    clientService.detalleCliente(id).then(perfil =>{
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    });

}

obtenerInformacion();

formulario.addEventListener("submit",(evento) =>{
    evento.preventDefault();//prevenir el funcionamiento normal del formulario
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
   
    clientService.actualizarCliente(nombre,email,id).then(() => {
        window.location.href = "/screens/edicion_concluida.html"
    });
})