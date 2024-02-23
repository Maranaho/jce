import { useEffect, useRef, useState } from "react"
import { useNFLXState } from '../context'
import { movies } from "../utils/returnFiles"
import Movie from './Movie'
import close from "../assets/svg/close.svg"

const Movies = ( )=> {

    const { state:{ watching,moviesAreVisible }, dispatch } = useNFLXState()
    const [show,setShow] = useState(false)
    const [loaded,setLoaded] = useState(false)
    const moviesRef = useRef(null)
    const isWatching = watching >= 0
    const threshold = .3

    const observerOptions = { threshold }
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.intersectionRatio >= threshold)dispatch({type:"MOVIES_ARE_VISIBLE",payload:true})
                else dispatch({type:"MOVIES_ARE_VISIBLE",payload:false})
              })
            },observerOptions
          )
      
          if (moviesRef.current) observer.observe(moviesRef.current)
      return ()=>{
        if (moviesRef.current)observer.unobserve(moviesRef.current)
      }
    }, [])
  

    useEffect(() => {
        if(moviesRef)moviesRef.current = moviesRef.current
      },[moviesRef])

    let clear
    useEffect(() => {
        if(moviesAreVisible && !show) {
            setShow(true)
            clear = setTimeout(()=>{
                setLoaded(true)
            },2000)
        }
        
      },[moviesAreVisible,show])

      useEffect(()=>{
        return ()=> clearTimeout(clear)
      },[])

    return(
        <section
            ref={moviesRef}
            className={`Movies ${isWatching?"watching":""} ${show?"show":""} ${loaded?"loaded":""}`}
        >
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