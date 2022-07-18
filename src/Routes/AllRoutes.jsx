import {Routes,Route} from "react-router-dom"
import Doctor from "./Doctor"
import Home from "./Home"
import Hospital from "./Hospital"

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/doctor" element={<Doctor/>}/>
            <Route path="/hospital" element={<Hospital/>}/>
        </Routes>
    )
}