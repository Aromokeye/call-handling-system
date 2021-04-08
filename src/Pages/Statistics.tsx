import React, { useEffect, useState, useContext } from 'react'
import {CurrentCustomerContext} from '../Context/CustomerContext'
import { StatTypes } from '../Utilities/CustomTypes'
import { singleFetch } from '../Utilities/FetchUtilities'
import Customer from '../Assets/customer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'

const statObj={
    id: 0,
    openCalls: {
        totalCalls: 0,
        responded:0,
        awaitingResponse: 0,
    },
    closedCalls:{
        totalCalls: 0,
        satisfactory: 0,
        unsatisfactory: 0,
    },
    lastThreeMonths:{
        month1: 0,
        month2: 0,
        month3: 0,
    },
    customer:{
        id: 0,
        name: ''
    }
}

export default function Statistics (){
    let currentCustomer = useContext(CurrentCustomerContext)
    const [error, setError] =useState('')
    const [stats, setStats] = useState<StatTypes>(statObj)
      useEffect(()=>{
        singleFetch(currentCustomer.id, setStats, setError)
    }, [currentCustomer.id])

    const history = useHistory()
    return (

        <div className='block3 w-90 flex justify-around flex-row  relative shadow-4 mt3 br4 relative'>
                <div className='w-30 flex-column'>
                {stats?.customer?.id > 0 && (
                    <div className='br4 w-30 vh-25 flex flex-row justify-between items-center textbg pa2 absolute top-0 left-0 ma1'>
                        
                        <div className='flex flex-column justify-center items-start w-50'>
                            <div className='f6 b'>ID: {stats.customer.id}</div>
                            <h1 className='f3'>{stats.customer.name}</h1>
                        </div>
                        <div className='flex flex-column w-50'>
                            <img src={Customer} alt='customer' className=''></img>
                        </div>
                    </div>
                )}
                    <div className='w-30 flex flex-column justify-center items-center h-50 br4 ma1 mt4 ba absolute left-0 bottom-1'>
                        <div className='flex flex-row items-center ba pa2 br4 iconsbg text w-90 mb1 pointer'
                        onClick={()=> history.push('/calls')}
                        >
                            <div className='highlight mr1'>
                                <FontAwesomeIcon icon={faPhoneSquare} size='3x'/>
                            </div>
                            <div className='f4 b lh-copy'>View Call Records</div>
                        </div>

                        <div className='flex flex-row items-center ba pa2 br4 iconsbg text w-90 pointer'
                        onClick={()=> history.push('/applications')}
                        >
                            <div className='highlight mr1'>
                                <FontAwesomeIcon icon={faDatabase} size='3x'/>
                            </div>
                            <div className='f4 b lh-copy'>View Installed Applications</div>
                        </div>
                    </div>
           
                </div>


                <div className='flex flex-column justify-around h-100 w-70 ml4 pa3'>
                <div className='w-90 ma1'>
                    {stats?.customer?.id > 0 && (
                        <div className='flex flex-column justify-center blockId br4 ba bw1 w-90 pa1  vh-25 callsh'>
                            <h1 className='f3'>Open Calls</h1>
                            <div className='flex flex-row justify-between call w-80'>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Total calls</div>
                                    <div className='highlight f3 b'>{stats.openCalls.totalCalls}</div>
                                </div>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Responded</div>
                                    <div className='highlight f3 b'>{stats.openCalls.responded}</div>
                                </div>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Awaiting Response</div>
                                    <div className='highlight f3 b'>{stats.openCalls.awaitingResponse}</div>
                                </div>
                            </div>
                        </div>
                    )} 
                </div>
                
                <div className='w-90 ma1'>
                    {stats?.customer?.id > 0 && (
                        <div className='flex flex-column justify-center blockId br4 ba bw1 w-90 vh-25 pa1 callsh'>
                            <h1 className='f3'>Closed Calls</h1>
                            <div className='flex flex-row justify-between call w-80'>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Total calls</div>
                                    <div className='highlight f3 b'>{stats.closedCalls.totalCalls}</div>
                                </div>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Satisfactory</div>
                                    <div className='highlight f3 b'>{stats.closedCalls.satisfactory}</div>
                                </div>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Unsatisfactory</div>
                                    <div className='highlight f3 b'>{stats.closedCalls.unsatisfactory}</div>
                                </div>
                            </div>
                        </div>
                    )} 
                </div>
                            {console.log(error)}
                <div className='w-90 ma1'>
                    {stats?.customer?.id > 0 && (
                        <div className='flex flex-column justify-center blockId br4 ba bw1 w-90 vh-25 pa1 callsh'>
                            <h1 className='f3'>Calls in Last Three Months</h1>
                            <div className='flex flex-row justify-between call w-80'>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Month 1</div>
                                    <div className='highlight f3 b'>{stats.lastThreeMonths.month1}</div>
                                </div>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Month 2</div>
                                    <div className='highlight f3 b'>{stats.lastThreeMonths.month2}</div>
                                </div>
                                <div className='flex flex-column h-100 justify-center textalt ba pa1 br3 bw1'>
                                    <div className='b f4'>Month 3</div>
                                    <div className='highlight f3 b'>{stats.lastThreeMonths.month3}</div>
                                </div>
                            </div>
                        </div>
                    )} 
                </div>
                </div>
        </div>
    )
}