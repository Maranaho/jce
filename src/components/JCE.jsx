import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite'
import jce from "../assets/rive/jce.riv"
// import Range from './Range'
const JCE = ()=>{

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

    
    const setRiveState = likelyhood =>{
        if(likelyHoodInput){
            likelyHoodInput.value = likelyhood
        }
    }

    const handleMouseLeave =()=> setRiveState(1)

    return (
        <div className="JCE">
            <RiveComponent className="riveComponent"/>
            
            <button
                onMouseOver={()=>setRiveState(0)}
                onMouseLeave={handleMouseLeave}
            >
                no
            </button>

            <button
                onMouseOver={()=>setRiveState(2)}
                onMouseLeave={handleMouseLeave}
            >
                yes
            </button>

        </div>
    )
}
export default JCE