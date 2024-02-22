import { useNFLXState } from '../context'
import Anim from './Anim'
import HireBtns from './HireBtns'
import motionData from "../data/motionData.json"

const MotionTech = ()=>{
    const { state:{ linkedinUrl } } = useNFLXState()
    const { title,hireNaho } = motionData
    return (
        <div className="MotionTech">
            <article>
                <h1>{title}</h1>
                <p>
                    <a
                        className="link"
                        href={linkedinUrl}
                        target="_blank"
                    >
                        <span>Naho</span>
                    </a>
                {hireNaho}
            </p>
                <HireBtns/>
            </article>
            <Anim/>
        </div>
    )
}

export default MotionTech