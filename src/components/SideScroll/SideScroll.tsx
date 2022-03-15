import "./SideScroll.scss"

type Props = {
    children?: JSX.Element | JSX.Element[];
    size : number;
}

const SideScroll = ({children, size = 720} : Props) => {

    return <div className="sideScroll">
        {children}
    </div>
}

export default SideScroll;