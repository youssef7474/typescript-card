import { Button, Card } from "react-bootstrap"
import { formatCurrancy } from "../../utilities/FormatCurrancy"
import { useShoppingCart } from "../../context/ShoppingCartContext"

type storeItemProps={
    name:string,
    price:number,
    img:string,
    id:number
}
const StoreItem = ({name,price,img,id}:storeItemProps) => {
    const {DecreaseItemsQuantatity,IncreaseItemsQuantatity,RemoveItem,getItemsQuantatity} =useShoppingCart()
    const quantity=getItemsQuantatity(id)
  return (
    <Card className="h-100">
        <Card.Img variant="top" src={img} height="200px" style={{objectFit:"cover"}}></Card.Img>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrancy(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {
                    quantity===0?(
                        <Button className="w-100" onClick={()=>IncreaseItemsQuantatity(id)}>Add to cart</Button>
                    ):(
                        <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                                <Button  onClick={()=>IncreaseItemsQuantatity(id)}>+</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span>
                                    in the cart
                                </div>
                                <Button  onClick={()=>DecreaseItemsQuantatity(id)}>-</Button>
                            </div>
                            <Button variant="danger" onClick={()=>RemoveItem(id)}>remove</Button>
                        </div>
                    )
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem
