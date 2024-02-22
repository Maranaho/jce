import playIcon from "../assets/svg/play.svg"

const Button = ({
    text,
    play,
    variant = "primary",
    ...props
})=>(
    <button
            className={`btn ${variant}`}
            variant={variant}
            {...props}
        >
        {play && <img src={playIcon} />}
        <span>{text}</span>
    </button>
)

export default Button