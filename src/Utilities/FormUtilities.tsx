import React, {useContext}from 'react'
import { useFormik } from 'formik';
import {Appedit, ApplicationData, Callpatch, Calltype, Func} from './CustomTypes'
import {CurrentCustomerContext} from '../Context/CustomerContext'
import {postData, editData, patchCall} from './FetchUtilities'
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

export  function Applicationform(props: {clickEvent:Func, route:string}){

    const currentCustomer = useContext(CurrentCustomerContext)

    //console.log(currentCustomer.id, 'yeah')

    const initialValues: ApplicationData = {
        name: '',
        description: '',
        hasSupportContract: false,
        customerId: currentCustomer.id
    }
    const form = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema:Yup.object({
            name: Yup.string()
                    .max(15, 'Too long').required('Name Required'),
            description: Yup.string()
                    .max(40, 'Maximum of 40 characters allowed')
                    .required('Description Required'),
            customerId: Yup.number().required('Required')
        }),
        onSubmit:(value, action)=>{
            postData(props.route, value)
            props.clickEvent()
            action.resetForm()
        }
    })
    return(
        
            <form onSubmit={form.handleSubmit} className='w-75 flex flex-column justify-around h-75 b appform'>
            <label htmlFor="Name">Name</label>
            <input
            type='text'
            id='name'
            name='name'
            placeholder='The installed application'
            className=''
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.name}
            />
            {form.touched.name && form.errors.name ?
            <div className='highlight b f6'>{form.errors.name}</div>: null}

            <label htmlFor="description">Description</label>
            <input
            type='text'
            id='description'
            placeholder='A description of the application'
            name='description'
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.description}
            />
            {form.touched.description && form.errors.description ?
            <div className='highlight b f6'>{form.errors.description}</div>: null}

            <label className=''>
             <input
               type="checkbox"
               className='w1 h1 mr1 mv1'
               name="hasSupportContract"
               checked={form.values.hasSupportContract}
               onChange={form.handleChange}
               onBlur={form.handleBlur}
               
             />
            Has Support Contract?
           </label>

            <label htmlFor='customerId'>Customer Id</label>
           <input
            type='number'
            id='customerId'
            name='customerId'
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.customerId}
            />
            {form.touched.customerId && form.errors.customerId ?
            <div className='highlight b f6'>{form.errors.customerId}</div>: null}

           <button type="submit" className='mt1'>Submit</button>
        </form>
        
    )
}

export function ApplicationEdit (props: {clickEvent:Func, route:string, id: number, name: string, support: boolean, describe: string}){
    const {route, id, name, support, describe} = props
    const init: Appedit = {
        applicationId: id,
        appName: name,
        appHasSupportContract: support,
        appDescription: describe,
    }

    const formik= useFormik({
        enableReinitialize: true,
        initialValues: init,
        validationSchema: Yup.object(
            {
                applicationId: Yup.number().required('Application ID Required'),
                appName: Yup.string().max(15, 'Too long').required('Application name required'),
                appDescription: Yup.string().max(40, 'Too long').required('Description Required'),
            }
        ),
        onSubmit:(values, actions) =>{
            //alert(JSON.stringify(value, null, 2));
            editData(route, values)
            props.clickEvent()
            actions.resetForm()
        }
    })

    return(
        <form onSubmit={formik.handleSubmit} className='w-75 b flex flex-column justify-around h-75 b editform'>
             <label htmlFor='applicationId'>Application Id</label>
           <input
            type='number'
            id='applicationId'
            name='applicationId'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.applicationId}
            />
            {formik.touched.applicationId && formik.errors.applicationId ?
            <div className='highlight b f6'>{formik.errors.applicationId}</div>: null}

            <label htmlFor='name'>Application Name</label>
            <input
            type='text'
            id='appName'
            name='appName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appName}
            />
            {formik.touched.appName && formik.errors.appName ?
            <div className='highlight b f6'>{formik.errors.appName}</div>: null}

            <label className=''>
            <input
            type="checkbox"
            className='w1 h1 mr1 mv1'
            name="appHasSupportContract"
            checked={formik.values.appHasSupportContract}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            Has Support Contract?
           </label>

           <label htmlFor="appDescription">Description</label>
            <input
            type='text'
            id='appDescription'
            placeholder='A description of the application'
            name='appDescription'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appDescription}
            />
            {formik.touched.appDescription && formik.errors.appDescription ?
            <div className='highlight b f6'>{formik.errors.appDescription}</div>: null}
            <button type="submit" className='mt1'>Submit</button>
        </form>
    )
}

export function DoSelected (props: {needed: Calltype}){
    const {needed} = props

    const doColor =()=>{
        if(needed.status.description === 'Open'){
            return 'sel2'
        }else if(needed.status.description === 'Closed'){
            return 'sel1'
        }else if(needed.status.description === 'Re-Opened'){
            return 'sel3'
        }else if(needed.status.description === 'AwaitingCustomer'){
            return 'sel4'
        }
    }

    const callForm = useFormik(
        {   
            enableReinitialize: true,
            initialValues:{
                select: needed.status.description,
            },
            onSubmit: values=>{
                const data: Callpatch= {
                    callId: needed.id,
                    status: 0
                }

               if(values.select === 'Open'){
                   data.status = 101
               }else if(values.select === 'Closed'){
                   data.status = 102
               }else if(values.select === 'Re-Opened'){
                   data.status = 103
               }else if(values.select === 'AwaitingCustomer'){
                   data.status = 104
               }
                patchCall(data)
                //alert(JSON.stringify(data, null, 2));
            },
        }
    )
    return (
        <form onSubmit={callForm.handleSubmit} className='formselect flex justify-start mw-none-ns mw-100'>
            <select value={callForm.values.select} 
            onChange={callForm.handleChange} 
            onBlur={callForm.handleBlur} 
            className={`h2 f6 mw4 mw-none-ns ${doColor()}`}
            name={'select'}
            >
                <option>Open</option>
                <option>Closed</option>
                <option>Re-Opened</option>
                <option>AwaitingCustomer</option>
            </select>
            <button type='submit' 
            className={`w2 h2 br-100 bn iconsbg ml1 pointer tc v-mid pa1`}>
                <FontAwesomeIcon icon={faClipboardCheck}/>
            </button>
        </form>
    )
}
