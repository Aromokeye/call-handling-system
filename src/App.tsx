import React, { useEffect, useState } from 'react';
import './App.css';
import {fetchCustomerRoutes, fetchMainRoutes} from './Utilities/FetchUtilities'
import {getCustomerId} from './Utilities/EventUtilities'
import {Arr2, Str, Num, Fetched} from './Utilities/CustomTypes'
import Aside from './Pages/Aside'
import Hero from './Pages/Hero'
import {CurrentCustomerContext} from './Context/CustomerContext'
import {Route, Switch, Link, useLocation} from 'react-router-dom'
import {faDatabase, faEdit, faPen, faTrashAlt, faPhoneSquare, faBars} from '@fortawesome/free-solid-svg-icons'
import Applications from './Pages/Application'
import Calls from './Pages/Calls'
import { Stats } from './Pages/Stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const [customers, setCustomers] = useState<Arr2>([])
  const [asyncErr, setAsynErr] = useState <Str>('')
  const [customerId, setCustomerId] = useState<Num>(0)
  const [customerData, setCustomerData] = useState<Fetched>({id:0, data:[]})
  const [mobileMenu, setMobileMenu] = useState(false)//mobile menu state
 


  useEffect(()=>{
    fetchMainRoutes('Customer', setCustomers, setAsynErr)

  }, [])

  useEffect(()=>{
    customerId && fetchCustomerRoutes(customerId, setCustomerData, setAsynErr)
  }, [customerId])

  const changeMobileMenu = () =>{
    setMobileMenu(!mobileMenu)
  }

 let location = useLocation()


  return (
    <div className="w-100 vh-100 flex flex-row relative">
      <div className={`${mobileMenu ? 'dn' : 'absolute'} pointer f2-m dn-l right-1 top-1 textalt`} onClick={changeMobileMenu}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <aside className={`w-25-l w-100 w-50-m ${mobileMenu ? 'flex z-999 menubg' : 'dn'} h-100 flex-l justify-center items-center relative`}>
        <div className='fixed w-25-l w-100 left-1-ns left-0 aside br4 flex justify-center items-center'>
          <Aside customers={customers} setCustomerId={setCustomerId} getCustomerId={getCustomerId} asyncErr={asyncErr} mobile={changeMobileMenu}/>
        </div>
      </aside>
      <main className="w-75-l w-100 ma2 ma0-l flex flex-column justify-center items-center">
        {customerId > 0 && (
          <div className='flex flex-column w-90-l w-100 blocktitle'>
          <h1 className='f2 lh-title mt0'>Main Dashboard</h1>
          <div className='flex flex-row justify-around w-40-l w-50-m relative'>
            <div className={`${location.pathname === '/statistics' ? 'a relative' : null}`}><Link to='/statistics'>Statistics</Link></div>
            <div className={`${location.pathname === '/calls' ? 'a relative' : null}`}><Link to='/calls'>Calls</Link></div>
            <div className={`${location.pathname === '/applications' ? 'a relative' : null}`}><Link to='/applications'>Applications</Link></div>
          </div>
        </div>
        )}
        <CurrentCustomerContext.Provider value={customerData}>
          <Switch>
            <Route exact path="/">
                <Hero/>
            </Route>
            {customerId > 0 ?  (
              <Route path='/applications'>
              <Applications
                  service={'Application'}
                  icons={{header: faDatabase, edit: faEdit, delete: faTrashAlt, create: faPen}}
                  className={`block1 w-90-l w-100  flex justify-center items-center relative shadow-4 br4`}
                />
              </Route>
            ): <div className='flex justify-center items-center f3 textalt h-100 b'>Please click on a customer to view records</div>}
            {customerId > 0 ? (
              <Route path='/statistics'>
               <Stats/>
              </Route>
            ) : <div className='flex justify-center items-center f3 textalt h-100 b'>Please click on a customer to view records</div>}
            {customerId > 0 ? (
              <Route path='/calls'>
                <Calls icons={{header: faPhoneSquare, edit: faEdit, delete: faTrashAlt, create: faPen}}/>
              </Route>
            ) : <div className='flex justify-center items-center f3 textalt h-100 b'>Please click on a customer to view records</div>}
          </Switch>
        </CurrentCustomerContext.Provider>
      </main>
    </div>
  );
}

export default App;
