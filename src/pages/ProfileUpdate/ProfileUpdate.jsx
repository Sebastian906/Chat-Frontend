import React, { useState } from 'react'
import '../ProfileUpdate/ProfileUpdate.css'
import assets from '../../assets/assets'

const ProfileUpdate = () => {

    const [image, setImage] = useState(false);

    return (
        <div className='profile'>
            <div className="profile-container">
                <form>
                    <h3>Detalles del Perfil</h3>
                    <label htmlFor="avatar">
                        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept='.png, .jpg, .jpeg' hidden/>
                        <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
                        Actualizar foto de perfil
                    </label>
                    <input type="text" placeholder='Su nombre' required/>
                    <textarea placeholder='Escriba en su biografia' required></textarea>
                    <button type='submit'>Guardar</button>
                </form>
                <img className='profile-pic' src={image? URL.createObjectURL(image) : assets.logo_icon} alt="" />
            </div>
        </div>
    )
}

export default ProfileUpdate