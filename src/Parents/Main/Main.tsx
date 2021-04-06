import React from 'react'
import Currentinfo from '../../Children/Currentinfo'
import Calls from '../../Children/Calls'
import {faDatabase, faEdit, faPen, faTrashAlt, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'

export default function Main (){
    return (

        <div className='w-80 flex flex-column justify-around h-100 scroll'>
           <Currentinfo
           service={'Application'}
           icons={{header: faDatabase, edit: faEdit, delete: faTrashAlt, create: faPen}}
           className={`block1 w-100 flex justify-center items-center relative shadow-4`}
           
           />
          <Calls icons={{header: faPhoneSquare, edit: faEdit, delete: faTrashAlt, create: faPen}}/>
        </div>
    )
}