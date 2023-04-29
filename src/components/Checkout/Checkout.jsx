import React, {useState} from 'react'

export const Checkout = () => {


  const [email, setEmail] = useState("")

  const [nombre, setNombre ] = useState("")

  const [apellido, setApellido] = useState ("")

  const [telefono, setTelefono] = useState ("")

  const handleSubmit = (e) =>{

    e.preventDefault()

    console.log("Email:", email)
    console.log("Nombre:", nombre)
    console.log("Apellido:", apellido)
    console.log("Teléfono:", telefono)



  }



  return (
    <div>

        <h3>Terminar compra</h3>
        <hr />

        <form onSubmit={handleSubmit} className='container mt-3'

        <form className='container mt-3'>

          <div className="form-group"><label htmlFor=""><input type="text" className="form-control" /><input type="text" className="form-control" /><input type="text" className="form-control" /><input type="text" className="form-control" /></label></div>
        


          


        </form>

        {/* onChange={(e) => setEmail(e.target.value)} value={email}/> */}
         {/* Firebase es un servicio provisto por google para satisfacer las distintas necesidade que puede tener una aplicación y su ciclo de desarrollo dentro de las cuales encontramos: seguridad y autenticación, almacenamiento y consulta, hosting, monitoreo,functions y más.*/ }


    </div>
  )
}
