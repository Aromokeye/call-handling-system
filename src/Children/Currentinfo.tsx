import React, { useEffect, useState, useContext }  from 'react'
import {Str, Icons, Apparr} from '../Utilities/CustomTypes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Applicationform} from '../Utilities/FormUtilities'
import { fetchMainRoutes } from '../Utilities/FetchUtilities'
import {CurrentCustomerContext} from '../Context/CustomerContext'

export default function Currentinfo (props: 
    {service:Str,
    className:Str, icons: Icons,
    }){
    const {service, className, icons} = props


    const [rotate, setRotate] = useState(false)
    const [error, setError] =useState<Str>('')
    const [routeData, setRouteData] = useState<Apparr>([])
    const [needed, setneeded] = useState<Apparr>([])

    useEffect(()=>{
        fetchMainRoutes(service, setRouteData, setError)
    }, [service])

    let currentCustomer = useContext(CurrentCustomerContext)

    useEffect(()=>{
        if(routeData.length > 0){
            setneeded(routeData.filter(a=> a.customer.id === currentCustomer.id))
        }
    }, [routeData, currentCustomer.id])
    
    
    const doRotate = () =>{
        setRotate(!rotate)
    }


    return (
        <div className={`${className} ${rotate && ''}`}>
            <div className={`block1inner relative w-100 h-100 ${rotate && 'rotate'}`}>
                <div className='front'>
                    <div className='absolute top-1 left-1 flex flex-column items-center b highlight'>
                        <FontAwesomeIcon icon={icons.header} size='2x'/>
                        <div className='f6 measure lh-title ml1 text'>{service}</div>
                    </div>
                  
                    <div className='flex w-90 flex-wrap center justify-center items-center pa3 overflow-y-auto'>
                        {needed.length > 0 && <h1 className='f3 lh-title fixed top--2 text'>{needed[0].customer.name}</h1>}
                        {needed.length > 0 
                        ?   (
                               needed.map((data, i)=>{
                                   return (
                                       <div key={i} className='w-30 textaltbg pa3 ma2 f5 measure'>
                                            
                                                <div className=''>{data.id}</div>
                                                <div className=''>{data.name}</div>
                                                <div className=''>{data.description}</div>
                                                <div className=''>Installed: {data.installationDate}</div>
                                            
                                       </div>
                                   )
                               })
                            )
                        : <div>Customer has no records for {service}</div>}
                    </div>
                
                    <div className='flex items-center absolute shadow-2 
                    bottom-1 left-1 b pointer textbg pa2 br4 grow' onClick={doRotate}>
                        <div 
                        className='textalt highlightbg w2 h2 br-100
                        flex justify-center items-center'>
                            <FontAwesomeIcon icon={icons.create} size='1x'/>
                        </div>
                        <div className='f6 measure lh-title ml1 textalt'>Add Record</div>
                        {console.log(routeData)}
                    </div>
                </div>
                {/* this makes the creation of records */}
                <div className={`back h-100 flex justify-center items-center mt0`}>
                        <Applicationform clickEvent={doRotate} route={service}/>
                </div>
            </div>
        </div>
    )
}