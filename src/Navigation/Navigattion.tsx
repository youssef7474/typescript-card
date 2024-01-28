import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Store from '../Pages/Store'
import {routes} from "./routes";
import LayOutPage from '../Layout/LayOutPage';

const Navigattion = () => {
  return (
    <Routes>
        <Route element={<LayOutPage/>}>
            <Route path={routes.home} element={<Home/>}></Route>
            <Route path={routes.about} element={<About/>}></Route>
            <Route path={routes.store} element={<Store/>}></Route>
        </Route>
    </Routes>
  )
}

export default Navigattion
