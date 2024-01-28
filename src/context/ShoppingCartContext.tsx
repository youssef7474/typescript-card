import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";

type shoppingCartProviderProps={
    children: ReactNode
}

type shoppingCartContextProps={
    getItemsQuantatity:(id:number)=>number
    IncreaseItemsQuantatity:(id:number)=>void
    DecreaseItemsQuantatity:(id:number)=>void
    RemoveItem:(id:number)=>void
    cartItem : cartItemProps[]
    OpenCart:()=>void,
    CloseCart:()=>void,
    cartQuantatiy:number,

}

type cartItemProps={
    id:number,
    quantatity:number
}

const ShoppingCartContext=createContext({} as shoppingCartContextProps)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}







export function ShoppingCartProvider({children}:shoppingCartProviderProps){
    const [cartItem,SetCartItem]=useState<cartItemProps[]>([])
    const [IsOpen,SetIsOpen]=useState(false)

    
    const OpenCart=()=>{
        SetIsOpen(true)
    }

    const CloseCart=()=>{
        SetIsOpen(false)
    }

    const cartQuantatiy=cartItem.reduce((quantity,item)=>item.quantatity+quantity,0)

    function getItemsQuantatity(id : number){
        return cartItem.find( item=>item.id === id )?.quantatity||0
    }


    function IncreaseItemsQuantatity (id:number){
        SetCartItem(currItme=>{
            if(currItme.find(Item=>Item.id===id)== null){
                return [...currItme,{id,quantatity:1}]
            }else{
                return currItme.map(item=>{
                    if (item.id === id){
                        return {
                            ...item,quantatity:item.quantatity+1
                        }
                    }else{
                        return item
                    }
                })
            }
        })
    }


    function DecreaseItemsQuantatity (id:number){
        SetCartItem(currItme=>{
            if(currItme.find(Item=>Item.id===id)?.quantatity=== 1){
                return currItme.filter(item=>item.id!==id)
            }else{
                return currItme.map(item=>{
                    if (item.id === id){
                        return {
                            ...item,quantatity:item.quantatity-1
                        }
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function RemoveItem (id:number){
     SetCartItem(curritem=>{
        return curritem.filter(item=>item.id!==id)
     })
    }


    return(
        <ShoppingCartContext.Provider value={{
            getItemsQuantatity,IncreaseItemsQuantatity,
            DecreaseItemsQuantatity,RemoveItem,
            cartQuantatiy,CloseCart,
            OpenCart,
            cartItem,
            }}>
            {children}
            <ShoppingCart IsOpen={IsOpen}/>
        </ShoppingCartContext.Provider>
    )
}

