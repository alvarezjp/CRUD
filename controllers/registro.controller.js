import { clientService } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre,"-",email);
    clientService
    .crearCliente(nombre,email)
    .then(respuesta => {
        window.location.href = "/screens/registro_completado.html";
    }).catch(err => console.log(Error));
});