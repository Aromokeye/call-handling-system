import React, { useEffect, useState, useContext }  from 'react'
import {Str, Icons, Callarr} from '../Utilities/CustomTypes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ApplicationEdit, Applicationform} from '../Utilities/FormUtilities'
import { fetchMainRoutes } from '../Utilities/FetchUtilities'
import {CurrentCustomerContext} from '../Context/CustomerContext'

export default function Call(props:{ icons: Icons}){
    const icons = props.icons
    const [rotate, setRotate] = useState(false)
    const [error, setError] =useState<Str>('')
    const [needed, setneeded] = useState<Callarr>([])
    const [routeData, setRouteData] = useState<Callarr>([])
    const [isEdit, setIsEdit] = useState(false)
    const [editObj, setEditObj] = useState({id: 0, name: '', describe: '', support: false})

    useEffect(()=>{
        fetchMainRoutes('Call', setRouteData, setError)
    }, [])

    let currentCustomer = useContext(CurrentCustomerContext)

    useEffect(()=>{
        if(routeData.length > 0){
            setneeded(routeData.filter(a=> a.customer.id === currentCustomer.id))
        }
    }, [routeData, currentCustomer.id])

    const doRotate = () =>{
        setRotate(!rotate)
        setIsEdit(false)
    }

    const doRotate2 = (id: number, name: string, describe: string, support: boolean)=>{
        setIsEdit(true)
        setRotate(!rotate)
        setEditObj({id, name, describe, support})
    }

    const {id, name, describe, support} = editObj

    return(
        <div  className={`block2 w-100 flex justify-center items-center relative shadow-4`}>
            <div className={`block1inner relative w-100 h-100 shadow-4 ${rotate && 'rotate'}`}>
                <div className='front2'>
                    <div className='absolute top-1 left-1 flex items-center b highlight verticaltext'>
                        <FontAwesomeIcon icon={icons.header} size='2x'/>
                        <div className='f6 measure lh-title mt2 textalt flex'>Call Log</div>
                    </div>
                    <div className={`${rotate ? 'dn' : 'flex w-100 flex-column items-center pa3 scroll'}`}>
                        <div className='flex justify-around w-100 b f5'>
                            <div>Customer</div>
                            <div>Application</div>
                            <div>Issues</div>
                            <div>Call Status</div>
                        </div>  
                            <div className='flex flex-column'>
                                {needed.length > 0 && needed.map((a, i)=>{
                                    return(
                                        <div className='flex flex-column'>
                                            
                                            {/* <div>{a.customer.name}</div> */}

                                        
                                        </div>

                                    )
                                })}
                            </div>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}
    
