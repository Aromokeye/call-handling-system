import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type Arr= Array< Cust | Stats>

export type Arr2=[]

export type Str = string

export type Num = number

export type Func = Function

export type Obj = object

export type Cust={
    name: string
    id: number
}
export type Icons={
    header: IconProp
    edit: IconProp
    delete: IconProp,
    create: IconProp

}

export interface ApplicationData{
    name: string,
    description: string,
    hasSupportContract: boolean,
    customerId: number
}

export type Stats={
    id: number
    description?:string
}

export interface Fetched{
    id: number,
    data: []
}

export type Apptype={
    description: string
    installationDate: string
    hasSupportContract: boolean
    customer: Cust
    id:number
    name: string
}
export type Apparr=Apptype[]

export type Appedit={
    applicationId: number
    appName: string
    appDescription: string
    appHasSupportContract: boolean
}
 
