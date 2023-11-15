
//Importo los elementos que capacitan al container presente para ser cambiante
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Profile } from '../Profile/Profile'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'

export const Body = () => {

    return(
        <>
            <Routes>
                <Route path={'*'} element={<Navigate to="/" />}/>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/profile'} element={<Profile />}/>
                <Route path={'/login'} element={<Login />}/>
                <Route path={'/register'} element={<Register />}/>
            </Routes>
        </>
    )
}