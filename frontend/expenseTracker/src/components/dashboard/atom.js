import {atom, selector} from "recoil";



export const spendingAtom = atom({
    key : "spendingAtom" ,
    default : 0
})

export const incomeAtom = atom({
    key : "incomeAtom" ,
    default : 0
})

export const monthAtom = atom({
    key : "monthAtom" ,
    default : 0
})



export const balanceSelector = selector({

    key:"balanceSelector" ,
 
    get :function({get}) 
    {

        const a = get(spendingAtom) ;
        const b = get(incomeAtom) ;
        
        return a-b ;

    }
})
