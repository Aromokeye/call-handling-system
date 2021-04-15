import React, { useEffect, useState, useContext }  from 'react'
import {Str, Icons, Callarr} from '../Utilities/CustomTypes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {DoSelected} from '../Utilities/FormUtilities'
import { fetchMainRoutes } from '../Utilities/FetchUtilities'
import {CurrentCustomerContext} from '../Context/CustomerContext'

export default function Call(props:{ icons: Icons, }){
    const icons = props.icons
    const [error, setError] =useState<Str>('')
    const [needed, setneeded] = useState<Callarr>([])
    const [routeData, setRouteData] = useState<Callarr>([])
    const [filter, setFilter] = useState('')

    useEffect(()=>{
        fetchMainRoutes('Call', setRouteData, setError)
    }, [])

    let currentCustomer = useContext(CurrentCustomerContext)

    useEffect(()=>{
        if(routeData.length > 0 && filter !== ''){
            setneeded(routeData.filter(a=> a.customer.id === currentCustomer.id && a.status.description === filter))
        }else{
            if(routeData.length > 0){
                setneeded(routeData.filter(a=> a.customer.id === currentCustomer.id))
            }
        }
    }, [routeData, currentCustomer.id, filter])

   const getFilter = (data: string) =>{
       setFilter(data)
   }


    return(
        <div  className={`block2 w-90-l w-100 flex justify-center items-center relative shadow-4 br4`}>
            {needed.length > 0 ? <h1 className='customername f3-ns f5 lh-title'>{needed[0].customer.name}</h1> : null}
            <div className={`block1inner relative w-100 h-100 shadow-4 br4 `}>
                <div className='front2'>
                    <div className='absolute dn top-1 left-1 flex-ns items-center b highlight verticaltext'>
                        <FontAwesomeIcon icon={icons.header} size='2x'/>
                        <div className='f6 measure lh-title mt2 textalt flex'>Call Log</div>
                    </div>
                    <div className={`relative flex w-100 flex-column items-start pa3-ns calllist overflow-y-auto scroll scroll2`}>
                        <ul className='w-100 pl0 pl4-ns'>
                            <li className='flex justify-between items-center  ma1 pa1 w-100 h3 b f5 lh-title stick top--1 iconsbg text'>
                                <div className='tablecol1'>Application</div>
                                <div className='tablecol2'>Issues</div>
                                <div className='tablecol3'>Call Status</div>
                            </li>
                                {needed.length > 0 && needed.map((a, i)=>{
                                    return(
                                        <li className='flex justify-between items-center ma1 pa1 w-100 shadow-1 h3 b' key={i*3}>
                                            <div className='tablecol1 f5 lh-copy'>{a.application.name}</div>
                                            <div className='tablecol2 f5 lh-copy'>{a.description}</div>
                                            <div className='tablecol3'>
                                                <DoSelected needed={a}/>
                                            </div>
                                        </li>
                                    )
                                })}
                                {console.log(error)}
                        </ul>  
                    </div>
                    <div className='flex flex-row justify-center center w-60  h-50'>
                        <h1 className='f3 mr2'>Filter:</h1>
                        <div 
                        className='sel2 br3 f5 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer'
                        onClick= {()=> getFilter('Open')}
                        >
                            Open
                        </div>
                        <div className='sel1 br3 f6 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer'
                        onClick= {()=> getFilter('Closed')}
                        >
                            Close
                        </div>
                        <div className='sel3 br3 f6 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer'
                        onClick= {()=> getFilter('Re-Opened')}
                        >
                            Re-Opened
                        </div>
                        <div className='sel4 br3 f6 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer'
                        onClick= {()=> getFilter('AwaitingCustomer')}
                        >
                            Awaiting Customer
                        </div>
                        <div className='br3 f6 lh-copy iconsbg text items-center flex justify-center w4 pa2 ma1 tc b pointer'
                        onClick= {()=> getFilter('')}
                        >
                            Remove Filter
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
