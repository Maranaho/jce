import Button from "./Button"
import logo from "../assets/svg/logo.svg"
import { Link } from "react-router-dom"

const TopNav = ()=>(
    <nav className="TopNav">
        <Link to="/"><img src={logo}/></Link>
        <Button
            play
            variant="secondary"
            text="Behind the scenes"
        />
    </nav>
)

export default TopNav