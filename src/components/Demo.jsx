import { useNFLXState } from '../context'
import JCE from './JCE'
const Demo = ()=>{
    const { state:{ someState } } = useNFLXState()
    return (
        <div className="Demo">
            <JCE/>
        </div>
    )
}
export default Demo