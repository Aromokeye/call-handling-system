import React from 'react'
import { useFormik } from 'formik';
import {ApplicationData} from './CustomTypes'
import * as Yup from 'yup';

export  function Applicationform(props: {id: number}){
    const initialValues: ApplicationData = {
        name: '',
        description: '',
        hasSupportContract: false,
        customerId: props.id
    }
    const form = useFormik({
        initialValues,
        validationSchema:Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string()
                    .max(20, 'Maximum of 30 characters allowed')
                    .required('Required'),
            customerId: Yup.number().required('Required')
        }),
        onSubmit:value=>{
            alert(JSON.stringify(value, null, 2))
        }
    })
    return(
        
            <form onSubmit={form.handleSubmit} className='flex flex-column justify-around h-100'>
            <label htmlFor="Name">Name</label>
            <input
            type='text'
            id='name'
            name='name'
            className=''
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.name}
            />
            {form.touched.name && form.errors.name ?
            <div>{form.errors.name}</div>: null}

            <label htmlFor="description">Description</label>
            <input
            type='text'
            id='description'
            name='description'
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.description}
            />
            {form.touched.description && form.errors.description ?
            <div>{form.errors.description}</div>: null}

            <label>
             <input
               type="checkbox"
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
            <div>{form.errors.customerId}</div>: null}

           <button type="submit">Submit</button>
        </form>
        
    )
}
