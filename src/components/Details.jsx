import { movies,adjectives } from "../utils/returnFiles"
import randomNumber from "../utils/randomNumber.js"
import playdark from "../assets/svg/playdark.svg"
import check from "../assets/svg/check.svg"
import thumbup from "../assets/svg/thumbup.svg"
import chevron from "../assets/svg/chevron.svg"
import hd from "../assets/svg/hd.svg"

const Details = ({movieKey}) => {

    const numberOfadj = 3
    const title = movies[movieKey]

    return (
        <article className="Details">
            
            <h3>{title}</h3>
            <div className="info">
                <div className="actions">
                    <div>
                        <img src={playdark} alt="playdark"/>
                        <img src={check} alt="check"/>
                        <img src={thumbup} alt="thumbup"/>
                    </div>
                        <img src={chevron} alt="chevron"/>
                </div>
                <div className="meta">
                    <div>
                        <span className="recommended">Recommended at {randomNumber(80,99)}%</span>
                        <img src={hd}/>
                    </div>
                    <div className="adjectives">
                        {[...Array(numberOfadj)].map(n=><span key={randomNumber(0,1000)}>{adjectives[randomNumber(0,adjectives.length - 1)]}</span>)}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Details