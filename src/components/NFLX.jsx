import {
  Route,
  Routes
} from "react-router-dom"
import Demo from './Demo'

const NFLX = ()=>{

  return (
        
    <Routes>
      <Route path='*' element={<p>404</p>} />
      <Route path="/" element={<Demo/>}/>
    </Routes>
      
  )
}
  export default NFLX