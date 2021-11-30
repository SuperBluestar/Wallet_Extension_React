import Add from '../../assets/add.png';
import { iconWidth } from "../../constants/dimentions";

export default ({style, ...props}) => (
    <img style={{
        width: iconWidth,
        height: iconWidth,
        ...style
    }} src={Add} alt="Add" {...props}/>
)