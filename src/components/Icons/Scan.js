import Scan from '../../assets/viewonetherscan.png';

export default ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Scan} alt="Scan"/>
)