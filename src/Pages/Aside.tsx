import React from 'react'
import { useHistory } from 'react-router'
import {Func, Cust, Arr2, Str} from '../Utilities/CustomTypes'



export default function Aside (props: {customers: Arr2, setCustomerId: Func, getCustomerId:Func, asyncErr:Str, mobile: Func}){
    

    let history = useHistory()

    
    const {customers, setCustomerId, getCustomerId, asyncErr, mobile} = props
    return (
        <div className='h-50 pa3 flex justify-center flex-column br4'>
            {customers.length >0 ? customers.map((a:Cust, i: number)=>(
                <div 
                key={i} 
                className={`customer flex flex-column justify-center h-75 pointer`} 
                onClick={()=> {
                    getCustomerId(setCustomerId, a.id)
                    mobile()
                    history.push(`/statistics`)
                }}>
                    <div className='flex id measure'>
                        <div className='f5 measure lh-copy ttu'>Customer ID:</div>
                        <div className='measure f5 lh-copy'>{a.id}</div>
                    </div>
                    <div className='measure f4 lh-solid name'>{a.name}</div>
                </div>
            )) 
            :(
                <div>
                    {asyncErr}
                </div>
            )}
        </div>
    )
}