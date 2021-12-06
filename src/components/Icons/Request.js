import Request from '../../assets/requestafeature.png';

export default ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Request} alt="Request"/>
)