import { useNFLXState } from '../context'
import Button from "./Button"

const HireBtns = ()=>{
    const { dispatch } = useNFLXState()

    const setRiveState = hireLikelyhood => dispatch({type:"SET_LIKELYHOOD",payload:hireLikelyhood})
    const handleMouseLeave =()=> setRiveState(1)
    const handleInBetweenHover = e =>{
        if(e.target.nodeName === "DIV") setRiveState(0)
    }

    return (
        <div
            className="HireBtns"
            onMouseOver={handleInBetweenHover}
            onMouseLeave={handleMouseLeave}
        >
            <Button
                text="No"
                variant="secondary"
                onMouseOver={()=>setRiveState(0)}
            />
            <Button
                text="Yes! Hire him"
                onMouseOver={()=>setRiveState(2)}
            />
        </div>
    )
}

export default HireBtns