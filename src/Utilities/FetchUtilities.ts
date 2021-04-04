import axios from 'axios'
import {Str, Func} from './CustomTypes'

//this fetches data without parameters
export const fetchMainRoutes = (routeName:Str, stateFunc: Func, stateErr: Func) =>{
    axios(
        {
          method: 'POST',
          url: `/mainRoute`,
          data: JSON.stringify({data: routeName}),
          headers: {'Content-type' : 'application/json', 'Accept': 'application/json'}
        }
      )
      .then(res=>{
        if(res.status === 204){
          stateErr('No data exist for this request')
        }
        const theData: [] | string | object = res.data
        stateFunc(theData)
        stateErr('')
      })
      .catch(err => {
        stateErr("Aww aww, there's an issue getting data")
      })
}

//this fetches data related to a particluar customer 
export const fetchCustomerRoutes = (customerId: Str, stateFunc: Func, stateErr: Func) =>{
  axios(
    {
      method: 'POST',
      url: '/multileRoutes',
      data: JSON.stringify({data: customerId}),
      headers: {'Content-type' : 'application/json', 'Accept': 'application/json'}
    }
  )
  .then(res =>{
    const theData: [] | string | object | number = res.data
    stateFunc(theData)
    console.log(theData)
  })
  .catch(err => {
    stateErr("There seems to be a problem getting data for this customer")
  })
}