import axios from 'axios'
import {Str, Func, Obj, Num, Appedit} from './CustomTypes'

//this fetches data without parameters
export const fetchMainRoutes = (routeName:Str, stateFunc: Func, stateErr: Func) =>{
    axios(`https://techtestcalllogapi.azurewebsites.net/api/${routeName}`)
      .then(res=>{
        if(res.status === 204){
          stateErr('No data exist for this request')
        }
        const theData: [] | string | object = res.data
        stateFunc(theData)
        stateErr('')
        console.log(res.data)
      })
      .catch(err => {
        stateErr("Aww aww, there's an issue getting data")
      })
}

//this fetches data related to a particluar customer 
export const fetchCustomerRoutes = (customerId: Num, stateFunc: Func, stateErr: Func) =>{
  try{
    const application = () => axios.get(
        `https://techtestcalllogapi.azurewebsites.net/api/Application/${customerId}`
        )
    const call = () => axios.get(
        `https://techtestcalllogapi.azurewebsites.net/api/Call/${customerId}`
        )
    const statistics= () => axios.get(
        `https://techtestcalllogapi.azurewebsites.net/api/Statistics/${customerId}`
        )
    const status = () => axios.get(
        `https://techtestcalllogapi.azurewebsites.net/api/Status/${customerId}`
        )
    Promise.all([application(), call(), statistics(), status()])
        .then((response: any)=>{
            const application = response[0].data
            const call = response[1].data
            const statistics = response[2].data
            const status = response[3].data

            const results = [application, call, statistics, status]
            console.log(results)
            stateFunc({id:customerId, data:results})
            stateErr('')
        })
      }catch(err) {
    stateErr("There seems to be a problem getting data for this customer")
  }
}




//post requests
export const postData = (routeName: Str, data:Obj) =>{
  axios.post(`https://techtestcalllogapi.azurewebsites.net/api/${routeName}`, data)
  .then(response=> console.log(response))
  .catch(err=> console.log(err))
}

//put request
export const editData = (routeName: Str, comingData: Appedit)=>{
  const data: object={
    applicationId: comingData.applicationId,
    name: comingData.appName,
    description: comingData.appDescription,
    hasSupportContract: comingData.appHasSupportContract
  }
  axios.put(`https://techtestcalllogapi.azurewebsites.net/api/${routeName}`, data)
  .then(response=> console.log(response))
  .catch(err=> console.log(err))
}


