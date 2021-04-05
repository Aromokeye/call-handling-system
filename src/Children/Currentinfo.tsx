import React  from 'react'
//import * as _ from 'lodash'
import {Str, Arr, Icons} from '../Utilities/CustomTypes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Applicationform} from '../Utilities/FormUtilities'

export default function Currentinfo (props: 
    {data:Arr, service:Str, 
    className:Str, icons: 
    Icons,
    }){
    const {data, service, className, icons} = props
    return (
        <div className={className}>
            <div className={`block1inner relative w-100 h-100`}>
                <div className='front'>
                    <div className='absolute top-1 left-1 flex items-center b highlight'>
                        <FontAwesomeIcon icon={icons.header} size='2x'/>
                        <div className='f6 measure lh-title ml1 text'>{service}</div>
                    </div>
                    {!data[0] && (
                    <div className='flex justify-center h-100 center items-center measure f4 lh-copy'>
                        Customer has no records for {service}
                    </div>
                )}
                    <div className='flex items-center absolute shadow-2 
                    bottom-1 left-1 b pointer textbg pa2 br4 grow'>
                        <div 
                        className='textalt highlightbg w2 h2 br-100
                        flex justify-center items-center'>
                            <FontAwesomeIcon icon={icons.create} size='1x'/>
                        </div>
                        <div className='f6 measure lh-title ml1 textalt'>Add Record</div>
                    </div>
                </div>
                {/* this makes the creation of records */}
                <div className='back w-4 h-100 flex justify-center items-center'>
                   
                        <Applicationform id={101}/>
                </div>
            </div>
        </div>
    )
}