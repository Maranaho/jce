import { useEffect } from "react"
import { useNFLXState } from '../context'
import { files, movies,offsets } from "../utils/returnFiles"
import close from "../assets/svg/close.svg"

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

const Movies = ()=>{
    
    const { state:{ watching }, dispatch } = useNFLXState()
    const isWatching = watching >= 0
    const noScrollOnWatch = ()=>{
        const body = document.documentElement
        if(isWatching) body.classList.add("noScroll")
        else body.classList.remove("noScroll")
    }

    useEffect(noScrollOnWatch,[isWatching])
    return(
        <section className={`Movies ${isWatching?"watching":""}`}>

            {isWatching && (
                <button
                    className="closeMovie"
                    onClick={()=>dispatch({type:"SET_WATCHING",payload:-1})}
                >
                    <img src={close}/>
                </button>
            )}

            {Object.keys(movies).map(movieKey=>(
                <Movie
                    key={movieKey}
                    movieKey={movieKey}
                />
            ))}
        </section>
    )
}

export default Movies