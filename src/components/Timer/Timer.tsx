import "./Timer.scss"

type Props = {
    remainingTime: number // in ms
}
const Timer = ({remainingTime} : Props) => {
    return <span>
        11:20:59
    </span>
}

export default Timer;