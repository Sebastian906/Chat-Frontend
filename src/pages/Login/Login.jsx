import React, { useState } from 'react'
import '../Login/Login.css'
import assets from '../../assets/assets'

const Login = () => {

    const [currState, setCurrState] = useState("Registro");

    return (
        <div className='login'>
            <img src={assets.logo_big} alt='' className='logo'/>
            <form className='login-form'>
                <h2>{currState}</h2>
                {currState === "Registro"?<input type="text" placeholder='usuario' className="form-input" required/>:null}
                <input type="email" placeholder='correo electrónico' className="form-input" required/>
                <input type="password" placeholder='contraseña' className="form-input" required/>
                <button type='submit'>{currState === "Registro"?"Crear Cuenta":"Iniciar Sesión"}</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>De acuerdo con los terminos de uso y privacidad.</p>
                </div>
                <div className="login-forgot">
                    {
                        currState === "Registro" 
                        ?<p className="login-toggle">Ya tiene una cuenta creada?. <span onClick={()=>setCurrState("Iniciar sesión")}>Inicie Aquí</span></p>
                        :<p className="login-toggle">Cree su cuenta. <span onClick={()=>setCurrState("Registro")}>Entre Aquí</span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default Login