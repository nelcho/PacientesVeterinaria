import {useState, useEffect} from "react";
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fechaAlta, setFechaAlta] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFechaAlta(paciente.fechaAlta)
          setSintomas(paciente.sintomas)
        }
      }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const validarFormulario = (evento) => {
        evento.preventDefault();
        if([nombre, propietario, email, fechaAlta, sintomas].includes("")) {
            setError(true);
            return
        }
        setError(false)

        const objetoPaciente = {nombre, propietario, email, fechaAlta, sintomas}

        if(paciente.id) {
            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})
          } else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
          }

          setNombre("");
          setPropietario("");
          setEmail("");
          setFechaAlta("");
          setSintomas("");

    }

    return (


        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
            <form onSubmit={validarFormulario} className="bg-white shadow-md rounded-lg py-10 px-5 m-5">
        
                {error && <Error><p>Todos los Campos son Obligatorios</p></Error>}
        
                <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la Mascota" value={nombre} onChange={(evento) => setNombre(evento.target.value)}></input>
                </div>

                <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del Propietario" value={propietario} onChange={(evento) => setPropietario(evento.target.value)}></input>
                </div>

                <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email Contacto Propietario" value={email} onChange={(evento) => setEmail(evento.target.value)}></input>
                </div>

                <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value={fechaAlta} onChange={(evento) => setFechaAlta(evento.target.value)}></input>
                </div>

                <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Describe los Sintomas" value={sintomas} onChange={(evento) => setSintomas(evento.target.value)}></textarea>
                </div>

                <input id="alta" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md" type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}></input>
            </form>
        </div>
    )
}

export default Formulario
