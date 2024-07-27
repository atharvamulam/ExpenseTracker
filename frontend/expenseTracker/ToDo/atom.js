import { atom } from "recoil";

export const date  = atom({
    key:"date",
    default : null
}) ;


export const time  = atom({
    key:"time",
    default : null
}) ;

export const verify  = atom({
    key:"verify",
    default : null
}) ;

export const todo  = atom({
    key:"todo",
    default : null
}) ;

export const fivetodos  = atom({
    key:"fiveTodos",
    default : []
}) ;