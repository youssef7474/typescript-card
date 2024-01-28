import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItemCompo from "../CartItemCompo/CartItemCompo";
import { formatCurrancy } from "../../utilities/FormatCurrancy";
import items from "../../Data/items.json"

type shoppingCartProps={
    IsOpen:boolean
}

const ShoppingCart = ({IsOpen}:shoppingCartProps) => {
    const {CloseCart,cartItem} =useShoppingCart()
  return (
    <Offcanvas show={IsOpen} onHide={CloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={5}>
            {
                cartItem.map((el)=>{
                    return(
                        <CartItemCompo key={el.id} {...el}/>
                    )
                })
            }
            <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {
                    formatCurrancy(
                        cartItem.reduce((total,cartItem)=>{
                            const item=items.find(el=>el.id===cartItem.id)
                            return total+(item?.price||0)*cartItem.quantatity
                        },0)
                    )
                }
            </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
