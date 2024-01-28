import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import items from "../../Data/items.json"
import { formatCurrancy } from "../../utilities/FormatCurrancy"
type CartItemCompoProps={
    id:number,
    quantatity:number
}
const CartItemCompo = ({id,quantatity}:CartItemCompoProps) => {
    const {RemoveItem} =useShoppingCart()
    const item=items.find(el=>el.id===id)
    if(item==null){
        return null
    }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.img} style={{width:"75px",height:"75px",objectFit:"cover"}}></img>
        <div className="me-auto">
            <div>
                {item.name} {"  "} {
                    quantatity>1 && (
                        <span className="text-muted" style={{fontSize:".65rem"}}>
                            {quantatity} x
                        </span>
                    )
                } 
            </div>
            <div className="text-muted" style={{fontSize:".75rem"}}>
                {formatCurrancy(item.price)}
            </div>
        </div>
    
            <div>{formatCurrancy(item.price*quantatity)}</div>
            <Button variant="outline-danger" size="sm" onClick={()=>RemoveItem(id)}>x</Button>
    </Stack>
  )
}

export default CartItemCompo
