import React, { useEffect, useState } from 'react';
import './App.css';
import {fetchCustomerRoutes, fetchMainRoutes} from './Utilities/FetchUtilities'
import {getCustomerId} from './Utilities/EventUtilities'
import {Arr, Arr2, Str} from './Utilities/CustomTypes'
import Main from './Parents/Main/Main'
import Aside from './Parents/Aside/Aside'
import {CurrentCustomerContext} from './Context/CustomerContext'


function App() {
  const [customers, setCustomers] = useState<Arr2>([])
  const [asyncErr, setAsynErr] = useState <Str>('')
  const [customerId, setCustomerId] = useState<Str>('')
  const [customerData, setCustomerData] = useState<Arr>([])

  useEffect(()=>{
    fetchMainRoutes('Customer', setCustomers, setAsynErr)
  }, [])

  useEffect(()=>{
    customerId && fetchCustomerRoutes(customerId, setCustomerData, setAsynErr)
  }, [customerId])

  return (
    <div className="w-100 vh-100 flex flex-row">

      <aside className="w-25  mh2 mv2 br4 flex justify-center items-center shadow-1">
        <Aside customers={customers} setCustomerId={setCustomerId} getCustomerId={getCustomerId} asyncErr={asyncErr}/>
      </aside>
      <main className="w-75 flex flex-column items-center mt2">
        <h1 className='flex justify- w-75 ma2 f2 lh-title'>Main Dashboard</h1>
        <CurrentCustomerContext.Provider value={customerData}>
          <Main/>
        </CurrentCustomerContext.Provider>
      </main>
      
    </div>
  );
}

export default App;
