import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type Arr= Array< object | string | [] | number| Cust>

export type Arr2=[]

export type Str = string

export type Num = Number

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
