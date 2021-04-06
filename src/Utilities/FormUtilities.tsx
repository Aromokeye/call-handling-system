import React, {useContext}from 'react'
import { useFormik } from 'formik';
import {ApplicationData, Func} from './CustomTypes'
import {CurrentCustomerContext} from '../Context/CustomerContext'
import {postData} from './FetchUtilities'
import * as Yup from 'yup';

export  function Applicationform(props: {clickEvent:Func, route:string}){

    const currentCustomer = useContext(CurrentCustomerContext)

    console.log(currentCustomer.id, 'yeah')

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
            name: Yup.string().required('Name Required'),
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
        
            <form onSubmit={form.handleSubmit} className='w-75 flex flex-column justify-around h-100'>
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

            <label className='flex items-center'>
             <input
               type="checkbox"
               className='w1 h1 mr1 mv1 textaltbg'
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
