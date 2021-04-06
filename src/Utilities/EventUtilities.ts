import { Num } from "./CustomTypes"

export const getCustomerId = (stateFunct: Function, id: Num) =>{
    stateFunct(id)
}