import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  const [numero, setNumero] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    // Cuando se pulsa el botón navega a la página de info del pokémon
    // Si la entrada no es válida envía un error

    if ( numero != null && numero > 0 ) {
      toast.success(`Consultar pokémon ${numero}`)
      navigate("/pokemon")
    } else {
      toast.error("Error! Número no válido")
    }
  }

  function handleChange(e) {
    e.preventDefault()

    setNumero(parseInt(e.target.value))
  }

  return (
    <>
      <h1>Pokebúsqueda</h1>
      <form onSubmit={handleSubmit}>
        <label>Introduce un ID de pokémon</label>
        <input type="number" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Home