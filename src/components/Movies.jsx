import { files, movies } from "../utils/returnFiles"

const Movie = ({movieKey}) => {
    const title = movies[movieKey]
    const thumb = files[`${movieKey}Thumb`]
    const screen = files[`${movieKey}Screen`]
    const video = files[movieKey]
    return (
        <article>
            <h2>{title}</h2>
            <img src={thumb} width="300"/>
            <img src={screen} width="300"/>
            <video
                src={video}
                width="300"
            />
        </article>
    )
}

const Movies = ()=>(
    <section className="Movies">
        {Object.keys(movies).map(movieKey=>(
            <Movie
                key={movieKey}
                movieKey={movieKey}
            />
        ))}
    </section>
)

export default Movies