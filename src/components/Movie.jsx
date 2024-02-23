import { useNFLXState } from '../context'
import { files, movies,offsets } from "../utils/returnFiles"
import Details from './Details'

const Movie = ({movieKey}) => {

    const { state:{ watching,loaded },dispatch } = useNFLXState()

    const title = movies[movieKey]
    const thumb = files[`${movieKey}Thumb`]
    const video = files[movieKey]
    const idx = Object.keys(movies).indexOf(movieKey)
    const offsetHeight = 40
    const offset = offsets[idx] * offsetHeight
    const isWatching = watching >= 0
    const currentIsSelected = watching !== null && watching === idx
    const delay = .1
    const currentDelay =  idx * delay
    const style = {
        transform:`translateY(${offset}px)`,
        transitionDelay: `${loaded?"0":currentDelay}s`
    }
    

    return (
        <article
            style={isWatching?null:style}
            className={currentIsSelected ? "watching" : ""}
            onClick={()=>dispatch({type:"SET_WATCHING",payload:idx})}
        >

            <video
                src={video}
                autoPlay muted loop
                />
            <img
                src={thumb}
                className="thumb"
                style={{ transitionDelay: `${loaded?"0":currentDelay}s`}}
            />
            <h2 style={{transform:`translateY(${-offset}px)`}}>{title}</h2>
            <Details movieKey={movieKey}/>
        </article>
    )
}

export default Movie