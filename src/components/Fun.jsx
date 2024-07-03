import randomNumber from "../utils/randomNumber"
import { useState } from "react"

const Fun = () => {

    const minMaxColor = [200,255]
    const minMaxDimension = [50,400]
    const minMaxRadius = [0,200]

    const [mnc,mxc] = minMaxColor
    const [mnd,mxd] = minMaxDimension
    const [mnr,mxr] = minMaxRadius

    const [red,setRed] = useState(100)
    const [green,setRreen] = useState(120)
    const [blue,setBlue] = useState(150)
    const [width,setWidth] = useState(100)
    const [height,setHeight] = useState(100)
    const [radius,setRadius] = useState(10)

    const randomize = ()=>{

        setRed(randomNumber(mnc,mxc))
        setRreen(randomNumber(mnc,mxc))
        setBlue(randomNumber(mnc,mxc))
        setWidth(randomNumber(mnd,mxd * 3))
        setHeight(randomNumber(mnd,mxd))
        setRadius(randomNumber(mnr,mxr))
    }

    return (
        <div className="Fun">
            <button onClick={randomize}>Randomize me</button>
            <div
                className="randomShape"
                style={{
                    background:`rgb(${red},${green},${blue})`,
                    width:`${width}px`,
                    height:`${height}px`,
                    borderRadius:`${radius}px`
                }}
            />
        </div>
    )
}

export default Fun