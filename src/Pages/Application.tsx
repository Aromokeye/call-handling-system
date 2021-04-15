import React, { useEffect, useState, useContext }  from 'react'
import {Str, Icons, Apparr} from '../Utilities/CustomTypes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ApplicationEdit, Applicationform} from '../Utilities/FormUtilities'
import { fetchMainRoutes } from '../Utilities/FetchUtilities'
import {CurrentCustomerContext} from '../Context/CustomerContext'

export default function Applications (props: 
    {service:Str,
    className:Str, icons: Icons,
    }){
    const {service, className, icons} = props


    const [rotate, setRotate] = useState(false)
    const [error, setError] =useState<Str>('')
    const [routeData, setRouteData] = useState<Apparr>([])
    const [needed, setneeded] = useState<Apparr>([])
    const [isEdit, setIsEdit] = useState(false)
    const [editObj, setEditObj] = useState({id: 0, name: '', describe: '', support: false})

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
        setIsEdit(false)
    }

    const doRotate2 = (id: number, name: string, describe: string, support: boolean)=>{
        setIsEdit(true)
        setRotate(!rotate)
        setEditObj({id, name, describe, support})
    }

    const {id, name, describe, support} = editObj

    return (
        <div className={`${className} ${rotate && ''}`}>
            {needed.length > 0 && service === 'Application'? <h1 className='customername f3-ns f5 lh-title'>{needed[0].customer.name}</h1> : null}
            <div className={`block1inner relative w-100 h-100 shadow-4 br4-ns mt0-ns ${rotate && 'rotate'}`}>
                <div className='front'>
                    <div className='absolute-ns dn top-1 left-1 flex-ns items-center b highlight verticaltext'>
                        <FontAwesomeIcon icon={icons.header} size='2x'/>
                        <div className='f6 measure lh-title mt2 text flex'>{service}</div>
                    </div>
                  <div className='scroll'>
                    <div className={`${rotate ? 'dn' : 'flex w-100 flex-wrap center justify-center items-start pa4-l'}`}>
                        
                        {needed.length > 0 && service === 'Application'
                        ?   (
                               needed.map((data, i)=>{
                                   return (
                                       <div key={i} className='w-30-l w-40-m w-90 textaltbg pa3 ma2 f5 measure b br3 relative'>
                                        <div className='flex justify-around absolute top-1 right-1 highlight'>
                                            <button 
                                            className='iconsbg h2 w2 br-100 v-mid tc pa1 mh1 bn highlight pointer'
                                            onClick={()=> doRotate2(data.id, data.name, data.description, data.hasSupportContract)}
                                            >
                                                <FontAwesomeIcon icon={icons.edit} /> 
                                            </button>
                                        </div>
                                        <div className='blockid f6 measure lh-copy'>Application ID: {data.id}</div>
                                        <div className='f5 measure lh-copy'>{data.name}</div>
                                        <div className='f6 measure lh-copy'>{data.description}</div>
                                        <div className='f6 measure lh-copy'>Installed: {data.installationDate.substring(0, 10)}</div>
                                        <div className='f6 measure lh-copy'>Has Support Contract: {data.hasSupportContract ? 'Yes' : 'No'}</div>
                                       </div>
                                   )
                               })
                            )
                        : <div>Customer has no records for {service}</div> || <div>{error}</div>} 
                    </div>
                    </div>
                    <button className='flex items-center flex-column absolute shadow-3 highlightbg text iconsbg
                    bottom-1 left-1 b pa1 grow-large w3 h3 br-100 ba bw1 pointer' onClick={doRotate}>
                        <div 
                        className=' 
                        flex justify-center items-center'>
                            <FontAwesomeIcon icon={icons.create} size='1x'/>
                        </div>
                        <div className='f7 measure mt1'>Add Record</div>
                    </button>
                </div>
                {/* this makes the creation of records */}
                <div className={`back h-100 flex justify-center items-center mt0`}>
                        {!isEdit 
                        ? <Applicationform clickEvent={doRotate} route={service}/>
                        : <ApplicationEdit
                        clickEvent={doRotate} 
                        route={service} id={id}  
                        name={name} describe={describe}
                        support={support}
                        />}
                </div>
            </div>
        </div>
    )
}