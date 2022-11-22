const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fechaAlta, sintomas, id} = paciente

    const confirmarEliminar = () => {
        const respuesta = confirm("¿Desea Eliminar Este Paciente?");
        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 m-5">
            <p className="block text-gray-700 uppercase font-bold">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
            <p className="block text-gray-700 uppercase font-bold">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
            <p className="block text-gray-700 uppercase font-bold">Email: <span className="font-normal normal-case">{email}</span></p>
            <p className="block text-gray-700 uppercase font-bold">Fecha de Alta: <span className="font-normal normal-case">{fechaAlta}</span></p>
            <p className="block text-gray-700 uppercase font-bold">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={() => setPaciente(paciente)}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={confirmarEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
