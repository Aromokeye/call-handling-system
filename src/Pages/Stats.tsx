import React, {useContext, useEffect, useState} from 'react'
import {CurrentCustomerContext} from '../Context/CustomerContext'
import { StatTypes } from '../Utilities/CustomTypes'
import { singleFetch } from '../Utilities/FetchUtilities'
import { Line, PolarArea } from '@reactchartjs/react-chart.js'





export function Stats () {

    const statObj={
        id: 0,
        openCalls: {
            totalCalls: 0,
            responded:0,
            awaitingResponse: 0,
        },
        closedCalls:{
            totalCalls: 0,
            satisfactory: 0,
            unsatisfactory: 0,
        },
        lastThreeMonths:{
            month1: 0,
            month2: 0,
            month3: 0,
        },
        customer:{
            id: 0,
            name: ''
        }
    }


      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }      

    let currentCustomer = useContext(CurrentCustomerContext)
    const [error, setError] =useState('')
    const [stats, setStats] = useState<StatTypes>(statObj)
      useEffect(()=>{
        singleFetch(currentCustomer.id, setStats, setError)
    }, [currentCustomer.id])

    const data = {
      labels: ['Month 1', 'Month 2', 'Month 3'],
      datasets: [
        {
          label: 'Number of call in the last 3 months',
          font: 16,
          data: stats?.customer?.id > 0 && [stats.lastThreeMonths.month1, stats.lastThreeMonths.month2, stats.lastThreeMonths.month3],
          fill: false,
          backgroundColor: '#ef233c',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.4,
          borderWidth: 3,
          pointBorderColor: '#2b2d42',
          pointBorderWidth: 5,
        },
      ],
    }

    const openCalls = {
      labels: ['Awaiting Response', 'Responded', 'Total Calls'],
      datasets: [
        {
          label: 'Open Calls',
          data: [stats.openCalls.awaitingResponse, stats.openCalls.responded, stats.openCalls.totalCalls],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(54, 162, 235, 0.5)',
          ],
          borderWidth: 2,
        },
      ],
    }

    const closedCalls = {
      labels: ['Unsatisfactory', 'Satisfactry', 'Total Calls'],
      datasets: [
        {
          label: 'Closed Calls',
          data: [stats.closedCalls.unsatisfactory, stats.closedCalls.satisfactory, stats.closedCalls.totalCalls],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderWidth: 2,
        },
      ],
    }


    return (
        <div className='block3 w-90 flex justify-around flex-column shadow-4 mt3 br4 relative'>
          {stats?.customer?.id > 0 ? <h1 className='customername f3 lh-title'>{stats.customer.name}</h1> : null}
          <div className='h-100'>
            
                <div className='callline w-60 center h-50'>
                    {
                        stats?.customer?.id > 0 && (
                            <>
                             <Line data={data} options={options} type='Line' />   
                            </>
                        )
                    }
                </div>
                <div className='w-100 h-60 flex flex-row justify-center'>
                  <div className='w-50 flex flex-column items-center'>
                    {stats?.customer?.id > 0 && (
                      <>
                        <PolarArea data={openCalls} type='polarArea' />
                        <div className='f5 measure lh-copy b'>Open Calls</div>
                      </>
                    )}
                  </div>
                  <div className='w-50 flex flex-column items-center'>
                    {stats?.customer?.id > 0 && (
                      <>
                        <PolarArea data={closedCalls} type='polarArea' />
                        <div className='f5 measure lh-copy b'>Closed Calls</div>
                      </>
                    )}
                  </div>
                  {console.log(error)}
                </div>
            </div>
        </div>
    )
}