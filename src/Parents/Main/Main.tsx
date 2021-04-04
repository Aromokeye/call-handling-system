import React, {useContext} from 'react'
import Currentinfo from '../../Children/Currentinfo'
import {CurrentCustomerContext} from '../../Context/CustomerContext'

export default function Main (){
    const currentCustomer = useContext(CurrentCustomerContext)
    return (

        <>
           <Currentinfo applications={currentCustomer[0]}/>
        </>
    )
}