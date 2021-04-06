import React from 'react'
import Currentinfo from '../../Children/Currentinfo'
import {faDatabase, faEdit, faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default function Main (){
    return (

        <div className='w-80'>
           <Currentinfo
           service={'Application'}
           icons={{header: faDatabase, edit: faEdit, delete: faTrashAlt, create: faPen}}
           className={`block1 flex justify-center items-center relative shadow-4`}/>
        </div>
    )
}