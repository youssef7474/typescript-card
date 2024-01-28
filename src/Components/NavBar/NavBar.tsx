import { Button, Container, Nav, Navbar as NavBarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {routes} from "../../Navigation/routes";
import icon from "../../assets/shopping-cart-outline-svgrepo-com.svg"
import { useShoppingCart } from "../../context/ShoppingCartContext";
const NavBar = () => {
  const {OpenCart,cartQuantatiy}= useShoppingCart()
  return (
    <NavBarBS className="bg-white shadow-sm mb-3" sticky="top">
        <Container>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to={routes.home}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={routes.about}>about</Nav.Link>
                <Nav.Link as={NavLink} to={routes.store}>store</Nav.Link>
            </Nav>
            {
              cartQuantatiy>0 &&(
                <Button style={{width:"3rem",height:"3rem",position:"relative"}} variant="outline-primary" className="rounded-circle"
                onClick={OpenCart}
                >
                <img src={icon} alt="Icon description" style={{width:"20px"}}></img>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{color:"white",width:"1.5rem",height:"1.5rem",position:"absolute",bottom:"0",right:"0",transform:"translate(25%,25%)"}}
                >
                  {cartQuantatiy}
                </div>
                </Button>
              )
            }
           
        </Container>
    </NavBarBS>
  )
}

export default NavBar
