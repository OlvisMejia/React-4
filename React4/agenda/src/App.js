import { useEffect, useState } from 'react';
import { initialValues } from './components/InitialValues';
import { FormNewContact } from './components/FormNewContact';
import './css/App.css';

function App() {

  const {getContacts} = initialValues();
  const [contacts, setContacts] = useState([]);
  
  let view = true;
  let doc = document.getElementById('form');
  let Personas = document.getElementById('contactos');

  const ocultar = () => {

    if(mostrar){
      view = false;
      Personas.style.display = 'none';
      doc.style.display = 'block';
    }else{
      view = true;
    Personas.style.display = 'block';
      doc.style.display = 'none';
      getContacts().then((data) => {
        setContacts(data);
      });
    }
  }

  useEffect(() => {
    getContacts().then((data) => {
      setContacts(data);
    })
  })

  return (
    <div className="App">

      <div id="top">
        <h2>Contactos</h2>
        <button onClick={() => ocultar()}>Crear contacto</button>
      </div>

      <div id='contactos'>
        {Personas.map(contact => (
          <div key={JSON.stringify(contact)} className='contenedor'>
            <h3>Contacto</h3>
            <input defaultValue={contact.nombre}></input>
            <input defaultValue={contact.apellido}></input>
            <input defaultValue={contact.telefono}></input>
          </div>
        ))}
      </div>
      
      <div id='form'>
        <FormNewContact/>
      </div>
    </div>
  );
}

export default App;