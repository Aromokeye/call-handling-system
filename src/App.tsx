import React, { useEffect, useState } from 'react';
import './App.css';
import {fetchCustomerRoutes, fetchMainRoutes} from './Utilities/FetchUtilities'
import {getCustomerId} from './Utilities/EventUtilities'
import {Arr2, Str, Num, Fetched} from './Utilities/CustomTypes'
import Main from './Parents/Main/Main'
import Aside from './Parents/Aside/Aside'
import Hero from './Parents/Hero/Hero'
import {CurrentCustomerContext} from './Context/CustomerContext'
import {Route, Switch} from 'react-router-dom'


function App() {
  const [customers, setCustomers] = useState<Arr2>([])
  const [asyncErr, setAsynErr] = useState <Str>('')
  const [customerId, setCustomerId] = useState<Num>(0)
  const [customerData, setCustomerData] = useState<Fetched>({id:0, data:[]})
 


  useEffect(()=>{
    fetchMainRoutes('Customer', setCustomers, setAsynErr)
  }, [])

  useEffect(()=>{
    customerId && fetchCustomerRoutes(customerId, setCustomerData, setAsynErr)
  }, [customerId])


 


  return (
    <div className="w-100 vh-100 flex flex-row relative">

      <aside className="w-25  ma2 br4 flex justify-center items-center shadow-1 fixed  top-2">
        <Aside customers={customers} setCustomerId={setCustomerId} getCustomerId={getCustomerId} asyncErr={asyncErr}/>
      </aside>
      <Switch>
      <Route exact path="/">
          <Hero/>
        </Route>
        <Route path='/:id'>
          <main className="w-75 flex flex-column items-center mt2 absolute right-0">
            <h1 className='flex justify- w-75 ma1 f2 lh-title'>Main Dashboard</h1>
            <CurrentCustomerContext.Provider value={customerData}>
              <Main/>
            </CurrentCustomerContext.Provider>
          </main>
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
