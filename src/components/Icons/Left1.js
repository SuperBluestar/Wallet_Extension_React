import Left1 from '../../assets/left1.png';
import { iconWidth } from "../../constants/dimentions";

export default ({style, ...props}) => (
    <img style={{
        width: iconWidth,
        height: iconWidth,
        ...style,
    }} src={Left1} alt="Left1" {...props}/>
)