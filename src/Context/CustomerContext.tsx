import {createContext} from 'react'
import {Fetched} from '../Utilities/CustomTypes'

export const CurrentCustomerContext = createContext<Fetched>({id: 0, data:[]})

