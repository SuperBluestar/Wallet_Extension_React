import LedGreen from '../assets/led-green.png';
import LedBlue from '../assets/led-blue.png';
import { signalIconHeight, signalIconWidth } from '../constants/dimentions';

export default ({signal = true, style}) => (
    <img style={{
        width: signalIconWidth,
        height: signalIconHeight,
        ...style
    }} src={signal ? LedGreen : LedBlue} alt="True"/>
)