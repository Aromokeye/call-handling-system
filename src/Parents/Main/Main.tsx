import React, {useContext} from 'react'
import Currentinfo from '../../Children/Currentinfo'
import {CurrentCustomerContext} from '../../Context/CustomerContext'
import {faDatabase, faEdit, faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default function Main (){
    const currentCustomer = useContext(CurrentCustomerContext)
    return (

        <div className='w-75'>
           <Currentinfo 
           data={currentCustomer} 
           service={'Applications'}
           icons={{header: faDatabase, edit: faEdit, delete: faTrashAlt, create: faPen}}
           className={`block1 vh-25 flex justify-center items-center relative shadow-1`}/>
        </div>
    )
}