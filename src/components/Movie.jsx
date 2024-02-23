import { useNFLXState } from '../context'
import { files, movies,offsets } from "../utils/returnFiles"

const Movie = ({movieKey}) => {

    const { state:{ watching },dispatch } = useNFLXState()

    const title = movies[movieKey]
    const thumb = files[`${movieKey}Thumb`]
    const video = files[movieKey]
    const idx = Object.keys(movies).indexOf(movieKey)
    const offsetHeight = 40
    const offset = offsets[idx] * offsetHeight
    const isWatching = watching >= 0
    const currentIsSelected = watching !== null && watching === idx
    const style = {
        transform:`translateY(${offset}px)`
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
            <img src={thumb} />
            <h2 style={{transform:`translateY(${-offset}px)`}}>{title}</h2>
        </article>
    )
}

export default Movie