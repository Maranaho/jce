import { useEffect } from "react"
import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite'
import jce from "../assets/rive/jce.riv"
import { useNFLXState } from '../context'
const Anim = ()=>{
    
    const { state:{ likelyhood } } = useNFLXState()
    const stateMachineName = "Netflix"
    const inputName = "likelyhood"
    const initialValue = 1
    const { rive, RiveComponent } = useRive({
        src: jce,
        autoplay:true,
        stateMachines:stateMachineName,
        artboard:"JC"
    })

    
    const likelyHoodInput = useStateMachineInput(
            rive,
            stateMachineName,
            inputName,
            initialValue
        )

    
    const setRiveState = () =>{
        if(likelyHoodInput){
            likelyHoodInput.value = likelyhood
        }
    }

    useEffect(setRiveState,[likelyhood])

    return <article className="jce"><RiveComponent className="riveComponent"/></article>
}
export default Anim