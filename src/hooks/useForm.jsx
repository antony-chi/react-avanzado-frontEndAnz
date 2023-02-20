// Reglas para crear un custom hook
// Custom Hook es una funcion que utiliza otros hooks de react
// 1. El nombre de la fuhncion debe comenzar con la palabra 'use'
// 2. Siempren debe ser funciones (a partir de React 16.8 usamos hooks)
// 3. Siempre deben usar al menos un Hook de React (useState, useEffect, useContext, etc).
// 4. No deben ser llamados dentro de ciclos, condiciones o funciones anidaddas.
// 5. Deben ser reutilizables, no para casos muy especificos.
// 6. Debe returnar algo, ya sea un valor, un objeto, un array, etc.
import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  },
  [defaults])

  // Funcion que se ejecuta cada vez que se escribe un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
