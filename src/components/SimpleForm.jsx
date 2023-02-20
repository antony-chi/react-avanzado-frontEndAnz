import { useState } from 'react'
import logo from '../assets/react.svg'
const SimpleForm = () => {
  // Paso #1: crear los estados donde se guradara la informacion
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso 4: Manejo lo que sucera cuando envie mi formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }
  // Paso #2: crear mi formulario base
  return (
    <div className='login'>
      <div className='login-ccontainer'>
        <img src={logo} alt='logo' className='logo' height='100px' width='100px' />

        <form>
          {/* Paso 3: guardo cada combio del input en su state correspondiente */}
          <label htmlFor='email'>Email</label>
          <input
            type='email' name='email' placeholder='correo@gmail.com'
            onChange={(event) => { setEmail(event.target.value) }}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password' name='pasword' placeholder='*****'
            onChange={(event) => { setPassword(event.target.value) }}
          />
          <button onClick={handleSubmit}>Iniciar Session</button>
        </form>
      </div>

    </div>
  )
}
export default SimpleForm
