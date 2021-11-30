import Info from '../../assets/info.png';
import { iconWidth } from "../../constants/dimentions";

export default ({style, ...props}) => (
    <img style={{
        width: iconWidth,
        height: iconWidth,
        ...style
    }} src={Info} alt="Info" {...props}/>
)