import React from 'react'
import {Func, Cust, Arr2, Str} from '../../Utilities/CustomTypes'



export default function Aside (props: {customers: Arr2, setCustomerId: Func, getCustomerId:Func, asyncErr:Str}){
    
    const {customers, setCustomerId, getCustomerId, asyncErr} = props
    return (
        <div className='h-50 ma2 flex flex-column justify-between  pa1'>
            {customers.length >0 ? customers.map((a:Cust, i: number)=>(
                <div 
                key={i} 
                className='customer flex flex-column justify-center h-100 pointer' 
                onClick={()=> getCustomerId(setCustomerId, a.id)}>
                    <div className='flex id'>
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