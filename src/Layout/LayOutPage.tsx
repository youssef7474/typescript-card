import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

const LayOutPage = () => {
  return (
    <div>
      <NavBar/>
        <Container>
            <Outlet/>
        </Container>

    </div>
  )
}

export default LayOutPage
