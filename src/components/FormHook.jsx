import { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

const FormHook = () => {
  // Paso #1. crear un unico estado con toda  la informacion en forma de objeto
  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  // Paso #2. voy a simular traer datos de la API
  useEffect(() => {
    setTimeout(() => {
      const info = {
        email: 'drstrange@marvel.com',
        password: 'multiverso'
      }
      setDatos(info)
    }, 5000)
  }, [])

  const sendData = (data) => {
    console.log(data)
  }
  // Paso 3. Uso de mi custom hook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='login'>
      <div className='login-ccontainer'>
        <img src={logo} alt='logo' className='logo' height='100px' width='100px' />

        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email' name='email' placeholder='correo@gmail.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password' name='pasword' placeholder='*****'
            value={input.password}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Iniciar Session</button>
        </form>
      </div>

    </div>
  )
}
export default FormHook
