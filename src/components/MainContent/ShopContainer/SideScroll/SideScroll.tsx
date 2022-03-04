import "./SideScroll.scss"

type Props = {
    children?: JSX.Element | JSX.Element[];
}

const SideScroll = ({children} : Props) => {
    return <div>
        {children}
    </div>
}

export default SideScroll;