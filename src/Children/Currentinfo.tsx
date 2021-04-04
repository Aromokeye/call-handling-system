import React from 'react'
import {Num, Obj, Str, Arr} from '../Utilities/CustomTypes'

export default function Currentinfo (props: {applications:Obj | Str | Arr | Num}){
    return (
        <div>
            {props.applications}
        </div>
    )
}