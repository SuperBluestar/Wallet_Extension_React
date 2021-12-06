import Left1 from '../../assets/left1.png';

export default ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Left1} alt="Left1" {...props}/>
)