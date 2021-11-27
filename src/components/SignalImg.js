import LedGreen from '../assets/led-green.png';
import LedBlue from '../assets/led-blue.png';
import { signalIconHeight, signalIconWidth } from '../constants/dimentions';

export default ({signal = true}) => (
    <img style={{
        width: signalIconWidth,
        height: signalIconHeight
    }} src={signal ? LedGreen : LedBlue} alt="True"/>
)