import React from 'react'
import '../Login/Login.css'
import assets from '../../assets/assets'

const Login = () => {
    return (
        <div className='login'>
            <img src={assets.logo_big} alt='' className='logo'/>
            <form className='login-form'>
                <h2>Registro</h2>
                <input type="text" placeholder='usuario' className="form-input" required/>
                <input type="email" placeholder='correo electrónico' className="form-input" required/>
                <input type="password" placeholder='contraseña' className="form-input" required/>
                <button type='submit'>Registrese</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>De acuerdo con los terminos de uso y privacidad.</p>
                </div>
                <div className="login-forgot">
                    <p className="login-toggle">Ya tiene una cuenta creada?. <span>Entre Aquí</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login