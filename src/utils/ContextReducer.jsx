import { createContext, useContext, useReducer } from "react";
import Cart from "../components/Cart";


const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{image:action.image,name:action.name,price:action.price,qty:action.qty,totalPrice:action.totalPrice,isVeg:action.isVeg}]
        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
            default:
            console.log("Error")
    }
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[]);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);