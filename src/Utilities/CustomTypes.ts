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
export type Calltype={
    id: number
    description: string
    application:{
        id: number
        name: string
    }
    status:{
        id: number
        description: string
    }
    customer:{
        id: number
        name: string
    }

}
export type Callarr = Calltype[]
export type Apparr=Apptype[]

export type Callpatch={
    callId: number
    status: number
}

export type Appedit={
    applicationId: number
    appName: string
    appDescription: string
    appHasSupportContract: boolean
}
export interface ParamTypes {
    id: string;
  }

export type StatTypes={
    id: number
    openCalls: {
        totalCalls: number
        responded:number
        awaitingResponse: number
    }
    closedCalls:{
        totalCalls: number
        satisfactory: number
        unsatisfactory: number
    }
    lastThreeMonths:{
        month1: number
        month2: number
        month3: number
    }
    customer:{
        id: number
        name: string
    }
}