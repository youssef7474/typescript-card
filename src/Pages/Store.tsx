import { Col, Row } from 'react-bootstrap'
import storeItems from "../Data/items.json"
import StoreItem from '../Components/StoreItem/StoreItem'

const Store = () => {
  return (
    <div>
      <h1>store</h1>
      <Row md={3} sm={2} lg={4} xs={1}>
        {
          storeItems.map((el)=>{
            return(
              <Col key={el.id}>
                <StoreItem {...el}></StoreItem>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Store
