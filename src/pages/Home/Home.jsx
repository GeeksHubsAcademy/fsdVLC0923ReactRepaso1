

import React, { useState, useEffect } from 'react';
import './Home.css'
import { traePersonajes } from '../../services/apiCall';
export const Home = () => {

    /*
        Personajes sería una variable de estado mediante el hook useState, esto viene a
        decir que cualquier modificación que ocurra dentro de personajes MEDIANTE el setter
        setPersonajes, hará que el componente ejecute de nuevo su ciclo de vida y se recargue.. 
        una vez hecho esto, volverá a revisar en el siguiente orden..

            1 - HOOKS DE ESTADO
            2 - RETURN
            3 - FUNCIONES USEEFFECT
    */
    const [personajes, setPersonajes] = useState([])
    const [msgError, setMsgError] = useState('')

    useEffect(()=>{

        if(personajes.length === 0){
            traePersonajes()
            .then(
                results => {
                    if(results.data.results.length !== 0){
                        setPersonajes(results.data.results)
                    } else {
                        setMsgError(results.data.message)
                    }
                }
            )
            .catch(error => console.log(error))

        }        

    },[personajes])

    return (
        <div className='homeDesign'>
            {
                personajes.length > 0 

                ? (
                    <div>
                        {
                            personajes.map(
                                personaje => {
                                    return (
                                        <div key={personaje.id}>{personaje.name}</div>
                                    )
                                }
                            )
                        }
                    </div>
                )

                : (<div>
                    {
                        msgError !== ''

                        ? (<div>{msgError}</div>)

                        : (<div>Aún no han venido, chilllll</div>)
                    }
                </div>)
            }
        </div>       
    )
}