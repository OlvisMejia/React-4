export const initialValues = () => {

    const getContacts = async() => {
        const response = await fetch('http://www.raydelto.org/agenda.php', {
            method: 'GET',
            
        })

        const data = await response.json();

        return data
    }

    const addContacts = async(nombre, apellido, telefono) => {

        const response = await fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify({'nombre': nombre, 'apellido': apellido, 'telefono': telefono})
        })

        return response;
    }

    return{
        getContacts,
        addContacts
    }
}