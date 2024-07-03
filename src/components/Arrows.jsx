import { useState, useEffect, useRef } from "react"

const Arrows = () => {

    const isMountedRef = useRef(true)
    const [fwd,setFwd] = useState(false)
    const [bkwd,setBkwd] = useState(false)
    const [up,setUp] = useState(false)
    const [down,setDown] = useState(false)

    const runAnimation = ()=>{
        console.log("lets do it");
    }

    const handleKeyDown = e => {
        const isArrow = e.key === "ArrowLeft" ||
                        e.key === "ArrowRight" ||
                        e.key === "ArrowUp" ||
                        e.key === "ArrowDown"

        if(isArrow){
            switch (e.key) {
                case "ArrowLeft": setFwd(true);break;
                case "ArrowRight": setBkwd(true);break;
                case "ArrowUp": setUp(true);break;
                case "ArrowUp": setDown(true);break;
            }
        }
    }

    useEffect(()=>{
        const animate = ()=>{
            runAnimation()
            if(isMountedRef.current)requestAnimationFrame(animate)
        }

        // animate()
        return ()=> isMountedRef.current = false

    },[])

    return (
        <div
            tabIndex="0"
            onKeyDown={handleKeyDown}
            className="gameSurface"
        >
            <div className="hero" />
        </div>
    )
}

export default Arrows