import React from "react";
import { initialValues } from "./InitialValues";
import '../css/formNewContact.css';

export const FormNewContact = () => {

    const {addContacts} = initialValues();

    const add = (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const telefono = document.getElementById('telefono');

        addContacts(nombre.value, apellido.value, telefono.value).then((response) => {
            if(response.status === 200){
                nombre.value = '';
                apellido.value = '';
                telefono.value = '';
                alert('La el contacto a sido agregado con exito');
            }else{
                alert('Ha ocurrido un problema');
            }
        });
    }

    return(
        <form onSubmit={add} id="formulario">
            <h3>Registra un contacto</h3>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" id="nombre"></input>
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellido" id="apellido"></input>
            </div>
            <div>
                <label>Telefono:</label>
                <input type="text" name="telefono" id="telefono"></input>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>  
    )
}