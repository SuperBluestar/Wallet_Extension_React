import SwapDown from '../../assets/swap-down.png';
import { iconWidth } from "../../constants/dimentions";

export default ({style, ...props}) => (
    <img style={{
        width: iconWidth,
        height: iconWidth,
        ...style
    }} src={SwapDown} alt="SwapDown" {...props}/>
)